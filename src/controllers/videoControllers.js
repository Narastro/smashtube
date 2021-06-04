const fakeUser = {
  username: "Narastro",
  loggedIn: true,
};

let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes ago",
    view: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes ago",
    view: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutes ago",
    view: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const search = (req, res) => res.send("Search!");
export const upload = (req, res) => res.send("Upload!");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `Watching : ${video.title}`,
    fakeUser,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const video = videos[id - 1];
  return res.render("edit", {
    pageTitle: `Editing : ${video.title}`,
    fakeUser,
    video,
  });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createAt: "Just now",
    view: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => res.send("Delete Video!");
