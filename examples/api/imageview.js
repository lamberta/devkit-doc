import timestep.View as View;
import timestep.ImageView as ImageView;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);
		
		var myImage = new ImageView({
			image: "resources/duck.png",
			autoSize: true,
			parent: this        
		}); 
	}
});
