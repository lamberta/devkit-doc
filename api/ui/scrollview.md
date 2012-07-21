# ui.ScrollView

View to scroll itself and subviews. Supports
drag through user input.

## Class: ui.ScrollView

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.PubSub](./event-index.html#class-event.pubsub)

~~~
import ui.ScrollView as ScrollView;
~~~

### new ScrollView ([options])
1. `options {object}`
	* `fullWidth {number} = 0` ---Does nothing?
	* `fullHeight {number} = 0` ---Does nothing?
	* `offsetX {number} = 0` ---Offset X position.
	* `offsetY {number} = 0` ---Offset Y position.
	* `scrollX {boolean} = true` ---Scroll along the X axis.
	* `scrollY {boolean} = true` ---Scroll along the Y axis.
	* `clip {boolean} = true` ---Hide anything that is outside of the view boundary.
	* `bounce {boolean} = true` ---Bounce effect when scrolling.
	* `drag {boolean} = true` ---Allow the user to drag the view around.
	* `inertia {boolean} = true` ---Inertia scrolling.
	* `dragRadius {number} = 10` ---Radius between dragging start and move.
	* `scrollBounds {object}` ---Boundary of scroll.
		* `minX {number}` ---minimum X position.
		* `minY {number}` ---minimum Y position.
		* `maxX {number}` ---maximum X position.
		* `maxY {number}` ---maximum Y position.

~~~
var scrollview = new ScrollView();
~~~

### scrollview.getStyleBounds ()
1. Return: `{object}`
	* `minX {number}`
	* `maxX {number}`
	* `minY {number}`
	* `maxY {number}`

Return the style boundary object.

### scrollview.getOffset ()
1. Return `{Point}`

Returns a point of the Scroll offset.

### scrollview.setOffset (x, y)
1. `x {number}`
2. `y {number}`

Set the offset to manually scroll views.

### scrollview.isScrolling ()
1. Return `{boolean}`

If View is currently scrolling.

### scrollview.stopScrolling ()

Stop View from scrolling.

### scrollview.startBounce ()

Set the ability to bounce when scrolling.

### scrollview.endBounce ()

Remove the ability to bounce when scrolling.

### scrollview.setScrollBounds (bounds)
1. `bounds {object}`
	* `minX {number}`
	* `maxX {number}`
	* `minY {number}`
	* `maxY {number}`

Set the scroll boundary.

### scrollview.getScrollBounds ()
1. Return: `bounds {object}`
	* `minX {number}`
	* `maxX {number}`
	* `minY {number}`
	* `maxY {number}`

Return the scroll boundary object.

### scrollview.addOffset (x, y)
1. `x {number}`
2. `y {number}`

Add the values to the current offset.

### scrollview.getContentView ()
1. Return: `{View}`

Return the generated View that becomes the container View.

### scrollview.getFullWidth ()
1. Return: `{number}`

Return the full width.

### scrollview.getFullHeight ()
1. Return: `{number}`

Return the full height.

### scrollview.scrollTo (x, y, duration, callback)
1. `x {number}`
2. `y {number}`
3. `duration {number}`
4. `callback {function}`

Smoothly scroll to a specific position.

### Event: \'Scrolled\', callback (delta)
1. `delta {point}`

Published in `setOffset`; called by `onDrag`, `onDragStop`, `endBounce`, and `addOffset`.


## Example: Create a ScrollView

Add an image to a ScrollView as a subview and
allow the user to scroll through drag.

~~~
m4_include(./examples/api/scrollview.js)
~~~
