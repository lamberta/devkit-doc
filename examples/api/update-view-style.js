import device;
import ui.View as View;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    
    for (var i = 0; i < 200; i++) {
      var view = new View({
        superview: this.view,
        x: Math.random() * device.width - 50,
        y: Math.random() * device.height - 50,
        width: Math.random() * 50,
        height: Math.random() * 50,
        r: Math.random() * (Math.PI * 2),
        backgroundColor: '#' + ('000000' + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6)
      });
    }
  };
});
