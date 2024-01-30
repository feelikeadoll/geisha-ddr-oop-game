let score = localStorage.getItem("finalScore");

const finalScoreElm = document.getElementById("finalScore");
score = Number(score)

finalScoreElm.innerText = 0;

setInterval(() => {
    if (finalScoreElm.innerText < score) {
        finalScoreElm.innerText++;
    }
}, 1);

arigatoElm = document.createElement("h2")
arigatoElm.innerText = "ありがとうございます :)";

const scoreBoard = document.getElementById("div1");
scoreBoard.appendChild(arigatoElm)


geishaImg = document.createElement("img");
geishaImg.setAttribute("src", "./images/geisha-end.png");
geishaImg.style.width = "380px";

scoreBoard.append(geishaImg);

playButton = document.createElement("button")
playButton.setAttribute("class", "button")
playButton.innerHTML = `<p id="h">Play again</p><br>
プレーゲーム`;
playButton.style.fontFamily = "DotGothic16", "sans-serif";
playButton.style.backgroundColor = "white";
playButton.style.border = "0px";
playButton.style.color = "#8f2b23";
playButton.style.width = "250px";
playButton.style.height = "80px";
playButton.style.paddingBottom = "80px";
playButton.style.lineHeight = "0";
playButton.style.borderRadius = "50px";
playButton.style.marginTop = "50px";

playButton.addEventListener('click', () => {
    location.href = "index.html";
})

const button = document.getElementById("div2")
button.appendChild(playButton);


