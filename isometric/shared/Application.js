"use import";

import GC;

import timestep.ScrollView;
import timestep.IsometricTiledView;
import timestep.JsonTileSource;

import .characterOpts;
import .IsometricPlayerView as PlayerView;

exports = Class(GC.Application, function() {

	this.initUI = function() {
		this.launchSinglePlayerGame();
	}
	
	this.launchSinglePlayerGame = function() {
		
		// create a view to scroll around the isometric view
		this._scrollView = new timestep.ScrollView({
			parent: this._view, // add the scroll view to the top-level view
			clip: true
			
			// we could specify width and height here, but since we 
			// provided a parent, the scroll view will assume the 
			// same dimensions as the parent.
		});
		
		// tmx is the XML-based format for map data used by the Tiled QT map editor
		var dataSource = new timestep.JsonTileSource({
			imageURL: 'resources/images/maps/iso-64x64-outside.png',
			tmxFile: 'resources/map_data/demoStage.tmx'
		});
		
		// create an isometric renderer using the datasource object to provide the tiles
		var tiledView = new timestep.IsometricTiledView({
			parent: this._scrollView,
			tileWidth: dataSource._tileWidth,
			tileHeight: dataSource._tileHeight,
			tileBaseHeight: dataSource._tileHeight / 2,
			dataSource: dataSource,
			
			// Input events only fire for a view if they're within the bounds of the view. 
			// We want all input events to go to the isometric view, so we can specify
			// the view has infinite bounds.
			infinite: true,
			maxPanSpeed: '500px'
		});
		
		var character = new PlayerView(merge({parent: tiledView}, characterOpts));
		character.startAnimation('stand');
		
		// setup mouse event
		tiledView.onInputSelect = function(evt, pt) {
			var isoPoint = this.getIsoForCartesian(pt.x, pt.y);
			character.moveToSquare(isoPoint.i, isoPoint.j);
		};
		
		// center the scrollView on the center of the map.
		this._scrollView.addOffset({
			x: tiledView.style.width / 2,
			y: 0
		});
		
		this._app.subscribe('Tick', this, 'tick');
	}
	
	this.tick = function(dt) {
		
		// listen for arrow keys to scroll the map 
		var keyListener = this._app.getKeyListener();
		var keys = keyListener.getPressed(),
		moveX = 0,
		moveY = 0;

		if (keys[keyListener.LEFT]) {
			moveX -= 1;
		}
		if (keys[keyListener.RIGHT]) {
			moveX += 1;	
		}
		if (keys[keyListener.UP]) {
			moveY -=1;
		}
		if (keys[keyListener.DOWN]) {
			moveY +=1;
		}
		if (moveX || moveY) {
			this._scrollView.addOffset({
				x: -moveX * 10,
				y: -moveY * 10
			});
		}
	}
	
});
