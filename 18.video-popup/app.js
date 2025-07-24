const button = document.querySelector(".button");
const closeIcon = document.querySelector(".close-icon");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");

button.addEventListener("click", () => {
    trailer.classList.remove("active")
})

closeIcon.addEventListener("click", () => {
    trailer.classList.add("active")
    video.pause()
    video.currentTime = 0;
})