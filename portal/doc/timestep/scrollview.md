# `timestep.ScrollView`

View to scroll itself and subviews. Supports
drag through user input.

## Inheritence

1. [timestep.View](./timestep-view.html)
2. [lib.PubSub](./lib-pubsub.html)

## Options

* __fullWidth__ `{number} = 0` ---Does nothing?

* __fullHeight__ `{number} = 0` ---Does nothing?

* __offsetX__ `{number} = 0` ---Offset X position.

* __offsetY__ `{number} = 0` ---Offset Y position.

* __scrollX__ `{boolean} = true` ---Scroll along the X axis.

* __scrollY__ `{boolean} = true` ---Scroll along the Y axis.

* __clip__ `{boolean} = true` ---Hide anything that is outside of the view boundary.

* __bounce__ `{boolean} = true` ---Bounce effect when scrolling.

* __drag__ `{boolean} = true` ---Allow the user to drag the view around.

* __inertia__ `{boolean} = true` ---Inertia scrolling.

* __dragRadius__ `{number} = 10` ---Radius between dragging start and move.

* __scrollBounds__ `{object}` ---Boundary of scroll.
	* __minX__ `{number}` ---minimum X position.
	* __minY__ `{number}` ---minimum Y position.
	* __maxX__ `{number}` ---maximum X position.
	* __maxY__ `{number}` ---maximum Y position.

## Methods

* __getStyleBounds__ ---Return the style boundary object.
	* @return `{object}` ---Object contains properties `minX`, `maxX`, `minY`, `maxY`

* __getOffset__ ---Returns a point of the Scroll offset.
	* @return `{math2D.Point}`

* __setOffset (x, y)__ ---Set the offset to manually scroll views.
	* @param `{number} x`
	* @param `{number} y`

* __isScrolling__ ---If View is currently scrolling.
	* @return `{boolean}`

* __stopScrolling__ ---Stop View from scrolling.

* __startBounce__ ---Set the ability to bounce when scrolling.

* __endBounce__ ---Remove the ability to bounce when scrolling.

* __setScrollBounds (bounds)__ ---Set the scroll boundary.
	* @param `{object} bounds`
		* @param `{number} minX`
		* @param `{number} maxX`
		* @param `{number} minY`
		* @param `{number} maxY`

* __getScrollBounds__ ---Return the scroll boundary object.
	* @return `{bounds}` ---Object contains properties `minX`, `maxX`, `minY`, `maxY`.

* __addOffset (x, y)__ ---Add the values to the current offset.
	* @param `{number} x`
	* @param `{number} y`

* __getContentView__ ---Return the generated View that becomes the container View.
	* @return `{View}`

* __getFullWidth__ ---Return the full width.
	* @return `{number}`

* __getFullHeight__ ---Return the full height.
	* @return `{number}`

* __scrollTo (x, y, duration, callback)__ ---Smoothly scroll to a specific position.
	* @param `{number} x`
	* @param `{number} y`
	* @param `{number} duration`
	* @param `{function} callback`


## Events

### Publish

* __`Scrolled`__ ---Published in `setOffset`; called by `onDrag`, `onDragStop`, `endBounce`, and `addOffset`.
	* @param `{point} delta`


## Usage

Add an image to a ScrollView as a subview and
allow the user to scroll through drag.

~~~

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
~~~
