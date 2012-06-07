"use import";

import .JPActor;

/*
 * Some kind of marble I guess?
 */

exports = Class(JPActor, function (supr) {
	this.init = function(opts) {
		opts.defaultAnimation = 'right'
		opts.animations = {
			right: {
				imageURL: 'resources/marble.png',
				spritesWide: 4,
				spritesHigh: 2,
				start: 0,
				end: 7,
				width: 256,
				height: 256,
				step: 100
			},
			moving: {
				imageURL: 'resources/marble.png',
				spritesWide: 4,
				spritesHigh: 2,
				start: 0,
				end: 7,
				width: 256,
				height: 256,
				step: 100
			}
		}
		supr(this, 'init', arguments);

		var baddie = this;
		this.subscribe('Tick', function () {
			var lad = baddie.onLadder();
			if (lad && Math.round(lad[0]) == 0) {
				baddie.climb();
				baddie.up();
				baddie.centerX();
			}
		})
	}

	this.goLeft = function () {
		var baddie = this;
		this.dir = 'left'
		this.left().atVelocityX(0, 1, function () { baddie.goRight(); });
	}

	this.goRight = function () {
		var baddie = this;
		this.dir = 'right'
		this.right().atVelocityX(0, -1, function () { baddie.goLeft(); });
	}

	this.oldFall = this.fall;
	this.fall = function () {
		this.oldFall.apply(this, arguments);
		if (!this.speedX)
			this.dir == 'left' ? this.goLeft() : this.goRight();
	}
});