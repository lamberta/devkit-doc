/*
 * This file demonstrates how to set the source location of the image within an image map.
 */
import ui.ImageView as ImageView;

var SheetView = Class(ImageView, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [opts]);

		// The map contains three rows and three columns of images...
		var map = this.getImage().getMap();

		// Get the initial location,
		// if the image is packed in a sprite sheet then the left top
		// position is probably not (0, 0)
		this._offsetX = map.x;
		this._offsetY = map.y;

		// Get the size of the image in the sprite sheet,
		// it is posible that the image is scaled
		this._sizeX = (map.width / 3) | 0;
		this._sizeY = (map.height / 3) | 0;

		this._index = 0;
		this._dt = 500;
	};

	this.tick = function(dt) {
		this._dt += dt;
		if (this._dt > 500) {
			this._dt %= 500;

			// Change the index, there are nine images...
			this._index = (this._index + 1) % 9;

			var map = this.getImage().getMap();

			// Use the values from the initial map...
			map.width = this._sizeX;
			map.height = this._sizeY;
			map.x = this._offsetX + ((this._index /3) | 0) * this._sizeX;
			map.y = this._offsetY + (this._index % 3) * this._sizeY;
		}
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

	this.initUI = function() {
		new SheetView({
			superview: this.view,
			x: 10,
			y: 10,
			width: 26 * 3,
			height: 26 * 3,
			image: "resources/images/stars.png"
		});
	};

	this.launchUI = function () {};
});
