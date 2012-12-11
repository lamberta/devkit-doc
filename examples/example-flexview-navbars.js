import device;
import ui.View as View;
import ui.layout.FlexView as FlexView;
import ui.ScrollView as ScrollView;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    var flexview = new FlexView({
      superview: this.view,
      width: device.width,
      height: device.height,
      direction: 'down'
    });
    
    var topmenu = new View({
      superview: flexview,
      hflex: 1,
      height: 50,
      backgroundColor: 'red'
    });
    
    var main = new ScrollView({
      superview: flexview,
      hflex: 1,
      vflex: 1
    });
    
    var bottomnav = new View({
      superview: flexview,
      hflex: 1,
      height: 50,
      backgroundColor: 'blue'
    });
  };
});
