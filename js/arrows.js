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