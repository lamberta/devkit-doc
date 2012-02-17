"use import";

import timestep.animate as animate;

exports = {

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
