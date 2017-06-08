var Furry = function(){
  this.x = 0;
  this.y = 0;
  this.direction = "bottom";
}

var Coin = function(){
  this.x = Math.floor( Math.random() * 10 );
  this.y = Math.floor( Math.random() * 10 );
}

var Game = function(){
  this.board = document.querySelectorAll("#board div");
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;

  this.index = function(x, y){
    return x + (y * 10);
  };

  this.showCoin = function(){
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  };

  this.cleanUp = function(){
    document.querySelector("#score strong").innerText = this.score;
    var coinLeft = document.querySelector("#board div.coin");
    if(coinLeft !== null){
      coinLeft.classList.remove('coin');
    }
  };

  this.showFurry = function(){
     this.board[ this.index(this.furry.x, this.furry.y) ].classList.add("furry");
  };

  this.hideVisibleFurry = function(){
    var classFurry = document.querySelector(".furry");
    classFurry.classList.remove('furry');
  };

  this.moveFurry = function(){

    this.hideVisibleFurry();

    if(this.furry.direction === "right") {
        this.furry.x += 1;
    } else if (this.furry.direction === "left"){
      this.furry.x -= 1;
    } else if (this.furry.direction === "top"){
        this.furry.y -= 1;
    } else if (this.furry.direction === "bottom"){
        this.furry.y += 1;
    };

    if(!this.gameOver()){
      this.checkCoinCollision();
      this.showFurry();
    }
  };

  this.startGame = function(){

    this.showFurry();
    this.showCoin();

    var self = this;
    this.idSetInterval = setInterval( function(){
      self.moveFurry();
    }, 250);
  };

  this.turnFurry = function(event){

    switch (event.which){
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

  this.checkCoinCollision = function(){

    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y){

        this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('coin');

        this.score += 1;
        document.querySelector("#score strong").innerText = this.score;

        this.coin = new Coin();

        this.showCoin();
    };
  };

  this.gameOver = function(){

    if ( (this.furry.x < 0 || this.furry.x > 9) || (this.furry.y < 0 || this.furry.y > 9) ){

      clearInterval(this.idSetInterval);
      //this.hideVisibleFurry();

      document.getElementById("board").classList.add("invisible");
      var gameOverScores = document.getElementById("over");
      gameOverScores.classList.remove("invisible");
      return true;
    }else{
      return false;
    };
  };
};

var myGame = new Game();
myGame.startGame();

document.addEventListener("keydown", function(event){
    myGame.turnFurry(event);
});

// event dla buttona play-again

var buttonAgain = document.getElementById("play-again");
buttonAgain.addEventListener("click", function(event){

  var gameOverScores = document.getElementById("over");
  gameOverScores.classList.add("invisible");
  document.getElementById("board").classList.remove("invisible");

  var nextGame = new Game();
  nextGame.cleanUp();
  // nextGame.showFurry();
  // nextGame.showCoin();
  nextGame.startGame();

  document.addEventListener("keydown", function(event){
      nextGame.turnFurry(event);
  });

});

// var buttonStart = document.getElementsByClassName("start")
// var myGame = new Game();
// function playGame(event){
// }
