const geisha = new Geisha()
// geisha.autoDancingGeisha();

geisha.startPose();

const staticArrows = [];

const leftArrow = new LeftStaticArrow();
const downArrow = new DownStaticArrow();
const upArrow = new UpStaticArrow();
const rightArrow = new RightStaticArrow();

staticArrows.push(leftArrow, downArrow, upArrow, rightArrow)

let score = 0;
const scoreElm = document.getElementById("scoreCounter");
scoreElm.innerText = score;

function updateScore() {
    score++;
    scoreElm.innerText = score;
}

let time = 40;
const boardElm = document.getElementById("board");
const timeCounter = document.createElement("div")
timeCounter.innerText = `00:${time}`;
timeCounter.style.position = "absolute";
timeCounter.style.right = "30px"
timeCounter.style.top = "10px";
timeCounter.style.fontSize = "25px"

boardElm.appendChild(timeCounter)

setInterval(() => {
    time--;
    timeCounter.innerText = `00:${time}`;
}, 1000);

const arrowDirections = [
    {
        direction: "left",
        src: "./images/arrows/moving-left.png",
        position: leftArrow.positionX
    },
    {
        direction: "down",
        src: "./images/arrows/moving-down.png",
        position: downArrow.positionX,
    },
    {
        direction: "up",
        src: "./images/arrows/moving-up.png",
        position: upArrow.positionX,
    },
    {
        direction: "right",
        src: "./images/arrows/moving-right.png",
        position: rightArrow.positionX,
    }
]

const randomArrows = [];

const levels = {
    easy: {
        create: 800,
        speed: 15,
        double: 6
    },
    medium: {
        create: 600,
        speed: 12,
        double: 3
    },
    difficult: {
        create: 500,
        speed: 10,
        double: 2
    }
}

let chosenLevel = localStorage.getItem("difficulty");
chosenLevel = chosenLevel.toLowerCase();

console.log(chosenLevel)
console.log("create: ", levels[chosenLevel].create)
console.log("moveup: ", levels[chosenLevel].speed)

const createArrows = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * arrowDirections.length)
        
    const direction = arrowDirections[randomIndex].direction;
    const imgSrc = arrowDirections[randomIndex].src;
    const position = arrowDirections[randomIndex].position;
    
    const newArrow = new movingArrows();
    newArrow.createDomElement(direction, imgSrc, position)
    randomArrows.push(newArrow);

    document.addEventListener("keydown", (key) => {
        randomArrows.forEach((arrowElm) => {
            const classElm = arrowElm.domElm.className;

            if (arrowElm.positionY > 412 && arrowElm.positionY < 428) {
              if (classElm.includes('left') && key.code === 'ArrowLeft') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
              }
              else if (classElm.includes('down') && key.code === 'ArrowDown') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
              }
              else if (classElm.includes('up') && key.code === 'ArrowUp') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
              }
              else if (classElm.includes('right') && key.code === 'ArrowRight') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
              }
            }
        })
    });
}, levels[chosenLevel].create);


const createSecondArrows = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * arrowDirections.length)
        
    const direction = arrowDirections[randomIndex].direction;
    const imgSrc = arrowDirections[randomIndex].src;
    const position = arrowDirections[randomIndex].position;
    
    const newArrow = new movingArrows();
    newArrow.createDomElement(direction, imgSrc, position)
    randomArrows.push(newArrow);

    document.addEventListener("keydown", (key) => {
        randomArrows.forEach((arrowElm) => {
            const classElm = arrowElm.domElm.className;

            if (arrowElm.positionY > 412 && arrowElm.positionY < 428) {
            if (classElm.includes('left') && key.code === 'ArrowLeft') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
            }
            else if (classElm.includes('down') && key.code === 'ArrowDown') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
            }
            else if (classElm.includes('up') && key.code === 'ArrowUp') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
            }
            else if (classElm.includes('right') && key.code === 'ArrowRight') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
                geisha.changePose();
            }
            }
        })
    });
}, levels[chosenLevel].create * levels[chosenLevel].double);

const game = setInterval(() => {
    randomArrows.forEach((arrowElm) => {
        arrowElm.moveUp();
    })
}, levels[chosenLevel].speed)

setTimeout(() => {
    clearInterval(createArrows);
    clearInterval(createSecondArrows);
}, (time - 4) * 1000);

setTimeout(() => {
    clearInterval(game);

    score = score.toString();
    localStorage.setItem("finalScore", score);

    location.href = "score.html";
}, time * 1000);