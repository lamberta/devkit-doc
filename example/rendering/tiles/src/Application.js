import device as device;
import .TileView as TileView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
		var Canvas = device.get("Canvas");

		var sizeX = 20;
		var sizeY = 20;

		this._cnt = 0;
		this._canvasTiles = new Canvas({width: 40 * sizeX, height: 40 * sizeY});
		this._contextTiles = this._canvasTiles.getContext('2d');
		for (b = 0; b < 40; b++) {
			for (a = 0; a < 40; a++) {
				var c1 = (~~(64 + (a / 40 * 191))).toString(16)
				var c2 = (~~(64 + (b / 40 * 191))).toString(16)
				if (c1.length < 2) { c1 = '0' + c1; }
				if (c2.length < 2) { c2 = '0' + c2; }

				this._contextTiles.fillStyle = '#' + c1 + '00' + c2;
				this._contextTiles.fillRect(a * sizeX, b * sizeY, sizeX, sizeY);

				this._contextTiles.fillStyle = '#000000';
				this._contextTiles.fillText(b * 40 + a, a * sizeX + 2, b * sizeY + 10)
			}
		}

		this._tileView = new TileView({
			superview: this.view,
			width: device.width,
			height: device.height,
			sizeX: 48,
			sizeY: 48,
			renderTileCB: bind(this, "_renderTile")
		});
		this._tileView.tick = bind(this, "tick");
	};

	this._renderTile = function(ctx, offsetX, offsetY, x, y) {
		ctx.drawImage(this._canvasTiles, offsetX * 20, offsetY * 20, 20, 20, x, y, 48, 48);
	};

	this.tick = function(dt) {
		this._cnt += dt / 10;
		this._tileView.scrollHorizontal(~~(Math.sin(this._cnt * 0.02) * 2));
		this._tileView.scrollVertical(~~(Math.sin(this._cnt * 0.025) * 3));
	};

	this.launchUI = function() {};
});