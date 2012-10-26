## Rendering composite bitmap fonts

The SDK provides a tool to generate bitmap fonts,
With composite fonts both the text and the outline can be rendered.
The color can be set with the fillStyle and strokeStyle properties of the context.

If the font property in the context is followed by the value " composite" then
the composite bitmap font is rendered.

This demo uses two .png files generated with the font editor, one for the text and one for the outline.

@todo:
<img src="resources/fonts/customFont1_1_0.png" alt="a book screenshot" class="screenshot">
<img src="resources/fonts/customFont1_2_0.png" alt="a book screenshot" class="screenshot">

Import device to get the size of the screen...

~~~
import device as device;
~~~

Create an application, set the default properties:

~~~
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
~~~

The customFont1 is created with the font editor,
the files are located in "resources/fonts/"

~~~
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
~~~

The output should look like this screenshot:

<img src="screenshot.png" alt="a book screenshot" class="screenshot">