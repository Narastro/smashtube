const commentContainer = document.querySelector(".commentContainer");
const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtns = document.querySelectorAll(".deleteBtn");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  const span = document.createElement("span");
  const del = document.createElement("span");
  icon.className = "far fa-comment-alt";
  span.innerText = `${text}`;
  del.innerText = "❌";
  del.className = "deleteBtn";
  newComment.appendChild(icon);
  newComment.appendChild(span);
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
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDelete = async (e) => {
  e.preventDefault();
  const targetComment = e.target.parentElement;
  const { id } = targetComment.dataset;
  const videoId = videoContainer.dataset.id;
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
  form.addEventListener("submit", handleSubmit);
}
