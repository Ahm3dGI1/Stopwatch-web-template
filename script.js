let seconds = 00;
let tens = 00;

let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");

let btnStart = document.querySelector(".btn-start")
let btnStop = document.querySelector(".btn-stop")
let btnReset = document.querySelector(".btn-reset")

let interval;

let start = false;

btnStart.addEventListener('click', () => {

    if (start == false) {
        interval = setInterval(StartTimer, 10)
        start = true;
    }
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    start = false;
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
    start = false;
})


function StartTimer() {

    tens++;

    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
}