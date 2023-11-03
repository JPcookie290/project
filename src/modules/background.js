import status from "statuses";
import {
  createElement,
  createNeedsControl,
  updateNeedsControl,
} from "./function";
import { Pet } from "./pet";

/* -------------- Background Class -------------- */

class Background {
  constructor() {
    this.light = true;
    this.createBackground();
  }

  /* -------------- Changes Light Status -------------- */

  changeLight() {
    const element = document.querySelector(".overlay");
    console.log(this.light);
    if (this.light) {
      this.light = false;
      element.classList.add("darken");
    } else {
      this.light = true;
      element.classList.remove("darken");
    }
    console.log(this.light);
  }

  /* -------------- Makes Environment "dirty" -------------- */

  makeDirty(state) {
    const element = document.querySelector("#bgInfo");
    if (state <= 4 && !element.classList.contains("bgDirty")) {
      console.log("BG is dirty");
      element.classList.add("bgDirty");
    }
  }

  /* -------------- Makes Environment "clean" -------------- */

  makeClean(state) {
    const element = document.querySelector("#bgInfo");
    if (state > 4 && element.classList.contains("bgDirty")) {
      console.log("BG is clean");
      element.classList.remove("bgDirty");
    }
  }

  /* -------------- Creates the Background -------------- */

  createBackground() {
    createElement("browserPet", "div", "bgInfo", "bgStyle");
  }
}

export { Background };
