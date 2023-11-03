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

  constructor() {
    this.name = "Bo";
    this.hunger = 10;
    this.sleep = 10;
    this.clean = 10;
    this.like = 0;
    this.light = true;
    this.foodLikes = this.randomPref();
    this.foodDislikes = this.randomPref();
    this.petBackGround = new Background();
    this.createPet();
  }

  /* -------------- getName & setName Function -------------- */

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = this.name;
    return this.name;
  }

  /* -------------- getSleep & setSleep Functions -------------- */

  getSleep() {
    return this.sleep;
  }

  setSleep(num) {
    this.sleep = num;
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
      document.querySelector(".overlay").classList.add("darken");
      console.log(
        `You failed to take care of ${this.getName()}, so it was taken away!`
      );
    }
    if (this.sleep >= 8 || this.clean >= 8 || this.hunger >= 8) {
      this.like += 0.2;
    }

    this.updateNeeds();
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
  /* ------------ interval not stopping ------------ */

  sleeping(lightOff) {
    console.log(this.sleep);
    this.light = false;
    let currentSleep = this.getSleep();
    currentSleep += 1;
    if (currentSleep >= 10) {
      this.light = true;
      this.sleep = 10;
      console.log("true false sleep test", currentSleep);
      clearInterval(lightOff);
    }

    this.logPetInfo();
  }
  /* -------------- petState Function -------------- */

  petState() {
    console.log("test1");
    const pet = document.getElementById("pet");
    if (!this.light) {
      pet.classList.add("petAsleep");
      pet.classList.remove("petStyle");
      console.log("test2");
    } else {
      pet.classList.remove("petAsleep");
      pet.classList.add("petStyle");
      console.log("test3");
    }
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
    this.createEnvironment();
    const pet = createElement("bgInfo", "div", "pet", "petStyle");
  }

  /* -------------- createEnvironment Function -------------- */
  /* ----- creates the Environment surrounding the pet ------ */

  createEnvironment() {
    createElement("browserPet", "div", "needButtons", "needs");
    const btnFeed = createElement(
      "needButtons",
      "button",
      "createFood",
      "createFood"
    );

    const btnLight = createElement(
      "needButtons",
      "button",
      "lightOnOff",
      "lightOnOff"
    );

    const btnClean = createElement(
      "needButtons",
      "button",
      "cleanPet",
      "cleanPet"
    );

    createNeedsControl();

    const btnStop = createElement(null, "button", "stopBtn", null, "Quit");

    /* ------- Buttons ------- */

    btnClean.addEventListener("click", () => {
      // cleaning button
      this.cleaning();
      this.petBackGround.makeClean(this.clean);
    });

    btnLight.addEventListener("click", () => {
      // light button
      let lightOff = setInterval(this.sleeping(), 3000, lightOff);
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

  updateNeeds() {
    updateNeedsControl(this.hunger, "ndHunger");
    updateNeedsControl(this.sleep, "ndEnergy");
    updateNeedsControl(this.clean, "ndHygiene");
    this.petBackGround.makeDirty(this.clean);
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
    const petDisplay = document.querySelector(".content");
    petDisplay.innerHTML = "";
    const restBtn = createElement(
      null,
      "button",
      "restBtn",
      "restBtn",
      "Restart?"
    );
    restBtn.addEventListener("click", this.restart);
  }

  restart() {
    location.reload();
  }
}

export { Pet };
