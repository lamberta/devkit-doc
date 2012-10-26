import device as device;

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		this.view.render = bind(this, "render");
		this.view.onInputStart = bind(this, "onInputStart");
		this.view.onInputMove = bind(this, "onInputMove");
		this.view.onInputSelect = bind(this, "onInputSelect");

		this._pixelShift = 3;
		this._pixelSize = 1 << this._pixelShift;

		var Canvas = new device.get("Canvas");
		this._buffer = new Canvas({width: 120, height: 500});
		this._ctx = this._buffer.getContext("2d");
		this._ctx.fillStyle = "#FFFFFF";
		this._ctx.fillRect(0, 0, device.width, device.height);
		this._ctx.fillStyle = "#888888";
	};

	// Bresenham's line algorithm: http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
	this._renderLine = function(ctx) {
		// Translate coordinates
		var x1 = this._startX;
		var y1 = this._startY;
		var x2 = this._endX;
		var y2 = this._endY;

		// Define differences and error check
		var dx = Math.abs(x2 - x1);
		var dy = Math.abs(y2 - y1);
		var sx = (x1 < x2) ? 1 : -1;
		var sy = (y1 < y2) ? 1 : -1;
		var err = dx - dy;

		ctx.fillRect(x1 << this._pixelShift, y1 << this._pixelShift, this._pixelSize, this._pixelSize);

		while (!((x1 == x2) && (y1 == y2))) {
			var e2 = err << 1;
			if (e2 > -dy) {
				err -= dy;
				x1 += sx;
			}
			if (e2 < dx) {
				err += dx;
				y1 += sy;
			}
			ctx.fillRect(x1 << this._pixelShift, y1 << this._pixelShift, this._pixelSize, this._pixelSize);
		}
	};

	this.render = function(ctx) {
		ctx.drawImage(this._buffer, 0, 0);
		if (this._startX) {
			this._renderLine(ctx);
		}
	};

	this.onInputStart = function(evt, pt) {
		this._startX = pt.x >> this._pixelShift;
		this._startY = pt.y >> this._pixelShift;
		this._endX = pt.x >> this._pixelShift;
		this._endY = pt.y >> this._pixelShift;
	};

	this.onInputMove = function(evt, pt) {
		this._endX = pt.x >> this._pixelShift;
		this._endY = pt.y >> this._pixelShift;
	};

	this.onInputSelect = function(evt, pt) {
		this._renderLine(this._ctx);
		this._startX = null;
	};

	this.launchUI = function () {};
});