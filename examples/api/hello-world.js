import ui.TextView as TextView;

function App () {
  this.launchUI = function () {
    var text = new TextView({
      text: "Hello, Game Closure!",
      color: '#fff',
      fontSize: 24,
      superview: GC.app.view,
    });
  };
}
exports = Class(GC.Application, App);
