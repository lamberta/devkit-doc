import ui.ImageView as ImageView;
import ui.ScrollView as ScrollView;

exports = Class(ScrollView, function (supr) {
  this.init = function (opts) {
    merge(opts, {
      scrollBounds: {
        minX: -100,
        maxX: 200,
        minY: -100,
        maxY: 200
      },
    });

    supr(this, "init", arguments);
  };

  this.buildView = function () {
    var ducky = new ImageView({
      superview: this,
      image: "resources/image.png"
    });
  };
});
