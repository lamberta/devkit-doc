# Class: ui.SpriteView

Inherits from
:    1. [ui.ImageView](./ui-images.html#class-ui.imageview)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

## Examples

* [A Basic SpriteView](../example/ui-spriteview-basic/)

## Overview

A *Sprite* consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system loads images from a directory using file
names formatted as:

~~~
directory/spriteName-animationName-01.png
directory/spriteName-animationName-02.png
...
directory/spriteName-animationName-08.png
... etc ...
~~~

The sprite system infers three things from the file names:
the name of the *sprite*, the name of each *animation* for
the sprite, and the *amount*  of frames required for an
animation.

Given the following images in a project's `resources` directory:

~~~
project
.
└── resources/
     └── images/
          └── characters/
               ├── carl-idle-01.png
               ├── carl-idle-02.png
               ├── carl-idle-03.png
               ├── carl-idle-04.png
               ├── carl-walk-01.png
               ├── carl-walk-02.png
               └── carl-walk-03.png
~~~

There is one sprite, *carl*, with two animations, *idle*
and *walk*. The *idle* animation contains four frames and
the *walk* animation contains three frames.

During the build stage, these images are automatically
turned in to an optimized sprite-sheet for each directory.
These are then saved in the
`build/.../spritesheets` directory of your project, depending
on the target of the build (e.g. simulating iPhone will create
`build/debug/native-ios/spritesheets`).

Developers should not need to touch the generated
sprite-sheets, however, if you have changed an animation and
are still seeing the old images, you can delete the
`build/` directory to ensure it is re-generated on the next build.


## Methods

### new SpriteView ([options])

Parameters
:    1. `options {object}`
	     * `url {string}` ---Sprite image file name prefix.
		 * `defaultAnimation {string}` ---Defaults to the first animation listed in the directory
		 * `groupID {string} = 'default'` ---Specify a Sprite group
		 * `frameRate {number} = 15` ---Rate at which the animation will play each frame.
		 * `emitFrameEvents {boolean} = false` ---Will publish events for an animation and its frame number (`myAnim_40`).
		 * `autoStart {boolean} = false` ---Animation will start as soon as initialised.
		 * `loop {boolean} = true` ---Animation will continue to play forever.
		 * `delay {number} = 0` ---Delay in milliseconds between animation loop iterations.

~~~
import ui.SpriteView as SpriteView;

var sprite = new SpriteView({
  superview: parent,
  x: 0,
  y: 0,
  width: 75,
  height: 100,
  url: 'resources/images/spritename',
  frameRate: 30
});
~~~

### startAnimation (name [, options])

Parameters
:    1. `name {string}`
     2. `options {object}`
	     * `iterations {number} = 1` ---Number of times to repeat the animation.
		 * `callback {function} = null` ---Called at end of animation.
		 * `frame {number} = 0` ---Frame to start on.
		 * `randomFrame {boolean} = false` ---Start on random frame.
		 * `loop {boolean} = false` ---Continously loop an animation.
		 * `delay {number} = 0` ---Delay in milliseconds between animation loop iterations.

Start an animation. After the specified number of
`iterations`, the sprite returns to its `defaultAnimation`.

~~~
sprite.startAnimation('run', {loop: true});
~~~

### stopAnimation ()

Stops the current animation and sets its visibility to `false`.

### resetAnimation ()

If the current animation loops, start the default
animation, otherwise, stop the animation.

### resetAllAnimations ([options])

Parameters
:    1. `options {object}`

Completely reset all the sprite's animations. If provided,
update the options.

### pause ()

Pause the animation.

### resume ()

Resume a paused animation.

### setFramerate (fps)

Parameters
:    1. `fps {number}`

Set the framerate of a sprite.

### getFrame (animName, index)

Parameters
:    1. `animName {string}`
	 2. `index {number}`

Returns
:    1. `{Frame}`

Return the image resource for a particular animation frame.

### getFrameCount (animName)

Returns
:    1. `{number}`

Returns the number of frames in a given animation.

### getGroup (groupID)

Parameters
:    1. `groupID {string}`

Returns
:    1. `{Group}`

Return the group that the sprite is a member of.

## Properties

### visible `{boolean}`

Return if the sprite is visible.

### frameRate `{number}`

The framerate of the sprite.

### isPlaying `{boolean}`

Test if the animation is playing.

### isPaused `{boolean}`

Test if an animation is paused.

### groupID `{string}`

The group ID the sprite is a member of.


## Class Methods

### SpriteView.getGroup (groupID)

Parameters
:    1. `{string} groupID`

Returns
:    1. `{Group}`

Returns the group. This is useful for keeping track of
multiple sprites, for example, if you wanted to pause all
of the sprites in an `'enemy'` group:

~~~
var enemies = SpriteView.getGroup('enemy');
enemies.pause();
~~~

## Class Properties

### SpriteView.allAnimations `{object}`

Object of all animations found in the resources directory.


# Class: Sprite Groups

Sprites can be grouped for easier coordination.

~~~
var group = SpriteView.getGroup('groupname');
~~~

## Methods

### add (sprite)

Parameters
:    1. `sprite {SpriteView}`

Add a sprite to a group.

### remove (uid)

Parameters
:    1. `uid {string}`

Remove a sprite from a group given its uid name.

### pause ()

Pause the animations for each member of a group.

### resume ()

Resume the animations for each member of a group.

### stopAnimation ()

Stop the animations for each member of a group.

### resetAnimation ()

Reset the animations for each member of a group.
