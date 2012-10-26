/*
 * This file shows how to render basic text
 */
import device as device;
import ui.View as View;

var TTFView = Class(View, function() {
	this._renderText = function(ctx, text, y) {
		ctx.fillStyle = "#FFFFFF";
		ctx.font = "20px Verdana";
		ctx.fillText(text, (device.width - ctx.measureText(text).width) / 2, y);
	};

	this.render = function(ctx) {
		this._renderText(ctx, "The quick brown fox jumped", 50);
		this._renderText(ctx, "over the lazy dogs back", 100);
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

	this.initUI = function () {
		new TTFView({
			superview: this.view,
			width: device.width,
			height: device.height
		});
	};

	this.launchUI = function () {};
});