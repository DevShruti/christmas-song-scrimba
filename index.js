const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const bell = document.getElementById("bell");

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

const audio = new Audio('bells.mp3')
playBtn.addEventListener('click', ()=>{
    audio.play();
    bell.classList.add("animate");
})

pauseBtn.addEventListener('click', ()=> {
    audio.pause();
    bell.classList.remove("animate");  
})

stopBtn.addEventListener('click', ()=> {
    audio.load();
    bell.classList.remove("animate"); 
})