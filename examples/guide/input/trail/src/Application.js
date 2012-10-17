/*
 * This file shows how to create a trail behind the mouse when click and drag
 *
 * How to use: click on the view and then drag
 */
import ui.View as View;

var TrailBox = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [merge(opts, {width: 6, height: 6, backgroundColor: "#FF0000"})]);

		this._dt = 0; // Set the start time
	};

	// Reset the view, the
	this.reset = function(opts) {
		this._dt = 0; // Set the start time
		this.updateOpts(opts); // Because opts contains a superview this view is added to the superview!
	};

	// This function is called 500ms and then removed from its superview
	this._tick = function(dt) {
		this._dt += dt;
		if (this._dt > 500) {
			this.removeFromSuperview(); // Remove...
		} else {
			this.updateOpts({opacity: 1 - this._dt / 500}); // Fade out...
		}
	};
});

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		this._trail = []; // A circular buffer
		this._index = 0; // The index in the buffer

		this.view.onInputMove = bind(this, "onInputMove");
	};

	this.onInputMove = function(evt, pt) {
		var opts = {superview: this.view, x: pt.x - 3, y: pt.y - 3};

		if (this._trail.length < 64) {
			this._trail.push(new TrailBox(opts)); // Add a new view to the circular buffer
		} else {
			this._trail[this._index].reset(opts);
			this._index = (this._index + 1) & 63; // Next value
		}
	};

	this.launchUI = function () {};
});