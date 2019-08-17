let clicked = false;
let video = document.querySelector("video");
let c = document.getElementById("freq");
let ctx = c.getContext("2d");

function resize() {
  if (window.innerWidth / window.innerHeight >= 16 / 9) {
    video.style.width = window.innerWidth + "px";
    video.style.height = (window.innerWidth * 9) / 16 + "px";
  } else {
    video.style.height = window.innerHeight + "px";
    video.style.width = (window.innerHeight * 16) / 9 + "px";
  }
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

document.body.addEventListener("click", _ => {
  if (!clicked) {
    video.muted = false;
    video.volume = 0.1;
    initAudio();

    clicked = true;
    document.querySelector(".hint").style.display = "none";
  }
});

let doScroll = function (e) {
  e = window.event || e;
  let delta = 0.012;
  let oldVolume = video.volume;

  if ((e.wheelDelta ? e.wheelDelta > 0 : e.detail < 0)) {
    if (video.volume + delta <= 1) {
      video.volume += delta;
    } else {
      video.volume = 1;
    }
  } else {
    if (video.volume - delta >= 0) {
      video.volume -= delta;
    } else {
      video.volume = 0;
    }
  }
};
if (document.body.addEventListener) {
  document.body.addEventListener("mousewheel", doScroll, false);
  document.body.addEventListener("DOMMouseScroll", doScroll, false);
} else {
  document.body.attachEvent("onmousewheel", doScroll);
}

c.width = window.innerWidth;
c.height = window.innerHeight;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let dataArray, audioAnalyzer, audioContext, audioSource;
var AudioContext = AudioContext || webkitAudioContext;
let width = 500;

function initAudio() {
  audioContext = new AudioContext();
  audioAnalyzer = audioContext.createAnalyser();
  audioAnalyzer.smoothingTimeConstant = 0.75;

  audioSource = audioContext.createMediaElementSource(video);
  audioSource.connect(audioAnalyzer);

  audioAnalyzer.connect(audioContext.destination);

  dataArray = new Uint8Array(audioAnalyzer.frequencyBinCount);
}

function draw() {
  if (clicked) {
    audioAnalyzer.getByteFrequencyData(dataArray);
  }
  drawBars(dataArray);
  window.requestAnimationFrame(draw);
}
draw();

/*
 * Audiovisualization using the html canvas element.
 * ©2017, Dominik Hofacker
 * https://www.behance.net/dominikhofacker
 * Please consider supporting this project on behance:
 * https://www.behance.net/gallery/49260123/Web-Audio-Visualization
 */
function drawBars(array) {
  let threshold = 0;
  ctx.clearRect(0, 0, c.width, c.height);
  let maxBinCount = clicked ? array.length : 0;

  ctx.save();

  ctx.globalCompositeOperation = "source-over";
  ctx.scale(0.5, 0.5);
  ctx.translate(window.innerWidth, window.innerHeight);
  ctx.fillStyle = "#fff";

  let bass = Math.floor(clicked ? array[1] : 0); //1Hz Frequenz
  let radius =
    0.45 * $(window).width() <= width
      ? -(bass * 0.25 + 0.45 * $(window).width())
      : -(bass * 0.25 + width);

  let bar_length_factor = 1;
  if ($(window).width() >= 785) {
    bar_length_factor = 1.0;
  } else if ($(window).width() < 785) {
    bar_length_factor = 1.5;
  } else if ($(window).width() < 500) {
    bar_length_factor = 20.0;
  }
  //go over each bin
  for (let i = 0; i < maxBinCount; i++) {
    let value = array[i];
    if (value >= threshold) {
      //draw bin
      //ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
      //ctx.fillRect(i * space, c.height, 2, -value);
      ctx.fillRect(
        0,
        radius,
        $(window).width() <= width ? 2 : 3,
        -value / bar_length_factor
      );
      ctx.rotate(((180 / 128) * Math.PI) / 180);
    }
  }

  for (let i = 0; i < maxBinCount; i++) {
    let value = array[i];
    if (value >= threshold) {
      //draw bin
      //ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
      //ctx.fillRect(i * space, c.height, 2, -value);
      ctx.rotate((-(180 / 128) * Math.PI) / 180);
      ctx.fillRect(
        0,
        radius,
        $(window).width() <= width ? 2 : 3,
        -value / bar_length_factor
      );
    }
  }

  for (let i = 0; i < maxBinCount; i++) {
    let value = array[i];
    if (value >= threshold) {
      //draw bin
      //ctx.fillRect(0 + i * space, c.height - value, 2 , c.height);
      //ctx.fillRect(i * space, c.height, 2, -value);
      ctx.rotate(((180 / 128) * Math.PI) / 180);
      ctx.fillRect(
        0,
        radius,
        $(window).width() <= width ? 2 : 3,
        -value / bar_length_factor
      );
    }
  }

  ctx.restore();
}
