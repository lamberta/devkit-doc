"use import";

import GC;
import .RobotView;

exports = Class(GC.Application, function() {
	this.initUI = function () {
		// Creating a new view:
		//   Views have a style property:
		//      style.x and style.y are the coordinates of the view's top left corner
		//      style.width and style.height are the view's dimensions

		// Get the center points so we can put the view there
		var midX = this._view.style.width / 2;
		var midY = this._view.style.height / 2;

		// To make it a child of the main view, specify its parent in the constructor
		// an imageView is just an view that displays an image.  
		new RobotView({
			x: midX,
			y: midY,
			width: 128,
			height: 128,
			parent: this._view
		});
	}
});


// Tick method
 

