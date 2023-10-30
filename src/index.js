"use strict";

import "./styleV2.css";
import { Pet } from "./modules/pet";
import { Background } from "./modules/background";
import { Food } from "./modules/food";
import { createElement } from "./modules/function";

/*------------------- init function ------------------- */

function init() {
  const bg1 = new Background();

  const pet1 = new Pet("Bo");
  //console.log(pet1);
  let test = setInterval(function () {
    pet1.needsDecay(test);
    bg1.changeCleanliness(pet1.GetCleanStatus());
  }, 3000);

  //const foodTest = new Food();
  //pet1.feeding(foodTest.getType());
}

init();
