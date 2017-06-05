/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);