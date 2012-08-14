import sound;
import device;
import ui.View as View;

exports = Class(GC.Application, function () {

  var play_btn, stop_btn;
  
  this.initUI = function () {
    create_buttons(this.view);
    
    sound.preload('background', 'music');
        
    play_btn.subscribe('InputSelect', function () {
      sound.play('background', 'music', {loop: true});
    });

    stop_btn.subscribe('InputSelect', function () {
      sound.pause('background', 'music');
    });
  };

  function create_buttons (parent) {
    play_btn = new View({
      x: device.width/2 - 125,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#00ff00'
    });

    stop_btn = new View({
      x: device.width/2 + 25,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#ff0000'
    });

    parent.addSubview(play_btn);
    parent.addSubview(stop_btn);
  }
});
