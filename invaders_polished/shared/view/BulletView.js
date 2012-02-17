"use import";

import math2D.intersect as intersect;
import timestep.ImageView as ImageView;

import .InvaderView;

exports = Class(ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {
			image: "media/images/player_bullet.png",
			width: 8,
			height: 8
		});

		supr(this, "init", [opts]);

	};

	this.checkCollision = function (views) {
		var kills = 0;
		for (var i = 0, j = views.length; i < j; ++i) {
			var view = views[i];
			if (
				view &&
				view instanceof InvaderView &&
				view.alive &&
				intersect.rectAndRect(this.style, view.style)
			) {
				// We found an Invader colliding with this Bullet!
				// Increment the kill count and remove both the invader
				// and the bullet
				++kills;
				view.kill();
				this.removeFromSuperview();
				break;
			}
		}
		return kills;
	};

});
