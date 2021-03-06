import Video from "../models/Video";
import User from "../models/User";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({})
      .sort({ createAt: "desc" })
      .populate("owner");
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("Server-Error", error);
  }
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    }).populate("owner");
  }
  return res.render("search", { pageTitle: "Search", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner").populate("comments");
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", {
    pageTitle: video.title,
    video,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  return res.render("edit", {
    pageTitle: `Edit: ${video.title}`,
    video,
  });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const { title, description, hashtags } = req.body;
  const video = await Video.findById({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    req.flash("error", "비디오 수정 권한이 없습니다.");
    return res.status(403).redirect("/");
  }
  const offset = new Date().getTimezoneOffset() * 60000;
  const createAt = new Date(Date.now() - offset).toISOString();
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    createAt: createAt.substr(0, 10) + " / " + createAt.substr(11, 5),
    hashtags: Video.formatHashtags(hashtags),
  });
  req.flash("success", "성공적으로 수정했습니다.");
  return res.status(200).redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    files: { video, thumb },
    body: { title, description, hashtags },
  } = req;
  const isHeroku = process.env.NODE_ENV === "production";
  try {
    const offset = new Date().getTimezoneOffset() * 60000;
    const createAt = new Date(Date.now() - offset).toISOString();
    const newVideo = await Video.create({
      title,
      description,
      fileUrl: isHeroku ? video[0].location : video[0].path,
      thumbUrl: isHeroku ? thumb[0].location : thumb[0].path,
      owner: _id,
      createAt: createAt.substr(0, 10) + " / " + createAt.substr(11, 5),
      hashtags: Video.formatHashtags(hashtags),
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    req.flash("success", "성공적으로 업로드하였습니다.");
    return res.redirect("/");
  } catch (error) {
    res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const {
    user: { _id },
  } = req.session;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if (String(video.owner) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);
  req.flash("info", "비디오를 삭제했습니다.");
  return res.redirect("/");
};

export const registerView = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  video.meta.views += 1;
  await video.save();
  return res.sendStatus(200);
};

export const createComment = async (req, res) => {
  const {
    session: { user },
    body: { text },
    params: { id },
  } = req;
  const video = await Video.findById(id).populate("owner").populate("comments");
  if (!video) {
    return res.sendStatus(404);
  }
  const offset = new Date().getTimezoneOffset() * 60000;
  const createAt = new Date(Date.now() - offset).toISOString();
  const comment = await Comment.create({
    text,
    createUser: String(user.username),
    createAt: createAt.substr(0, 10),
    owner: user._id,
    video: id,
  });
  video.comments.push(comment._id);
  video.save();
  return res
    .status(201)
    .json({ newCommentId: comment._id, username: comment.createUser });
};

export const deleteComment = async (req, res) => {
  const {
    session: { user },
    params: { id },
  } = req;
  const comment = await Comment.findById(id);
  if (String(comment.owner) !== String(user._id)) {
    return res.sendStatus(403);
  }
  await Comment.findByIdAndDelete(id);
  return res.sendStatus(200);
};
