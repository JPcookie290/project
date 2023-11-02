"use strict";

import "./styleV2.css";
import { Pet } from "./modules/pet";
import { Background } from "./modules/background";
import { Food } from "./modules/food";
import {
  createElement,
  createNeedsControl,
  updateNeedsControl,
} from "./modules/function";
import { createStartPage } from "./modules/startPage";

/*------------------- init function ------------------- */

function init() {
  //const pet1 = createStartPage();
  const pet1 = new Pet("Bo");
  let test = setInterval(function () {
    pet1.needsAdjust(test);
  }, 3000);
}

init();
