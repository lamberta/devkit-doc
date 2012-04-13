"use import";

import GC;
import .MouseLogger;

exports = Class(GC.Application, function() {
	this._settings = {
		/**
		 * Draw an FPS counter in the top-left corner of the canvas
		 */
		showFPS: true,
		
		/**
		 * Normally we repaint the screen every tick.  For this demo,
		 * only repaint if an input event occurs (reduces CPU usage
		 * for input-driven applications) or if view.needsRepaint()
		 * is called on a subview.
		 */
		alwaysRepaint: false,
		
		/**
		 * When creating higher-level input events, we normally fire 
		 * input:move events even if the user is not generating them.
		 * This is because if a view is moving/scaling, the user is
		 * actually 'moving' relative to the coordinates of the view 
		 * (from the view's frame of reference).  Normally this is
		 * not noticeable, as it makes input events just 'work' as 
		 * expected.  However, since we log on input:move events,
		 * we don't want this behavior for this tutorial.
		 */
		continuousInputCheck: false
	};

	this.initUI = function() {
		this._view.addSubview(new MouseLogger());
	}
});

