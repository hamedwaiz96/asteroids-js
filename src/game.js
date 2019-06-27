const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');

function Game(){
	this.asteroids = [];
	this.addAsteroids();
	let khar = new Ship({game: this, pos: this.randomPosition()});
	this.ship = khar;
	this.bullets = [];
}

Game.DIM_X = 400;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function addAsteroids(){
		for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
			let khar = new Asteroid({pos: this.randomPosition(), game: this});
			this.asteroids.push(khar);
		}
	}
Game.prototype.randomPosition = function randomPosition(){
		let x = Math.floor((Math.random() * Game.DIM_X) + 1);
		let y = Math.floor((Math.random() * Game.DIM_Y) + 1);
		return [x, y];
	}
const img = new Image();
img.src = '../images/hubbledeepfield.jpg';
Game.prototype.draw = function draw(ctx){
		ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
		game1.ctx.drawImage(img, 0, 0);
		for(let i = 0; i <= this.allObjects().length - 1; i++){
			this.allObjects()[i].draw(ctx);
		}
	}
Game.prototype.moveObjects = function moveObjects(delta){
		for(let i = 0; i <= this.allObjects().length - 1; i++){
			this.allObjects()[i].move(delta);
		}
	}

Game.prototype.splitter = function splitter(dim, max){
	if(dim < 0){
		return max - (dim % max);
	}
	else if(dim > max){
		return dim % max;
	}
	else {
		return dim;
	}
}

Game.prototype.wrap = function wrap(pos){
		const wrap_x = this.splitter(pos[0], Game.DIM_X);
		const wrap_y = this.splitter(pos[1], Game.DIM_X);
		return [wrap_x, wrap_y];
	}
Game.prototype.checkCollisions = function checkCollisions(){
		// for(let i = 0; i <= this.asteroids.length - 1; i++){
		// 	for(let k = 0; k <= this.asteroids.length - 1; k++){
		// 		if(this.asteroids[i].isCollidedWith(this.asteroids[k]) && i != k){
		// 			this.asteroids[i].collideWith(this.asteroids[k]);
		// 		}
		// 	}
		// }
		for(let i = 0; i <= this.allObjects().length - 1; i++){
			for(let k = 0; k <= this.allObjects().length - 1; k++){
				if(this.allObjects()[i].isCollidedWith(this.allObjects()[k]) && i != k){
					this.allObjects()[i].collideWith(this.allObjects()[k]);
				}
			}
		}
	}
Game.prototype.step = function step(){
	this.moveObjects();
	this.checkCollisions();
}

Game.prototype.remove = function remove(obj){
	if(obj instanceof Asteroid){
		for(let i = 0; i <= this.asteroids.length - 1; i++){
			if(obj === this.asteroids[i]){
				this.asteroids.splice(i, 1);
			}
		}
	}
	else if(obj instanceof Bullet){
		for(let i = 0; i <= this.bullets.length - 1; i++){
			if(obj === this.bullets[i]){
				this.bullets.splice(i, 1);
			}
		}
	};
}

Game.prototype.allObjects = function allObjects(){
	let ast_copy = this.asteroids.slice();
	let all = ast_copy.concat([this.ship]).concat(this.bullets);
	return all;
}

Game.prototype.add = function add(obj){
	if(obj instanceof Asteroid){
		this.asteroids.push(obj);
	}
	else if(obj instanceof Bullet){
		this.bullets.push(obj);
	}
}

Game.prototype.isOutOfBounds = function isOutOfBounds(pos){
	if((pos[0] > Game.DIM_X || pos[0] < 0) || (pos[1] > Game.DIM_Y || pos[1] < 0)){
		return true;
	}
	return false;
}

module.exports = Game;