import Furry from './furry';
import Coin from './coin';
class Game {
  constructor() {
    this.board = document.querySelector(".jsBoard");
    this.scoreCounter = document.querySelector(".jsScoreCounter");
    this.gameOverBoard = document.querySelector(".jsGameOver");

    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.intervalId = null;
    this.isGamePaused = false;

    this.keyDownEvents = this.onKeyDown.bind(this);
  }

  startGame() {
    this.showFurry();
    this.showCoin();

    document.addEventListener("keydown", this.keyDownEvents);
    this.intervalId = setInterval(() => this.moveFurry(), 250);
  };

  togglePauseGame() {
    this.isGamePaused = !this.isGamePaused;
    this.isGamePaused ? clearInterval(this.intervalId) : this.intervalId = setInterval(() => this.moveFurry(), 250)
  }

  isGameOver() {
    const { furry } = this;
    return (furry.x < 0 || furry.x > 9) || (furry.y < 0 || furry.y > 9)
  }

  caltulateTranslateXY(x, y) {
    return `translate(${x}00%, ${y}00%)`;
  }

  showCoin() {
    this.coin.element.style.transform = this.caltulateTranslateXY(this.coin.x, this.coin.y);
    this.board.appendChild(this.furry.element);
  };

  showFurry() {
    this.furry.element.style.transform = this.caltulateTranslateXY(this.furry.x, this.furry.y);
    this.board.appendChild(this.coin.element);
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

    this.furry.element.style.transform = this.caltulateTranslateXY(this.furry.x, this.furry.y);
    this.isGameOver() ? this.gameOver() : this.checkCoinCollision();
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
        this.score += 1;
        this.scoreCounter.innerText = this.score;

        this.coin.getNewCoords();
        this.showCoin();
    };
  };

  cleanUp() {
    clearInterval(this.intervalId);
    document.removeEventListener("keydown", this.keyDownEvents);

    this.board.removeChild(this.coin.element);
    this.board.removeChild(this.furry.element);
  };

  gameOver() {
    this.cleanUp();

    this.board.classList.add("invisible");
    this.gameOverBoard.classList.remove("invisible");
  };

  onKeyDown(event) {
    this.turnFurry(event);

    if(event.which === 32) {
      this.togglePauseGame();
    }
  }
}

export default Game;
