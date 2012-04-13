"use import";

import shared.Actor as Actor;
import timestep.util as util;

var Rocket = exports = Class(Actor, function (supr) {

	this.init = function (opts) {
		opts = util.mergeDefaults(opts, {
			speed: 250,
			width: 11,
			height: 20
		});
		supr(this, "init", [opts]);
	};

	this._getSpriteOpts = function () {
		return {
			animations: {
				idle: {
					width: this.width,
					height: this.height,
					imageURL: "media/images/icons.png",
					frames: [
						[103, 3]
					]
				}
			},
			defaultAnimation: "idle"
		}
	};

});
