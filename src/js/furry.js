class Furry {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "bottom";

    this.element = document.createElement('div');
    this.element.classList.add('jsFurry');
  }
}

export default Furry;
