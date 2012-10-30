//# Rendering TTF fonts
//The SDK supports TTF fonts to render texts with the fillText method.
//This example shows how to render basic text

//Import device to get the width of the screen and the View class:
import device;
import ui.View as View;

//## Class: Application.js
exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		//Create a view which renders a couple of lines of text ...
		var ttfview = new TTFView({
			superview: this.view,
			width: device.width,
			height: device.height
		});
	};

	this.launchUI = function () {};
});

//## Class: TTFView
var TTFView = Class(View, function () {
	this._renderText = function (ctx, text, y) {
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "20px Verdana";
		ctx.fillText(text, (device.width - ctx.measureText(text).width) / 2, y);
	};

	this.render = function(ctx) {
		this._renderText(ctx, "The quick brown fox jumped", 50);
		this._renderText(ctx, "over the lazy dogs back", 100);
	};
});

//The output should look like this screenshot:
//<img src="./imgscreenshot.png" alt="a book screenshot" class="screenshot">
