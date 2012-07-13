import timestep.View;
import timestep.TextView;

exports = Class(timestep.View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);
		
		//show a big heading
		var titleText = new timestep.TextView({
			text: "Welcome to the TextView",
			color: "white",
			fontSize: 26,
			verticalAlign: "top",
			y: 100,
			parent: this
		});
		
		//show a smaller subheading
		var subText = new timestep.TextView({
			text: "The best TextView in the depths of Timestep",
			color: "#CCCCCC",
			fontSize: 14,
			parent: this
		});
	}
});
