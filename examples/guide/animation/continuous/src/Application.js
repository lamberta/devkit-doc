/*
 * This file demonstrates how make a view move continuous.
 */
import ui.View as View;
import animate as animate;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		// Create a single red squared view...
		this._animationView = new View({
			superview: this.view,
			backgroundColor: "red",
			x: 20,
			y: 20,
			width: 100,
			height: 100
		});

		this.createAnimation();
	};

	this.createAnimation = function() {
		this._animationView.getAnimation()
			.clear()
			.then({x: 200}, 1000, animate.linear) // Move right - linear
			.then({y: 200}, 1000, animate.easeIn) // Move down - ease in
			.then({x: 20}, 1000, animate.easeOut) // Move left - ease out
			.then({y: 20}, 1000, animate.easeInOut)// Move up - ease in, ease out
			.then(bind(this, "createAnimation")); // Start animating again
	};

	this.launchUI = function () {};
});