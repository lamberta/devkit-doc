"use import";

from util.underscore import _;

exports = Class('shared.Game', function(logger, supr) {
	this.init = function(opts) {
		this._usernames = opts.usernames;
		this._turnIndex = opts.turnIndex | 0;
		
		if (opts.players) {
			this._players = opts.players;
		} else {
			this._players = {};
			for (var i = 0, username; username = this._usernames[i]; i++) {
				this._players[username] = {
					username:username,
					left:0,
					right:0
				};
			}
		}
	}
	
	this.play = function(username, side) {
		if (this.getActivePlayer() === username) {
			this._players[username][side]++;
			return true;
		} else {
			logger.warn('Got a play from non active player', username);
			return false;
		}
	}
	
	this.nextTurn = function() {
		this._turnIndex++;
		if (this._turnIndex === this._usernames.length) {
			this._turnIndex = 0;
		}
	}
	
	this.getTurnIndex = function() {
		return this._turnIndex;
	}
	
	this.getActivePlayer = function() {
		return this._usernames[this._turnIndex];
	}
	
	this.getPlayers = function() {
		return this._players;
	}
	
	this.over = function() {
		return _.any(this._players, function(player) {
			return player.left >= 3;
		});
	}
	
	this.getWinner = function() {
		return _.detect(this._players, function(player) {
			return player.left >= 3;
		});
	}
	
	this.getClicks = function(username) {
		return this._players[username];
	}
});
