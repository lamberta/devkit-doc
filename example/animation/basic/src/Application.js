//This file demonstrates how make a view move.

//Import the View class.
import ui.View as View;

//## Class: Application
exports = Class(GC.Application, function() {
	//Set the default settings of the application.
	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		//Create a single red squared view...
		var view = new View({
			superview: this.view,
			backgroundColor: "red",
			x: 20,
			y: 20,
			width: 100,
			height: 100
		});

		view.getAnimation()
			//Change the x property from 20 to 200 in 500 ms.
			.then({x: 200}, 500)
			//Change the x property fron 200 to 20 in 1500 ms.
			.then({x: 20}, 1500);
	};

	this.launchUI = function () {};
});
