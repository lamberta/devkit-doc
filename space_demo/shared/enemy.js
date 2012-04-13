"use import";

import shared.Actor as Actor;
import timestep.util as util;
import math2D.Point as Point;

var Enemy = exports = Class(Actor, function (supr) {

	this.init = function (opts) {

		opts = util.mergeDefaults(opts, {
			spriteX: 0,
			spriteY: 0,
			health: 1,
			behaviorInit: function () {},
			behaviorUpdate: function (dt) {}
		});

		this.spriteX = opts.spriteX;
		this.spriteY = opts.spriteY;
		this.behaviorInit = opts.behaviorInit;
		this.behaviorUpdate = opts.behaviorUpdate;
		this.health = opts.health;

		supr(this, "init", [opts]);

		this.sprite.startAnimation("idle", {
			mirrorVertical: true
		});

		if (this.behaviorInit) {
			this.behaviorInit();
		}

		/*
		this.sprite.render = function (ctx) {
			ctx.fillStyle = "rgb(255, 0, 0)";
			ctx.fillRect(0, 0, this.style.width, this.style.height);
		};
		*/

	};

	this._getSpriteOpts = function () {
		return {
			//origin: new Point(this.width / 2, this.height / 2),
			zIndex: 1,
			animations: {
				idle: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/ships.png",
					frames: [
						[this.spriteX, this.spriteY]
					]
				}
			},
			defaultAnimation: "idle"
		}
	};

	this.update = function (dt) {
		if (this.behaviorUpdate) {
			this.behaviorUpdate(dt);
		}
		supr(this, "update", arguments);
	};

});
