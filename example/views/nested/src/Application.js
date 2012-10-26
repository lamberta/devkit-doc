/*
 * This file demonstrates the nesting of views.
 */
import ui.View as View;

var NestedBox = Class(View, function(supr) {
	// Called before the first render of the view
	this.buildView = function () {
		var redbox = new View({
			superview: this,
			x: 10,
			y: 10,
			width: 100,
			height: 100,
			backgroundColor: '#FF0000',
			zIndex: 1
		});

		var bluebox = new View({
			superview: this,
			x: 30,
			y: 30,
			width: 100,
			height: 100,
			backgroundColor: '#0000FF'
		});
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
		new NestedBox({
			superview: this.view,
			backgroundColor: "#008800",
			x: 20,
			y: 20,
			width: 140,
			height: 140
		});
	};

	this.launchUI = function () {};
});
