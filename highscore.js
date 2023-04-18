let home = document.getElementById('home')

        home.addEventListener('click', function() {
            window.location.replace('index.html')
        })

var scoresUl = document.getElementById("scores");

var highScoreList = JSON.parse(localStorage.getItem("saved scores"));

function populateHighScores() {

    for (var i = 0; i < highScoreList.length; i++) {

        var scored = highScoreList[i];

        var li = document.createElement("li");

        li.textContent = scored;

        scoresUl.appendChild(li);
    }
};

populateHighScores();