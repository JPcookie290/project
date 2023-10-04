class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleep = 10;
    this.clean = 10;
    this.foodlikes = this.randomPref();
    this.fooddislikes = this.randomPref();
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

  checkLikes(num, pref) {
    if (this.foodlikes != undefined && this.foodlikes == pref) {
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
    }
  }

  feeding(food) {
    console.log(this.hunger);
    if (food == this.foodlikes) {
      this.hunger += 5;
    } else if (food == this.fooddislikes) {
      this.hunger += 1;
    } else {
      this.hunger += 3;
    }
    console.log(food, this.foodlikes, this.fooddislikes, this.hunger);
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

export { Pet };
