# ui.ScrollView

View to scroll itself and subviews. Supports
drag through user input.

## Class: ui.ScrollView

Inherits
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


### Events

#### \'Scrolled\', callback (delta)
1. `delta {point}`

Published in `setOffset`; called by `onDrag`, `onDragStop`, `endBounce`, and `addOffset`.


## Example: Create a ScrollView

In this example, we'll use the `ScrollView` as a viewport to
move around a
[large background image](./assets/ui-scrollview/europemap.jpg). Dragging
the screen moves the map until it reaches the edge of the
scroll bounds. The scrollview has an offset applied to view
the image initially 800 pixels in on the x and y axis.

~~~
m4_include(./examples/api/scrollview.js)
~~~

<img src="./assets/ui-scrollview/example-scrollview.png" alt="scrollview section screenshot" class="screenshot">
