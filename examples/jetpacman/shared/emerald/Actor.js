"use import";

import GC;
import timestep.OldSprite as Sprite;

/**
 * Actor class.
 * This class exposes an actor who has a trajectory in the X or Y direction,
 * and can interact with other Actors or a GridView.
 */

exports = Class(Sprite, function (supr) {
	this.init = function (opts) {
		supr(this, 'init', arguments);

		//this.align = opts.align || false;
		this.checksX = [];
		this.checksY = [];

		this.speedX = 0; this.accelX = 0;
		this.speedY = 0; this.accelY = 0;
	}

	this.accelerate = function (x, y) {
		if (x !== null) this.accelX = x;
		if (y !== null) this.accelY = y;
		return this;
	};

	this.velocity = function (x, y) {
		if (x !== null) this.speedX = x;
		if (y !== null) this.speedY = y;
		return this;
	};

	this.position = function (x, y) {
		if (x !== null) this.style.x = x;
		if (y !== null) this.style.y = y;
		return this;
	}

	this.atVelocityX = function (lx, dir, f) {
		this.checksX.push(function () {
			if (lx !== null && !(dir < 0 ? this.speedX <= lx : this.speedX >= lx))
				return;
			f.call(this, this.speedX, this.speedY);
		});
		return this;
	};

	this.atPositionX = function (x, f) {
		this.checksX.push(function () {
			if (x !== null && !(this.speedX < 0 ? this.style.x <= x : this.style.x >= x))
				return;
			f.call(this, this.style.x, this.style.y);
		});
		return this;
	};

	this.atVelocityY = function (ly, dir, f) {
		this.checksY.push(function () {
			if (!this.isHero)
				console.log(this.speedY, ly);
			if (ly !== null && !(dir < 0 ? this.speedY <= ly : this.speedY >= ly))
				return;
			f.call(this, this.speedX, this.speedY);
		});
		return this;
	};

	this.atPositionY = function (y, f) {
		this.checksY.push(function () {
			if (y !== null && !(this.speedY < 0 ? this.style.y <= x : this.style.y >= x))
				return;
			f.call(this, this.style.x, this.style.y);
		});
		return this;
	};

	this.clearX = function () {
		this.checksX.splice(0, this.checksX.length);
		return this;
	};

	this.clearY = function () {
		this.checksY.splice(0, this.checksY.length);
		return this;
	};

	this.tick = function (millis) {
		supr(this, 'tick', arguments);
		
		// Increment speed.
		this.speedX += (millis/1000)*this.accelX;
		this.speedY += (millis/1000)*this.accelY;

		// Verify position.
		delta = this.availableSpace(this.style.x, this.style.y, this.speedX, this.speedY);
		this.style.x += (this.speedX = delta[0]);
		this.style.y += (this.speedY = delta[1]);
		this.onMove(this.style.x, this.style.y);
		// Trajectory controls.
		for (var i = 0; i < this.checksX.length; i++)
			this.checksX[i].call(this);
		for (var i = 0; i < this.checksY.length; i++)
			this.checksY[i].call(this);

		// Publish.
		this.publish('Tick');

		return this;
	}

	this.hits = function (a) {
		var r1 = this.style, r2 = a.style;
		return ((r1.x + r1.width > r2.x) && (r1.x < r2.x + r2.width) &&
		 	(r1.y + r1.height > r2.y) && (r1.y < r2.y + r2.height))
	}

	/*
	 * Overrides
	 */

	this.availableSpace = function (x, y, dx, dy) {
		return [dx, dy];
	}

	this.onMove = function (x, y) {

	}

});