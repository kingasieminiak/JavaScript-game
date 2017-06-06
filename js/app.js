var Furry = function(){
  this.x = 0;
  this.y = 0;
  this.direction = "right";
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

  this.showFurry = function(){
     this.board[ this.index(this.furry.x, this.furry.y) ].classList.add("furry");
  };

  this.hideVisibleFurry = function(){
    var classFurry = document.querySelector(".furry");
    classFurry.classList.remove('furry');
  };
  // od tego momentu jest problem z Furrim
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

    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();
  };
  // problem z zapisem w tej funkcji
  this.startGame = function(){

    var self = this;
    self.idSetInterval = setInterval( function(){
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
      this.hideVisibleFurry();

      var gameOverScores = document.getElementById("over");
      gameOverScores.classList.remove("invisible");
    };
  };
};


var myGame = new Game();
myGame.showFurry();
myGame.showCoin();
myGame.startGame();

document.addEventListener("keydown", function(event){
    myGame.turnFurry(event);
});
