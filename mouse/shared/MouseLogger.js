"use import";

import timestep.ui.Console;

exports = Class(timestep.ui.Console, function(supr) {
	
	// onInputScroll is called whenver the mouse wheel is scrolled on
	// the view.  pt is the x and y coordinates of the mouse when it was 
	// scrolled.  evt.scrollDelta is the magnitude and direction of the scroll -
	//  > 0 means up, < 0 means down.
	this.onInputScroll = function(evt, pt) {
		this.log(pt.x + ',' + pt.y + ': scroll event ' + (evt.scrollDelta > 0 ? 'up' : 'down') + ' (' + evt.scrollDelta + ')');
	}

	// onInputStart is called when a mouse click starts on a view.  It does not
	// wait for the click to be released like onInputSelect
	this.onInputStart = function(evt, pt) {
		this.log(pt.x + ',' + pt.y + ': "input:start" event'); //the point the mouse moved from
	}

	// onInputMove is called whenver the mouse moves over the view
	this.onInputMove = function(evt, pt) {
		this.log(pt.x + ',' + pt.y + ': "input:move" event'); //the point the mouse moved from
	}

	this.onInputSelect = function(evt, pt) {
		this.log(pt.x + ',' + pt.y + ': "input:select" event');
	}
	
});

