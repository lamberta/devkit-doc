"use import";

import GC;
import util.ajax as ajax;
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
		logger.info("initUI");

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

		this._initMap("media/maps/cave.tmx");

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
			this._map.loadTMX(file, content);
			this._mapView.setMap(this._map);
		}));
	};

});
