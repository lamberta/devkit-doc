import ui.View;
import ui.TextView;
import ui.StackView;

exports = Class(ui.View, function() {
	this.init = function(opts) {
		supr(this, 'init', arguments);

  		var myStackView = new ui.StackView({
			superview: this,
			x: 50,
			y: 50,
			height: 200,
			width: 200,
			backgroundColor: "#999"
		});

		//when added to a stackview, child views take the same dimensions.
		var topView = new ui.TextView({
			x: 0,
			y: 0,
			text: "Click to dismiss! This is the top view.",
			backgroundColor: "#00f" //blue
		});

		var middleView = new ui.TextView({
			x: 0,
			y: 0,
			text: "Click to dismiss! This is the middle view.",
			backgroundColor: "#0f0" //green
		});

		var bottomView = new ui.TextView({
			x: 0,
			y: 0,
			text: "Click to dismiss! This is the bottom view.",
			backgroundColor: "#f00" //red
		});

		myStackView.push(bottomView, true); //don't animate the views as they are attached to the stackview
		myStackView.push(middleView, true);
		myStackView.push(topView, true);

		topView.on('InputStart', function(){
				myStackView.pop(topView);
		});
		middleView.on('InputStart', function(){
				myStackView.pop(middleView);
		});
		bottomView.on('InputStart', function(){
				myStackView.pop(bottomView);
		});
	};
});
