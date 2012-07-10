import .util;

import GC;
import timestep.TextView as TextView;
import timestep.device as device;
import timestep.ImageView as ImageView;

import timestep.Application as Application;


/**
 * 
 */
exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true
	};

	this.initUI = function () {

		this.view.style.backgroundColor = "#ffffff";

		var ducks = [];
		
		for (var i = 100, duck; i < 2450; i += 150) {
			for (var j = 100; j < 1200; j += 150) {
				duck = new DuckView(i, j);
				this.view.addSubview(duck);
				ducks.push(duck);
			}
		}

		function rotate_ducks () {
			var i = ducks.length;
			while (i--) {
				ducks[i].style.r += 0.1;
			}
		}

		GLOBAL.v0 = ducks[0];
		
		this.engine.subscribe('Tick', rotate_ducks);
	}
});


var DuckView = Class(ImageView, function (supr) {
	
	this.init = function (x, y) {

		
		
		supr(this, 'init', [{
			image: 'resources/img/duck.png',
			x: x,
			y: y,
			width: 100,
			height: 100,
			r: 0.5,
			anchorX: 50,
			anchorY: 50
		}]);

		
		//supr(this, 'init', duck_opts);
		//console.log(x, y);
		//console.log(this);
		
		//console.log(superClass);
		
		
		//superClass.init.call(this, duck_opts);
	};
	
});
