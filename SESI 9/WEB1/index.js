const videoComponent = document.querySelector('video')
const video = document.getElementById('myVideo')
const volumeControl = document.getElementById('volumeControl')
const volumeValue = document.getElementById('volumeValue')

function play() {
    console.log('playing');
    videoComponent.play()
}

function pause() {
    console.log('pause');
    videoComponent.pause()
}

function minimize() {
    console.log('minimize');
    videoComponent.minimize()
}

video.volume = 0;
volumeControl.addEventListener('input', function () {
    const volume = volumeControl.value;
    video.volume = volume / 100;
    volumeValue.textContent = `${(volume)}%`;
})