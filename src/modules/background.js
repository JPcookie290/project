export default class Background {
  constructor() {
    this.dirty = false;
    this.light = true;
    //updateBackground();
  }

  changeLight() {
    console.log(this.light);
    if (this.light) {
      this.light = false;
    } else {
      this.light = true;
    }
    console.log(this.light);
  }

  //renderBackground() {}

  //updateBackground() {}
}

export { Background };
