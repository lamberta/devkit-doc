//This file demonstrates how make a view move continuous.

//Import the View class and animate module.
import ui.View as View;
import animate as animate;

// ## Class: Application
exports = Class(GC.Application, function () {
	//Settings for the application.
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
			// Move right - linear
			.then({x: 200}, 1000, animate.linear)
			// Move down - ease in
			.then({y: 200}, 1000, animate.easeIn)
			// Move left - ease out
			.then({x: 20}, 1000, animate.easeOut)
			// Move up - ease in, ease out
			.then({y: 20}, 1000, animate.easeInOut)
			// Start animating again
			.then(bind(this, "createAnimation"));
	};

	this.launchUI = function () {};
});
