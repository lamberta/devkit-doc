"use import";
/******************************************
 * spaceship.png by  Killy Overdrive for
 * opengameart.org
 ******************************************/
import timestep.Sprite;
import timestep.KeyListener;

TeaLeaf.ui.createApp();
var mainView = TeaLeaf.ui.getView();
var keyListener = new KeyListener();

var x = mainView.style.width/2 -64;
var y = mainView.style.height/2 -64;


var ship = new timestep.Sprite({
	x:x,
	y:y,
	width:128,
	height:128,
	animations: {
		left: {
			width: 128,
			height: 128,
			imageUrl: 'images/spaceship.png',
			frameRate: 7,
			frames: [ 
				[384,0], 
				[256, 0], 
				[128, 0], 
				[0, 0], 
				[128, 0], 
				[256, 0], 
				[384, 0]
			],
		},
		right: {
			width: 128,
			height: 128,
			imageUrl: 'images/spaceship.png',
			frameRate: 7,
			frames: [ 
				[384, 0], 
				[512, 0], 
				[640, 0], 
				[768, 0], 
				[640, 0],
				[512, 0],
				[384, 0]
			],
		},
		rest: {
			width:128,
			height:128,
			imageUrl: 'images/spaceship.png',
			frameRate:1,
			frames: [[384, 0]]
		}
	},
	defaultAnimation:'rest',
	parent:mainView

});



mainView.tick = function(dt) {
	var events = keyListener.popEvents();
	for (var i = 0; i < events.length; i++) {
		var event = events[i];
		if (event.code == KeyListener.LEFT && event.lifted) {
			ship.startAnimation('left', {iterations:1});
		} else if (event.code == KeyListener.RIGHT && event.lifted) {
			ship.startAnimation('right', {iterations:1});
		}
	}
}

ship.startAnimation('rest');


