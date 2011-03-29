var app = new GCApp();

var mainView = app.getView();

//onInputSelect is called whenever the view is clicked on.
//pt is the x and y coordinates of the click
mainView.onInputSelect = function(evt, pt) {
	logger.log('Mouse clicked at ' + pt.x + ',' + pt.y);
}

//onInputScroll is called whenver the mouse wheel is scrolled on
//the view.  pt is the x and y coordinates of the mouse when it was 
//scrolled.  evt.scrollDelta is the magnitude and direction of the scroll -
// > 0 means up, < 0 means down.
mainView.onInputScroll = function(evt, pt) {
	logger.log('Mouse wheel scrolled ' + (evt.scrollDelta > 0 ? 'up' : 'down'));
}


//onInputMove is called whenver the mouse moves over the view
mainView.onInputMove = function(evt, pt) {
	//the point the mouse moved from
	var srcPt = evt.srcPt;	
}

//onInputStart is called when a mouse click starts on a view.  It does not
//wait for the click to be released like onInputSelect
mainView.onInputStart = function(evt, pt) {

}
