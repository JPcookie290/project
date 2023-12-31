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
  let petName = createStartPage();
  const pet1 = new Pet();
  let test = setInterval(function () {
    pet1.needsAdjust(test);
  }, 3000);
}

init();
