import ui.ImageView as ImageView;

exports = Class(GC.Application, function () {
  this.initUI = function () {

    var page = new ImageView({
      superview: this.view,
      x: 0,
      y: 0,
      scale: 0.75,
      image: "resources/images/book.jpg",
      autoSize: true
    });
  }
});
