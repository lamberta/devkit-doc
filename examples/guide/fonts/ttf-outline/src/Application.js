/*
 * This file shows how to render text with an outline.
 */
import device as device;
import ui.View as View;

var TTFView = Class(View, function() {
	// Rendering strokeText is not supported,
	// this function shows an alternative way to create an outline...
	this._renderOutlineText = function(ctx, text, x, y) {
		var fillStyle = ctx.fillStyle;
		ctx.fillStyle = ctx.strokeStyle;

		for (var i = 0; i < 4; i++) {
			ctx.fillText(text, x - 1 + (i & 1) * 2, y - 1 + (i >> 1) * 2);
		}
		ctx.fillStyle = fillStyle;
		ctx.fillText(text, x, y);
	};

	this._renderText = function(ctx, text, y) {
		ctx.fillStyle = "#FFFFFF";
		ctx.strokeStyle = "#FF0000";
		ctx.font = "30px Verdana";
		this._renderOutlineText(ctx, text, (device.width - ctx.measureText(text).width) / 2, y);
	};

	this.render = function(ctx) {
		this._renderText(ctx, "The quick brown fox", 50);
		this._renderText(ctx, "jumped over", 100);
		this._renderText(ctx, "the lazy dogs back", 150);
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