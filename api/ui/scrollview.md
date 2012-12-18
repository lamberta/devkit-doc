# ui.ScrollView

View to scroll itself and subviews. Supports
drag through user input.

## Class: ui.ScrollView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ScrollView as ScrollView;
~~~

### new ScrollView ([options])
1. `options {object}`
	* `offsetX {number} = 0` ---Offset the child's X position relative to the scrollview.
	* `offsetY {number} = 0` ---Offset the child's Y position relative to the scrollview.
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
	* `snapPixels {number} = 1` ---Snap to certain pixel increments.
	* `useLayoutBounds {boolean} = true` ---TODO!

~~~
var scrollview = new ScrollView();
~~~

~~~
//scroll around an image
var scrollview = new ui.ScrollView({
  superview: parent,
  x: 0,
  y: 0,
  width: 480,    //the scrollview is smaller than the image
  height: 320,
  offsetX: -100, //offset the image within the scrollview
  offset: -100,
  scrollBounds: {
    minX: 0,
    maxX: 1000,  //can scroll 1000 px to the right
    minY: 0,
    maxY: 1000   //can scroll 1000 px downwards.
  }
});

var worldmap = new ui.ImageView({
  x: 0,
  y: 0,
  width: 1000,
  height: 1000,
  image: "resources/images/worldmap.png"
});

scrollview.addSubview(worldmap); //add the big image to the scrollview
~~~

### scrollview.addFixedView (view)
1. `view {View}` ---The view to add as a fixed child of this view.
2. Return: `{View}` ---Returns the view that was passed to this method.

Add a non-scrolling child subview.

### scrollview.removeFixedView (view)
1. `view {View}` ---The fixed child view to remove from this view.
2. Return: `{View}` ---Returns the view that was passed to this method.

Remove a non-scrolling child subview.

### scrollview.getStyleBounds ()
1. Return: `{object}`
	* `minX {number}` ---The minumum horizontal boundary.
	* `maxX {number}` ---The maximum horizontal boundary.
	* `minY {number}` ---The minimum vertical boundary.
	* `maxY {number}` ---The maximum vertical boundary.

Return the style boundary object.

### scrollview.getOffset ()
1. Return `{Point}`
	* `x {number}` ---The current horizontal offset.
	* `y {number}` ---The current vertical offset.

Returns a point of the Scroll offset.

### scrollview.setOffset (x, y)
1. `x {number}` ---The horizontal offset to set.
2. `y {number}` ---The vertical offset to set.

Set the offset to manually scroll views.

### scrollview.isScrolling ()
1. Return `{boolean}`

Return `true` if the ScrollView is scrolling.

### scrollview.stopScrolling ()

Stop View from scrolling.

### scrollview.setScrollBounds (bounds)
1. `bounds {object}`
	* `minX {number}` ---The minumum horizontal scroll boundary to set.
	* `maxX {number}` ---The maximum horizontal scroll boundary to set.
	* `minY {number}` ---The minimum vertical scroll boundary to set.
	* `maxY {number}` ---The maximum vertical scroll boundary to set.

Set the scroll boundary.

### scrollview.getScrollBounds ()
1. Return: `bounds {object}`
	* `minX {number}` ---The minumum horizontal scroll boundary.
	* `maxX {number}` ---The maximum horizontal scroll boundary.
	* `minY {number}` ---The minimum vertical scroll boundary.
	* `maxY {number}` ---The maximum vertical scroll boundary.

Return the scroll boundary object.

### scrollview.addOffset (x, y)
1. `x {number}` ---The horizontal offset to add.
2. `y {number}` ---The vertical offset to add.

Add the values to the current offset.

### scrollview.getContentView ()
1. Return: `{View}`

Return the generated View that becomes the container View.

### scrollview.onInputScroll (scrollEvent)
1. `scrollEvent {ScrollEvent}`
	* `scrollAxis {number}` ---Enum, input.VERTICAL_AXIS, input.HORIZONTAL_AXIS.
	* `scrollDelta {number}` ---The scroll delta.

This is called in the desktop browser upon using the scroll wheel or a multi-touch scroll action.

### scrollview.scrollTo (x, y, duration, callback)
1. `x {number}` ---The horizontal offset to scroll to.
2. `y {number}` ---The vertical offset to scroll to.
3. `duration {number}` ---The millisecond duration of the scroll animation.
4. `callback {function}` ---Function to be invoked after animation completes.

Smoothly scroll to a specific position.


### Events

#### \'Scrolled\', callback (delta)
1. `delta {point}`

Published in `setOffset`; called by `onDrag`, `onDragStop`, and `addOffset`.
