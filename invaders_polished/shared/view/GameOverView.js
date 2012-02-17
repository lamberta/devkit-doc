"use import";

import timestep.View as View;
import timestep.TextView as TextView;
import timestep.animate as animate;

import .ButtonView;

exports = Class(View, function (supr) {

	this.init = function (opts) {

		supr(this, "init", [opts]);

		// Game Over
		this._textView = new TextView({
			parent: this,
			text: "Game Over",
			color: "rgb(255, 255, 255)",
			fontSize: 32,
			textAlign: "center",
			verticalAlign: "top",
			y: 20
		});

		// High score
		this._highScoreView = new TextView({
			parent: this,
			text: "High score:",
			color: "rgb(255, 255, 255)",
			fontSize: 16,
			textAlign: "center",
			verticalAlign: "top",
			y: (this.style.height / 2) - 24
		});

		this._highScoreView = new TextView({
			parent: this,
			text: opts.highScore,
			color: "rgb(255, 255, 255)",
			fontSize: 16,
			textAlign: "center",
			verticalAlign: "top",
			y: this.style.height / 2
		});

		// OK button
		this._playButtonView = new ButtonView({
			parent: this,
			text: "Play",
			verticalAlign: "top",
			y: this.style.height * 0.75
		}).subscribe("Pressed", this, "_onOKPressed");

	};

	this.__defineSetter__("highScore", function (highScore) {
		this._highScoreView.setText(highScore);
	});

	this._onOKPressed = function () {
		// Ensure the button doesn't get pressed again mid-press
		if (this._pressing) {
			return;
		}

		this._pressing = true;

		var anim = animate(this);
		anim.now({
			opacity: 0
		}, 500, animate.linear);
		anim.then(function () {
			this._pressing = false; // OK to press the button again
			this.publish("OKButtonPressed");
		});
	};

});
