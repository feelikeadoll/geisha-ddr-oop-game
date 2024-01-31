class Geisha {
    constructor() {
        this.width = 271;
        this.height = 369;
        this.positionX = 433;
        this.positionY = 30;
        this.id = "dancing-geisha";

        this.geishaPoses = [
            "./images/geisha-poses/geisha-1.png",
            "./images/geisha-poses/geisha-2.png",
            "./images/geisha-poses/geisha-3.png",
            "./images/geisha-poses/geisha-4.png",
            "./images/geisha-poses/geisha-5.png",
            "./images/geisha-poses/geisha-6.png",
        ]
    }

    createDomElement(src) {
        this.domElm = document.createElement("img");
        this.domElm.setAttribute("src", src);
        this.domElm.setAttribute("id", this.id);
        this.domElm.style.width = this.width + "px";
        this.domElm.style.height = this.height + "px";
        this.domElm.style.left = this.positionX + "px";
        this.domElm.style.bottom = this.positionY + "px";
        this.domElm.style.position = "absolute";
    
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }

    removeDomElement() {
        const element = document.getElementById(this.id);
        element.remove();
    }

    dancingGeisha() {
        let i = 0;
        this.createDomElement(geisha.geishaPoses[i]) 

        setInterval(() => {
            i++;
            this.createDomElement(geisha.geishaPoses[i]);
            if (i === 5) {
                i = 0;
            }
        }, 1000);

        setInterval(() => {
            this.removeDomElement()
        }, 1000);
    }
}

const id = "dancing-geisha";
const geisha = new Geisha()

geisha.dancingGeisha();
  

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

    score = score.toString();
    localStorage.setItem("finalScore", score);

    location.href = "score.html";
}, 34000);