"use import";

import math.util;

var Server = Class(function() {
	this.init = function() {
		this._opts = TeaLeaf.server.getOpts();
		this._location = {};
		this._color = {};
		
		for (var i = 0, u; u = this._opts.usernames[i]; ++i) {
			this._location[u] = {
				x: math.util.random(0, 500),
				y: math.util.random(0, 500)
			};
			
			this._color[u] = {
				r: math.util.random(100, 255),
				g: math.util.random(100, 255),
				b: math.util.random(100, 255)
			};
		}
		
		TeaLeaf.server.subscribe('MOVE', this, 'onMove');
		
		// this is sent in the INIT frame to all clients
		var initialGameState = {
			location: this._location,
			color: this._color
		};
		
		TeaLeaf.server.initGame(initialGameState);
	}
	
	this.onMove = function(username, evt) {
		this._location[username].x = evt.x;
		this._location[username].y = evt.y;
		
		TeaLeaf.server.broadcast('MOVE', {
			who: username,
			where: this._location[username]
		}, [username]);
	}
});

TeaLeaf.server.onStart = function() {
	new Server();
}

TeaLeaf.server.onResume = function(state) {
	new Server();
}

