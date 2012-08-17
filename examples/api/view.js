import ui.View as View;

var DoubleBox = Class(View, function (supr) {

  //called before the first render of the view
  this.buildView = function () {
    var redbox = new View({
      superview: this,
      x: 0,
      y: 0,
      width: this.style.width / 2,
      height: this.style.height / 2,
      opacity: 0.5,
      backgroundColor: '#ff0000',
      zIndex: 2
    }); 

    var greenbox = new View({
      superview: this,
      x: this.style.width / 2,
      y: this.style.height / 2,
      width: this.style.width / 2,
      height: this.style.height / 2,
      opacity: 0.8,
      backgroundColor: '#00ff00',
      x: 80
    });
  };
});

var rects = new DoubleBox({
  width: 200,
  height: 300
});
