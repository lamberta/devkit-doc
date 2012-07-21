# ui.SpriteView

A *Sprite* consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system grabs images from a given location and
format. Using images like this:

~~~
directory/spriteName-animationName-0001.png
directory/spriteName-animationName-0002.png
~~~

## Class: ui.SpriteView

Inherits
:    1. [ui.ImageView](./ui-imageview.html)
     2. [ui.View](./ui-view.html)
     3. [event.PubSub](./event-index.html#class-event.pubsub)

~~~
import ui.SpriteView as SpriteView;
~~~

### new SpriteView ([options])
1. `options {object}`
	* `url {string}` ---Specified as a file name prefix.
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

Start an animation.

~~~
sprite.startAnimation('run');
~~~

### sprite.stopAnimation ()

### sprite.resetAnimation ()

### sprite.resetAllAnimations (opts)
1. `opts {object}`

### sprite.pause ()

### sprite.resume ()

### sprite.setFramerate (fps)
1. `fps {number}` ---Frames per second.

### sprite.getFrame (animName, index)
1. `animName {string}`
2. `index {number}`
3. Return: `{Frame}`

Returns a [ui.Image](./ui-image.html) for the
given animation's frame.

### sprite.getFrameCount (animName)

Returns the number of frames in a given animation.

### sprite.getGroup (groupId)
1. `{} groupId`
2. Return:`{Group}`

### sprite.defaults
1. `{object}`
	* `url {string} = null`
	* `groupId {string} = 'default'`
	* `frameRate {number} = 15`
	* `emitFrameEvents {boolean} = false`
	* `autoStart {boolean} = false`
	* `loop {boolean} = true`

### sprite.visible
1. `{boolean}`

### sprite.groupID
1. `{string}`

### sprite.frameRate
1. `{number}`



### Class Method: SpriteView.getGroup ()

### Class Property: SpriteView.allAnimations
1. `{Object}`


## Example: Create a Sprite

To create a new sprite object:

~~~
m4_include(./examples/api/spriteview.js)
~~~
