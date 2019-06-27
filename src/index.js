const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js');
const GameView = require("./game_view.js");

window.addEventListener('DOMContentLoaded', (event) => {
	let canvas = document.getElementById("game-canvas");
	let ctx = canvas.getContext("2d");
	let khar = new Game();
	new GameView(khar, ctx).start();
});