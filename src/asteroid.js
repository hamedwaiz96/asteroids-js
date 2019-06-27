const Util = require("./util");
const MovingObject = require("./moving_object.js");
const Ship = require('./ship.js');
const Bullet = require('./bullet.js');


const DEFAULTS = {
	COLOR: "red",
	RADIUS: 5
}

function Asteroid(options) {
	options = options || {};
	options.color = DEFAULTS.COLOR;
	options.radius = DEFAULTS.RADIUS;
	options.vel = options.vel || Util.randomVec(4);
	options.game = options.game;
	options.pos = options.pos || options.game.randomPosition();
	MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject){
	if(otherObject instanceof Ship){
		otherObject.relocate();
	}
	else if (otherObject instanceof Bullet) {
		this.game.remove(otherObject);
    	this.game.remove(this);
	}
}

module.exports = Asteroid;