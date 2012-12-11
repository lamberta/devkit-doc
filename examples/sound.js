import device;
import ui.View as View;
import Sound;

exports = Class(GC.Application, function () {

  this.initUI = function () {

    this.sound = new Sound({
      path: 'resources/sounds',
      files: {
        levelmusic: {
          background: true,
          loop: true
        }
      }
    });
  };

  this.buildView = function () {
    var play = new View({
      superview: this,
      x: device.width/2 - 125,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#00ff00'
    });

    play.on('InputSelect', bind(this, function () {
      this.sound.play('levelmusic');
    }));

    var stop = new View({
      superview: this,
      x: device.width/2 + 25,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#ff0000'
    });

    stop.on('InputSelect', bind(this, function () {
      this.sound.pause('levelmusic');
    }));
  };
});
