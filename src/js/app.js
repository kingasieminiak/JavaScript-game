import Game from './game';
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

  attachKeyEvent() {
    document.addEventListener("keydown", (event) => {
      this.game.turnFurry(event);

      if(event.which === 32) {
        this.game.togglePauseGame();
      }
    });
  }

  startGame() {
    this.welcomeScreen.classList.add("invisible");
    this.scoreBoard.classList.remove("invisible");
    this.game.board.classList.remove("invisible");

    this.game.startGame();
    this.attachKeyEvent();
  }

  restartGame() {
    this.game.gameOverBoard.classList.add("invisible");
    this.game.board.classList.remove("invisible");

    this.game = new Game();
    this.game.cleanUp();
    this.game.startGame();
    this.attachKeyEvent();
  }

  switchInstruction() {
    this.instruction.classList.toggle('instruction--active');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
