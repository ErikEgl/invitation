const video = document.querySelector("video");
const videoStartBtn = document.querySelector(".video-container-anchor");
const videoStartBtn1 = document.querySelector(".video-container-anchor1");

videoStartBtn.addEventListener("click", () => {
  setTimeout(() => {
    video.play();
  }, 100);
});
videoStartBtn1.addEventListener("click", () => {
  setTimeout(() => {
    video.play();
  }, 300);
});
