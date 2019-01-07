var Game = require("./game.js");

// rozpoczęcie gry

var buttonStart = document.getElementById("start")
buttonStart.addEventListener("click", function(event){

  document.querySelector(".welcomeScreen").classList.add("invisible");
  document.getElementById("board").classList.remove("invisible");
  document.getElementById("score").classList.remove("invisible");
  document.querySelector(".instruction").classList.remove("invisible");

  var myGame = new Game();
  myGame.startGame();

  document.addEventListener("keydown", function(event){
      myGame.turnFurry(event);
  });
});

// event dla buttona play-again

var buttonAgain = document.getElementById("play-again");
buttonAgain.addEventListener("click", function(event){

  var gameOverScores = document.getElementById("over");
  gameOverScores.classList.add("invisible");
  document.getElementById("board").classList.remove("invisible");

  var nextGame = new Game();
  nextGame.cleanUp();
  nextGame.startGame();

  document.addEventListener("keydown", function(event){
      nextGame.turnFurry(event);
  });

});

