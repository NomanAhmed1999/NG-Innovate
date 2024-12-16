let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let miliSeconds = document.querySelector("#ms");

// Button Get
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");


let mili = 0;
let min = 0;
let sec = 0
let timerInterval;

function start() {
    startBtn.disabled = true

    timerInterval = setInterval(function () {
        mili++
        if (mili > 999) {
            sec++;
            mili = 0
        }

        if (sec > 59) {
            sec = 0
            min++
        }

        miliSeconds.innerText = mili
        seconds.innerText = sec
        minutes.innerText = min
    }, 1)

}


function stop() {
    clearInterval(timerInterval)
    startBtn.disabled = false
}
function reset() { }


// event listner
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
