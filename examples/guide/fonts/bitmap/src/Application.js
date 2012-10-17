/*
 * This file shows how to render bitmap fonts
 */
import device as device;
import ui.TextView as TextView;

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
		ctx.font = "36px customFont1 color";
		ctx.textBaseline = "top";
		ctx.fillText(s, (device.width - ctx.measureText(s).width) / 2, 100);
	};

	this.launchUI = function () {};
});
