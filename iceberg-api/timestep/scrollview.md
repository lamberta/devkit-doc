# `timestep.ScrollView`

## Inheritence

1. [timestep.View](./view.md)
2. [lib.PubSub](../lib/pubsub.md)

## Options

* __fullWidth__ `{number}`: `0` ---Does nothing?

* __fullHeight__ `{number}`: `0` ---Does nothing?

* __offsetX__ `{number}`: `0` ---offset X position

* __offsetY__ `{number}`: `0` ---offset Y position

* __scrollX__ `{boolean}`: `true` ---scroll along the X axis

* __scrollY__ `{boolean}`: `true` ---scroll along the Y axis

* __clip__ `{boolean}`: `true`

* __bounce__ `{boolean}`: `true`

* __drag__ `{boolean}`: `true` ---allow the user to drag the view around

* __inertia__ `{boolean}`: `true` ---inertia scrolling

* __dragRadius__ `{number}`: `10` ---radius between dragging start and move

* __scrollBounds__ `{object}`: ---boundary of scroll:
	* __minX__ `{number}`: ---minimum X position.
	* __minY__ `{number}`: ---minimum Y position.
	* __maxX__ `{number}`: ---maximum X position.
	* __maxY__ `{number}`: ---maximum Y position.

## Methods

* __getStyleBounds__

	@return `{object}` --Object contains properties `minX`, `maxX`, `minY`, `maxY`

* __getOffset__

	@return `{math2D.Point}`

* __setOffset (x, y)__

	@param `{number}` x
	@param `{number}` y

* __isScrolling__

	@return `{boolean}`

* __stopScrolling__

* __onInputStart (evt, pt)__

	@param `{InputEvent}` evt
	@param `{point}` pt

* __onDragStart__

* __onDrag (dragEvt, moveEvt, delta)__

	@param `{}` dragEvt
	@param `{}` moveEvt
	@param `{point}` delta ---Object containing `x` and `y` properties.

* __onDragStop (dragEvt, selectEvt)__

	@param `{}` dragEvt
	@param `{}` selectEvt

* __startBounce__

* __endBounce__

* __setScrollBounds (bounds)__

	@param `{object}` bounds ---Object contains properties `minX`, `maxX`, `minY`, `maxY`w

* __getScrollBounds__

	@return `{bounds}` ---Object contains properties `minX`, `maxX`, `minY`, `maxY`

* __addOffset (x, y)__

	@param `{number}` x
	@param `{number}` y

* __getContentView__

	@return `{View}`

* __getFullWidth__

	@return `{number}`

* __getFullHeight__

	@return `{number}`

* __onInputScroll (evt)__

	@param `{Event}` evt

* __scrollTo (x, y, duration, callback)__

	@param `{number}` x
	@param `{number}` y
	@param `{number}` duration
	@param `{function}` callback

## Usage

	"use import";

	import timestep.ImageView as ImageView;
	import timestep.ScrollView as ScrollView;

	exports = Class(ScrollView, function(supr) {
		this.init = function(opts) {
			merge(opts, {
				scrollBounds: {
					minX: -100,
					maxX: 200,
					minY: -100,
					maxY: 200 
				},  
			}); 

			supr(this, "init", arguments);

			var ducky = new ImageView({
				image: "resources/duck.png",
				parent: this
			}); 
		}   
	});

## Messages

### Published

* `'Scrolled'` ---Pubslished in `setOffset`; called by `onDrag`, `onDragStop`, `endBounce`, and `addOffset`.

	@param `{point}` delta
