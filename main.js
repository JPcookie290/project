/*------------------- Pet Object ------------------- */

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.clean = 10;
    this.foodPreference = this.randomPref();
  }

  getName() {
    return this.name;
  }

  logPetInfo() {
    console.log(
      this.name,
      this.foodPreference,
      this.hunger,
      this.sleep,
      this.clean
    );
  }

  randomPref() {
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
    }
  }

  feeding(food) {
    console.log(this.hunger);
    if (food == this.foodPreference) {
      this.hunger += 5;
    } else {
      this.hunger += 3;
    }
    console.log(food, this.foodPreference, this.hunger);
  }

  sleeping() {
    this.sleep += 1;
  }

  cleaning() {
    this.clean = 10;
  }

  //renderPet() {}

  //updatePet() {}

  //stop() {}
}

/*------------------- Background Object ------------------- */

class Background {
  constructor() {
    this.dirty = false;
    this.light = true;
    //updateBackground();
  }

  //renderBackground() {}

  //updateBackground() {}
}

/*------------------- food Object ------------------- */

class Food {
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

/*------------------- init function ------------------- */

function init() {
  const pet1 = new Pet("Bo");
  let test = setInterval(function () {
    pet1.needsDecay(test);
  }, 30000);

  const foodTest = new Food();
  pet1.feeding(foodTest.getType());
}

init();
