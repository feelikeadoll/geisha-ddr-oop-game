class Arrow {
    constructor() {
      this.width = 90;
      this.height = 90;
      this.positionX = 0;
      this.positionY = 420;
      this.position = "absolute";
    }
  
    createDomElement(src) {
      this.domElm = document.createElement("img");
      this.domElm.setAttribute("src", src);
      this.domElm.setAttribute("class", "static-arrows");
      this.domElm.style.width = this.width + "px";
      this.domElm.style.height = this.height + "px";
      this.domElm.style.left = this.positionX + "px";
      this.domElm.style.bottom = this.positionY + "px";
      this.domElm.style.position = this.position;
  
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
        this.position = "absolute";
    }

    createDomElement(direction, src, position){
        this.domElm = document.createElement("img");

        this.domElm.setAttribute("src", src);
        this.domElm.setAttribute("class", `moving-arrows ${direction}`)
        this.domElm.style.width = this.width + "px"
        this.domElm.style.height = this.height + "px"
        this.domElm.style.left = position + "px";
        this.domElm.style.bottom = this.positionY + "px";
        this.domElm.style.position = this.position;
        
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElm);
    }

    moveUp() {
        this.positionY += 2;
        this.domElm.style.bottom = this.positionY + "px"; 
    }
}

class Button {
  constructor(margin) {
      this.width = 250;
      this.height = 80;
      this.paddingBottom = 80;
      this.lineHeight = 0;
      this.borderRadius = 80;
      this.marginTop = margin;
  }

  createButtonElement(str, position, location, x = "0", y = "0") {
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
      this.button.style.position = position;
      this.button.style.left = x + "px";
      this.button.style.bottom = y + "px";

      this.button.addEventListener('mouseover', () => {
          this.button.style.backgroundColor = "#8f2b23";
          this.button.style.color = "white";
      });
      
      this.button.addEventListener('mouseout', () => {
          this.button.style.backgroundColor = "white";
          this.button.style.color = "#8f2b23";
      });
      
      const htmlLocation = document.getElementById(location)
      htmlLocation.appendChild(this.button);
  }

  normalClickEvent(direction) {
    this.button.addEventListener('click', () => {
        this.button.style.boxShadow = '0 3px #620f09';
        this.button.style.transform = "translateY(6px)";
        window.location.href = direction;
    })
  }

  submitClickEvent(direction) {
    this.button.addEventListener('click', () => {
        this.button.style.boxShadow = '0 3px #620f09';
        this.button.style.transform = "translateY(6px)";

        const checked = document.querySelector('input[name="levels"]:checked').value;

        localStorage.setItem("difficulty", checked);
        if (checked !== null) {
            window.location.href = direction;
        }
    })
  }
  
}

class Geisha {
  constructor() {
      this.width = 271;
      this.height = 369;
      this.positionX = 433;
      this.positionY = 30;
      this.id = "dancing-geisha";
      this.i = 0;

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

  autoDancingGeisha() {
      this.createDomElement(this.geishaPoses[this.i]);

      setInterval(() => {
          this.i++;
          this.createDomElement(geisha.geishaPoses[this.i]);
          if (i === 5) {
              i = 0;
          }
      }, 1000);

      setInterval(() => {
          this.removeDomElement()
      }, 1000);
  }

  startPose() {
    this.createDomElement(geisha.geishaPoses[0]);
  }

  changePose() {
    this.i++;
    this.createDomElement(geisha.geishaPoses[this.i]);
    this.removeDomElement();
    if (this.i === 5) {
        this.i = 0;
    }
  }
}
