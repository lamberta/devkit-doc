/*
 * This file shows different scaling and compression options.
 *
 * The metadata.json files in the resources/images subdirectories set the
 * properties which are applied to the images by the spriter.
 */
import device as device;
import ui.ImageView as ImageView;

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		this.view.updateOpts({backgroundColor: "#808080"});

		var left = (device.width - 80 * 3 + 5) / 2;

		// The first row does not apply any scaling or compression
		// In the second row the images scaled to 10 percent of their original size
		// In the third row the images are scaled 50 percent and png8 compression is used
		for (var y = 0; y < 3; y++) {
			for (var x = 0; x < 3; x++) {
				new ImageView({
					superview: this.view,
					x: left + x * 80,
					y: 10 + y * 80,
					width: 70,
					height: 70,
					image: "resources/images/" + String.fromCharCode(97 + y) + "/window" + (x + 1) + ".png"
				});
			}
		}
	};

	this.launchUI = function () {};
});
