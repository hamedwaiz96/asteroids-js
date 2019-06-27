const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require('./ship.js');
const Game = require('./game.js');

function GameView(game, ctx) {
	this.game = game;
	this.ctx = ctx;
}

GameView.prototype.start = function start(){
	let game1 = this;
	this.bindKeyHandlers();
	window.setInterval(function(){
		game1.game.step();
		game1.game.draw(game1.ctx);
	}, 20);
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

module.exports = GameView;