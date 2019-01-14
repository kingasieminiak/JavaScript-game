class Coin {
  constructor() {
    this.x = Math.floor( Math.random() * 10 );
    this.y = Math.floor( Math.random() * 10 );

    this.element = document.createElement('div');
    this.element.classList.add('jsCoin');
  }

  getNewCoords() {
    this.x = Math.floor( Math.random() * 10 );
    this.y = Math.floor( Math.random() * 10 );
  }
}

export default Coin;
