let score = localStorage.getItem("finalScore");

const finalScoreElm = document.getElementById("finalScore");
score = Number(score)

finalScoreElm.innerText = 0;

setInterval(() => {
    if (finalScoreElm.innerText < score) {
        finalScoreElm.innerText++;
    }
}, 1);