var Furry = function(){
  this.x = 0;
  this.y = 0;
  this.direction = "right";
}

var Coin = function(){
  this.x = Math.floor( Math.random() * ( 10 - 1 ) + 1 );
  this.y = Math.floor( Math.random() * ( 10 - 1 ) + 1 );
}

var Game = function(){
  this.board = document.querySelectorAll("#board > div");
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;

  this.index = function(x, y) {
    return x + (y * 10);
  };

  this.showFurry = function(){
     this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
  };

  this.moveFurry = function(){

    if(this.furry.direction === "right") {
        this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left"){
      this.furry.x = self.furry.x - 1;
    } else if (this.furry.direction === "top") {
        this.furry.y = this.furry.y + 1;
    } else if (this.furry.direction === "bottom") {
        this.furry.y = this.furry.y - 1;
    }
  };

  this.showCoin  = function(){
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  };

  this.startGame = function() {
    this.idSetInterval = setInterval(function () {
      moveFurry();
    }, 250);
  };



};


var myGame = new Game();
myGame.showFurry();
myGame.showCoin();
myGame.startGame();
myGame.moveFurry();
