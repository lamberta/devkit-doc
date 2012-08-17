import ui.TextView as TextView;

exports = Class(GC.Application, function (supr) {
  this.initUI = function () {
    var text = new TextView({
      superview: this,
      text: "Hello, Game Closure!",
      color: '#fff',
      fontSize: 24
    });
  };
});
