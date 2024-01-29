class leftStaticArrow {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.positionX = 0;
        this.positionY = 420;
        this.domElm = null;

        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element
        this.domElm = document.createElement("img");

        // step2: add content or modify
        this.domElm.setAttribute("src", "./images/arrows/grey-left.png");
        this.domElm.setAttribute("class", "static-arrows")
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = this.positionX + "px";
        this.domElm.style.bottom = this.positionY + "px";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
}

class downStaticArrow {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.positionX = this.width;
        this.positionY = 420;
        this.domElm = null;

        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element
        this.domElm = document.createElement("img");

        // step2: add content or modify
        this.domElm.setAttribute("src", "./images/arrows/grey-down.png");
        this.domElm.setAttribute("class", "static-arrows")
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = this.positionX + "px";
        this.domElm.style.bottom = this.positionY + "px";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
}

class upStaticArrow {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.positionX = this.width * 2;
        this.positionY = 420;
        this.domElm = null;

        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element
        this.domElm = document.createElement("img");

        // step2: add content or modify
        this.domElm.setAttribute("src", "./images/arrows/grey-up.png");
        this.domElm.setAttribute("class", "static-arrows")
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = this.positionX + "px";
        this.domElm.style.bottom = this.positionY + "px";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
}

class rightStaticArrow {
    constructor() {
        this.width = 90;
        this.height = 90;
        this.positionX = this.width * 3;
        this.positionY = 420;
        this.domElm = null;

        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element
        this.domElm = document.createElement("img");

        // step2: add content or modify
        this.domElm.setAttribute("src", "./images/arrows/grey-right.png");
        this.domElm.setAttribute("class", "static-arrows")
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = this.positionX + "px";
        this.domElm.style.bottom = this.positionY + "px";
        
        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }
}


const staticArrows = [];
const leftArrow = new leftStaticArrow();
const downArrow = new downStaticArrow();
const upArrow = new upStaticArrow();
const rightArrow = new rightStaticArrow();

staticArrows.push(leftArrow, downArrow, upArrow, rightArrow)
console.log(staticArrows)