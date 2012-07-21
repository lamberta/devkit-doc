import ui.View as View;

var DoubleRect = Class(View, function (supr) {
	//called when an object is instantiated
	this.init = function (opts) {
		supr(this, 'init', arguments);

		var redRect = new View({
			superview: this,
			opacity: 0.5,
			backgroundColor: '#ff0000',
			width: 100,
			height: 100,
			zIndex: 2
		}); 

		var greenRect = new View({
			superview: this,
			opacity: 0.8,
			backgroundColor: '#00ff00',
			width: 100,
			height: 100,
			x: 80
		});
	}
});

var rects = new DoubleRect();
