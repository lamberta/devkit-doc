"use import";

import timestep.ui.Console;

var app = new GCApp(),
	mainView = app.getView();

var console = new timestep.ui.Console({x: 25, parent: mainView});
logger.setListener(bind(console, 'log')); // where does logger go?

mainView.tick = function(dt) {
	// keyListener.popEvents will return an array of all events that 
	// have happened since it was last called.
	var keyListener = app.getKeyListener();
	
	// IMPORTANT: keyListener might not exist for some devices!
	if (keyListener) {
		keyEvents = keyListener.popEvents();
	
		// log the key up/down events
		for (var i = 0; i < keyEvents.length; i++) {
			var evt = keyEvents[i];
			logger.log(evt.code);
			// evt.code is the keycode of the key that raised the event
			if (evt.code == keyListener.LEFT) {
				//if evt.lifted is true, it means that the evt is for
				// a key being lifted.  Otherwise the key was pressed.
				if (evt.lifted) {
					logger.log('left arrow up');
				} else {
					logger.log('left arrow down');
				}
			} else if (evt.code == keyListener.RIGHT) {
				if (evt.lifted) {
					logger.log('right arrow up');
				} else {
					logger.log('right arrow down');
				}
			}
		}
		
		// check for keys held down
		var pressed = keyListener.getPressed();
		if (keyListener.LEFT in pressed) {
			logger.log('left arrow pressed');
		}
		
		if (keyListener.RIGHT in pressed) {
			logger.log('right arrow pressed');
		}
	}
}

