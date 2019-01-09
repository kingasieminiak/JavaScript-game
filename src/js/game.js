import Furry from './furry';
import Coin from './coin';

class Game {
  constructor() {
    this.board = document.querySelector(".jsBoard");
    this.fields = this.board.querySelectorAll(".jsField");
    this.scoreCounter = document.querySelector(".jsScoreCounter");
    this.gameOverBoard = document.querySelector(".jsGameOver");

    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.intervalId = null;
    this.isGamePaused = false;
  }

  startGame() {
    this.showFurry();
    this.showCoin();

    this.intervalId = setInterval(() => this.moveFurry(), 250);
  };

  togglePauseGame() {
    this.isGamePaused = !this.isGamePaused;
    this.isGamePaused ? clearInterval(this.intervalId) : this.intervalId = setInterval(() => this.moveFurry(), 250)
  }

  activeIndex(x, y) {
    return x + (y * 10);
  };

  showCoin() {
    this.fields[this.activeIndex(this.coin.x, this.coin.y)].classList.add('board__field--jsCoin');
  };

  showFurry() {
    this.fields[this.activeIndex(this.furry.x, this.furry.y)].classList.add("furry");
 };

  cleanUp() {
    this.scoreCounter.innerText = this.score;
    const coinLeft = document.querySelector(".board__field--jsCoin");

    if(coinLeft !== null) {
      coinLeft.classList.remove('board__field--jsCoin');
    }
  };

  hideVisibleFurry() {
    const classFurry = document.querySelector(".furry");
    classFurry.classList.remove('furry');
  };

  moveFurry() {
    if(this.furry.direction === "right") {
      this.furry.x += 1;
    } else if (this.furry.direction === "left") {
      this.furry.x -= 1;
    } else if (this.furry.direction === "top") {
      this.furry.y -= 1;
    } else if (this.furry.direction === "bottom") {
      this.furry.y += 1;
    };

    if(!this.gameOver()) {
      this.hideVisibleFurry();
      this.checkCoinCollision();
      this.showFurry();
    }
  };

  turnFurry(event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "top";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "bottom";
        break;
    };
  };

  checkCoinCollision() {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        this.fields[this.activeIndex(this.coin.x, this.coin.y)].classList.remove('board__field--jsCoin');

        this.score += 1;
        this.scoreCounter.innerText = this.score;
        this.coin = new Coin();

        this.showCoin();
    };
  };

  gameOver() {
    if ((this.furry.x < 0 || this.furry.x > 9) || (this.furry.y < 0 || this.furry.y > 9)) {

      clearInterval(this.intervalId);
      this.hideVisibleFurry();

      this.board.classList.add("invisible");
      this.gameOverBoard.classList.remove("invisible");

      return true;
    } else {
      return false;
    }
  };
}

export default Game;
