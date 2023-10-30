import { createElement } from "./function";
import { Background } from "./background";
import { Food } from "./food";
import { test } from "media-typer";

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.clean = 10;
    this.foodLikes = this.randomPref();
    this.foodDislikes = this.randomPref();
    this.renderPet();
  }

  getName() {
    return this.name;
  }

  GetCleanStatus() {
    return this.clean;
  }

  logPetInfo() {
    console.log(this.name, this.hunger, this.sleep, this.clean);
  }

  checkLikes(num, pref) {
    if (this.foodLikes != undefined && this.foodLikes == pref) {
    }
  }

  randomPref() {
    const types = ["sweet", "salty", "bitter"];
    let num = Math.random();
    let pref;
    let check = false;

    if (num < 0.33) {
      pref = types[0];
    } else if (num > 0.33 && num < 0.66) {
      pref = types[1];
    } else {
      pref = types[2];
    }

    //if (this.foodlikes != undefined && this.foodlikes == pref) {
    //pref =
    //}

    return pref;
  }

  needsDecay(test) {
    this.hunger -= 0.5;
    this.clean -= 0.5;
    this.sleep -= 0.5;
    //this.logPetInfo();
    if (this.sleep == 0 || this.clean == 0 || this.hunger == 0) {
      clearInterval(test);
      console.log(
        `You failed to take care of ${this.getName()}, so it was taken away!`
      );
    } else if (
      (this.sleep <= 6 || this.clean <= 6 || this.hunger <= 6) &&
      (this.sleep > 3 || this.clean > 3 || this.hunger > 3)
    ) {
      console.log("ok");
      this.updatePet(0);
    } else if (this.sleep <= 3 || this.clean <= 3 || this.hunger <= 3) {
      console.log("needBad");
      this.updatePet(1);
    } else {
      console.log("needGood");
      this.updatePet(2);
    }
  }

  feeding(food) {
    console.log(this.hunger);
    if (food == this.foodLikes) {
      this.hunger += 5;
    } else if (food == this.foodDislikes) {
      this.hunger += 1;
    } else {
      this.hunger += 3;
    }
    console.log(food, this.foodLikes, this.foodDislikes, this.hunger);
  }

  sleeping() {
    while (this.sleep < 10) {
      this.sleep += 1;
    }
    this.logPetInfo();
  }

  cleaning() {
    this.clean += 5;
    this.logPetInfo();
  }

  renderPet() {
    const pet = createElement(null, "div", "pet", "petStyle");
    pet.classList.add("needGood");
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

    // Buttons

    btnClean.addEventListener("click", () => {
      this.cleaning();
    });

    btnLight.addEventListener("click", () => {
      this.sleeping();
    });

    btnFeed.addEventListener("click", () => {
      const food = new Food();
      console.log(food);
      this.feeding(food);
    });

    btnStop.addEventListener("click", () => {
      this.stop();
    });
  }

  updatePet(need) {
    const needs = ["needOk", "needBad", "needGood"];
    const petElement = document.querySelector("#pet");
    switch (need) {
      case 0:
        petElement.classList.add(needs[0]);
        petElement.classList.remove(needs[1]);
        petElement.classList.remove(needs[2]);
        break;
      case 1:
        petElement.classList.add(needs[1]);
        petElement.classList.remove(needs[0]);
        petElement.classList.remove(needs[2]);
        break;
      case 2:
        petElement.classList.add(needs[2]);
        petElement.classList.remove(needs[0]);
        petElement.classList.remove(needs[1]);
        break;
    }
  }

  stop() {
    this.sleep = 0.5;
    this.hunger = 0.5;
    this.clean = 0.5;
    console.log(`You gave ${this.getName()} up...`);
    return;
  }
}

export { Pet };
