import animate;
import device;
import ui.View as View;

exports = Class(GC.Application, function () {
  this._settings = {
    alwaysRepaint: true
  };

  var start_x = device.width / 2 - 75,
      start_y = device.height / 2 - 25,
      red, green, blue;

  this.initUI = function () {
    red = new View({
      x: start_x,
      y: start_y,
      width: 50,
      height: 50
    });
    red.style.anchorX = red.style.width / 2;
    red.style.anchorY = red.style.height / 2;
    red.style.backgroundColor = '#ff0000';
    this.view.addSubview(red);

    green = new View({
      x: start_x + 50,
      y: start_y,
      width: 50,
      height: 50
    });
    green.style.anchorX = green.style.width / 2;
    green.style.anchorY = green.style.height / 2;
    green.style.backgroundColor = '#00ff00';
    this.view.addSubview(green);

    blue = new View({
      x: start_x + 100,
      y: start_y,
      width: 50,
      height: 50
    });
    blue.style.anchorX = blue.style.width / 2;
    blue.style.anchorY = blue.style.height / 2;
    blue.style.backgroundColor = '#0000ff';
    this.view.addSubview(blue);
  };

  this.launchUI = function () {
    
    red.subscribe('InputOver', function () {
      move_square(red, 3000, 0);
    });
    
    green.subscribe('InputOver', function () {
      move_square(green, 2000, device.height/2 - green.style.height/2);
    });

    blue.subscribe('InputOver', function () {
      move_square(blue, 1000, device.height - blue.style.height);
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
