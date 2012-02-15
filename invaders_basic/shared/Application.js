"use import";

import GC;
import math.util;
import math2D.intersect as intersect;
import timestep.ImageView as ImageView;
import timestep.TextView as TextView;
import timestep.animate as animate;

import .view.PlayerView as PlayerView;
import .view.BulletView as BulletView;
import .view.InvaderView as InvaderView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	this.initUI = function() {

		// Keep track of the player's score
		this._score = 0;

		// Use a TextView to display the player's score on the screen
		this._scoreView = new TextView({
			parent: this.view,
			text: "Score: 0",
			color: "white",
			fontSize: 20,
			height: 20
		});

		// Setup the player
		this._player = new PlayerView({
			parent: this.view,
			x: this.view.style.width / 2 - 32,
			y: this.view.style.height - 64,
		});

		// Timers
		this._invaderSpawnTimer = 0;
		this._playerAttackTimer = 0;

		// Respond to user input
		this.view.subscribe("InputStart", this, "_onInputStart");
		this.view.subscribe("InputMove", this, "_onInputMove");

		// Hook into the root view's tick for game loop updates
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
			this._player.fire();
			this._playerAttackTimer = 0;
		}

		// Check collision
		// Loop over all the subviews and for each BulletView
		// found, check collision against the other subviews
		var subviews = this.view._subviews;
		for (var i = 0, j = subviews.length; i < j; ++i) {
			var view = subviews[i];
			if (view && view instanceof BulletView) {
				var kills = view.checkCollision(subviews);
				this._incrementScore(kills * 100);
			}
		}

	};

	this._incrementScore = function (amount) {
		if (amount > 0) {
			this._score += amount;
			this._scoreView.setText("Score: " + this._score);
		}
	};

	this._onInputStart = function (e, pt) {
		this._player.move(pt);
	};

	this._onInputMove = function (e, pt) {
		this._player.move(pt);
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

});
