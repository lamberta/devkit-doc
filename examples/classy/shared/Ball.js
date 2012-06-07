"use import";

import timestep.ImageView;
import timestep.sound.AudioAPI as AudioAPI;

import .lib.util as util;


var audio = new AudioAPI({
	path: 'assets/sound',
	map: {
		boing: {}
	}
});


/**
 * This is a ball. It bounces.
 *
 * @name Ball
 * @constructor
 * @extends timestep.ImageView
 */
function Ball (opts) {
	this.init.apply(this, arguments);

	if (typeof opts.x !== 'undefined') { this.style.x = opts.x; }
	if (typeof opts.y !== 'undefined') { this.style.y = opts.y; }

	this.x = this.style.x;
	this.y = this.style.y;
	this.vx = (typeof opts.vx !== 'undefined') ? opts.vx : 0;
	this.vy = (typeof opts.vy !== 'undefined') ? opts.vy : 0;
	
	this.radius = (typeof opts.radius === 'undefined') ? 0 : opts.radius;
};

exports = util.inherits(Ball, timestep.ImageView);

Ball.prototype.setX = function (n) {
	this.style.x = this.x = n;
};

Ball.prototype.setY = function (n) {
	this.style.y = this.y = n;
};

Ball.prototype.playSound = function () {
	audio.play('boing');
};

var bounce = -0.7;

Ball.prototype.checkBoundaries = function (x, y, width, height) {
	this.setX(this.x + this.vx);
	this.setY(this.y + this.vy);

	if (this.x + this.style.width > width) {
    this.x = width - this.style.width;
    this.vx *= bounce;
  } else if (this.x < x) {
    this.x = x;
    this.vx *= bounce;
  }
  if (this.y + this.style.height > height) {
    this.y = height - this.style.width;
    this.vy *= bounce;
  } else if (this.y < y) {
    this.y = y;
    this.vy *= bounce;
  }
};
