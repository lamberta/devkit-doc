"use import";

import timestep.View as View;
import timestep.TextView as TextView;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		var titleText = new TextView({
			text: "Welcome to the TextView",
			color: "white",
			fontSize: 26,
			verticalAlign: "top",
			y: 100,
			parent: this
		});

		var subText = new TextView({
			text: "The best TextView in the depths of Timestep",
			color: "#CCCCCC",
			fontSize: 14,
			parent: this
		});
	}
});
