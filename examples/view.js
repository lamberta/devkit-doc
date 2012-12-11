import device;
import ui.View as View;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    var rects = new DoubleBox();
    this.view.addSubview(rects);
  };
});

var DoubleBox = Class(View, function (supr) {
  
  //called before the first render of the view
  this.buildView = function () {
    var redbox = new View({
      superview: this,
      x: 0,
      y: 0,
      width: device.width / 2,
      height: device.height / 2,
      backgroundColor: '#f00',
      zIndex: 1
    }); 

    var bluebox = new View({
      superview: this,
      x: 100,
      y: 100,
      width: device.width / 2,
      height: device.height / 2,
      backgroundColor: '#00f'
    });
  };
});
