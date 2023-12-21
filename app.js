const timerDisp = document.querySelector('#timerDisplay');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const pauseBtn = document.querySelector('#pauseBtn');


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let interValId;
let hrs = 0;
let mins = 0;
let secs = 0;


startBtn.addEventListener('click', () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        interValId = setInterval(updateTime, 1000);
    }
});

resetBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(interValId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timerDisp.textContent = "00:00:00";
});

pauseBtn.addEventListener('click', () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interValId);
    }
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    secs = Math.floor((elapsedTime / 1000) % 60);

    hrs = addZer(hrs);
    mins = addZer(mins);
    secs = addZer(secs);
    
    timerDisp.textContent = `${hrs}:${mins}:${secs}`;


    function addZer(unit) {
        return (('0') + unit).length > 2 ? unit : '0' + unit;
    }
}
