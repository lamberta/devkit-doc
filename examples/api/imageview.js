import ui.View as View;
import ui.ImageView as ImageView;

exports = Class(View, function(supr) {
  this.init = function(opts) {
    supr(this, "init", arguments);
    
    var myImage = new ImageView({
      image: "resources/duck.png",
      autoSize: true,
      superview: this        
    }); 
  }
});
