"use import";

import timestep.animate as animate;

exports = {

	fadeIn: function (view, duration, callback) {
		var anim = animate(view);
		anim.finishNow();
		anim.now({
			opacity: 1
		}, duration || 1000, animate.linear);
		callback && anim.then(function () {
			callback();
		});
	},

	fadeOut: function (view, duration, callback) {
		var anim = animate(view);
		anim.finishNow();
		anim.now({
			opacity: 0
		}, duration || 1000, animate.linear);
		callback && anim.then(function () {
			callback();
		});
	},

	kill: function (view, callback) {
		var anim = animate(view);
		anim.finishNow();
		anim.now({
			scale: 1.5
		}, 100, animate.linear);
		anim.then({
			opacity: 0,
			r: Math.PI * 2,
			scale: 0.5
		}, 400, animate.linear);
		if (callback) {
			anim.then(callback);
		}
	}

};
