//////// CREATE DIV STRUCTURE ////////

const mainDiv = document.getElementById("intro")

for (let i = 1; i <= 4; i++) {
    const div = document.createElement("div")
    div.setAttribute("id", `div${i}`)
    mainDiv.appendChild(div)
}


/////// INSTRUCTIONS ///////

const textBox = document.getElementById("div1")

textBox.style.color = "#8f2b23";
textBox.style.width = "365px";
textBox.style.position = "absolute";
textBox.style.left = "18px";
textBox.style.top = "5px";
textBox.style.padding = "0px 0px 0px 10px";


const introText = document.createElement("h2");
introText.setAttribute("id", "intro-header")
introText.innerText = `はじめまして, TOMOEです`;
introText.style.color = "white"
introText.style.padding = "5px 10px 0px 10px";

textBox.appendChild(introText)

const instructions = document.createElement("div")
instructions.innerText = `Tomoe is currently a maiko, which means
she is training to become a geisha.
One of the arts she has to master is
the Mai, the Japanese traditional
dance with a fan.

Can you help her practice?
But first, choose:`;
instructions.style.textAlign = "center";
instructions.style.width = "300px"
instructions.style.color = "white"
instructions.style.padding = "0px 10px 15px 10px";
instructions.style.left = "100px";
instructions.style.margin = "0px"

textBox.appendChild(instructions)


/////// RADIO BUTTONS ///////

const radioDiv = document.getElementById("div2")

radioDiv.style.position = "absolute";
radioDiv.style.left = "55px";
radioDiv.style.bottom = "170px";

const levels = [ "Easy", "Medium", "Difficult"]

levels.forEach((elm, i) => {
    const radioButton = document.createElement("input");
    const label = document.createElement("label");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("name", "levels");
    radioButton.setAttribute("value", elm);
    radioButton.setAttribute("class", "radio-button")
    radioButton.style.backgroundColor = "red";
    // radioButton.setAttribute("checked", "checked")
    label.style.padding = "5px";
    label.style.fontSize = "20px"
    label.innerText = elm;

    radioDiv.appendChild(radioButton);
    radioDiv.appendChild(label);
});


/////// BUTTON ///////

const playButtonText = `<p id="h">Play game</p><br>
プレーゲーム`;
const buttonMarginTop = 40;
const buttonHref = "game.html";

const playButton = new Button(buttonMarginTop);
const button = playButton.createButtonElement(playButtonText, "absolute", "div3", "60", "70")

playButton.submitClickEvent(buttonHref);


////// GEISHA IMAGE ///////

const introImg = document.getElementById("div4");

geishaImg = document.createElement("img");
geishaImg.setAttribute("src", "./images/geisha.png");
geishaImg.style.height = "512px";
geishaImg.style.position = "absolute";
geishaImg.style.left = "305px"
geishaImg.style.bottom = "0px"

introImg.append(geishaImg);