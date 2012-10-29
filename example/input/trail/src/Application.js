//# Create a trail
//This demo shows how to create a trail behind the mouse when clicking and dragging.

//How to use: click on the view and then drag

//Import the view class.
import ui.View as View;

//## Class: TrailBox
//Create a view which fades out over a time of 500 ms.
var TrailBox = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [merge(opts, {width: 6, height: 6, backgroundColor: "#FF0000"})]);
		// Set the start time.
		this._dt = 0;
	};

	// Reset the view.
	this.reset = function(opts) {
		// Set the start time
		this._dt = 0;
		// Because opts contains a superview this view is added to the superview!
		this.updateOpts(opts);
	};

	// This function is called 500ms and then removed from its superview
	this._tick = function(dt) {
		this._dt += dt;
		if (this._dt > 500) {
			//Remove this view from the superview
			this.removeFromSuperview();
		} else {
			// Fade out...
			this.updateOpts({opacity: 1 - this._dt / 500});
		}
	};
});

//Class: Application
//Create an application, set the default settings.
exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	//Create a circular buffer and the index in the buffer
	this.initUI = function () {
		// A circular buffer
		this._trail = [];
		// The index in the buffer
		this._index = 0;

		this.view.onInputMove = bind(this, "onInputMove");
	};

	//This function is called when the user drags. The second parameter contains the drag coordinates.
	this.onInputMove = function(evt, pt) {
		var opts = {superview: this.view, x: pt.x - 3, y: pt.y - 3};

		if (this._trail.length < 64) {
			//Add a new view to the circular buffer.
			this._trail.push(new TrailBox(opts));
		} else {
			this._trail[this._index].reset(opts);
			//Next value of the circular buffer.
			this._index = (this._index + 1) & 63;
		}
	};

	this.launchUI = function () {};
});


//When you click (or touch) and drag the screen should look like this:
//<img src="./img/screenshot.png" alt="a book screenshot" class="screenshot">
