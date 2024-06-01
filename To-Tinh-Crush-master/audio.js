window.addEventListener('load', (event) => {
    var audioElement = document.createElement("audio");
    audioElement.src = "./audio/audio,mp3";
    audioElement.autoplay = true;
    audioElement.loop = true;
    document.body.appendChild(audioElement);

    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
});