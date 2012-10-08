import animate;
import device;
import ui.View as View;

exports = Class(GC.Application, function () {
  this._settings = {
    alwaysRepaint: true
  };

  this.initUI = function () {
    var start_x = device.width / 2 - 75,
        start_y = device.height / 2 - 25;

    var redbox = new View({
      superview: this.view,
      x: start_x,
      y: start_y,
      width: 50,
      height: 50,
      backgroundColor: '#ff0000'
    });
    redbox.style.anchorX = redbox.style.width / 2;
    redbox.style.anchorY = redbox.style.height / 2;

    redbox.on('InputOver', function () {
      move_square(this, 3000, 0);
    });
    
    var greenbox = new View({
      superview: this.view,
      x: start_x + 50,
      y: start_y,
      width: 50,
      height: 50,
      backgroundColor: '#00ff00'
    });
    greenbox.style.anchorX = greenbox.style.width / 2;
    greenbox.style.anchorY = greenbox.style.height / 2;

    greenbox.on('InputOver', function () {
      move_square(this, 2000, device.height/2 - this.style.height/2);
    });
    
    var bluebox = new View({
      superview: this.view,
      x: start_x + 100,
      y: start_y,
      width: 50,
      height: 50,
      backgroundColor: '#0000ff'
    });
    bluebox.style.anchorX = bluebox.style.width / 2;
    bluebox.style.anchorY = bluebox.style.height / 2;

    bluebox.on('InputOver', function () {
      move_square(this, 1000, device.height - this.style.height);
    });
  };
});

function move_square (square, mid_delay, target_y) {
  animate(square).now({
    opacity: 0.1,
    x: device.width - 50,
    rotation: Math.PI * 2
  }, 1000, animate.EASE_IN).wait(mid_delay).then({
    opacity: 1,
    x: 0,
    y: target_y,
  }, 1000, animate.EASE_OUT);
}
