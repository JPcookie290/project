import { createElement } from "./function";

/* -------------- Food Item Class -------------- */
class Food {
  constructor() {
    this.type = this.randomType();
    //this.renderFood();
  }

  getType() {
    return this.type;
  }

  /* -------------- Random Food Type -------------- */

  randomType() {
    let num = Math.random();
    if (num < 0.33) {
      //console.log(num);
      return "sweet";
    } else if (num > 0.33 && num < 0.66) {
      //console.log(num);
      return "salty";
    } else {
      //console.log(num);
      return "spicy";
    }
  }

  /*renderFood() {
    createElement(null, "button", this.type);
  }*/
}

export { Food };
