const audio = document.getElementById("audio");

const soundOff = document.getElementById("sound-off");
const soundOn = document.getElementById("sound-on");

soundOff.addEventListener("click", () => {
    audio.play();
    audio.muted = false;
    audio.volume = 0.05;
    soundOff.style.display = "none";
    soundOn.style.display = "block";
});

soundOn.addEventListener("click", () => {
    audio.pause();
    soundOn.style.display = "none";
    soundOff.style.display = "block";
});

$(document).ready(() => {
    new ClipboardJS('.copy');
});