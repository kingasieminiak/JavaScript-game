import Game from './game';
import '../styles/style.scss';
import '../images/furry.svg';
import '../images/coin.svg';

class App {
  constructor() {
    this.game = new Game();

    this.instruction = document.querySelector(".jsInstruction");

    this.startButton = document.getElementById("start");
    this.restartButton = document.getElementById("play-again");
    this.welcomeScreen = document.querySelector(".welcomeScreen");
    this.scoreBoard = document.getElementById("score");
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.instruction.addEventListener('click', () => this.switchInstruction());

    this.startButton.addEventListener("click", (event) => this.startGame());
    this.restartButton.addEventListener("click", (event) => this.restartGame())
  }

  startGame() {
    this.welcomeScreen.classList.add("invisible");
    this.scoreBoard.classList.remove("invisible");
    this.game.board.classList.remove("invisible");

    this.game.startGame();
  }

  restartGame() {
    this.game.gameOverBoard.classList.add("invisible");
    this.game.board.classList.remove("invisible");

    this.game = new Game();
    this.game.startGame();
  }

  switchInstruction() {
    this.instruction.classList.toggle('instruction--active');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
