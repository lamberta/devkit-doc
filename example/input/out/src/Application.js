//# Detect an input out event
//This demo shows how to detect if there's a click on the view but released outside the view.
//This construction is mainly used for buttons, a button click is only registered when a user
//touches the button and the touch up event is also triggered inside the same button.
//Click on the view and then drag out of the view and release.

//Import the `ui.View` class.
import ui.View as View;

//## Class: Application
//Create an application with its default settings.
exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		var clickbox = new ClickBox({
			superview: this.view,
			x: 10,
			y: 10,
			width: 100,
			height: 100,
			backgroundColor: '#ff0000'
		});

		this.view.on('InputSelect', bind(this, function () {
			// Restore the background of the view.
			clickbox.updateOpts({backgroundColor: "#FF0000"});
		}));
	};
	
	this.launchUI = function () {};
});

//## Class: ClickBox
//Create a view based on the view class which changes color when clicked.
var ClickBox = Class(View, function (supr) {
	this.init = function (opts) {
		supr(this, 'init', [opts]);
		
		this.on('InputStart', function () {
			// Change the color when the view is clicked.
			this.style.backgroundColor = '#0000ff';
		});

		this.on('InputOut', function () {
			// Change the view when dragged outside the view.
			this.style.backgroundColor = '#aa0000';
		});
	};
});

//The output should look like this screenshot:
//<img src="./img/screenshot.png" alt="a book screenshot" class="screenshot">
