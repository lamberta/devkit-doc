import timestep.View as View;
import timestep.animate as animate;
import timestep.device as device;

exports = Class(View, function(supr) {
  this.init = function(opts) {
    supr(this, "init", arguments);
		
    this.style.width = this.style.height = 50;
    this.style.backgroundColor = "#FF0000";
    this.style.anchorX = this.style.anchorY = 25;
    
    animate(this)
      .now({opacity: 0.1, x: device.width, r: Math.PI * 2}, 1000, animate.easeIn)
      .then({opacity: 1, x: 0}, 1000, animate.easeOut);
  }  
});
