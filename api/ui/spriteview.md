# ui.SpriteView

A *Sprite* consists of multiple *animations* (walk, run, etc.) which themselves are made of multiple *frames*.

The sprite system grabs images from a given location and format, using images like this:

~~~
directory/spriteName-animationName-0001.png
directory/spriteName-animationName-0002.png
~~~

Then, you pass a path as a `url` parameter to a SpriteView constructor. This infers several things from the `url` - the name of each animation, and the number of frames to that animation. This is conveyed to the sprite system by the file name. For example, consider:

~~~
resources/images/characterSprites/timSprite-idle-01.png
resources/images/characterSprites/timSprite-idle-02.png
resources/images/characterSprites/timSprite-idle-03.png
resources/images/characterSprites/timSprite-idle-04.png
resources/images/characterSprites/timSprite-idle-05.png
resources/images/characterSprites/timSprite-idle-06.png
resources/images/characterSprites/timSprite-run-01.png
resources/images/characterSprites/timSprite-run-02.png
resources/images/characterSprites/timSprite-run-03.png
~~~

When this is referenced from the constructor (as `resources/images/characterSprites/timSprite`), it gives this information: 
There are two animations for the *timSprite* sprite - `idle` and `run`. `idle` has 6 frames, and run has 3.

During the build stage, these images are automatically turned into an optimised spritesheet, based on the number and size of these images. In some cases they may be turned into multiple spritesheets. These spritesheets are saved to `build/resources/`.

In practice, developers never need to touch these spritesheets. However, in some situations, the `build/resources/` folder must be deleted, as it may cache old images.

## Class: ui.SpriteView

Inherits
:    1. [ui.ImageView](./ui-imageview.html)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.SpriteView as SpriteView;
~~~

### new SpriteView ([options])
1. `options {object}`
	* `url {string}` ---Sprite image filename prefix.
	* `groupID {string} = 'default'`
	* `frameRate {number} = 15`
	* `emitFrameEvents {boolean} = false`
	* `autoStart {boolean} = false`
	* `loop {boolean} = true`

~~~
var sprite = new SpriteView({
  superview: parent,
  x: 0,
  y: 0,
  width: 75,
  height: 100,
  url: 'resources/images/sprite',
  frameRate: 30
});
~~~

### sprite.startAnimation (name [, opts])
1. `name {string}`
2. `opts {object}`
	* `iterations {number} = 1`
	* `callback {function} = null` ---Called at end of animation.
	* `frame {number} = 0` ---Frame to start on.
	* `randomFrame {boolean} = false` ---Start on random frame.

Starts an animation. After the specified number of `iterations`, the sprite returns to its `defaultAnimation`.

~~~
sprite.startAnimation('run');
~~~

### sprite.stopAnimation ()

Stops the current animation and hides the sprite.

### sprite.resetAnimation ()

If the current animation loops, start the default animation. Otherwise, calls `.stopAnimation()`.

### sprite.resetAllAnimations (opts)
1. `opts {object}`

Completely resets all the animations, and sets new options with `opts` and the defaults.

### sprite.pause ()

Pauses the animation.

### sprite.resume ()

Unpauses the animation.

### sprite.setFramerate (fps)
1. `fps {number}`

Sets the sprite's framerate.

### sprite.getFrame (animName, index)
1. `animName {string}`
2. `index {number}`
3. Return: `{Frame}`

Returns a [ui.Image](./ui-image.html) for the given animation's frame.

### sprite.getFrameCount (animName)

Returns the number of frames in a given animation.

### sprite.getGroup (groupID)
1. `{string} groupID`
2. Return:`{Group}`

Returns the group.

### sprite.defaults
1. `{object}`
	* `url {string} = null`
	* `groupId {string} = 'default'`
	* `frameRate {number} = 15`
	* `emitFrameEvents {boolean} = false`
	* `autoStart {boolean} = false`
	* `loop {boolean} = true`

Default sprite settings.

### sprite.visible
1. `{boolean}`

Whether or not the sprite is visible.

### sprite.groupID
1. `{string}`

The group the sprite is in.

### sprite.frameRate
1. `{number}`

The sprite's framerate.

### Class Method: SpriteView.getGroup (groupID)
1. `{string} groupID`
2. Return:`{Group}`

Returns the group. This is useful for keeping track of multiple sprites - for example, if you wanted to pause all of your enemy sprites.

~~~
SpriteView.getGroup('enemy').pause(); //pauses all sprites in the 'enemy' group
~~~


### Class Property: SpriteView.allAnimations
1. `{object}`

Object of all animations found in the resources directory.

## Example: Create a sprite

~~~
m4_include(./examples/api/spriteview.js)
~~~
