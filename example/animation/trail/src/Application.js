//# Trailing Animation
//This example shows how ot create a trail behind the mouse when clicking and dragging.
//How to use: click on the view and then drag.

//Import the View class.
import ui.View as View;

//## Class: Application
//Create an application.
exports = Class(GC.Application, function() {
	//Settings for the app.
	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		this.view.onInputMove = bind(this, "onInputMove");
	};

	this.onInputMove = function(evt, pt) {
		var trailbox = new TrailBox(merge(pt, {superview: this.view}))
	};

	this.launchUI = function () {};
});

//## Class: TrailBox
//Create a View which fades out and the removes its self.
var TrailBox = Class(View, function(supr) {
	this.init = function(opts) {
		opts = merge(opts, {
			backgroundColor: "#FF0000",
			opacity: 0.8,
			anchorX: 1.5,
			anchorY: 1.5,
			width: 3,
			height: 3,
			r: 0
		});

		supr(this, "init", [opts]);

		this.getAnimation()
			.then({
				opacity: 0,
				x: opts.x - 15,
				y: opts.y - 15,
				anchorX: 15,
				anchorY: 15,
				width: 30,
				height: 30,
				r: Math.PI * 4
			}, 500)
			.then(bind(this, "removeFromSuperview"));
	};
});
