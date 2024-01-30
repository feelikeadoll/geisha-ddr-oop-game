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
    score += 7;
    scoreElm.innerText = score;
}

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
              }
              else if (classElm.includes('down') && key.code === 'ArrowDown') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
              }
              else if (classElm.includes('up') && key.code === 'ArrowUp') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
              }
              else if (classElm.includes('right') && key.code === 'ArrowRight') {
                arrowElm.domElm.style.display = 'none';
                updateScore();
              }
            }
        })
    });
}, 800);


const game = setInterval(() => {
    randomArrows.forEach((arrowElm) => {
        arrowElm.moveUp();
    })
}, 15)

setTimeout(() => {
    clearInterval(createArrows);
}, 30000);

setTimeout(() => {
    clearInterval(game);
    randomArrows = [];

    location.href = `score.html?score=${score}`;
}, 34000);