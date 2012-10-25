# Scaling the Game to Fit the Device

## Art Deliverables

Art assets should be delivered at the dimensions 576 x 1024
since 1024 px is the maximum size for a texture side. This
can be scaled up to 720 x 1280 by increasing our texture by
25%: 576 * 1.25 = 720, 1024 * 1.25 = 1280.

## Calculate Scaling

Define the maximum bounding box for the screen. This is the
widest aspect ratio available on the more popular phones:

~~~
var bounds_width = 576,
	bounds_height = 1024;
~~~

We'll use these values to calculate the base dimensions and
scale used for the top-level views. For portrait mode this
can be done like:

~~~
var base_width = bounds_width,
	base_height =  device.screen.height * (bounds_width / device.screen.width),
	scale = device.screen.width / base_width;
~~~

And in landscape mode:

~~~
var base_width = device.screen.width * (bounds_height / device.screen.height),
	base_height = bounds_height,
	scale = device.screen.height / base_height;
~~~

### Set the Top-Level View

Scaling a top-level view ensures all views beneath it are
also scaled. This can be the root view, `GC.app.view`, if
it's the only game screen, or if there are multiple game
screens, then each one should be scaled.

To center the game view's on a screen, set the size and
scale of the root view in the scene graph:

~~~
GC.app.view.style.width = base_width;
GC.app.view.style.height = base_height;
GC.app.view.style.scale = scale;
~~~

You could also position the overflow in a particular
direction.

Now to dynamically position views based on the scaled
parent. For example, to center a sprite on the background
image:

~~~
var sprite = new SpriteView({
  superview: background,
  x: base_width / 2,
  y: base_height / 2,
  width: 300,
  height: 300,
  url: "resources/images/sdkBot/sdkBot",
  defaultAnimation: 'idle',
  autoStart: true
});
~~~

### Example: Scale a Background Image and Game Asset to Fill Screen

In this example we'll create a scene that fits multiple
devices. First, here's how it looks on the iPhone simulator:

<img src="./assets/basic/scaling/scale-iphone.png" alt="scaling iphone screenshot" class="screenshot">

By switching the device simulator to a larger device---like
the Galaxy Nexus tablet---we can see how this scene is
displayed to fill the entire screen:

<img src="./assets/basic/scaling/scale-tablet.png" alt="scaling tablet screenshot" class="screenshot">

And here's the code to set up the background `ImageView` and
our sprite that walks along the lunar surface:

~~~
import device;
import ui.ImageView as ImageView;
import ui.SpriteView as SpriteView;

var bounds_width = 576,
    bounds_height = 1024,
    base_width = bounds_width,
    base_height = device.screen.height * (bounds_width / device.screen.width), //864
    scale = device.screen.width / base_width,
    right_boundary = base_width, //right boundary for screen wrapping
    left_boundary = 0,
    vx = 0;

exports = Class(GC.Application, function () {
  this._settings = {
    alwaysRepaint: true
  };

  this.initUI = function () {
    
    //scale the root view
    this.view.style.width = base_width;
    this.view.style.height = base_height;
    this.view.style.scale = scale;
    
    var background = new ImageView({
      superview: this.view,
      x: 0,
      y: 0,
      width: base_width,
      height: base_height,
      image: "resources/images/background.jpg", //576x1024
      zIndex: 0
    });

    var sprite = new SpriteView({
      superview: background,
      x: base_width/2,
      y: base_height - 400,
      width: 300,
      height: 300,
      url: "resources/images/sdkBot/sdkBot",
      defaultAnimation: 'idle',
      autoStart: true,
      zIndex: 1
    });

    //sprite movement is determined by mouse position relative to the sprite
    this.view.on('InputSelect', function (evt, pt) {
      //localize point to sprite, which is one-level deep
      var x0 = sprite.style.x + sprite.style.width/2,
          y0 = sprite.style.y + sprite.style.height/2;

      //if the sprite is clicked, stop movement and return to idle animation
      if (sprite.containsLocalPoint({x: pt.x - sprite.style.x, y: pt.y - sprite.style.y})) {
        if (sprite.isPlaying) {
          vx = 0;
          sprite.resetAnimation();
        }
      } else if (pt.x < sprite.style.x + sprite.style.width/2) {
        //walk left
        vx = -2;
        sprite.stopAnimation();
        if (sprite.style.flipX) { sprite.style.flipX = false; }
        sprite.startAnimation('walk', {loop: true});
        
      } else {
        //walk right
        vx = 2;
        sprite.stopAnimation();
        if (!sprite.style.flipX) { sprite.style.flipX = true; }
        sprite.startAnimation('walk', {loop: true});
      }
    });

    GC.app.engine.on('Tick', function () {
      //add horizontal movement
      sprite.style.x += vx;

      //screen wrapping
      if (sprite.style.x > right_boundary) {
        sprite.style.x = left_boundary - sprite.style.width;
      } else if (sprite.style.x + sprite.style.width < left_boundary) {
        sprite.style.x = right_boundary;
      }
    });
  };
});
~~~
