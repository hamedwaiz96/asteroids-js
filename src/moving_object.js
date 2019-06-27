const Util = require("./util.js");

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function draw(ctx) {
	ctx.beginPath();
	ctx.fillStyle = `${this.color}`;
	ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
}

MovingObject.prototype.move = function move(timeDelta) {
	this.pos[0] += this.vel[0] * timeDelta;
	this.pos[1] += this.vel[1] * timeDelta;
	// if((this.pos[0] < 0 || this.pos[0] > 400) || (this.pos[1] < 0 || this.pos[1] > 400)){
	// 	this.pos = this.game.wrap(this.pos);
	// }
	if(this.game.isOutOfBounds(this.pos) && this.isWrappable){
		this.pos = this.game.wrap(this.pos);
	}
	else if(this.game.isOutOfBounds(this.pos) && !(this.isWrappable)){
		this.game.remove(this);
	}
}

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject){
	let dist = ((((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2)) ** (1 / 2));
	let rad_sum = (this.radius + otherObject.radius);
	if(dist < rad_sum){
		return true;
	}
	return false;
}

MovingObject.prototype.collideWith = function collideWith(otherObject){
	// if(this.isCollidedWith(otherObject)){
	// 	this.game.remove(otherObject);
	// 	this.game.remove(this);
	// }
}

MovingObject.prototype.isWrappable = true;


module.exports = MovingObject;