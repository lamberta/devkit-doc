# timestep.Sprite

A *Sprite* consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system grabs images from a given location and
format. Using images like this:

~~~
directory/spriteName-animationName-0001.png
directory/spriteName-animationName-0002.png
~~~

## Class: timestep.Sprite

Inherits
:    1. [timestep.ImageView](./timestep-imageview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.Sprite ([options])
1. `options {object}`


### sprite.startAnimation (name [, opts])
1. `name {string}`
2. `opts {object}`
	* `iterations {number} = 1`
	* `callback {function} = null` ---Called at end of animation.
	* `frame {number} = 0` ---Frame to start on.
	* `randomFrame {boolean} = false` ---Start on random frame.

Start an animation.

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

Returns a [`timestep.Image`](./timestep-image.html) for the
given animation's frame.

### sprite.getFrameCount (animName)

Returns the number of frames in a given aniamtion.

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

### Class Method: timestep.Sprite.getGroup ()

### Class Property: timestep.Sprite.allAnimations
1. `{object}`


## Example: Create a Sprite

To create a new sprite object:

~~~
var sprite = new Sprite({url: 'directory/spriteName'});
~~~

The `Sprite` class automatically finds the images associated
with the sprite and generates a configuartion for each of
the animations.

To start an animation:

~~~
sprite.startAnimation('animationNane');
~~~
