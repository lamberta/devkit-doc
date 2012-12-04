import ui.View as View;
import ui.SpriteView as SpriteView;

var sprite = new SpriteView({
  superview: this,
  x: 0,
  y: 0,
  width: 60,
  height: 60,
  url: "resources/images/characters/carl",
  defaultAnimation: 'idle'
});

//Play the 'walk' animation once, then return to idle.
sprite.startAnimation('walk');
