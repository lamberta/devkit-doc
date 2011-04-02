"use import";

import math.util;

// handle start and resume entry points

conn.game.onStart = function() {
	var server = new Server(conn);
	return server.getState();
}

conn.game.onResume = function(state) {
	new Server(conn, state);
}

// main server class

var Server = Class(function() {
	this.init = function(conn, state) {
		
		if (!state) {
			state = {}
			
			for (var i = 0, u; u = conn.usernames[i]; ++i) {
				state[u] = {
					location: {
						x: math.util.random(0, 500),
						y: math.util.random(0, 500)
					},
					color: {
						r: math.util.random(100, 255),
						g: math.util.random(100, 255),
						b: math.util.random(100, 255)
					}
				};
			}
		}
		
		this._conn = conn;
		this._conn.game.subscribe('MOVE', this, 'onMove');
		
		this._state = state;
	}
	
	this.getState = function() { return this._state; }
	
	this.onMove = function(username, evt) {
		var location = this._state[username].location;
		location.x = evt.x;
		location.y = evt.y;
		
		this._conn.game.broadcast('MOVE', {
			who: username,
			where: location
		}, [username]);
	}
});
