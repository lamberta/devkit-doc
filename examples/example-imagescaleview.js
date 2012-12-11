import device;
import ui.ImageScaleView;
import ui.TextView;

var offset_pos = 20,
    offset_slice_x = 40,
    offset_slice_y = 50;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    
    var imagescaleview = new ui.ImageScaleView({
      superview: this.view,
      x: offset_pos / 2,
      y: offset_pos / 2,
      width: device.width - offset_pos,
      height: device.height - offset_pos,
      image: 'resources/images/button.png',
      scaleMethod: '9slice',
      debug: true,
      sourceSlices: {
        horizontal: {
          left: offset_slice_x,
          center: offset_slice_x,
          right: offset_slice_x
        },
        vertical: {
          top: offset_slice_y,
          middle: offset_slice_y,
          bottom: offset_slice_y
        }
      },
      destSlices: {
        horizontal: {
          left: offset_slice_x,
          right: offset_slice_x
        },
        vertical: {
          top: offset_slice_y,
          bottom: offset_slice_y
        }
      }
    });

    imagescaleview.on('InputSelect', function () {
      console.log("You clicked the big button!");
    });
    
    var text = new ui.TextView({
      superview: imagescaleview,
      backgroundColor: 'rgba(0,0,255,0.2)', //transparent blue
      x: offset_slice_x,
      y: offset_slice_y,
      width: imagescaleview.style.width - (offset_slice_x * 2),
      height: imagescaleview.style.height - (offset_slice_y * 2),
      text: "Click Me!",
      fontSize: 32
    });
  };
});
