# `timestep.Sprite`

New and improved version that replaces [`timestep.OldSprite`](./timestep-oldsprite.html).

A `Sprite` consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system grabs images from a given location and
format. Using images like this:

~~~

directory/spriteName-animationName-0001.png
directory/spriteName-animationName-0002.png
~~~

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

## Inheritence

1. [timestep.ImageView](./timestep-imageview.html)
2. [timestep.View](./timestep-view.html)
3. [lib.PubSub](./lib-pubsub.html)

## Methods

* __startAnimation (name, opts)__ ---Start an animation.
	* @param `{string} name`
	* @param `{object} opts`
		* __iterations__ `{number} = 1`
		* __callback__ `{function} = null`   ---Called at end of animation.
		* __frame__ `{number} = 0` ---Frame to start on.
		* __randomFrame__ `{boolean} = false` ---Start on random frame.

* __stopAnimation__

* __resetAnimation__

* __resetAllAnimations (opts)__
	* @param `{object} opts`

* __pause__

* __resume__

* __setFramerate (fps)__
	* @param `{number} fps` ---Frames per second.

* __getFrame (animName, index)__ ---Returns a [`timestep.Image`](./timestep-image.html) for the given
  animation's frame.

* __getFrameCount (animName)__ ---Returns the number of frames in a given aniamtion.

* __getGroup (groupId)__
	* @param `{} groupId`
	* @return `{}`


## Properties

* __defaults__ `{object}`
	* __url__ `{string} = null`
	* __groupId__ `{string} = 'default'`
	* __frameRate__ `{number} = 15`
	* __emitFrameEvents__ `{boolean} = false`
	* __autoStart__ `{boolean} = false`
	* __loop__ `{boolean} = true`

## Class Methods

* __getGroup__

## Class Properties

* __allAnimations__ `{object}`



# `timestep.Group`

## Methods

* __add (sprite)__
	* @param `{timestep.Sprite} sprite`

* __remove (uid)__
	* @param `{} uid`

* __pause__

* __resume__

* __stopAnimation__

* __resetAnimation__
