"use import";

import math.util;
import timestep.ImageView;

var invaderImages = [
	"media/images/enemy1.png"
];

exports = Class(timestep.ImageView, function (supr) {

	this.init = function (opts) {

		// Choose a random invader image
		var imageIndex = math.util.random(0, invaderImages.length);

		opts = merge(opts, {
			image: invaderImages[imageIndex],
			width: 64,
			height: 64
		});

		supr(this, "init", [opts]);

	};

});
