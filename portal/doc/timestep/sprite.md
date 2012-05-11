# `timestep.Sprite`

## Inheritence

1. [timestep.View](./timestep-view.md)
2. [lib.PubSub](./lib-pubsub.md)

## Options

* __defaultAnimation__ `{string}` ---The go to animation after other iterations have completed.
* __animations__`{object}` ---See Animation options below
* __defaultWidth__ `{number}` ---Defaults to 64.
* __defaultHeight__ `{number}` ---Defaults to 64.
* __offsetX__
* __offsetY__


## Methods

* __getName__
	* @return `{string}`

* __getFront (width)__

* __addAnimation (name, args)__

* __startAnimation (name, opts)__
	* @param `{string} name`
	* @param `{object} opts`
		* __iterations__ ` {number}` ---Run the animation a
          number of times before reverting back to the default animation.
		* __callback__ `{function}` ---Executed after the iteration switch.
		* __mirrorHorizontal__ `{boolean}` ---Mirror the sprite animation horizontally.
		* __mirrorVertical__ `{boolean}` ---Mirror the sprite animation vertically.

* __isCurrentAnimation (name)__ ---Determine if the provided animation is the one running.
	* @param `{string} name`
	* @return `{boolean}`

* __pauseAnimation__

* __setPaused (isPaused)__ ---Set the paused state.
	* @param `{boolean} isPaused`
	* @return `{boolean}`

* __stopAnimation__ ---Stop the running animation.


# `SpriteAnimation`

## Animation Options

The `animations` object is a collection of `SpriteAnimation`
objects, each representing a single animation sequence, or
and array of `timestep.Image` objects. This can be part of
the `Sprite` parameters during installation, or added with
its `addAnimation` method. In the constructor animations object,
the key is the name of the animation and the value is a
`SpriteAnimation` object.

* __frameRate__ `{number}` ---Defaults to `10`.
* __imageURL__ `{string}` ---Defaults to `'about:blank'`.
* __width__ `{number}` ---Width of the sprite.
* __height__ `{number}` ---Height of the sprite.
* __spritesWide__ `{number}` ---Amount of sprites make up the width (`sheetWidth / width`).
* __spritesHigh__ `{number}` ---Amount of sprites make up the height (`sheetHeight / height`).
* __sheetWidth__ `{number}` ---Full width of the sprite sheet.
* __sheetHeight__ `{number}` ---Full height of the sprite sheet.
* __start__ `{number}` ---Index of the sprite to start the animation (from left to right, top to bottom).
* __end__ `{number}` ---Index of the sprite to end the animation.
* __step__ `{number}` ---Amount of ticks or frames inbetween sprite frames.
* __frames__ `{array}` ---Array of frames. Frames are an array of 2 elements: `[sourceX, sourceY]`. Defaults to `[]`.
* __front__ `{number}` ---Defaults to `0`. Does nothing?
* __autoframes__ `{boolean}` ---Defaults to `false`, does nothing?


## Methods

* __getFront (width)__

* __render (thisArg, view)__
	* @param `{}` thisArg
	* @param `{}` view

* __reset (frame, dt)__
	* @param `{number}` frame
	* @param `{number}` dt

* __tick (dt)__
	* @param `{number}` dt
	* @return `{number}`


# Usage

~~~

"use import";

import timestep.View as View;
import timestep.Sprite as Sprite;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		var runner = new Sprite({
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
~~~
