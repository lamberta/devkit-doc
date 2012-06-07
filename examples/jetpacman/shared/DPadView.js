"use import";

import GC;
import .px;
import timestep.device as device;
import timestep.ImageView as ImageView;

exports = Class(ImageView, function (supr) {
	this.init = function (opts) {
		opts.x = px(20); opts.y = device.height - px(80);
		opts.height = px(80); opts.width = px(266*(80/200));
		opts.image = 'resources/dpad-default.png';
		supr(this, 'init', arguments);
	}

	this.onInputMove = this.onInputStart = function (e, pt) {
		var y = pt.y - (this.style.height/2);
		var x = pt.x - (this.style.width/2);
		var a = Math.atan2(y, x);
		if (a < Math.PI/4 && a > -Math.PI/4) {
			this.setImage('resources/dpad-right.png');
			GC.app.hero.right();
		} else if (a >= Math.PI/4 && a < Math.PI*(3/4)) {
			this.setImage('resources/dpad-down.png');
			GC.app.hero.down();
		} else if (a >= Math.PI*(3/4) || a < -Math.PI*(3/4)) {
			this.setImage('resources/dpad-left.png');
			GC.app.hero.left();
		} else if (a >= -Math.PI*(3/4) && a < -Math.PI*(1/4)) {
			this.setImage('resources/dpad-up.png');
			GC.app.hero.up();
		}
	}

	this.onInputOut = function () {
		this.setImage('resources/dpad-default.png');
		GC.app.hero.centerX(); GC.app.hero.centerY();
	}
});