import status from "statuses";
import { createElement } from "./function";
import { Pet } from "./pet";

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

  checkCleanliness(info) {
    let status = info;
    if (status <= 4) {
      this.dirty = true;
    }
  }

  changeCleanliness() {
    const element = document.querySelector("#bgInfo");
    if (this.dirty) {
      element.classList.add("bgDirty");
    } else {
      element.classList.remove("bgDirty");
    }
  }

  createBackground() {
    createElement(null, "div", "bgInfo", "bgStyle");
  }

  //updateBackground() {}
}

export { Background };
