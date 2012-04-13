"use import";

import math.util;
import timestep.ImageView;

import .polish;

var invaderImages = [
	"media/images/enemy1.png",
	"media/images/enemy2.png",
	"media/images/enemy3.png"
];

var invaderSpeeds = [
	3000,
	4000,
	5000
];

exports = Class(timestep.ImageView, function (supr) {

	this.init = function (opts) {

		// Choose a random invader image
		var imageIndex = math.util.random(0, invaderImages.length);

		opts = merge(opts, {
			image: invaderImages[imageIndex],
			anchorX: 32,
			anchorY: 32,
			width: 64,
			height: 64
		});

		supr(this, "init", [opts]);

		this.alive = true;
		this.speed = invaderSpeeds[imageIndex];

	};

	this.kill = function () {
		if (!this.alive) { return; }
		this.alive = false;

		polish.kill(this, bind(this, function () {
			this.removeFromSuperview();
		}));
	};

});
