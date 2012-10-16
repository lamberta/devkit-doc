/*
 * This file shows how ot create a trail behind the mouse when click and drag
 *
 * How to use: click on the view and then drag
 */
import ui.View as View;

var TrailBox = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [merge(opts, {width: 6, height: 6, backgroundColor: "#FF0000"})]);
		this.start();
	};

	// Reset the view, the
	this.reset = function(opts) {
		this.updateOpts(opts); // Because opts contains a superview this view is added to the superview!
		this.start();
	};

	// This function is called 500ms and then removed from its superview
	this.start = function(dt) {
		var x = this.style.x;
		var y = this.style.y;

		this.getAnimation()
			//.clear()
			.now(
				{
					opacity: 0.8,
					x: x - 1.5,
					y: y - 1.5,
					anchorX: 1.5,
					anchorY: 1.5,
					width: 3,
					height: 3,
					r: 0
				}
			)
			.then(
				{
					opacity: 0,
					x: x - 15,
					y: y - 15,
					anchorX: 15,
					anchorY: 15,
					width: 30,
					height: 30,
					r: Math.PI / 2
				},
			500
			)
			.then(bind(this, "removeFromSuperview"));
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
		var opts = merge(pt, {superview: this.view});

		if (this._trail.length < 128) {
			this._trail.push(new TrailBox(opts)); // Add a new view to the circular buffer
		} else {
			this._trail[this._index].reset(opts);
			this._index = (this._index + 1) & 127; // Next value
		}
	};

	this.launchUI = function () {};
});