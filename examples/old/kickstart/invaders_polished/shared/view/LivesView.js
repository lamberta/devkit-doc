"use import";

import math.util;
import timestep.View as View;
import timestep.ImageView as ImageView;

exports = Class(View, function (supr) {

	var NUM_LIVES = 3;

	this.init = function (opts) {

		opts = merge(opts, {
			width: 72,
			height: 16,
			zIndex: 200
		});

		supr(this, "init", [opts]);

		this._lifeViews = [];
		for (var i = 0; i < NUM_LIVES; ++i) {
			this._lifeViews.push(new ImageView({
				parent: this,
				image: "media/images/player_icon.png",
				x: (i * 20),
				width: 16,
				height: 16
			}));
		}

	};

	this.damage = function () {
		--this.lives;
		this.lives = math.util.clip(this.lives, 0, NUM_LIVES);
		this.update();
	};

	this.reset = function () {
		this.lives = NUM_LIVES;
		this.update();
	};

	this.update = function () {
		for (var i = 0, j = this._lifeViews.length; i < j; ++i) {
			this._lifeViews[i].style.opacity = i < this.lives;
		}
	};

});
