"use import";

import GC;
import util.ajax as ajax;
import util.path as path;
import timestep.tiled.TiledMap as TiledMap;
import timestep.tiled.TiledMapScrollView as TiledMapScrollView;

exports = Class(GC.Application, function (supr) {

	this._settings = {
		alwaysRepaint: false,
		clearEachFrame: false,
		keyListenerEnabled: false,
		logsEnabled: true,
		mergeMoveEvents: true,
		noTimestep: false,
		redrawRects: false,
		repaintOnEvent: false,
		resizeRootView: false,
		showFPS: false
	};

	this.initUI = function () {

		if (GLOBAL.NATIVE) {
			NATIVE.onResume = bind(this, function () {
				// Flush the Tiled map view buffer when native resumes
				logger.info("Native onResume: Flushing map buffer...");
				this._mapView.flushBuffer();
			});
		}

		// Paint the screen black
		this._view.render = function (ctx) {
			ctx.fillStyle = "rgb(0, 0, 0)";
			ctx.fillRect(0, 0, this.style.width, this.style.height);
		};

		this._map = new TiledMap();

		// Init the scrolling Tiled map view
		this._mapView = new TiledMapScrollView({
			parent: this._view,
			drag: true
		});

		this._initMap("media/maps/cave.json");

	};

	this.launchUI = function () {
		logger.info("launchUI");
	};

	this.launchSinglePlayerGame = function () {
		logger.info("launchSinglePlayerGame");
	};

	this._initMap = function (file) {
		ajax.get({
			url: file
		}, bind(this, function (err, content) {
			// Set the base path so we know where to load external images from
			this._map.basePath = path.join(file, "../");
			// Load JSON data source
			this._map.loadJSON(content);
			// Finally, attach the map object to the renderer
			this._mapView.setMap(this._map);
		}));
	};

});
