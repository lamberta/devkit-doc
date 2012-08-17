import ui.View as View;
import ui.TextView as TextView;

exports = Class(View, function (supr) {
  
  this.buildView = function (opts) {
    
    //show a big heading
    var title = new TextView({
      text: "Welcome to the TextView",
      color: "white",
      fontSize: 26,
      verticalAlign: "top",
      y: 100,
      superview: this
    });
    
    //show a smaller subheading
    var subhead = new TextView({
      text: "It's great!",
      color: "#CCCCCC",
      fontSize: 14,
      superview: this
    });
  };
});
