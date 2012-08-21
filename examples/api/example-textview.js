import device;
import ui.TextView as TextView;

exports = Class(GC.Application, function () {
  this.initUI = function () {

    var title = new TextView({
      superview: this.view,
      autoSize: false,
      y: 20,
      height: 25,
      fontSize: 26,
      zIndex: 1,
      text: "Welcome to the TextView",
      color: 'black',
      backgroundColor: 'white',
      shadow: true,
      shadowColor: 'white',
      verticalAlign: 'top',
      textAlign: 'left',
      verticalPadding: 5,
      horizontalPadding: 25
    });

    for (var i = 0; i < 1500; i++) {
      var letter = new TextView({
        superview: this.view,
        text: Math.random().toString(36).substring(2, 3),
        color: "#fff",
        opacity: Math.random(),
        fontSize: Math.random() * 36,
        x: Math.random() * device.width,
        y: Math.random() * device.height,
        width: Math.random() * 50,
        height: Math.random() * 50,
        r: Math.random() * (Math.PI * 2)
      });
    };
  }
});
