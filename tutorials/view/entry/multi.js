"use import";

import timestep.View;
import timestep.animate;

var app = new GCApp();


TeaLeaf.game.onStart = function() {

}

TeaLeaf.game.onResume = function(state) {

}
var players = {},
	numPlayers = 0,
	topZ = 0;

function rgb(def) { return 'rgb(' + def.r + ',' + def.g + ',' + def.b + ')'; }
function move(who, where) {
	/*
	 * timestep.animate sets the style of a timestep.view, but over time.
	 * Alternatively, we could instantly change the style:
	 *		var style = players[who].style;
	 *		style.x = where.x;
	 *		style.y = where.y;
	 */
	timestep.animate(players[who]).now(where, 2500 + players[who].getRadius() * 100);
	
	// whoever moves last is on top
	players[who].setStyle({zIndex: ++topZ});
	
	// if you move, you get bigger and slower
	players[who].increaseRadius();
}

// each player gets a view on the canvas
var Player = Class(timestep.View, function(supr) {
	this.init = function(opts) {
		supr(this, 'init', arguments);
		
		this._username = opts.username;
		this._color = rgb(opts.color);
		this._isMe = this._username == TeaLeaf.getUsername();
		this._radius = 2;
		
		this._outlineTimer = 0;
	}
	
	this.tick = function(dt) {
		if (this._isMe) {
			this._outlineTimer += dt;
			if (this._outlineTimer > 1000) {
				this._outlineTimer = 0;
			}
		}
	}
	
	this.getRadius = function() { return this._radius; }
	this.increaseRadius = function() { this._radius += 0.1; }
	
	this.render = function(ctx) {
		ctx.fillStyle = this._color;
		ctx.circle(0, 0, this._radius);
		ctx.fill();

		if (this._isMe) {
			ctx.circle(0, 0, this._radius + 3);
			ctx.strokeStyle = this._color;
			ctx.lineWidth = 3;
			var a = Math.exp(this._outlineTimer / 83 - 6);
			ctx.globalAlpha = a / ((1 + a) * (1 + a)) * 4;
			ctx.stroke();
		}
		
		ctx.globalAlpha = 0.8;
		
		if (!this._width && ctx.measureText) { this._width = ctx.measureText(this._username).width; }
		ctx.translate(-(this._width || 0) / 2, -(this._radius + 6));
		ctx.fillText(this._username, 0, 0);
	}
});

TeaLeaf.game.event_init = function(evt) {
	var state = evt.state,
		usernames = evt.usernames,
		mainView = app.getView();
	
	for (var i = 0, u; u = usernames[i]; ++i) {
		logger.log('init:' + u);
		
		numPlayers++;
		players[u] = new Player({
			parent: mainView,
			x: state.location[u].x,
			y: state.location[u].y,
			username: u,
			color: state.color[u]
		});
	}
	
	mainView.onInputSelect = function(evt, pt) {
		TeaLeaf.game.sendEvent('MOVE', {x: pt.x, y: pt.y});
		move(TeaLeaf.getUsername(), pt);
	}
}

TeaLeaf.game.event_start = function() {
	logger.log('received start game frame!');
}

TeaLeaf.game.event_MOVE = function(evt) {
	logger.log('moving', evt.who, evt.where);
	move(evt.who, evt.where);
}

TeaLeaf.game.ready();
