const Util = require('./util.js');
const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');

Bullet.RADIUS = 2;
Bullet.COLOR = 'green';

function Bullet(options){
	options = options || {};
	options.color = options.color || Bullet.COLOR;
	options.vel = options.vel || [1, 1];
	options.radius = options.radius || Bullet.RADIUS;
	options.game = options.game;
	options.pos = options.pos || options.game.randomPosition();
	MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;