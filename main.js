let initialized = false;

let audio = document.getElementById("audio");

let soundOff = document.getElementById("sound-off");
let soundOn = document.getElementById("sound-on");

soundOff.addEventListener("click", _ => {
    audio.play();
    audio.muted = false;
    audio.volume = 0.05;
    soundOff.style.display = "none";
    soundOn.style.display = "block";

    if (!initialized) {
        initialized = true;
        init();
    }
});

soundOn.addEventListener("click", _ => {
    audio.pause();
    soundOn.style.display = "none";
    soundOff.style.display = "block";
});


(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


function init() {
    window.audioContext = new AudioContext()
    window.analyzer = audioContext.createAnalyser()
    window.analyzer.smoothingTimeConstant = 0.75;

    window.source = audioContext.createMediaElementSource(audio)
    // Connect to the analyzer ...
    source.connect(analyzer)
    // and back to the destination, to play the sound after the analysis.
    analyzer.connect(audioContext.destination)
    // Initialize a visualizer object
    var viz = new simpleViz()
    // Finally, initialize the visualizer.
    new visualizer(viz['update'], analyzer)
}

class visualizer {
    constructor(visualization, analyzer) {
        var self = this;
        this.visualization = visualization;
        var last = Date.now();
        var loop = function () {
            var dt = Date.now() - last;
            // we get the current byteFreq data from our analyzer
            var byteFreq = new Uint8Array(analyzer.frequencyBinCount);
            analyzer.getByteFrequencyData(byteFreq);
            last = Date.now();
            // We might want to use a delta time (`dt`) too for our visualization.
            self.visualization(byteFreq, dt);
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}

class simpleViz {
    constructor() {
        var self = this;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.barWidth = 10;
        this.barGap = 1;
        // We get the total number of bars to display
        this.bars = Math.floor(this.canvas.width / (this.barWidth + this.barGap));
        // This function is launched for each frame, together with the byte frequency data.
        this.update = function (byteFreq) {
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
            // We take an element from the byteFreq array for each of the bars.
            // Let's pretend our byteFreq contains 20 elements, and we have five bars...
            var step = Math.floor(byteFreq.length / self.bars);
            for (var i = 0; i < self.bars; i++) {
                // Draw each bar
                var barHeight = byteFreq[i * step];
                self.ctx.fillStyle = '#8FBCBB';
                self.ctx.fillRect(i * (self.barWidth + self.barGap), self.canvas.height - barHeight, self.barWidth, barHeight);
            }
        }
    }
}
