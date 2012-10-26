/*
 * This file demonstrates how to change the color when the view is clicked.
 */
import ui.View as View;

// This view changes color when clicked...
var ClickBox = Class(View, function(supr) {
	this.init = function(opts) {
		opts = merge(opts, {backgroundColor: "#FF0000"});
		this._index = 1;

		supr(this, "init", [opts]);
	};

	this.onInputSelect = function() {
		// Use indices 0, 1, 0, 1, 0, 1, etc...
		this._index = (this._index + 1) & 1;

		// Change the background color of this view
		this.updateOpts({backgroundColor: ["#0000FF", "#FF0000"][this._index]});
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
		new ClickBox({
			superview: this.view,
			x: 10,
			y: 10,
			width: 100,
			height: 100
		});
	};

	this.launchUI = function () {};
});