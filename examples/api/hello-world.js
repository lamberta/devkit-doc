import ui.TextView as TextView;

exports = Class(GC.Application, function (supr) {
  this.launchUI = function () {
    var text = new TextView({
      text: "Hello, Game Closure!",
      color: '#fff',
      fontSize: 24,
      superview: GC.app.view,
    });
  };
});
