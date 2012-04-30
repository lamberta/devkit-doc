# `timestep.Sprite` inherits from [`timestep.View`](./view.md).

## Options

* __defaultAnimation__ --The go to animation after other iterations have completed.
* __animations__`{object}`
* __defaultWidth__ `{number}` ---Defaults to 64.
* __defaultHeight__ `{number}` ---Defaults to 64.
* __offsetX__
* __offsetY__


## Methods

* __getName__

	@return `{string}`

* __getFront (width)__

* __addAnimation (name, args)__

* __startAnimation (name, opts)__

	@param `{string}` name
	@param `{object}` opts
	
		* __iterations__ `{number}` ---Run the animation a
          number of times before reverting back to the default animation.
		* __callback__ `{function}` --Executed after the iteration switch.
		* __mirrorHorizontal__
		* __mirrorVertical__

* __isCurrentAnimation (name)__

	@param `{string}` name
	@return `{boolean}`

* __pauseAnimation__

* __setPaused (isPaused)__

	@param `{boolean}` isPaused
	@return `{boolean}`

* __stopAnimation__


## Uses `SpriteAnimation`

## Animation Options

The `animations` object is a collection of `SpriteAnimation`
objects, each representing a single animation sequence, or
and array of `timestep.Image` objects. This can be part of
the `Sprite` parameters during installation, or added with
its `addAnimation` method.

* __frameRate__ `{number}` ---Defaults to `10`.
* __imageURL__ `{string}` ---Defaults to `'about:blank'`.
* __width__
* __height__
* __spritesWidth__
* __spritesHeight__
* __sheetWidth__
* __sheetHeight__
* __start__
* __end__
* __step__
* __frames__ `{array}` ---Defaults to `[]`.
* __front__ `{number}` ---Defaults to `0`.
* __autoframes__ `{boolean}` ---Defaults to `false`, does nothing?


## Methods

* __getFront (width)__

* __render (thisArg, view)__

	@param `{}` thisArg
	@param `{}` view

* __reset (frame, dt)__

	@param `{number}` frame
	@param `{number}` dt

* __tick (dt)__

	@param `{number}` dt
	@return `{number}`


## Usage

~~~
import timestep.Sprite as Sprite;

var sprite = new Sprite({
  parent: GC.app.view,
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  defaultAnimation: 'default',
  animations: {
	'default': {
	  imageURL: 'resources/img/luigi-sheet.png',
	  sheetWidth: 400,
	  sheetHight: 200,
	  spritesWide: 8,
	  spritesHigh: 4,
	  start: 0,
	  end: 7
	},
	'another': {
	  imageURL: 'resources/img/luigi-sheet.png',
	  sheetWidth: 400,
	  sheetHight: 200,
	  spritesWide: 8,
	  spritesHigh: 4,
	  start: 8,
	  end: 15
	}
  }
});

sprite.startAnimation('another', {iterations: 2});
~~~
