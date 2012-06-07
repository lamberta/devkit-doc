"use import";

import GC;
import timestep.ImageView as ImageView;
import timestep.device as device;
import ..emerald.Actor as Actor;
import ..px;
import ..Design;

exports = Class(Actor, function (supr) {
	this.init = function (opts) {
		opts.width = Design.tileUnit;
		opts.height = Design.tileUnit;
		supr(this, 'init', arguments);

		this.isHero = opts.isHero;
		// Default state
		this.fall();
	}

	/* Detect delta between current position and nearest obstacle. */
	this.availableSpace = function (x, y, dx, dy) {
		var FLOORS, WALLS, CEIL;
		var width = this.style.width, height = this.style.height;
		//FLOORS = this.state == 'FALL' ? [Design.tiles.BRICKS, Design.tiles.LADDER] : [Design.tiles.BRICKS];
		FLOORS = CEIL = WALLS = [Design.tiles.BRICKS];

		// Ceil
		if (GC.app.bg.isTileInArea(Math.floor(x / width), Math.floor((y + dy) / height), x % width ? 2 : 1, 1, CEIL)) {
			dy = -(y % height);
		}
		// Floor
		if (GC.app.bg.isTileInArea(Math.floor(x / width), Math.ceil((y + dy) / height), x % width ? 2 : 1, 1, FLOORS)) {
			if (y % height) dy = height - (y % height);
			else dy = 0;
		}
		// Don't fall down ladders immediately.
		else if (this.canClimb() && this.state != 'CLIMB' && !GC.app.bg.doesOverlap(this.getBoundingShape(), [Design.tiles.LADDER])) {
			dy = 0;
		}
		// Left
		if (GC.app.bg.isTileInArea(Math.floor((x + dx) / width), Math.floor(y / height), 1, y % height ? 2 : 1, WALLS)) {
			if (!this.isHero)
				console.log('LEFT WALL')
			dx = -(x % width);
		}
		// Right
		if (GC.app.bg.isTileInArea(Math.ceil((x + dx) / width), Math.floor(y / height), 1, y % height ? 2 : 1, WALLS)) {
			if (x % width) dx = width - (x % width);
			else dx = 0;
		}

		return [dx, dy];
	};

	this.onMove =  function (x, y) {
		var COLLECT = px(20);

		// Only a TRUE HERO can collect emeralds we pass over.
		if (this.isHero)
			GC.app.bg.eachOverlapped(this.getBoundingShape(), [Design.tiles.EMERALD], function (i, j, di, dj) {
				if (di < -COLLECT || di > COLLECT || dj < -COLLECT || dj > COLLECT) {
					return;
				}
				GC.app.bg.setTile(i, j, null)
				GC.app.addScore(1);
			});

		// Check whether we are on a ladder or not, still.
		var onLadder = this.onLadder();
		if (this.state == 'CLIMB' && !onLadder)
			this.fall(true);
		else if (this.state == 'FALL' && onLadder)
			this.climb();
	}

	this.onLadder = function () {
		var CLIMB_THRESH = px(8);
		var onLadder = null;
		GC.app.bg.eachOverlapped(this.getBoundingShape(), [Design.tiles.LADDER], function (i, j, di, dj) {
			if (di >= -CLIMB_THRESH && di <= CLIMB_THRESH) // Only bound X.
				onLadder = [di, dj];
		});
		return onLadder;
	}

	this.canClimb = function () {
		if (this.state == 'CLIMB') return true;
		// Ladder directly beneath us.
		if (this.style.y % Design.tileUnit == 0) {
			var overlap = GC.app.bg.getOverlapArea(this.getBoundingShape());
			return GC.app.bg.isTileInArea(overlap.x, overlap.y + 1, overlap.width, overlap.height, [Design.tiles.LADDER]); 
		}
		return false;
	}

	this.climb = function () {
		this.state = 'CLIMB'
		this.clearY().accelerate(null, 0).velocity(null, 0);
		return this;
	}

	this.fly = function () {
		this.state = 'FLY'
		this.clearY()
			.accelerate(null, px(-13.4))
			.atVelocityY(px(-5), -1, function () {
				this.accelerate(null, 0);
			})
			.atVelocityY(0, 1, function () {
				this.accelerate(null, px(-13.4));
			});
		return this;
	}

	this.fall = function (abrupt) {
		this.state = 'FALL'
		this.clearY()
			.accelerate(null, px(16))
		if (abrupt)
			this.velocity(null, 0);
		return this;
	}

	this.left = function () {
		this.clearX().velocity(px(-2), null);
		return this;
	}

	this.right = function () {
		this.clearX().velocity(px(2), null);
		return this;
	}

	this.up = function () {
		if (this.state == 'CLIMB')
			this.clearY().velocity(null, px(-2));
		return this;
	}

	this.centerX = function () {
		this.clearX().velocity(0, null);
		return this;
	}

	this.down = function () {
		if (this.canClimb()) {
			this.climb()
			GC.app.hero.clearY().velocity(null, px(2));
		}
		return this;
	}

	this.centerY = function () {
		if (this.state == 'CLIMB')
			this.clearY().velocity(null, 0);
		return this;
	}
});