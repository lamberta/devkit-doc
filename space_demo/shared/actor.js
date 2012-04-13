"use import";

import timestep.Sprite as Sprite;
import timestep.util as util;
import math2D.Point as Point;

var Actor = exports = Class(function () {

	this.init = function (opts) {

		opts = util.mergeDefaults(opts, {
			x: 0,
			y: 0,
			width: 64,
			height: 64,
			speed: 100,
			direction: new Point(0, 0)
		});

		this.alive = true;
		this.x = opts.x;
		this.y = opts.y;
		this.width = opts.width;
		this.height = opts.height;
		this.direction = opts.direction;
		this.speed = opts.speed;

		this._initSprite();

	};

	this._initSprite = function () {

		var spriteOpts = util.mergeDefaults(this._getSpriteOpts(), {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height
		});

		this.sprite = new Sprite(spriteOpts);

		if (spriteOpts.defaultAnimation) {
			this.sprite.startAnimation(spriteOpts.defaultAnimation);
		}

	};

	this._getSpriteOpts = function () {
		// Override in subclass
		return {};
	};

	this._syncSprite = function () {
		var s = this.sprite.style;
		s.x = this.x;
		s.y = this.y;
	};

	this.setDirection = function (x, y) {
		this.direction.x = x;
		this.direction.y = y;
	};

	this.update = function (dt) {
		this._syncSprite();
	};

	this.collidesWith = function (actor) {
		return (
			this.x <= (actor.x + actor.width)
			&& actor.x <= (this.x + this.width)
			&& this.y <= (actor.y + actor.height)
			&& actor.y <= (this.y + this.height)
		);
	};

});
