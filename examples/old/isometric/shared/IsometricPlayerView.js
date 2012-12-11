"use import";

import timestep.ImageView as ImageView;
import timestep.IsoCharacterView as IsoCharacterView;
import std.js as JS;
import math2D.Point as Point;

exports = Class(IsoCharacterView, function(supr) {
	
	this.init = function(opts) {
		supr(this, 'init', arguments);
		this._maxI = this._isoView.getNumRows();
		this._maxJ = this._isoView.getNumCols();
		this._curTime = 0;
		this._nextTime = 10000;
	}

	this.setAnimation = function(vel) {
		if (vel.di === 0 && vel.dj === 0){
			this.startAnimation('stand');
			return;
		}
		if (vel.di >= 0) {
			if (vel.dj >= 0){
				this.startAnimation('down');
			} else {
				this.startAnimation('left');
			}
		} else if (vel.dj >= 0){
			this.startAnimation('right');
		} else {
			this.startAnimation('up');
		}
	};

});

