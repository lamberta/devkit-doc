# ui.SpriteView

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
the *name* of the sprite, the *name* of each animation for
the sprite, and the *amount*  of frames required for an
animation.

Given the following images in a project's `resources` directory:

~~~
resources/images/characters/carl-idle-01.png
resources/images/characters/carl-idle-02.png
resources/images/characters/carl-idle-03.png
resources/images/characters/carl-idle-04.png
resources/images/characters/carl-run-01.png
resources/images/characters/carl-run-02.png
resources/images/characters/carl-run-03.png
~~~

There is one sprite, *carl*, with two animations, *idle*
and *run*, and the *idle* animation contains four frames,
the run animation three.

During the build stage, these images are automatically
turned in to an optimized sprite-sheet based on this
information, and in some cases, they are converted in to
multiple sprite-sheets. These are saved in the
`build/resources` directory of your project.

Developers should not need to touch the generated
sprite-sheets, however, if you have changed an animation and
are still seeing the old images, you can delete the
`build/resources` directory to remove the cache and it will
be re-generated on the next build.


## Class: ui.SpriteView

Inherits from:
:    1. [ui.ImageView](./ui-imageview.html)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.SpriteView as SpriteView;
~~~

### new SpriteView ([options])
1. `options {object}`
    * `url {string}` ---Sprite image file name prefix.
	* `defaultAnimation {string}` ---Defaults to the first animation listed in the directory
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
  url: 'resources/images/spritename',
  frameRate: 30
});
~~~

### sprite.defaults
1. `{object}`
    * `url {string} = null`
    * `groupId {string} = 'default'`
    * `frameRate {number} = 15`
    * `emitFrameEvents {boolean} = false`
    * `autoStart {boolean} = false`
    * `loop {boolean} = true`

The default sprite settings.

### sprite.startAnimation (name [, options])
1. `name {string}`
2. `options {object}`
    * `iterations {number} = 1`
    * `callback {function} = null` ---Called at end of animation.
    * `frame {number} = 0` ---Frame to start on.
    * `randomFrame {boolean} = false` ---Start on random frame.

Start an animation. After the specified number of
`iterations`, the sprite returns to its `defaultAnimation`.

~~~
sprite.startAnimation('run');
~~~

### sprite.stopAnimation ()

Stops the current animation and sets its visibility to `false`.

### sprite.resetAnimation ()

If the current animation loops, start the default
animation, otherwise, stop the animation.

### sprite.resetAllAnimations ([options])
1. `options {object}`

Completely reset all the sprite's animations. If provided,
update the options.

### sprite.pause ()

Pause the animation.

### sprite.resume ()

Resume a paused animation.

### sprite.visible
1. `{boolean}`

Return if the sprite is visible.

### sprite.frameRate
1. `{number}`

The framerate of the sprite.

### sprite.setFramerate (fps)
1. `fps {number}`

Set the framerate of a sprite.

### sprite.getFrame (animName, index)
1. `animName {string}`
2. `index {number}`
3. Return: `{Frame}`

Return the image resource for a particular animation frame.

### sprite.getFrameCount (animName)
1. Return: `{number}`

Returns the number of frames in a given animation.

### sprite.groupID
1. `{string}`

The group ID the sprite is a member of.

### sprite.getGroup (groupID)
1. `groupID {string}`
2. Return:`{Group}`

Return the group that the sprite is a member of.

### sprite.isPlaying
1. `{boolean}`

Test if the animation is playing.

### sprite.isPaused
1. `{boolean}`

Test if an animation is paused.

### Class Property: SpriteView.allAnimations
1. `{object}`

Object of all animations found in the resources directory.

### Class Method: SpriteView.getGroup (groupID)
1. `{string} groupID`
2. Return:`{Group}`

Returns the group. This is useful for keeping track of
multiple sprites, for example, if you wanted to pause all
of the sprites in an `'enemy'` group:

~~~
var enemies = SpriteView.getGroup('enemy');
enemies.pause();
~~~


## Sprite Groups

Sprites can be grouped for easier coordination.

~~~
var group = SpriteView.getGroup('groupname');
~~~

### group.add (sprite)
1. `sprite {SpriteView}`

Add a sprite to a group.

### group.remove (uid)
1. `uid {string}`

Remove a sprite from a group given its uid name.

### group.pause ()

Pause the animations for each member of a group.

### group.resume ()

Resume the animations for each member of a group.

### group.stopAnimation ()

Stop the animations for each member of a group.

### group.resetAnimation ()

Reset the animations for each member of a group.


## Example: Create a sprite

Given the following project layout for resources:

~~~
project
  |--manifest.json
  |--src/
  |   |-Application.js
  |--resources/
  |   |-images/
  |      |-characters/
  |         |-carl-idle-1.png
  |         |- ...
  |         |-carl-idle-5.png
  |         |-carl-walk-1.png
  |         |- ...
  |         |-carl-walk-8.png
  |--sdk/
  |--build/
~~~

You can set up a sprite to play multiple animations:

~~~
m4_include(./examples/api/spriteview.js)
~~~
