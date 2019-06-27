const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require('./ship.js');
const Game = require('./game.js');

function GameView(game, ctx) {
	this.game = game;
	this.ctx = ctx;
	this.lastTime = 0;
}

GameView.prototype.start = function start(){
	this.bindKeyHandlers();
	this.lastTime = 0;
	requestAnimationFrame(this.animate.bind(this));
}

GameView.prototype.bindKeyHandlers = function bindKeyHandlers(){
	game1 = this;
	key('up', function(event, handler){
		game1.game.ship.power([1, 1]);
	});
	key('space', function(event, handler){
		game1.game.ship.fireBullet();
	});
}

GameView.prototype.animate = function animate(currentTime) {
	var delta = currentTime - this.lastTime;
	this.game.step(delta);
	this.game.draw(this.ctx);
	this.lastTime = currentTime
	requestAnimationFrame(this.animate.bind(this));;
}

module.exports = GameView;