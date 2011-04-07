jsio('import timestep.ui.Console');

var app = new GCApp({
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
});

mainView = app.getView();

var console = new timestep.ui.Console({x: 25, parent: mainView});
logger.setListener(bind(console, 'log'));

// onInputScroll is called whenver the mouse wheel is scrolled on
// the view.  pt is the x and y coordinates of the mouse when it was 
// scrolled.  evt.scrollDelta is the magnitude and direction of the scroll -
//  > 0 means up, < 0 means down.
mainView.onInputScroll = function(evt, pt) {
	logger.log(pt.x + ',' + pt.y + ': scroll event ' + (evt.scrollDelta > 0 ? 'up' : 'down') + ' (' + evt.scrollDelta + ')');
}

// onInputStart is called when a mouse click starts on a view.  It does not
// wait for the click to be released like onInputSelect
mainView.onInputStart = function(evt, pt) {
	logger.log(pt.x + ',' + pt.y + ': "input:start" event'); //the point the mouse moved from
}

// onInputMove is called whenver the mouse moves over the view
mainView.onInputMove = function(evt, pt) {
	logger.log(pt.x + ',' + pt.y + ': "input:move" event'); //the point the mouse moved from
}

mainView.onInputSelect = function(evt, pt) {
	logger.log(pt.x + ',' + pt.y + ': "input:select" event');
}

