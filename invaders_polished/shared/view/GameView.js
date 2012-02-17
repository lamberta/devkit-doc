"use import";

import math.util;
import math2D.intersect as intersect;
import timestep.View as View;
import timestep.TextView as TextView;
import timestep.animate as animate;

import .LivesView;
import .PlayerView;
import .BulletView;
import .InvaderView;

exports = Class(View, function (supr) {

	this.init = function (opts) {

		supr(this, "init", [opts]);

		this._score = 0;

		// Use a TextView to display the player's score on the screen
		this._scoreView = new TextView({
			parent: this,
			text: "Score: 0",
			color: "white",
			fontSize: 20,
			textAlign: "left",
			x: 10,
			height: 20
		});

		// Use a TextView to display the player's score on the screen
		this._livesView = new LivesView({
			parent: this,
			x: 238,
			y: 10
		});

		// Setup the player
		this._player = new PlayerView({
			parent: this,
			x: this.style.width / 2 - 32,
			y: this.style.height - 64,
		});

		// Timers
		this._invaderSpawnTimer = 0;
		this._playerAttackTimer = 0;

		// Respond to user input
		this.subscribe("InputStart", this, "_onInputStart");
		this.subscribe("InputMove", this, "_onInputMove");

	};

	this.tick = function (dt) {

		if (!this._active) {
			return;
		}

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
		var subviews = this._subviews;
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

	this.show = function () {
		supr(this, "show");

		this._active = true;
		this._livesView.reset();
	};

	this._spawnInvader = function () {

		// Spawn the invaders at random locations along the X axis
		var spawnX = math.util.random(0, this.style.width - 64);

		// Create a new InvaderView
		var invader = new InvaderView({
			parent: this,
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
			y: this.style.height
		}, delay, animate.linear);

		// Remove the invader once it's off the screen
		anim.then(bind(this, function () {
			invader.removeFromSuperview();
			delete invader;
		}));

	};

});
