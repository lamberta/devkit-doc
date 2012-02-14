"use import";

import GC;
import math.util;
import timestep.ImageView as ImageView;
import timestep.animate as animate;

import .view.InvaderView as InvaderView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	this.initUI = function() {

		// Setup the player
		this._player = new ImageView({
			parent: this.view,
			image: "media/images/player.png",
			x: this.view.style.width / 2 - 32,
			y: this.view.style.height - 64,
			width: 64,
			height: 64
		});

		// Spawn an invader every so often
		this._spawnHandle = setInterval(bind(this, "_spawnInvader"), 2000);

		// Spawn an invader right away
		this._spawnInvader();

	};

	this._spawnInvader = function () {

		// Spawn the invaders at random locations along the X axis
		var spawnX = math.util.random(0, this.view.style.width - 64);

		// Create a new InvaderView
		var invader = new InvaderView({
			parent: this.view,
			x: spawnX,
			y: -64
		});

		// Vary the speed at which the invaders fall
		var delay = math.util.randomInclusive(3000, 5000);

		// Animate the invader!
		var anim = animate(invader);

		// Move towards the bottom of the screen using the random delay
		anim.now({
			y: this.view.style.height
		}, delay, animate.linear);

		// Remove the invader once it's off the screen
		anim.then(bind(this, function () {
			invader.removeFromSuperview();
			delete invader;
		}));

	};

});
