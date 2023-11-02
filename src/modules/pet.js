import {
  createElement,
  createNeedsControl,
  updateNeedsControl,
} from "./function";
import { Background } from "./background";
import { Food } from "./food";
import { test } from "media-typer";

/*------------------- Pet Class ------------------- */

class Pet {
  /* -------------- Constructor -------------- */

  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.clean = 10;
    this.like = 0;
    this.foodLikes = this.randomPref();
    this.foodDislikes = this.randomPref();
    this.light = true;
    this.petBackGround = new Background();
    this.createPet();
  }

  /* -------------- getName Function -------------- */

  getName() {
    return this.name;
  }

  /* -------------- logPetInfo Function -------------- */
  /* ------------------ for Testing ------------------ */

  logPetInfo() {
    console.log(
      this.name,
      this.hunger,
      this.sleep,
      this.clean,
      this.like,
      this.foodLikes,
      this.foodDislikes
    );
  }

  /* -------------- logPetInfo Function -------------- */
  /* ---- stopping same foodLikes and foodDislikes --- */

  checkLikes(pref) {
    if (this.foodLikes != undefined && this.foodLikes == pref) {
      console.log("checklikes");
      this.randomPref();
    }
    return pref;
  }

  /* -------------- randomPref Function -------------- */
  /* ------------ creates random preference ---------- */

  randomPref() {
    let num = Math.random();
    let pref;

    if (num < 0.33) {
      pref = "sweet";
    } else if (num > 0.33 && num < 0.66) {
      pref = "salty";
    } else {
      pref = "bitter";
    }
    pref = this.checkLikes(pref);

    return pref;
  }

  /* -------------- needsAdjust Function -------------- */
  /* --- decreases basic needs, adds to like points --- */

  needsAdjust(test) {
    this.hunger -= 0.5;
    this.clean -= 0.5;
    this.sleep -= 0.5;
    //this.logPetInfo();

    if (this.sleep == 0 || this.clean == 0 || this.hunger == 0) {
      clearInterval(test); //stops Interval
      console.log(
        `You failed to take care of ${this.getName()}, so it was taken away!`
      );
    }
    if (this.sleep >= 8 || this.clean >= 8 || this.hunger >= 8) {
      this.like += 0.2;
    }

    updateNeedsControl(this.checkNeeds(this.sleep), "ndEnergy");
    updateNeedsControl(this.checkNeeds(this.clean), "ndHygiene");
    updateNeedsControl(this.checkNeeds(this.hunger), "ndHunger");
  }

  /* -------------- feeding Function -------------- */

  feeding(food) {
    if (food == this.foodLikes) {
      this.hunger += 5;
    } else if (food == this.foodDislikes) {
      this.hunger += 1;
    } else {
      this.hunger += 3;
    }
    this.hunger = this.hunger > 10 ? 10 : this.hunger;
    this.logPetInfo();
  }

  /* -------------- sleeping Function -------------- */

  sleeping() {
    while (this.sleep < 10) {
      this.sleep += 1;
    }
    this.sleep = this.sleep > 10 ? 10 : this.sleep;
    this.logPetInfo();
  }

  /* -------------- cleaning Function -------------- */

  cleaning() {
    this.clean += 3;
    this.clean = this.clean > 10 ? 10 : this.clean;
    this.logPetInfo();
  }

  /* -------------- createPet Function -------------- */
  /* --- creates Pet and uses createEnvironment() --- */

  createPet() {
    const pet = createElement(null, "div", "pet", "petStyle");
    this.createEnvironment();
  }

  /* -------------- createEnvironment Function -------------- */
  /* ----- creates the Environment surrounding the pet ------ */

  createEnvironment() {
    createNeedsControl();
    const btnStop = createElement(null, "button", "stopBtn", null, "Quit");

    const btnFeed = createElement(
      "bgInfo",
      "button",
      "createFood",
      "createFood",
      "Feed"
    );
    const btnLight = createElement(
      "bgInfo",
      "button",
      "lightOnOff",
      "lightOnOff",
      "Light"
    );
    const btnClean = createElement(
      "bgInfo",
      "button",
      "cleanPet",
      "cleanPet",
      "Clean"
    );

    /* ------- Buttons ------- */

    btnClean.addEventListener("click", () => {
      // cleaning button
      this.cleaning();
      this.petBackGround.makeClean(this.clean);
    });

    btnLight.addEventListener("click", () => {
      // light button
      this.sleeping();
      this.petBackGround.changeLight();
    });

    btnFeed.addEventListener("click", () => {
      // feeding button
      const food = new Food();
      console.log(food);
      this.feeding(food);
    });

    btnStop.addEventListener("click", () => {
      // stop button ---> will be reworked
      this.stop(); // not fully functioning
    }); // the way i want it to
  }

  /* -------------- checksNeeds Function -------------- */

  checkNeeds(type) {
    let status;
    if (type <= 6 && type > 3) {
      status = 0;
    } else if (type < 3) {
      status = 1;
    } else {
      status = 2;
    }
    return status;
  }
  /* -------------- updatePet Function -------------- */

  updatePet(type) {
    const petElement = document.querySelector("#pet");
  }

  /* -------------- stop Function -------------- */
  /* ----------- emergency solution ------------ */

  stop() {
    this.sleep = 0.5;
    this.hunger = 0.5;
    this.clean = 0.5;
    console.log(`You gave ${this.getName()} up...`);
    return;
  }
}

export { Pet };
