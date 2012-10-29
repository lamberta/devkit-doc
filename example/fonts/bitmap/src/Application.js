//## Rendering bitmap fonts
//This file shows how to render bitmap fonts.
//The SDK provides a tool to generate bitmap fonts,
//when a bitmap font is created it can be rendered with the fillText method.
//If the font property in the context is followed by the value "color" then
//the coloured bitmap font is rendered.
//This demo uses a .png file generated with the font editor.

//@todo: <img src="resources/fonts/customFont1_0_0.png" alt="a book screenshot" class="screenshot">

//Import device to get the size of the screen...
import device as device;

//## Class: Application
//Create an application and set the default properties.
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

	//The customFont1 is created with the font editor,
	//the files are located in "resources/fonts/fonts.json"
	this.render = function(ctx) {
		var s = "Game {Closure}";
		var y = 10;

		ctx.font = "36px customFont1 color";
		ctx.textBaseline = "top";
		while (y < device.height - 40) {
			ctx.fillText(s, (device.width - ctx.measureText(s).width) / 2, y);
			y += 40;
		}
	};

	this.launchUI = function () {};
});

//The output should look like this screenshot:
//<img src="screenshot.png" alt="a book screenshot" class="screenshot">
