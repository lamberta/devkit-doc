/*
 * This file demonstrates how to detect if there's a click on the view but released outside the view.
 *
 * How to use: click on the view and then drag out of the view and release
 */
import ui.View as View;

// This view changes color when clicked...
var ClickBox = Class(View, function(supr) {
	this.init = function(opts) {
		opts = merge(opts, {backgroundColor: "#FF0000"});
		this._index = 1;

		supr(this, "init", [opts]);
	};

	this.onInputStart = function() {
		// Change the color when the view is clicked...
		this.updateOpts({backgroundColor: "#0000FF"});
	};

	this.onInputOut = function() {
		// Change the view when dragged outside the view...
		this.updateOpts({backgroundColor: "#AA0000"});
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
		this._clickBox = new ClickBox({
			superview: this.view,
			x: 10,
			y: 10,
			width: 100,
			height: 100
		});

		this.view.onInputSelect = bind(this, "onInputSelect");
	};

	this.onInputSelect = function() {
		// Restore the background of the view...
		this._clickBox.updateOpts({backgroundColor: "#FF0000"});
	};

	this.launchUI = function () {};
});