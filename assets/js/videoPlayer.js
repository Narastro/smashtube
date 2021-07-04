/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("var video = document.querySelector(\"video\");\nvar playBtn = document.getElementById(\"play\");\nvar playBtnIcon = playBtn.querySelector(\"i\");\nvar muteBtn = document.getElementById(\"mute\");\nvar muteBtnIcon = muteBtn.querySelector(\"i\");\nvar time = document.getElementById(\"time\");\nvar volumeRange = document.getElementById(\"volume\");\nvar currentTime = document.getElementById(\"currentTime\");\nvar totalTime = document.getElementById(\"totalTime\");\nvar timeline = document.getElementById(\"timeline\");\nvar fullscreen = document.getElementById(\"fullscreen\");\nvar fullscreenBtn = fullscreen.querySelector(\"i\");\nvar videoContainer = document.getElementById(\"videoContainer\");\nvar videoControls = document.getElementById(\"videoControls\");\nvar controlTimeout = null;\nvar controlsMovementTimeout = null;\nvar volumeValue = 0.5;\nvideo.volume = volumeValue;\n\nvar handlePlayClick = function handlePlayClick(e) {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\n\nvar handleMute = function handleMute(e) {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\n\nvar handleVolumeChange = function handleVolumeChange(event) {\n  var value = event.target.value;\n\n  if (video.muted) {\n    video.muted = false;\n    muteBtn.innerText = \"mute\";\n  }\n\n  volumeValue = value;\n  video.volume = value;\n};\n\nvar formatTime = function formatTime(seconds) {\n  return new Date(seconds * 1000).toISOString().substr(11, 8);\n};\n\nvar handleLoadedMetaData = function handleLoadedMetaData() {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\n\nvar handleTimeUpdate = function handleTimeUpdate() {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\n\nvar handleTimelineChange = function handleTimelineChange(event) {\n  var value = event.target.value;\n  video.currentTime = value;\n};\n\nvar handleFullscreen = function handleFullscreen() {\n  var fullscreen = document.fullscreenElement;\n\n  if (fullscreen) {\n    document.exitFullscreen();\n    fullscreenBtn.classList = \"fas fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullscreenBtn.classList = \"fas fa-compress\";\n  }\n};\n\nvar hideControls = function hideControls() {\n  return videoControls.classList.remove(\"showing\");\n};\n\nvar handleMouseMove = function handleMouseMove() {\n  if (controlTimeout) {\n    clearTimeout(controlTimeout);\n    controlTimeout = null;\n  }\n\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n\n  videoControls.classList.add(\"showing\");\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\n\nvar handleMouseLeave = function handleMouseLeave() {\n  controlTimeout = setTimeout(hideControls, 3000);\n};\n\nvar handlePressKey = function handlePressKey(event) {\n  if (event.code === \"Space\" && event.target === document.body) {\n    handlePlayClick();\n  }\n\n  if (event.code === \"KeyF\" && event.target === document.body) {\n    handleFullscreen();\n  }\n};\n\nvar handleEnded = function handleEnded() {\n  var id = videoContainer.dataset.id;\n  fetch(\"/api/videos/\".concat(id, \"/view\"), {\n    method: \"POST\"\n  });\n};\n\ndocument.addEventListener(\"keyup\", handlePressKey);\nplayBtnIcon.addEventListener(\"click\", handlePlayClick);\nmuteBtnIcon.addEventListener(\"click\", handleMute);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadeddata\", handleLoadedMetaData);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideo.addEventListener(\"click\", handlePlayClick);\nvideo.addEventListener(\"ended\", handleEnded);\nvideoContainer.addEventListener(\"mousemove\", handleMouseMove);\nvideoContainer.addEventListener(\"mouseleave\", handleMouseLeave);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullscreenBtn.addEventListener(\"click\", handleFullscreen);\n\n//# sourceURL=webpack://smashtube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;