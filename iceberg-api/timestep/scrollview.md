# `timestep.ScrollView`

## Inheritence

1. [timestep.View](./view.md)
2. [lib.PubSub](../lib/pubsub.md)

## Options

* __fullWidth__: `0`

* __fullHeight__: `0`

* __offsetX__: `0`

* __offsetY__: `0`

* __scrollX__: `true`

* __scrollY__: `true`

* __clip__: `true`

* __bounce__: `true`

* __drag__: `true`

* __inertia__: `true`

* __dragRadius__: `10`


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


## Messages

### Published

* `'Scrolled'` ---Pubslished in `setOffset`; called by `onDrag`, `onDragStop`, `endBounce`, and `addOffset`.

	@param `{point}` delta
