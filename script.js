function handleCount() {
    let count = document.getElementById('count');
    let countNumber = Number(count.innerHTML);
    countNumber++;
    count.innerHTML = countNumber;
    if(countNumber % 5 === 0) {
        alert("Git Bi Dinlen");
    }
}

const birdPlayAudio = document.getElementById('birdPlayAudio');
const birdPlay = document.getElementById('birdPlay');

birdPlay.addEventListener("click", function () {
    if (birdPlayAudio.paused) {
        birdPlayAudio.play();
        birdPlay.className = "fa-solid fa-pause";

        // Diğerlerini durdur
        pianoPlayAudio.pause();
        rainPlayAudio.pause();
        pianoPlay.className = "fa-solid fa-play";
        rainPlay.className = "fa-solid fa-cloud";
    } else {
        birdPlayAudio.pause();
        birdPlay.className = "fa-solid fa-dove";
    }
});

const pianoPlayAudio = document.getElementById('pianoPlayAudio');
const pianoPlay = document.getElementById('pianoPlay');

pianoPlay.addEventListener("click", function () {
    if (pianoPlayAudio.paused) {
        pianoPlayAudio.play();
        pianoPlay.className = "fa-solid fa-pause";

        // Diğerlerini durdur
        birdPlayAudio.pause();
        rainPlayAudio.pause();
        birdPlay.className = "fa-solid fa-dove";
        rainPlay.className = "fa-solid fa-cloud";
    } else {
        pianoPlayAudio.pause();
        pianoPlay.className = "fa-solid fa-play";
    }
});

const rainPlayAudio = document.getElementById('rainPlayAudio');
const rainPlay = document.getElementById('rainPlay');

rainPlay.addEventListener("click", function () {
    if (rainPlayAudio.paused) {
        rainPlayAudio.play();
        rainPlay.className = "fa-solid fa-pause";

        // Diğerlerini durdur
        birdPlayAudio.pause();
        pianoPlayAudio.pause();
        birdPlay.className = "fa-solid fa-dove";
        pianoPlay.className = "fa-solid fa-play";
    } else {
        rainPlayAudio.pause();
        rainPlay.className = "fa-solid fa-cloud";
    }
});

const volumeInput = document.getElementById("volume-input");

volumeInput.addEventListener("input", function () {
    birdPlayAudio.volume = volumeInput.value / 100;
    pianoPlayAudio.volume = volumeInput.value / 100;
    rainPlayAudio.volume = volumeInput.value / 100;   
});