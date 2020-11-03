import ClipboardJS from 'clipboard';
import beat from './assets/beat.mp3';
import beat2 from './assets/beat2.mp3';

const audio = document.getElementById('audio');

const soundOff = document.getElementById('sound-off');
const soundOn = document.getElementById('sound-on');
const switchBeat = document.getElementById('switch-beat');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

audio.src = beat;
audio.muted = false;
audio.volume = 0.05;

soundOff.addEventListener('click', () => {
    audio.play();
    soundOff.style.display = 'none';
    soundOn.style.display = 'unset';
});

soundOn.addEventListener('click', () => {
    audio.pause();
    soundOn.style.display = 'none';
    soundOff.style.display = 'unset';
});

switchBeat.addEventListener('click', () => {
    if (audio.src.includes(beat)) {
        audio.src = beat2;
    } else {
        audio.src = beat;
    }
    audio.play();
    soundOff.style.display = 'none';
    soundOn.style.display = 'unset';
});

volumeSlider.addEventListener('input', function () {
    audio.volume = this.value / 100;
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.remove('fa-volume-down');
    volumeIcon.classList.remove('fa-volume-mute');

    if (this.value >= 50) {
        volumeIcon.classList.add('fa-volume-up');
    } else if (this.value > 0) {
        volumeIcon.classList.add('fa-volume-down');
    } else {
        volumeIcon.classList.add('fa-volume-mute');
    }
})

new ClipboardJS('.copy');