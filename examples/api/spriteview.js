import ui.View as View;
import ui.SpriteView as SpriteView;

exports = Class(View, function (supr) {
  this.init = function (opts) {
    supr(this, "init", arguments);
    
    var runner = new SpriteView({
      parent: this,
      defaultAnimation: "idle",
      width: 34,
      height: 86,

      //sprite animation definitions
      animations: {
        //main idle sprite animation
        idle: {
          imageURL: "resources/character.png",
          spritesWide: 6,
          spritesHigh: 4,
          start: 12,
          end: 17,
          width: 34,
          height: 86
        }
      }
    });

    runner.startAnimation("idle");
  }
});
