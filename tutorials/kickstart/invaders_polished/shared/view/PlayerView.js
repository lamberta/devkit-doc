"use import";

import math.util;
import timestep.ImageView as ImageView;
import timestep.animate as animate;

import .BulletView as BulletView;

exports = Class(ImageView, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {
			image: "media/images/player.png",
			width: 64,
			height: 64,
			zIndex: 200
		});

		supr(this, "init", [opts]);

	};

	this.move = function (pt) {

		var anim = this.animate();
		anim.finishNow();

		// Ensure player view doesn't leave the viewable screen
		var halfWidth = (this.style.width / 2);
		pt.x = math.util.clip(pt.x, halfWidth, this.getSuperview().style.width - halfWidth);

		// Animate to the new point
		var pixelsPerSecond = 300;
		var playerCenterX = this.style.x + halfWidth;
		var distance = Math.abs(playerCenterX - pt.x);
		var duration = (distance / pixelsPerSecond) * 1000;
		anim.now({
			x: pt.x - halfWidth
		}, duration, animate.linear);

	};

	this.fire = function () {

		// Create a new bullet object
		var bullet = new BulletView({
			parent: this.getSuperview(),
			x: this.style.x + this.style.width / 2 - 4,
			y: this.style.y + this.style.height / 2 - 4
		});

		var anim = animate(bullet);

		// Animate the bullet towards the top of the screen
		anim.now({
			y: -8,
		}, 3000, animate.linear);

		// Remove the bullet once it's reached the top
		anim.then(bind(this, function () {
			bullet.removeFromSuperview();
			delete bullet;
		}));

	};

});
