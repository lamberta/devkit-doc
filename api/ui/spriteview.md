# timestep.SpriteView

A *Sprite* consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system grabs images from a given location and
format. Using images like this:

~~~
directory/spriteName-animationName-0001.png
directory/spriteName-animationName-0002.png
~~~

## Class: timestep.SpriteView

Inherits
:    1. [timestep.ImageView](./timestep-imageview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.SpriteView ([options])
1. `options {object}`
	* `url {string}` ---Specified as a file name prefix.
	* `groupID {string} = 'default'`
	* `frameRate {number} = 15`
	* `emitFrameEvents {boolean} = false`
	* `autoStart {boolean} = false`
	* `loop {boolean} = true`

### spriteview.startAnimation (name [, opts])
1. `name {string}`
2. `opts {object}`
	* `iterations {number} = 1`
	* `callback {function} = null` ---Called at end of animation.
	* `frame {number} = 0` ---Frame to start on.
	* `randomFrame {boolean} = false` ---Start on random frame.

Start an animation.

~~~
var sprite = new timestep.SpriteView({
  superview: parent,
  x: 0,
  y: 0,
  width: 75,
  height: 100,
  url: 'resources/images/sprite',
  frameRate: 30
})

sprite.startAnimation('run');
~~~

### spriteview.stopAnimation ()

### spriteview.resetAnimation ()

### spriteview.resetAllAnimations (opts)
1. `opts {object}`

### spriteview.pause ()

### spriteview.resume ()

### spriteview.setFramerate (fps)
1. `fps {number}` ---Frames per second.

### spriteview.getFrame (animName, index)
1. `animName {string}`
2. `index {number}`
3. Return: `{Frame}`

Returns a [`timestep.Image`](./timestep-image.html) for the
given animation's frame.

### spriteview.getFrameCount (animName)

Returns the number of frames in a given animation.

### spriteview.getGroup (groupId)
1. `{} groupId`
2. Return:`{Group}`

### spriteview.defaults
1. `{object}`
	* `url {string} = null`
	* `groupId {string} = 'default'`
	* `frameRate {number} = 15`
	* `emitFrameEvents {boolean} = false`
	* `autoStart {boolean} = false`
	* `loop {boolean} = true`

### spriteview.visible
1. `{boolean}`

### spriteview.groupID
1. `{string}`

### spriteview.frameRate
1. `{number}`



### Class Method: SpriteView.getGroup ()

### Class Property: SpriteView.allAnimations
1. `{Object}`


## Example: Create a Sprite

To create a new sprite object:

~~~
m4_include(./examples/api/spriteview.js)
~~~
