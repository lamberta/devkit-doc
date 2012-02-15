"use import";

import GC;
import math.util;
import math2D.intersect as intersect;
import timestep.ImageView as ImageView;
import timestep.TextView as TextView;
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
			height: 64,
			zIndex: 200
		});

		this._score = 0;

		this._scoreView = new TextView({
			parent: this.view,
			text: "Invaders killed: 0",
			color: "white",
			fontSize: 20,
			height: 20
		});

		// Timers
		this._invaderSpawnTimer = 0;
		this._playerAttackTimer = 0;

		// Respond to user input
		this.view.subscribe("InputStart", this, "_onInputStart");
		this.view.subscribe("InputMove", this, "_onInputMove");

		// Hook into the root view's tick for game update loop
		this.view.tick = bind(this, "_update");

	};

	this._update = function (dt) {

		// Spawn invaders every so often
		this._invaderSpawnTimer += dt;
		if (this._invaderSpawnTimer > 800) {
			this._spawnInvader();
			this._invaderSpawnTimer = 0;
		}

		// Player auto-fires every so often
		this._playerAttackTimer += dt;
		if (this._playerAttackTimer > 750) {
			this._playerAttack();
			this._playerAttackTimer = 0;
		}

		// Check collision
		var subviews = this.view._subviews;
		for (var i = 0, j = subviews.length; i < j; ++i) {
			var view = subviews[i];
			if (view && view.type == "bullet") {
				this._checkCollision(view);
			}
		}

	};

	this._checkCollision = function (bullet) {
		var subviews = this.view._subviews;
		for (var i = 0, j = subviews.length; i < j; ++i) {
			var view = subviews[i];
			if (
				view instanceof InvaderView &&
				intersect.rectAndRect(view.style, bullet.style)
			) {
				// Collision!
				this._incrementScore();
				view.removeFromSuperview();
				delete view;
				bullet.removeFromSuperview();
				delete bullet;
			}
		}
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
			y: -64,
			zIndex: 100
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

	this._playerAttack = function () {

		var bullet = new ImageView({
			parent: this.view,
			image: "media/images/player_bullet.png",
			x: this._player.style.x + this._player.style.width / 2 - 4,
			y: this._player.style.y + this._player.style.height / 2 - 4,
			width: 8,
			height: 8
		});

		// HACK!
		bullet.type = "bullet";

		var anim = animate(bullet);

		anim.now({
			y: -8,
		}, 3000, animate.linear);

		anim.then(bind(this, function () {
			bullet.removeFromSuperview();
			delete bullet;
		}));

	};

	this._incrementScore = function () {
		++this._score;
		this._scoreView.setText("Invaders killed: " + this._score);
	};

});
