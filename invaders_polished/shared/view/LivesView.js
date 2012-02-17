"use import";

import math.util;
import timestep.View as View;
import timestep.ImageView as ImageView;

exports = Class(View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {
			width: 72,
			height: 16,
			zIndex: 200
		});

		supr(this, "init", [opts]);

		this._lifeViews = [];
		for (var i = 0; i < 3; ++i) {
			this._lifeViews.push(new ImageView({
				parent: this,
				image: "media/images/player_icon.png",
				x: (i * 20),
				width: 16,
				height: 16
			}));
		}

	};

	this.reset = function () {
		for (var i = 0, j = this._lifeViews.length; i < j; ++i) {
			this._lifeViews[i].style.opacity = 1;
		}
	};

});
