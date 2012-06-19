"use import";

import GC;
import timestep.ScrollView as ScrollView;
import timestep.ImageView as ImageView;
import timestep.TextView as TextView;
import timestep.animate as animate;
import timestep.device as device;
import timestep.Timer as Timer;
import timestep.sound.AudioAPI as AudioAPI;

import .emerald.GridView as GridView;
import .emerald.Actor as Actor;

import .px;
import .Design;
import .Scoreboard;
import .DPadView;
import .actors.JPActor as JPActor;
import .actors.Hero as Hero;
import .actors.Marble as Marble;

/*
 * Audio
 */

var audio = new AudioAPI({
	path: 'resources/'
});

audio.addSound('taltal', { background: true, loop: true });
audio.addSound('yoshi', { background: false, loop: false });
audio.addSound('mushroom', { background: false, loop: false });

/*
 * Game entry point.
 */

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true,
		width: px(480),
		height: px(320)
	};

	this.addScore = function (d) {
		this.score.update(this.score.value + d);

		// Level up!
		if (this.score.value >= this.level.points) {
			audio.play('mushroom');
			this.buildLevel(Design.levels[this.levelId++] || Design.levels[this.levelId = 0]);
		}
		// You earned an emerald.
		else {
			audio.play('yoshi');
		}
	}

	this.initUI = function() {

		// Create the background.

		this.bg = new GridView({
			parent: this.view, 
			x: 0, y: 0, 
			tileset: Design.tileset,
			tileWidth: Design.tileUnit,
			tileHeight: Design.tileUnit
		});

		// Score.

		this.score = new Scoreboard({
			parent: this.view
		});

		// Hero controls.

		this.dpad = new DPadView({parent: this.view})

		// Restart button.

		this.restart = new ImageView({
			parent: this.view, 
			x: px(170), y:device.height-px(50), 
			height: px(30), width: px(30), 
			image: 'resources/restart.png'
		})

		this.restart.onInputStart = function () {
			GC.app.rebuildLevel();
		}

		// Jetpack button.

		this.button = new ImageView({
			parent: this.view, 
			x: device.width-px(60), y:device.height-px(60), 
			height: px(60), width: px(60), 
			image: 'resources/button.png'
		})

		this.button.onInputStart = function (e) {
			e.cancel();

			GC.app.hero.fly();
			GC.app.button.setImage('resources/button-go.png');

			this.style.update({anchorX: px(30), anchorY: px(30), r: 0})
			animate(this)
              .now({r: Math.PI * 2}, 3000, animate.easeIn)
              .then({r: 0}, 0);
		}
		this.button.onInputOut = function (e) {
			//e.cancel();
			if (GC.app.bg.doesOverlap(GC.app.hero.getBoundingShape(), [Design.tiles.LADDER]))
				GC.app.hero.climb()
			else
				GC.app.hero.fall()
			GC.app.button.setImage('resources/button.png');

		}
		this.button.onInputMove = function (e) {
			e.cancel();
		}

		// Collisions.

		this.engine.subscribe('Tick', this, function () {
			for (var i = 0; i < this.baddies.length; i++)
				if (this.hero.hits(this.baddies[i])) {
					this.reset();
					return;
				}

			this.bg.style.y = -Math.max(0,
				Math.min(this.hero.style.y - device.height/2,
					(this.bg.grid.length * this.bg.tileHeight) - device.height))
			this.bg.style.x = (device.width - (this.bg.grid[0].length * this.bg.tileWidth))/2
		});
	}

	this.launchUI = function() {
		this.levelId = 0;
		this.buildLevel(Design.levels[0]);
	}

	this.rebuildLevel = function () {
		this.buildLevel(this.level);
	}

	this.reset = function () { /* defined by current level */ }

	this.buildLevel = function (level) {
		this.level = level;

		// Clear actors.
		this.bg.removeAllSubviews();
		this.bg.load(level.world);
		this.score.update(0);

		audio.playBackgroundMusic('taltal');

		// Initialize hero from Design.
		var hero = this.hero = new Hero({parent: this.bg});
		this.hero.startAnimation('moving');
		// Initialize bad guys from Design.
		var baddies = this.baddies = [];
		for (var i = 0; i < level.baddies.length; i++) {
			var baddie = new Marble({parent: this.bg});
			baddies.push(baddie);
			level.baddies[i][2] == 'left' ? baddie.goLeft() : baddie.goRight();
			baddie.startAnimation('right');
		}

		// Reset positions.
		this.reset = function (hard) {
			if (hard) {
				GC.app.buildLevel(level);
				return;
			}

			hero.position(Design.tileUnit*level.player[0], Design.tileUnit*level.player[1]);
			hero.clearX().clearY().velocity(0, 0).accelerate(0, 0);
			hero.fall();
			for (var i = 0; i < baddies.length; i++) {
				baddies[i].position(level.baddies[i][0]*Design.tileUnit, level.baddies[i][1]*Design.tileUnit);
				baddies[i].clearX().clearY().velocity(0, 0).accelerate(0, 0);
				level.baddies[i][2] == 'left' ? baddie.goLeft() : baddie.goRight();
				baddies[i].fall();
			}
		}

		this.reset();
	}

	this.launchSinglePlayerGame = function() {
		// ...
	}

	this.launchMultiplayerGame = function() {
		// ...
	}
});
