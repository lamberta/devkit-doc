"use import";

import math.util;
import timestep.View as View;
import timestep.TextView as TextView;
import timestep.animate as animate;

import .BulletView as BulletView;

exports = Class(View, function (supr) {

	this.init = function (opts) {

		opts = merge(opts, {
			width: 128,
			height: 64,
			zIndex: 200
		});

		supr(this, "init", [opts]);

		// Center the button
		this.style.x = (this.getSuperview().style.width / 2) - (this.style.width / 2);

		this._textView = new TextView({
			parent: this,
			text: opts.text,
			color: "rgb(255, 255, 255)",
			fontSize: 16,
			height: this.style.height,
			textAlign: "center",
			verticalAlign: "middle"
		});

	};

	this.render = function (ctx) {
		ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
		ctx.fillRect(0, 0, this.style.width, this.style.height);
	};

	this.onInputSelect = function () {
		// Ensure the button doesn't get pressed again mid-press
		if (this._pressing) {
			return;
		}

		this._pressing = true;

		var anim = animate(this);
		anim.now({
			y: this.style.y + (this.style.height / 10)
		}, 50, animate.linear);
		anim.then({
			y: this.style.y
		}, 50, animate.linear);
		anim.then(function () {
			this._pressing = false; // OK to press the button again
			this.publish("Pressed");
		});
	};

});
