import { createElement } from "./function";

class Background {
  constructor() {
    this.dirty = false;
    this.light = true;
    this.createBackground();
  }

  changeLight() {
    console.log(this.light);
    if (this.light) {
      this.light = false;
    } else {
      this.light = true;
    }
    console.log(this.light);
  }

  createBackground() {
    createElement(null, "div", "bgInfo", "bgStyle");
    createElement("bgInfo", "button", "createFood", "createFood");
    createElement("bgInfo", "button", "lightOnOff", "lightOnOff");
    createElement("bgInfo", "button", "cleanPet", "cleanPet");
  }

  //updateBackground() {}
}

export { Background };
