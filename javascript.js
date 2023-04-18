const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#startBtn');
const questionText = document.querySelector('#questionText');
const answerA = document.querySelector('#answerA');
const answerB = document.querySelector('#answerB');
const answerC = document.querySelector('#answerC');
const answerD = document.querySelector('#answerD');
const instructions = document.querySelector('#howToPlay');
const answersSection = document.querySelector('#answersSection');
const questionSection = document.querySelector('#questionSection');
const correctShower = document.querySelector('#correct');
const inputBox = document.querySelector('#inputBox');
const timerBox = document.querySelector('#timerBox');
const highScore = document.querySelector('#highScore');
const iBox = document.querySelector('#initials');
const submitScore = document.querySelector('#submitScore')
const home = document.querySelector('#home')

let timeLeft = 60;
let qNumber = 0;
let score = 0;

const questions = [
    {
        "text": "What is object inflation?",
        "correct": "Object inflation doesn't exist",
        "answers": {
            "a": "It is where the object is L A R G E",
            "b": "It is another term for hoisting",
            "c": "Object inflation doesn't exist",
            "d": "When a function runs slower than O(n^2)"
        }
    },
    {
        "text": "Which one of these is a difference between let and const",
        "correct": "Const can not be changed after declaring data",
        "answers": {
            "a": "Const can be rewritten, but only in a function scope",
            "b": "Const can not be changed after declaring data",
            "c": "Let is global scope wherever you may put it",
            "d": "Let cannot be rewritten after its declared"
        }
    },
    {
        "text": "Which one of these is the correct way to select an HTML id='butter'",
        "correct": "const butter = document.querySelector('#butter')",
        "answers": {
            "a": "const butter = document.querySelector('#butter')",
            "b": "const butter = document.querySelector('butter')",
            "c": "const butter = document.querySelector('.butter')",
            "d": "const butter = document.querySelector('id='butter'')"
        }
    },
    {
        "text": "What is the correct way to loop through an array?",
        "correct": "for (i=0; i < loopedArray.length; i++)",
        "answers": {
            "a": "for (i=0; i > loopedArray.length; i++)",
            "b": "for (i=0; i < loopedArray.length; i++)",
            "c": "for (i=1; i > loopedArray.length; i++)",
            "d": "for (i=1; i < loopedArray.length; i++)"
        }
    },
    {
        "text": "What is the difference between == and === in JavaScript?",
        "correct": "== is SAME value DIFFERENT data type. === is STRICTLY SAME datatype and value.",
        "answers": {
            "a": "== sets a NEW value. === DOESNT allow a NEW value.",
            "b": "=== ADDS. == SUBTRACTS.",
            "c": "== means OR. === means AND.",
            "d": "== is SAME value DIFFERENT data type. === is STRICTLY SAME datatype and value."
        }
    }
]

const quizStart = () => {
    questionSection.style.display = 'block';
    instructions.style.display = 'none';
    startBtn.style.display = 'none';
    
    const countdown = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(countdown);
          timer.textContent = "Time's up!";
          highScoreScreen()
        }
      }, 1000);

    displayQuestions();
    
};

const displayQuestions = () => {
    console.log(qNumber)
    if (qNumber === 5) {
        highScoreScreen()
    } else {
    questionText.textContent = questions[qNumber].text
    answerA.textContent = questions[qNumber].answers.a
    answerB.textContent = questions[qNumber].answers.b
    answerC.textContent = questions[qNumber].answers.c
    answerD.textContent = questions[qNumber].answers.d
    }
}

answersSection.addEventListener('click', function (event) {
    let clicked = event.target;

    if (clicked.matches('button')) {
        console.log(clicked.textContent)
        console.log(questions[qNumber].correct)
        if (clicked.textContent === questions[qNumber].correct) {
            correctShower.textContent = 'Correct!'
            score += 100
            qNumber++
            displayQuestions();
            console.log('correct')
        }
        else if (clicked.textContent !== questions[qNumber].correct) {
            timeLeft -= 10
            correctShower.textContent = 'Incorrect!'
            console.log('incorrect')
        }
    }
})

const highScoreScreen = () => {
    correctShower.style.display = 'none'
    questionSection.style.display = 'none'
    inputBox.style.display = 'flex'
    timerBox.style.display = 'none'
    highScore.textContent = `High Score: ${score}`
    
    submitScore.addEventListener('click', function() {
        if (localStorage.getItem("saved score") === null){
            let scoreString = JSON.stringify(`${iBox.value}: ${score}`);
            localStorage.setItem("saved score", scoreString);
        };
    console.log('saved')
    })
}

startBtn.addEventListener('click', quizStart);
home.addEventListener('click', function() {
    window.location.replace('score.html')
})