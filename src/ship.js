const Util = require('./util.js');
const MovingObject = require("./moving_object.js");
const Bullet = require('./bullet.js');

Ship.RADIUS = 10;
Ship.COLOR = 'blue';

function Ship(options){
	options = options || {};
	options.vel = options.vel || [0, 0];
	options.color = options.color || Ship.COLOR;
	options.radius = options.radius || Ship.RADIUS;
	options.game = options.game;
	options.pos = options.pos || options.game.randomPosition();
	MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function relocate(){
	this.pos = this.game.randomPosition();
	this.vel = [0, 0];
}

Ship.prototype.power = function power(impulse){
	this.vel[0] += impulse[0];
	this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function fireBullet(){
	let khar = new Bullet({game: this.game, vel: this.vel, pos: this.pos});
	this.game.bullets.push(khar);
}
module.exports = Ship;

