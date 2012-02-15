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

		// Respond to user input
		this.view.subscribe("InputStart", this, "_onInputStart");
		this.view.subscribe("InputMove", this, "_onInputMove");

		// Spawn an invader every so often
		this._spawnHandle = setInterval(bind(this, "_spawnInvader"), 2000);

		// Spawn an invader right away
		this._spawnInvader();

	};

	this._onInputStart = function (e, pt) {
		this._movePlayer(pt);
	};

	this._onInputMove = function (e, pt) {
		this._movePlayer(pt);
	};

	this._movePlayer = function (pt) {
		// Clear out any old animations
		var anim = this._player.animate();
		anim.finishNow();

		// Ensure player view doesn't leave the viewable screen
		var halfWidth = (this._player.style.width / 2);
		pt.x = math.util.clip(pt.x, halfWidth, this.view.style.width - halfWidth);

		// Animate to the new point
		var pixelsPerSecond = 300;
		var playerCenterX = this._player.style.x + halfWidth;
		var distance = Math.abs(playerCenterX - pt.x);
		var duration = (distance / pixelsPerSecond) * 1000;
		anim.now({
			x: pt.x - halfWidth
		}, duration, animate.linear);
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
