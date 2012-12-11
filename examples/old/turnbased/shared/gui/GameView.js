"use import";

import timestep.ImageView;
import timestep.View;
import timestep.animate;

exports = Class('shared.gui.GameView', timestep.View, function(logger, supr) {

	this.init = function(opts) {
		supr(this, 'init', [opts]);
		this._status = opts.status || '...';
		this._left = new timestep.ImageView({
			parent:this,
			x: this.style.width/2 - 210,
			y: this.style.height/2 - 100,
			width: 200,
			height: 200,
			opacity: 0.5,
			image:'../images/left.png'
		});

		this._right = new timestep.ImageView({
			parent:mainView,
			x: mainView.style.width/2 + 10,
			y: mainView.style.height/2 - 100,
			width: 200,
			height: 200,
			opacity: 0.5,
			image:'../images/right.png'
		});
		
		this._left.onInputSelect = function(evt, pt) {
			logger.log('left clicked');
			TeaLeaf.game.sendEvent('PLAY', {side:'left'});
		}


		this._right.onInputSelect = function(evt, pt) {
			TeaLeaf.game.sendEvent('PLAY', {side:'right'});
		}
	}
	
	this.onInputSelect = function(evt, pt) {
		logger.log('a click', pt);
	}
	
	this.status = function(message) {
		this._status = message;
	}
	
	this.showPlay = function(side) {
		var box = this['_' + side];
		var grow = {
			scale: 1.1,
			x: box.style.x -10,
			y: box.style.y -10,
			opacity: 1.0
		};
		var shrink = {
			scale: 1.0,
			x: box.style.x,
			y: box.style.y,
			opacity: 0.5
		};
		timestep.animate(box).now(grow, 100).then(shrink, 200);
	}
	
	this.render = function(ctx) {
		ctx.fillStyle = 'rgb(50, 50, 50)';
		ctx.fillRect(0, 0, this.style.width, this.style.height);
		ctx.fillStyle = 'rgb(255,255,255)';
		ctx.font = '20pt Arial';
		ctx.textAlign = 'center';
		ctx.fillText(this._status, this.style.width/2, this.style.height/2 + 140);
	}

});





