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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\nconst DEFAULTS = {\n\tCOLOR: \"red\",\n\tRADIUS: 5\n}\n\nfunction Asteroid(options) {\n\toptions = options || {};\n\toptions.color = DEFAULTS.COLOR;\n\toptions.radius = DEFAULTS.RADIUS;\n\toptions.vel = options.vel || Util.randomVec(4);\n\toptions.game = options.game;\n\toptions.pos = options.pos || options.game.randomPosition();\n\tMovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function collideWith(otherObject){\n\tif(otherObject instanceof Ship){\n\t\totherObject.relocate();\n\t}\n\telse if (otherObject instanceof Bullet) {\n\t\tthis.game.remove(otherObject);\n    \tthis.game.remove(this);\n\t}\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nBullet.RADIUS = 2;\nBullet.COLOR = 'green';\n\nfunction Bullet(options){\n\toptions = options || {};\n\toptions.color = options.color || Bullet.COLOR;\n\toptions.vel = options.vel || [1, 1];\n\toptions.radius = options.radius || Bullet.RADIUS;\n\toptions.game = options.game;\n\toptions.pos = options.pos || options.game.randomPosition();\n\tMovingObject.call(this, options);\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Game(){\n\tthis.asteroids = [];\n\tthis.addAsteroids();\n\tlet khar = new Ship({game: this, pos: this.randomPosition()});\n\tthis.ship = khar;\n\tthis.bullets = [];\n}\n\nGame.DIM_X = 400;\nGame.DIM_Y = 400;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.addAsteroids = function addAsteroids(){\n\t\tfor(let i = 0; i < Game.NUM_ASTEROIDS; i++){\n\t\t\tlet khar = new Asteroid({pos: this.randomPosition(), game: this});\n\t\t\tthis.asteroids.push(khar);\n\t\t}\n\t}\nGame.prototype.randomPosition = function randomPosition(){\n\t\tlet x = Math.floor((Math.random() * Game.DIM_X) + 1);\n\t\tlet y = Math.floor((Math.random() * Game.DIM_Y) + 1);\n\t\treturn [x, y];\n\t}\nconst img = new Image();\nimg.src = '../images/hubbledeepfield.jpg';\nGame.prototype.draw = function draw(ctx){\n\t\tctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\t\tgame1.ctx.drawImage(img, 0, 0);\n\t\tfor(let i = 0; i <= this.allObjects().length - 1; i++){\n\t\t\tthis.allObjects()[i].draw(ctx);\n\t\t}\n\t}\nGame.prototype.moveObjects = function moveObjects(){\n\t\tfor(let i = 0; i <= this.allObjects().length - 1; i++){\n\t\t\tthis.allObjects()[i].move();\n\t\t}\n\t}\n\nGame.prototype.splitter = function splitter(dim, max){\n\tif(dim < 0){\n\t\treturn max - (dim % max);\n\t}\n\telse if(dim > max){\n\t\treturn dim % max;\n\t}\n\telse {\n\t\treturn dim;\n\t}\n}\n\nGame.prototype.wrap = function wrap(pos){\n\t\tconst wrap_x = this.splitter(pos[0], Game.DIM_X);\n\t\tconst wrap_y = this.splitter(pos[1], Game.DIM_X);\n\t\treturn [wrap_x, wrap_y];\n\t}\nGame.prototype.checkCollisions = function checkCollisions(){\n\t\t// for(let i = 0; i <= this.asteroids.length - 1; i++){\n\t\t// \tfor(let k = 0; k <= this.asteroids.length - 1; k++){\n\t\t// \t\tif(this.asteroids[i].isCollidedWith(this.asteroids[k]) && i != k){\n\t\t// \t\t\tthis.asteroids[i].collideWith(this.asteroids[k]);\n\t\t// \t\t}\n\t\t// \t}\n\t\t// }\n\t\tfor(let i = 0; i <= this.allObjects().length - 1; i++){\n\t\t\tfor(let k = 0; k <= this.allObjects().length - 1; k++){\n\t\t\t\tif(this.allObjects()[i].isCollidedWith(this.allObjects()[k]) && i != k){\n\t\t\t\t\tthis.allObjects()[i].collideWith(this.allObjects()[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\nGame.prototype.step = function step(){\n\tthis.moveObjects();\n\tthis.checkCollisions();\n}\n\nGame.prototype.remove = function remove(obj){\n\tif(obj instanceof Asteroid){\n\t\tfor(let i = 0; i <= this.asteroids.length - 1; i++){\n\t\t\tif(obj === this.asteroids[i]){\n\t\t\t\tthis.asteroids.splice(i, 1);\n\t\t\t}\n\t\t}\n\t}\n\telse if(obj instanceof Bullet){\n\t\tfor(let i = 0; i <= this.bullets.length - 1; i++){\n\t\t\tif(obj === this.bullets[i]){\n\t\t\t\tthis.bullets.splice(i, 1);\n\t\t\t}\n\t\t}\n\t};\n}\n\nGame.prototype.allObjects = function allObjects(){\n\tlet ast_copy = this.asteroids.slice();\n\tlet all = ast_copy.concat([this.ship]).concat(this.bullets);\n\treturn all;\n}\n\nGame.prototype.add = function add(obj){\n\tif(obj instanceof Asteroid){\n\t\tthis.asteroids.push(obj);\n\t}\n\telse if(obj instanceof Bullet){\n\t\tthis.bullets.push(obj);\n\t}\n}\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos){\n\tif((pos[0] > Game.DIM_X || pos[0] < 0) || (pos[1] > Game.DIM_Y || pos[1] < 0)){\n\t\treturn true;\n\t}\n\treturn false;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n\tthis.game = game;\n\tthis.ctx = ctx;\n}\n\nGameView.prototype.start = function start(){\n\tlet game1 = this;\n\tthis.bindKeyHandlers();\n\twindow.setInterval(function(){\n\t\tgame1.game.step();\n\t\tgame1.game.draw(game1.ctx);\n\t}, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers(){\n\tgame1 = this;\n\tkey('up', function(event, handler){\n\t\tgame1.game.ship.power([1, 1]);\n\t});\n\tkey('space', function(event, handler){\n\t\tgame1.game.ship.fireBullet();\n\t});\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n\tlet canvas = document.getElementById(\"game-canvas\");\n\tlet ctx = canvas.getContext(\"2d\");\n\tlet khar = new Game();\n\tnew GameView(khar, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n\tctx.beginPath();\n\tctx.fillStyle = `${this.color}`;\n\tctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n\tctx.fill();\n\tctx.stroke();\n}\n\nMovingObject.prototype.move = function move() {\n\tthis.pos[0] += this.vel[0];\n\tthis.pos[1] += this.vel[1];\n\t// if((this.pos[0] < 0 || this.pos[0] > 400) || (this.pos[1] < 0 || this.pos[1] > 400)){\n\t// \tthis.pos = this.game.wrap(this.pos);\n\t// }\n\tif(this.game.isOutOfBounds(this.pos) && this.isWrappable){\n\t\tthis.pos = this.game.wrap(this.pos);\n\t}\n\telse if(this.game.isOutOfBounds(this.pos) && !(this.isWrappable)){\n\t\tthis.game.remove(this);\n\t}\n}\n\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject){\n\tlet dist = ((((this.pos[0] - otherObject.pos[0]) ** 2) + ((this.pos[1] - otherObject.pos[1]) ** 2)) ** (1 / 2));\n\tlet rad_sum = (this.radius + otherObject.radius);\n\tif(dist < rad_sum){\n\t\treturn true;\n\t}\n\treturn false;\n}\n\nMovingObject.prototype.collideWith = function collideWith(otherObject){\n\t// if(this.isCollidedWith(otherObject)){\n\t// \tthis.game.remove(otherObject);\n\t// \tthis.game.remove(this);\n\t// }\n}\n\nMovingObject.prototype.isWrappable = true;\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nShip.RADIUS = 10;\nShip.COLOR = 'blue';\n\nfunction Ship(options){\n\toptions = options || {};\n\toptions.vel = options.vel || [0, 0];\n\toptions.color = options.color || Ship.COLOR;\n\toptions.radius = options.radius || Ship.RADIUS;\n\toptions.game = options.game;\n\toptions.pos = options.pos || options.game.randomPosition();\n\tMovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function relocate(){\n\tthis.pos = this.game.randomPosition();\n\tthis.vel = [0, 0];\n}\n\nShip.prototype.power = function power(impulse){\n\tthis.vel[0] += impulse[0];\n\tthis.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function fireBullet(){\n\tlet khar = new Bullet({game: this.game, vel: this.vel, pos: this.pos});\n\tthis.game.bullets.push(khar);\n}\nmodule.exports = Ship;\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\tinherits(childClass, parentClass){\n\t\tchildClass.prototype = Object.create(parentClass.prototype);\n\t\tchildClass.prototype.constructor = childClass;\n\t},\n\n\trandomVec(length) {\n    \tconst deg = 2 * Math.PI * Math.random();\n    \treturn Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  \t},\n  // Scale the length of a vector by the given amount.\n  \tscale(vec, m) {\n    \treturn [vec[0] * m, vec[1] * m];\n  \t}\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });