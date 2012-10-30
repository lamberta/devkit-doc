//# Continuous Animation
//Continuously move a view.

//Import the `animate` module.
import animate;
//Import the `ui.View` class.
import ui.View as View;

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
		// Create a single red squared view.
		var square = new View({
			superview: this.view,
			backgroundColor: '#ff0000',
			x: 20,
			y: 20,
			width: 100,
			height: 100
		});
		//Start the animation.
		animate_view(square);
	};

	this.launchUI = function () {};
});

function animate_view (view) {
	animate(view).clear()
		// Move right - linear
		.now({x: 200}, 1000, animate.linear)
		// Move down - ease in
		.then({y: 200}, 1000, animate.easeIn)
		// Move left - ease out
		.then({x: 20}, 1000, animate.easeOut)
		// Move up - ease in, ease out
		.then({y: 20}, 1000, animate.easeInOut)
		// Start animating again
		.then(function () {
			animate_view(view);
		});
}
