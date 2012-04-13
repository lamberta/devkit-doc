"use import";

import math.util;
import timestep.util as util;
import timestep.Sprite as Sprite;
import timestep.TextView as TextView;

import shared.Player as Player;
import shared.Enemy as Enemy;
import shared.Rocket as Rocket;

var Game = exports = Class(function () {

	var enemies = {
		"asteroid": {
			health: 3,
			speed: 20,
			spriteX: 320,
			spriteY: 0
		},
		"ship_1": {
			health: 1,
			speed: 40,
			spriteX: 0,
			spriteY: 96,
			width: 32,
			height: 32
		}
	};

	this.init = function (opts) {

		opts = util.mergeDefaults(opts, {
			
		});

		this.view = opts.view;

		this._actorIdSeed = 0;
		this._actors = {};

		this._enemyCooldown = 0;
		this._enemyInterval = 200;

		this._kills = 0;

		this._initPlayer();

		this._killCounter = new TextView({
			parent: this.view,
			x: 10,
			y: (this.view.style.height - 30),
			zIndex: 10,
			bgcolor: "rgba(0, 0, 0, 0)",
			color: "rgb(255, 255, 255)",
			string: "Enemies Killed: 0"
		});

	};

	this._initPlayer = function () {
		var player = new Player();
		player.x = ((this.view.style.width / 2) - (player.width / 2));
		player.y = (this.view.style.height - (player.height * 1.5));
		this.addActor(player);
		this.player = player;
	};

	this.addActor = function (actor) {
		++this._actorIdSeed;
		var id = "a" + this._actorIdSeed;
		this._actors[id] = actor;
		this.view.addSubview(actor.sprite);
		return id;
	};

	this.removeActorById = function (id) {
		if (id in this._actors) {
			this.view.removeSubview(this._actors[id].sprite);
			delete(this._actors[id]);
		}
	};

	this.spawnEnemy = function (type, x, y) {
		if (!type in enemies) {
			logger.log("No enemy type:", type);
			return;
		}
		// TODO: Clone enemies[type]
		var opts = enemies[type];
		opts.x = x;
		opts.y = y;
		var enemy = new Enemy(opts);
		enemy.setDirection(0, 1);
		this.addActor(enemy);
		return enemy;
	};

	this._checkRocketCollision = function (rocket) {
		// TODO: Make not super slow!
		for (var id in this._actors) {
			var actor = this._actors[id];
			if (
				actor.alive
				&& actor instanceof Enemy
				&& rocket.collidesWith(actor)
			) {
				rocket.alive = false;
				actor.health -= 1;
				if (actor.health <= 0) {
					++this._kills;
					actor.alive = false;
					this._spawnExplosion(actor);
				}
			}
		}
	};

	this._spawnExplosion = function (actor) {

		var explosion = new Sprite({
			parent: this.view,
			x: ((actor.x + (actor.width / 2)) - 32),
			y: ((actor.y + (actor.height / 2)) - 32),
			width: 64,
			height: 64,
			animations: {
				idle: {
					width: 64,
					height: 64,
					imageURL: "media/images/explosion.png",
					frameRate: 15,
					frames: [
						[0, 0],
						[64, 0],
						[128, 0],
						[192, 0],
						[0, 64],
						[64, 64],
						[128, 64],
						[192, 64],
						[0, 128],
						[64, 128],
						[128, 128],
						[192, 128],
						[0, 192],
						[64, 192],
						[128, 192],
						[192, 192]
					]
				}
			},
			defaultAnimation: "idle"
		});

		var destroy = bind(this, function () {
			this.view.removeSubview(explosion);
			explosion = null;
		});

		explosion.startAnimation("idle", {
			iterations: 1,
			callback: destroy
		});

	};

	this._updateEnemies = function (dt) {

		this._enemyCooldown += dt;
		if (this._enemyCooldown >= this._enemyInterval) {

			switch (math.util.random(1, 5)) {
				case 1:
				case 2:
				case 3:
					var type = "ship_1";
					break;
				case 4:
					var type = "asteroid";
					break;
			}

			var enemy = this.spawnEnemy(type, 0, -200);
			enemy.x = math.util.random(0, (this.view.style.width - enemy.width));
			enemy.y = -(enemy.height);

			this._enemyCooldown = 0;

		}

	};

	this.update = function (dt) {

		this._updateEnemies(dt);

		for (var id in this._actors) {

			var actor = this._actors[id];

			if (!actor.alive) {
				this.removeActorById(id);
				continue;
			}

			actor.update(dt, this);

			// Move actor
			var px = ((actor.speed / 1000) * dt);
			actor.x += (actor.direction.x * px);
			actor.y += (actor.direction.y * px);

			// Check map bounds for collision
			if (actor.x < 0) {
				actor.x = 0;
			} else if (actor.x > (this.view.style.width - actor.width)) {
				actor.x = (this.view.style.width - actor.width);
			}

			if (actor instanceof Rocket) {
				this._checkRocketCollision(actor);
			}

			// Despawn enemies below the screen
			if (actor instanceof Enemy && actor.y > this.view.style.height) {
				actor.alive = false;
				continue;
			}

			// Despawn rockets above the screen
			if (actor instanceof Rocket && (actor.y + actor.height) < 0) {
				actor.alive = false;
				continue;
			}

		}

		this._killCounter._string = "Enemies Killed: " + this._kills;

	};

});
