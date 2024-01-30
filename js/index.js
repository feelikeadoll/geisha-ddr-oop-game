class Arrow {
    constructor() {
      this.width = 90;
      this.height = 90;
      this.positionX = 0;
      this.positionY = 420;
    }
  
    createDomElement(src) {
      this.domElm = document.createElement("img");
      this.domElm.setAttribute("src", src);
      this.domElm.setAttribute("class", "static-arrows");
      this.domElm.style.width = this.width + "px";
      this.domElm.style.height = this.height + "px";
      this.domElm.style.left = this.positionX + "px";
      this.domElm.style.bottom = this.positionY + "px";
  
      const boardElm = document.getElementById("board");
      boardElm.appendChild(this.domElm);
    }
}
  
class LeftStaticArrow extends Arrow {
    constructor() {
      super();
      const src = "./images/arrows/grey-left.png";
      this.positionX = this.positionX;
      this.createDomElement(src);
    }
}
  
class DownStaticArrow extends Arrow {
    constructor() {
      super();
      const src = "./images/arrows/grey-down.png";
      this.positionX = this.width;
      this.createDomElement(src);
    }
}
  
class UpStaticArrow extends Arrow {
    constructor() {
      super();
      const src = "./images/arrows/grey-up.png";
      this.positionX = this.width * 2;
      this.createDomElement(src);
    }
}
  
class RightStaticArrow extends Arrow {
    constructor() {
      super();
      const src = "./images/arrows/grey-right.png";
      this.positionX = this.width * 3;
      this.createDomElement(src);
    }
}

class movingArrows {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.positionY = 0 - this.height;
    }

    createDomElement(direction, src, position){
        this.domElm = document.createElement("img");

        this.domElm.setAttribute("src", src);
        this.domElm.setAttribute("class", `moving-arrows ${direction}`)
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = position + "px";
        this.domElm.style.bottom = this.positionY + "px";
        
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }

    moveUp() {
        this.positionY += 2;
        this.domElm.style.bottom = this.positionY + "px"; 
    }
}

const staticArrows = [];
const leftArrow = new LeftStaticArrow();
const downArrow = new DownStaticArrow();
const upArrow = new UpStaticArrow();
const rightArrow = new RightStaticArrow();

staticArrows.push(leftArrow, downArrow, upArrow, rightArrow)

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
}, 800);

const game = setInterval(() => {
    randomArrows.forEach((arrowElm) => {
        arrowElm.moveUp();

        const classElm = arrowElm.domElm.className

        if (arrowElm.positionY > 410 && arrowElm.positionY < 430) {
            if (classElm.includes('left')) {
                document.addEventListener("keydown", (key) => {
                    if (key.code === 'ArrowLeft') {
                        arrowElm.domElm.style.display = 'none';
                    }
                });
            } else if (classElm.includes('down')) {
                document.addEventListener("keydown", (key) => {
                    if (key.code === 'ArrowDown') {
                        arrowElm.domElm.style.display = 'none';
                    }
                });
            } else if (classElm.includes('up')) {
                document.addEventListener("keydown", (key) => {
                    if (key.code === 'ArrowUp') {
                        arrowElm.domElm.style.display = 'none';
                    }
                });
            } else if (classElm.includes('right')) {
                document.addEventListener("keydown", (key) => {
                    if (key.code === 'ArrowRight') {
                        arrowElm.domElm.style.display = 'none';
                    }
                });
            }
        }
    })
}, 15)

setTimeout(() => {
    clearInterval(createArrows);
}, 30000);

setTimeout(() => {
    location.href = "score.html";
    clearInterval(game);
    randomArrows = [];
}, 34000);
