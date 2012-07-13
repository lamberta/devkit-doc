import timestep.View;

exports = Class(timestep.View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);
		
		//modify the ViewStyle properties
		this.style.backgroundColor = "#0000FF";
		this.style.scale = 0.5;
	}
});
