import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({});//DB
  res.render("home", { pageTitle: "Home", videos: [] });
};
export const search = (req, res) => res.send("Search!");
export const upload = (req, res) => res.send("Upload!");
export const watch = (req, res) => {
  return res.render("watch", {
    pageTitle: `Watching : `,
  });
};
export const getEdit = (req, res) => {
  return res.render("edit", {
    pageTitle: `Editing : `,
  });
};
export const postEdit = (req, res) => {
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
