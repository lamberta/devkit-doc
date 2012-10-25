/*
 * This file shows how to render bitmap fonts
 */
import device as device;

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		this.view.render = bind(this, "render");
	};

	// The customFont1 is created with the font editor,
	// the files are located in "resources/fonts/fonts.json"
	this.render = function(ctx) {
		var s = "Game {Closure}";
		var y = 10;

		ctx.fillStyle = "#0088DD";
		ctx.strokeStyle = "#FFDD00";
		ctx.font = "36px customFont1 composite";
		ctx.textBaseline = "top";
		while (y < device.height - 40) {
			ctx.strokeText(s, (device.width - ctx.measureText(s).width) / 2, y);
			ctx.fillText(s, (device.width - ctx.measureText(s).width) / 2, y);
			y += 40;
		}
	};

	this.launchUI = function () {};
});