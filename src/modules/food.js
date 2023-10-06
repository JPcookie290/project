import { createElement } from "./function";

class Food {
  constructor() {
    this.type = this.randomType();
    this.renderFood();
  }

  getType() {
    return this.type;
  }

  randomType() {
    let num = Math.random();
    let test;
    if (num < 0.33) {
      console.log(num);
      test = "sweet";
      return test;
    } else if (num > 0.33 && num < 0.66) {
      console.log(num);
      test = "salty";
      return test;
    } else {
      console.log(num);
      test = "bitter";
      return test;
    }
  }

  renderFood() {
    createElement(null, "div", "foodChoice");
    createElement("foodChoice", "button", "salty", "hidden");
    createElement("foodChoice", "button", "bitter", "hidden");
    createElement("foodChoice", "button", "salty", "hidden");
  }
}

export { Food };
