"use import";

import shared.Actor as Actor;
import shared.Rocket as Rocket;
import timestep.util as util;

var Player = exports = Class(Actor, function (supr) {

	this.init = function (opts) {
		opts = util.mergeDefaults(opts, {
			speed: 150
		});
		this._rocketInterval = 350;
		this._rocketCooldown = 0;
		supr(this, "init", [opts]);
	};

	this.update = function (dt, game) {

		// Manage rocket firing
		this._rocketCooldown += dt;
		if (this._rocketCooldown >= this._rocketInterval) {
			var rocket = new Rocket({
				x: this.x,
				y: this.y
			});
			rocket.setDirection(0, -1);
			game.addActor(rocket);
			var rocket = new Rocket({
				x: ((this.x + this.width) - 11),
				y: this.y
			});
			rocket.setDirection(0, -1);
			game.addActor(rocket);
			this._rocketCooldown = 0;
		}

		supr(this, "update", arguments);

	};

	this._getSpriteOpts = function () {
		return {
			zIndex: 2,
			animations: {
				idle: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/fighter.png",
					frameRate: 0,
					frames: [
						[192, 0]
					]
				},
				bankIdle: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/fighter.png",
					frameRate: 0,
					frames: [
						[0, 0]
					]
				},
				bank: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/fighter.png",
					frameRate: 15,
					frames: [
						[128, 0],
						[64, 0],
						[0, 0]
					]
				},
				reset: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/fighter.png",
					frameRate: 10,
					frames: [
						[0, 0],
						[64, 0],
						[128, 0]
					]
				}
			},
			defaultAnimation: "idle"
		};
	};

	this.setDirection = function (x, y) {

		if (
			(x < 0 && this.direction.x >= 0)
			|| (x > 0 && this.direction.x <= 0)
		){

			var flipHorizontal = (x > 0);

			this.sprite.startAnimation("bank", {
				iterations: 1,
				mirrorHorizontal: flipHorizontal,
				callback: bind(this, function () {
					this.sprite.startAnimation("bankIdle", {
						mirrorHorizontal: flipHorizontal
					});
				})
			});

		} else if (x === 0 && this.direction.x !== 0) {

			this.sprite.startAnimation("reset", {
				iterations: 1,
				mirrorHorizontal: (this.direction.x > 0)
			});

		}

		supr(this, "setDirection", arguments);

	};

});
