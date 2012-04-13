"use import";

import GC;
import timestep.Sprite;

exports = Class(GC.Application, function(supr) {

 this._settings = {
	 showFPS: true,
	 mergeMoveEvents: true,
	 alwaysRepaint: true,
	 repaintOnEvent: true,
	 logsEnabled: true,
	 noTimestep: false
 };

 // ========= main entry points =============



	this.launchUI = function() {
		logger.log('starting the app');	
		this.startGame();
	}

	this.launchSinglePlayerGame = function(opts) {
		this.startGame();		
	}

	this.launchMultiPlayerGame = function(state) {
		this.startGame();
	}

	this.startGame = function() { 

		var keyListener = this._app.getKeyListener();

		var x = this._view.style.width/2 -64;
		var y = this._view.style.height/2 -64;

		var ship = new timestep.Sprite({
			x:x,
			y:y,
			width:128,
			height:128,
			animations: {
				left: {
					width: 128,
					height: 128,
					imageURL: 'images/spaceship.png',
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
					imageURL: 'images/spaceship.png',
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
					imageURL: 'images/spaceship.png',
					frameRate:1,
					frames: [[384, 0]]
				}
			},
			defaultAnimation:'rest',
			parent:this._view

		});

		this._view.tick = function(dt) {
			var events = keyListener.popEvents();
			for (var i = 0; i < events.length; i++) {
				var event = events[i];
				if (event.code == keyListener.LEFT && event.lifted) {
					ship.startAnimation('left', {iterations:1});
				} else if (event.code == keyListener.RIGHT && event.lifted) {
					ship.startAnimation('right', {iterations:1});
				}
			}
		}

		ship.startAnimation('rest');
	}


});
