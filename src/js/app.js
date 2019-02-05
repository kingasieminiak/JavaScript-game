import Game from './game';
import '../styles/style.scss';
import '../images/furry.svg';
import '../images/coin.svg';

class App {
  constructor() {
    this.game = new Game();

    this.instruction = document.querySelector(".jsInstruction");
    this.startButton = document.querySelector(".jsStartButton");
    this.restartButton = document.querySelector(".jsRestartButton");
    this.welcomeScreen = document.querySelector(".jsWelcomeScreen");
    this.scoreBoard = document.querySelector(".jsScoreBoard");
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.instruction.addEventListener('click', () => this.switchInstruction());
    this.startButton.addEventListener("click", () => this.startGame());
    this.restartButton.addEventListener("click", () => this.restartGame());
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

  hidePreloading() {
    setTimeout(() => {
      document.querySelector(".pagePreload").style.zIndex = '-1';
      document.querySelector(".game").style.transform = 'translateY(0)';
      this.welcomeScreen.style.transform = 'translateY(0)';
      document.body.removeAttribute('style');
    }, 3000)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
  app.hidePreloading();
});
