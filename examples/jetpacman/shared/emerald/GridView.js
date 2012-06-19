"use import";

import timestep.ImageView as ImageView;

exports = Class(ImageView, function (supr) {
	this.init = function (opts) {
		supr(this, 'init', arguments);

		this.tileWidth = opts.tileWidth || 32;
		this.tileHeight = opts.tileHeight || 32;
		this.tileset = opts.tileset;
	};

	this.load = function (grid) {
		this.grid = JSON.parse(JSON.stringify(grid));

		this.tiles = []
		for (var y = 0; y < this.grid.length; y++) {
			var row = [];
			this.tiles.push(row);
			for (var x = 0; x < this.grid[y].length; x++) {
				var image = new ImageView({parent: this, x: x*this.tileWidth, y: y*this.tileHeight,
					image: this.tileset[this.grid[y][x]], width: this.tileWidth, height: this.tileHeight});
				row.push(image);
				if (!this.tileset[this.grid[y][x]])
					image.hide()
			}
		}
	}

	this.getTile = function (x, y) {
		return this.grid[y] && this.grid[y][x];
	}

	this.setTile = function (x, y, tile) {
		if (this.tiles[y][x]) {
			if (tile == null) {
				this.tiles[y][x].hide()
			} else {
				this.tiles[y][x].show()
				this.tiles[y][x].setImage(this.tileset[tile])
			}
			this.grid[y][x] = tile;
		}
	}

	this.isTile = function (x, y, tiles) {
		for (var i = 0; i < tiles.length; i++)
			if (this.getTile(x, y) == tiles[i]) return true;
		return false;
	}

	this.isTileInArea = function (x, y, width, height, tiles) {
		for (var i = x; i < x + width; i++)
			for (var j = y; j < y + height; j++)
				if (this.isTile(i, j, tiles)) return true;
		return false;
	};

	this.getOverlapArea = function (rect, fudge) {
		fudge = fudge || 0;
		var y = (rect.y % this.tileHeight <= fudge ? (((rect.y/this.tileHeight)|0)*this.tileHeight) : rect.y);
		var x = (rect.x % this.tileWidth <= fudge ? (((rect.x/this.tileWidth)|0)*this.tileWidth) : rect.x);
		var ty0 = Math.floor(y / this.tileHeight);
		var ty1 = Math.ceil((y + rect.height) / this.tileHeight);
		var tx0 = Math.floor(x / this.tileWidth);
		var tx1 = Math.ceil((x + rect.width) / this.tileWidth);
		return { x: tx0, width: tx1 - tx0, y: ty0, height: ty1 - ty0 }
	}

	this.doesOverlap = function (rect, tiles) {
		var overlap = this.getOverlapArea(rect, 0);
		return this.isTileInArea(overlap.x, overlap.y, overlap.width, overlap.height, tiles);
	}

	this.eachOverlapped = function (rect, tiles, cb) {
		var overlap = this.getOverlapArea(rect, 0);
		for (var i = overlap.x; i < overlap.x + overlap.width; i++)
			for (var j = overlap.y; j < overlap.y + overlap.height; j++)
				if (this.isTile(i, j, tiles))
					cb(i, j, rect.x-(i*this.tileWidth), rect.y-(j*this.tileHeight))
		return this;
	}
})