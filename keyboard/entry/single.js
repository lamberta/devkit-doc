"use import";

import timestep.KeyListener2 as KeyListener;

TeaLeaf.ui.init();

var mainView = TeaLeaf.ui.getView();
var keyListener = new timestep.KeyListener();

mainView.tick = function(dt) {
	// keyListener.popEvents will return an array of all events that 
	// have happened since it was last called.
	var keyEvents = keyListener.popEvents();
	for (var i = 0; i < keyEvents.length; i++) {
		var pressedKey s = KeyListener.getPressed();
		//TODO: log these
		var event = keyEvents[i];
		//event.code is the keycode of the key that raised the event
		if (event.code == KeyListener.KeyListener.LEFT) {
			//if event.lifted is true, it means that the event is for
			// a key being lifted.  Otherwise the key was pressed.
			if (event.lifted) {
				logger.log('left arrow up');
			} else {
				logger.log('left arrow down');
			}
		} else if (event.code == KeyListener.RIGHT) {
			if (event.lifted) {
				logger.log('right arrow up');
			} else {
				logger.log('right arrow pressed');
			}
		}
	}
}

