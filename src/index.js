"use strict";

import "./style.css";
import { Pet } from "./modules/pet";
import { Background } from "./modules/background";
import { Food } from "./modules/food";

/*------------------- init function ------------------- */

function init() {
  const pet1 = new Pet("Bo");
  console.log(pet1);
  let test = setInterval(function () {
    pet1.needsDecay(test);
  }, 30000);

  const foodTest = new Food();
  pet1.feeding(foodTest.getType());

  const bg1 = new Background();
}

init();
