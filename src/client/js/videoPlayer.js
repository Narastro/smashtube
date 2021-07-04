const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteBtnIcon = muteBtn.querySelector("i");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullscreen = document.getElementById("fullscreen");
const fullscreenBtn = fullscreen.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");

let controlTimeout = null;
let controlsMovementTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};

const handleMute = (e) => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "mute";
  }
  volumeValue = value;
  video.volume = value;
};

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(11, 8);

// const handleLoadedMetaData = () => {};

const handleTimeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

const handleTimelineChange = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};

const handleFullscreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
    fullscreenBtn.classList = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullscreenBtn.classList = "fas fa-compress";
  }
};

const hideControls = () => videoControls.classList.remove("showing");

const handleMouseMove = () => {
  if (controlTimeout) {
    clearTimeout(controlTimeout);
    controlTimeout = null;
  }
  if (controlsMovementTimeout) {
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
  }
  videoControls.classList.add("showing");
  controlsMovementTimeout = setTimeout(hideControls, 3000);
};

const handleMouseLeave = () => {
  controlTimeout = setTimeout(hideControls, 3000);
};

const handlePressKey = (event) => {
  if (event.code === "Space" && event.target === document.body) {
    handlePlayClick();
  }
  if (event.code === "KeyF" && event.target === document.body) {
    handleFullscreen();
  }
};

const handleEnded = () => {
  const { id } = videoContainer.dataset;
  fetch(`/api/videos/${id}/view`, { method: "POST" });
};

document.addEventListener("keyup", handlePressKey);
playBtnIcon.addEventListener("click", handlePlayClick);
muteBtnIcon.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange);
video.onloadedmetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};
// video.addEventListener("loadedmetadata", handleLoadedMetaData);
video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("click", handlePlayClick);
video.addEventListener("ended", handleEnded);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
timeline.addEventListener("input", handleTimelineChange);
fullscreenBtn.addEventListener("click", handleFullscreen);
