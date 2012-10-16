/*
 * This file demonstrates how to display an image.
 */
import ui.ImageView as ImageView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		var imageview = new ImageView({
			superview: this.view,
			x: 10,
			y: 10,
			width: 100,
			height: 100,
			image: "resources/images/specialBlue.png"
		});
	};

	this.launchUI = function () {};
});
