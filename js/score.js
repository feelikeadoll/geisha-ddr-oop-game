let score = localStorage.getItem("finalScore");

const finalScoreElm = document.getElementById("finalScore");
score = Number(score)

if (score === 0 || score < 100)
{
    finalScoreElm.innerText = 0;
} else {
    finalScoreElm.innerText = score - 100;
}

setInterval(() => {
    if (finalScoreElm.innerText < score) {
        finalScoreElm.innerText++;
    }
}, 1);

arigatoText = document.createElement("h2")
arigatoText.innerText = "ありがとうございます :)";

const scoreBoard = document.getElementById("div1");
scoreBoard.appendChild(arigatoText)


geishaImg = document.createElement("img");
geishaImg.setAttribute("src", "./images/geisha-end.png");
geishaImg.style.width = "380px";

scoreBoard.append(geishaImg);

const playButtonText = `<p id="h">Play again</p><br>
プレーゲーム`;
const buttonMarginTop = 40;
const buttonHref = "index.html";

const playButton = new Button(buttonMarginTop);
const button = playButton.createButtonElement(playButtonText, "", "div2")
playButton.normalClickEvent(buttonHref)

localStorage.removeItem("finalScore");