"use import";

import GC;

exports = Class(GC.Application, function() {
	this.initUI = function() {
		
		// The top-level canvas view is a private property
		// of a GC Application. You can reference it from
		// within Application.js through the `_view` property.

		var view = this._view;
		
		// You can get raw access to the canvas of a view
		// by overriding its render function
		view.render = function(ctx, opts) {
			
			// Here, `this` refers to the view.  The `style` 
			// property provides rendering information about
			// the view.

			var width = this.style.width;
			var height = this.style.height;

			ctx.fillStyle = 'white';
			ctx.font = 'bold 15px Helvetica';
			ctx.textAlign = 'center';
			ctx.fillText('Hello, Canvas World!', width / 2, height / 2 - 40);

			ctx.fillStyle = 'rgb(255, 0, 0)';
			ctx.fillRect(width / 2 - 20, height / 2 - 20, 40, 40);

		}
	}

});