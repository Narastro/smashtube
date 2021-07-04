const commentContainer = document.querySelector(".commentContainer");
const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const submitBtn = form.querySelector("i");
const deleteBtns = document.querySelectorAll(".deleteBtn");

const addComment = (text, id, name) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.dataset.name = name;
  newComment.className = "video__comment";

  const info = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  span1.innerText = name;
  const offset = new Date().getTimezoneOffset() * 60000;
  const createAt = new Date(Date.now() - offset).toISOString();
  span2.innerText = createAt.substr(0, 10);
  info.appendChild(span1);
  info.appendChild(span2);
  newComment.appendChild(info);

  const content = document.createElement("div");
  const icon = document.createElement("i");
  const span = document.createElement("span");
  const del = document.createElement("span");
  icon.className = "far fa-comment-alt";
  span.innerText = `${text}`;
  del.innerText = "❌";
  del.className = "deleteBtn";
  content.appendChild(icon);
  content.appendChild(span);
  newComment.appendChild(content);
  newComment.appendChild(del);
  videoComments.prepend(newComment);

  del.addEventListener("click", handleDelete);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (response.status === 201) {
    const { newCommentId, username } = await response.json();
    addComment(text, newCommentId, username);
  }
};

const handleDelete = async (e) => {
  e.preventDefault();
  const targetComment = e.target.parentElement;
  const { id } = targetComment.dataset;
  const res = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  });
  if (res.status === 200) {
    targetComment.remove();
  }
};

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", handleDelete);
});

if (form) {
  submitBtn.addEventListener("click", handleSubmit);
}
