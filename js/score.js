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
playButton.style.borderRadius = "80px";
playButton.style.marginTop = "40px";
playButton.style.boxShadow = "0 9px #620f09";

playButton.addEventListener('mouseover', () => {
    playButton.style.backgroundColor = "#8f2b23";
    playButton.style.color = "white";
});

playButton.addEventListener('mouseout', () => {
    playButton.style.backgroundColor = "white";
    playButton.style.color = "#8f2b23";
});

playButton.addEventListener('click', () => {
    playButton.style.boxShadow = '0 2px #620f09';
    playButton.style.transform = "translateY(4px)";
    location.href = "index.html";
})

const button = document.getElementById("div2")
button.appendChild(playButton);

localStorage.removeItem("finalScore");