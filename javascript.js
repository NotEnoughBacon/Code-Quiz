var timer = document.querySelector('#timer')
var startBtn = document.querySelector('#startBtn')
var questionText = document.querySelector('#questionText')
var answerA = document.querySelector('#answerA')
var answerB = document.querySelector('#answerB')
var answerC = document.querySelector('#answerC')
var answerD = document.querySelector('#answerD')




var timeLeft = 60;




function timerStart() {

    timeLeft --;

    timer.textContent = timeLeft;

    if (timeLeft == 0) {
        clearInterval();
    }
    
}

startBtn.addEventListener('click', timerStart());

