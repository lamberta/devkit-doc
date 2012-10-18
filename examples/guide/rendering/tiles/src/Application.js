import ui.View as View;

var canvasTiles = document.getElementById('tiles');
var contextTiles = canvasTiles.getContext('2d');

var canvasScreen = document.getElementById('screen');
var contextScreen = canvasScreen.getContext('2d');

var canvasBuffer = document.getElementById('buffer');
var contextBuffer = canvasBuffer.getContext('2d');

var _offsetX,
	_offsetY,
	_tileX,
	_tileY,
	_screenTileX,
	_screenTileY,
	_width,
	_height,
	_mainTileSizeX,
	_mainTileSizeY,
	_tilesX1,
	_tilesY1,
	_tilesX2,
	_tilesY2,
	_bufferSizeX,
	_bufferSizeY;

var cnt = 0;

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		_offsetX      = 0;
		_offsetY      = 0;
		_tileX        = 0;
		_tileY        = 0;
		_screenTileX  = 0;
		_screenTileY  = 0;
		_width        = device.width;
		_height       = device.height;
		_mainTileSizeX    = 20;
		_mainTileSizeY    = 20;
		_tilesX1      = Math.ceil(_width  / _mainTileSizeX);
		_tilesY1      = Math.ceil(_height / _mainTileSizeY);
		_tilesX2      = _tilesX1 + 1;
		_tilesY2      = _tilesY1 + 1;
		_bufferSizeX  = _tilesX2 * _mainTileSizeX;
		_bufferSizeY  = _tilesY2 * _mainTileSizeY;

		canvasBuffer.width  = _bufferSizeX;
		canvasBuffer.height = _bufferSizeY;

		canvasTiles.width  = 40 * _mainTileSizeX;
		canvasTiles.height = 40 * _mainTileSizeY;
		for (b = 0; b < 40; b++) {
			for (a = 0; a < 40; a++) {
				var c1 = (~~(64 + (a / 40 * 191))).toString(16)
				var c2 = (~~(64 + (b / 40 * 191))).toString(16)
				if (c1.length < 2) { c1 = '0' + c1; }
				if (c2.length < 2) { c2 = '0' + c2; }

				contextTiles.fillStyle = '#' + c1 + '00' + c2;
				contextTiles.fillRect(a * _mainTileSizeX + 0.5, b * _mainTileSizeY + 0.5, _mainTileSizeX - 1, _mainTileSizeY - 1);

				contextTiles.strokeStyle = '#000000';
				contextTiles.strokeRect(a * _mainTileSizeX + 0.5, b * _mainTileSizeY + 0.5, _mainTileSizeX - 1, _mainTileSizeY - 1);
				contextTiles.fillStyle = '#000000';
				contextTiles.fillText(b * 40 + a, a * _mainTileSizeX + 2, b * _mainTileSizeY + 10)
			}
		}

		this._renderTilesToBuffer(0, 0, _tilesX1, _tilesY1, 0, 0);
		/*
		var textview = new TextView({
			superview: this.view,
			text: "Hello, world!",
			color: "white"
		});
		*/
	};

	this._renderTilesToBuffer = function(startX, startY, endX, endY, offsetX, offsetY) {
		var a, b;

		if ((offsetX < 0) || (offsetY < 0)) { return; }

		b = 0;
		for (y = startY; y <= endY; y++) {
			a = 0;
			for (x = startX; x <= endX; x++) {
				contextBuffer.drawImage(canvasTiles, (a + offsetX) * _mainTileSizeX, (b + offsetY) * _mainTileSizeY, _mainTileSizeX, _mainTileSizeY,     x * _mainTileSizeX, y * _mainTileSizeY, _mainTileSizeX, _mainTileSizeY);
				a++;
			}
			b++;
		}
	};

	this._copyBuffer = function(sx, sy, sw, sh, dx, dy) {
		if ((sw <= 0) || (sh <= 0)) { return; }
		contextScreen.drawImage(canvasBuffer, sx, sy, sw, sh, dx, dy, sw, sh);
	};

	this._copyScreen = function() {
		var sizeX = _screenTileX * _mainTileSizeX,
			sizeY = _screenTileY * _mainTileSizeY,
			sx = 0,
			sy = 0,
			sw = device.width,
			sh = device.height,
			dx = 0,
			dy = 0;

		if ((_screenTileX === 0) && (_screenTileY === 0)) {
			copyBuffer(_offsetX, _offsetY, sw, sh, dx, dy);
		} else if (_screenTileY === 0) {
			sx = _offsetX + sizeX;
			sy = _offsetY;
			sw = _bufferSizeX - _offsetX - sizeX;

			copyBuffer(sx, sy, sw, sh, dx, dy);

			sx = 0;
			sy = _offsetY;
			sw = sizeX + _offsetX - _mainTileSizeX;

			dx = _bufferSizeX - _offsetX - sizeX;

			copyBuffer(sx, sy, sw, sh, dx, dy);
		} else if (_screenTileX === 0) {
			sx = _offsetX;
			sy = _offsetY + sizeY;
			sh = _bufferSizeY - _offsetY - sizeY;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);

			sx = _offsetX;
			sy = 0;
			sh = sizeY + _offsetY - _mainTileSizeY;

			dy = _bufferSizeY - _offsetY - sizeY;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);
		} else {
			// Copy right bottom to left top...
			sx = _offsetX + sizeX;
			sy = _offsetY + sizeY;
			sw = _bufferSizeX - _offsetX - sizeX;
			sh = _bufferSizeY - _offsetY - sizeY;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);

			// Copy left top to right bottom...
			sx = 0;
			sy = 0;
			sw = _offsetX + sizeX - _mainTileSizeX;
			sh = _offsetY + sizeY - _mainTileSizeY;

			dx = _bufferSizeX - _offsetX - sizeX;
			dy = _bufferSizeY - _offsetY - sizeY;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);

			// Copy right top to left bottom...
			sx = _offsetX + sizeX;
			sy = 0;
			sw = _bufferSizeX - _offsetX - sizeX;
			sh = _offsetY + sizeY - _mainTileSizeY;

			dx = 0;
			dy = _bufferSizeY - _offsetY - sizeY;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);

			// Copy right top to left bottom...
			sx = 0;
			sy = _offsetY + sizeY;
			sw = _offsetX + sizeX - _mainTileSizeX;
			sh = _bufferSizeY - _offsetY - sizeY;

			dx = _bufferSizeX - _offsetX - sizeX;
			dy = 0;

			this._copyBuffer(sx, sy, sw, sh, dx, dy);
		}
	};

	this._scrollVertical = function(value) {
		_offsetY += value;
		while (_offsetY < 0) {
			if (_tileY > 0) {
				_offsetY += _mainTileSizeY;
				_screenTileY--;
				_tileY--;
				if (_screenTileY < 0) { _screenTileY += _tilesY2; }
			} else {
				_offsetY = 0;
				break;
			}

			this._renderTilesToBuffer(0, _screenTileY, _screenTileX, _screenTileY, _tileX + _tilesX2 - _screenTileX, _tileY);
			this._renderTilesToBuffer(_screenTileX, _screenTileY, _tilesX1, _screenTileY, _tileX, _tileY);
		}

		while (_offsetY >= _mainTileSizeY) {
			this._renderTilesToBuffer(0, _screenTileY, _screenTileX, _screenTileY, _tileX + _tilesX2 - _screenTileX, _tilesY2 + _tileY);
			this._renderTilesToBuffer(_screenTileX, _screenTileY, _tilesX1, _screenTileY, _tileX, _tilesY2 + _tileY);

			_offsetY -= _mainTileSizeY;
			_screenTileY++;
			_tileY++;
			if (_screenTileY >= _tilesY2) { _screenTileY -= _tilesY2; }
		}
	};

	this._scrollHorizontal = function(value) {
		_offsetX += value;
		while (_offsetX < 0) {
			if (_tileX > 0) {
				_offsetX += _mainTileSizeX;
				_screenTileX--;
				_tileX--;
				if (_screenTileX < 0) { _screenTileX += _tilesX2; }
			} else {
				_offsetX = 0;
				break;
			}

			renderTilesToBuffer(_screenTileX, 0,            _screenTileX, _tilesY1,      _tileX, _tileY + _tilesY2 - _screenTileY);
			renderTilesToBuffer(_screenTileX, _screenTileY, _screenTileX, _tilesY1,      _tileX, _tileY);
		}

		while (_offsetX >= _mainTileSizeX) {
			renderTilesToBuffer(_screenTileX, 0,            _screenTileX, _screenTileY, _tilesX2 + _tileX, _tileY + _tilesY2 - _screenTileY);
			renderTilesToBuffer(_screenTileX, _screenTileY, _screenTileX, _tilesY1,     _tilesX2 + _tileX, _tileY);

			_offsetX -= _mainTileSizeX;
			_screenTileX++;
			_tileX++;
			if (_screenTileX >= _tilesX2) { _screenTileX -= _tilesX2; }
		}
	};

	this.render = function() {
		cnt++;
		scrollHorizontal(~~(Math.sin(cnt * 0.02) * 2));
		scrollVertical(~~(Math.sin(cnt * 0.025) * 3));

		this._copyScreen();
	};

	this.launchUI = function () {};
});
