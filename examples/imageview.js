import ui.View as View;
import ui.ImageView as ImageView;

exports = Class(View, function(supr) {
  this.buildView = function (opts) {
    var image = new ImageView({
      superview: this,
      image: "resources/duck.png",
      autoSize: true
    }); 
  }
});
