export default class Food {
  constructor() {
    this.type = this.randomType();
    //renderFood()
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

  //renderFood() {  }
}

export { Food };
