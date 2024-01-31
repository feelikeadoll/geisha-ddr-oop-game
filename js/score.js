let score = localStorage.getItem("finalScore");

const finalScoreElm = document.getElementById("finalScore");
score = Number(score)

finalScoreElm.innerText = 0;

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

class Button {
    constructor(margin) {
        this.width = 250;
        this.height = 80;
        this.paddingBottom = 80;
        this.lineHeight = 0;
        this.borderRadius = 80;
        this.marginTop = margin;
    }

    createButtonElement(str, direction, location) {
        this.button = document.createElement("button")

        this.button.setAttribute("class", "button")
        this.button.innerHTML = str;
        this.button.style.fontFamily = "DotGothic16", "sans-serif";
        this.button.style.backgroundColor = "white";
        this.button.style.border = "0px";
        this.button.style.color = "#8f2b23";
        this.button.style.width = this.width + "px";
        this.button.style.height = this.height + "px";
        this.button.style.paddingBottom = this.paddingBottom + "px";
        this.button.style.lineHeight = this.lineHeight;
        this.button.style.borderRadius = this.borderRadius + "px";
        this.button.style.marginTop = this.marginTop + "px";
        this.button.style.boxShadow = "0 9px #620f09";

        this.button.addEventListener('mouseover', () => {
            this.button.style.backgroundColor = "#8f2b23";
            this.button.style.color = "white";
        });
        
        this.button.addEventListener('mouseout', () => {
            this.button.style.backgroundColor = "white";
            this.button.style.color = "#8f2b23";
        });
        
        this.button.addEventListener('click', () => {
            this.button.style.boxShadow = '0 3px #620f09';
            this.button.style.transform = "translateY(6px)";
            window.location.href = direction;
        })

        const htmlLocation = document.getElementById(location)
        htmlLocation.appendChild(this.button);
    }
}

const playButtonText = `<p id="h">Play again</p><br>
プレーゲーム`;
const buttonMarginTop = 40;
const buttonHref = "index.html";

const playButton = new Button(buttonMarginTop);
const button = playButton.createButtonElement(playButtonText, buttonHref, "div2")

localStorage.removeItem("finalScore");