import timestep.ImageView;
import timestep.device as device;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true
	};

	this.initUI = function () {
		this.view.style.backgroundColor = "#ffffff";

		var ducks = [];

		//initialize ducks
		for (var x = 0, duck; x < device.width; x += 150) {
			for (var y = 0; y < device.height; y += 150) {
				duck = new DuckView(x, y);
				this.view.addSubview(duck);
				ducks.push(duck);
			}
		}

		function rotate_ducks () {
			var i = ducks.length;
			while (i--) {
				ducks[i].style.rotation += 0.1;
			}
		}
		
		this.engine.subscribe('Tick', rotate_ducks);
	}
});

var DuckView = Class(timestep.ImageView, function (supr) {
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
	};
});
