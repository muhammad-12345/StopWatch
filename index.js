const startBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;

const checkNumberLessThanTen = (number) => {
    return number<10?`0${number}`:number;
};


const displayTimer = (hours, minutes, seconds) => {
    document.getElementById("timer").innerText = `${checkNumberLessThanTen(hours)}:${checkNumberLessThanTen(minutes)}:${checkNumberLessThanTen(seconds)}`;
};


// function stopWatch(){
//     seconds++;
//     if(seconds/60===1){
//         seconds=0;
//         minutes++;
//         if(minutes/60===1){
//             minutes=0;
//             hours++;
//         }
//     }
//     displayTimer(hours,minutes,seconds);
// }

const stopWatch = () => {
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    displayTimer(hours,minutes,seconds);
};


// startBtn.addEventListener('click',function(){
//     timerInterval = window.setInterval(stopWatch,1000);
// });
startBtn.addEventListener('click', () => {
    timerInterval = window.setInterval(stopWatch, 1000);
});

pauseBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
});

stopBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
});

