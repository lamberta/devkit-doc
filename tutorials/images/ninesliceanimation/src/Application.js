/*
 * This file demonstrates how to use 9-slice in an animating scroll.
 */
import device as device;
import ui.ImageView as ImageView;
import ui.ImageScaleView as ImageScaleView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		// The device width is used to center the image...
		this._imageScaleView = new ImageScaleView({
			superview: this.view,
			x: (device.width - 165) / 2,
			y: 15,
			width: 165,
			height: 50,
			image: "resources/images/scrollBottom.png",
			scaleMethod: "9slice",
			// These are the slices from the source image...
			//
			// If the sum of the slices in a direction doesn't match the image size
			// of that given direction then the slice size is scaled, for example:
			//
			// The image has a width of 120 pixels,
			// the horizontal slices are 50, 60 and 70
			// then the slices are scaled with: 120 / (50 + 60 + 70)
			sourceSlices: {
				horizontal: {left: 120, center: 120, right: 120},
				vertical: {top: 10, middle: 215, bottom: 75}
			},
			// These are the destination slices...
			//
			// If the images width is larger then the sum of the horizontal
			// slices then the rest value is filled with the center slice.
			//
			// If the sum of the horizontal slices exceeds the width then
			// the slices are scaled to fit and no center is used.
			destSlices: {
				horizontal: {left: 55, right: 55},
				vertical: {top: 5, bottom: 50}
			}
		});

		// Put an image on top of the animating image...
		new ImageView({
			superview: this.view,
			x: (device.width - 165) / 2,
			y: 10,
			width: 165,
			height: 35,
			image: "resources/images/scrollTop.png"
		});

		this.animate();
	};

	this.animate = function() {
		// A continuous animation...
		this._imageScaleView.getAnimation()
			.clear()
			.then({height: 250}, 350) // Increase the height, the center stretches
			.wait(1500)
			.then({height: 70}, 350) // Decrease the height
			.wait(1500)
			.then(bind(this, "animate")); // Run it again
	};

	this.launchUI = function () {};
});