# ui.View

The base display object.

## Class: ui.View

Inherits
:    1. [event.PubSub](./event.html#class-event.pubsub)

~~~
import ui.View as View;
~~~

### new View ([options])
1. `options {object}` ---Optional.
	* `id {string}`
	* `tag {string}`
	* `filters {Filter}`
	* `circle {boolean} = false`
	* `infinite {boolean} = false`
	* `canHandleEvents {boolean} = true`
	* `superview {View}`
	* `rotation {number} = 0`

~~~
var view = new View();
~~~

### view.style
1. `{ViewStyle}`

Property containing the view's style defintions.

### view.getApp ()
1. Return: `{timestep.Application}`

Returns the root application for this view: `GC.app.engine`.

### view.getSuperview ()
1. Return: `{View}`

Returns the parent view of this view.

### view.getParents ()
1. Return: `{array}`

Returns an array of all ancestors of the current view to the
scene graph root.

### view.getSubview (i)
1. `id {number}`
2. Return: `{View}`

Return a subview at the given index.

### view.getSubviews ()
1. Return: `{array}`

Returns an array of all subviews.

### view.addSubview (view)
1. `view {View}`
2. Return: `{View}` ---Returns the given view.

Add a view as a child of this view.

### view.removeSubview (view)
1. `view {View}`

Removes a child view from this view.

### view.removeAllSubviews ()

Removes all child views from this view.

### view.removeFromSuperview ()

Removes this view from its parent view.

### Callback handler: view.buildView

Called before the first render of the view. Since a view
will have it's dimensions set when this called, subview
creation should be put in here since their dimensions will
be dependent on their parent.

~~~
exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    this.background = new ui.View({
      superview: this,
      x: 0,
      y: 0,
      width: this.style.width, // these are set in the supr init function
      height: this.style.width
    });

    /* Put your subviews here! */
  };
});
~~~


### view.needsRepaint ()

Notifies the renderer that the view needs to be repainted next tick.

### view.needsReflow ()

Notifies the need for repositioning.

### view.needsSort ()

Notifies the need for sorting views.

### view.canHandleEvents (handlep)
1. `handlep {boolean}`

Set if a view will handle events or not.

### view.getInput ()
1. Return: `{InputHandler}`

Return the input handler of a view.

### view.isInputOver ()
1. Return `{boolean}`

Check if an input event is over a view.

### view.getInputOverCount ()
1. Return: `{number}`

Returns a count of how many input events are over a view.

### view.startDrag (options)
1. `options {object}`
	* `inputStartEvt {InputEvent}`
	* `radius {number} = 0`

Start responding to an input event by dragging the view.

~~~
view.on('InputStart', function (evt, pt) {
  myView.startDrag({ radius: 15 }); //will fire onDrag if the drag is further than 15 pixels in any direction
});
~~~

### view.isDragging ()
1. Return: `{boolean}`

Indicate if the view is being dragged.

### view.localizePoint (point)
1. `point {math2D.Point}`
2. Return `{math2D.Point}` ---Returns the given point, with updated values.

Convert a point to it’s local position relative to this view.

### view.getPosition ([relativeTo])
1. `relativeTo {View}` ---Optional.
2. Return: `{object}`
	* `x {number}`
	* `y {number}`
	* `rotation {number}`
	* `width {number}`
	* `height {number}`
	* `scale {number}`

Get position of a view relative to a superview. If
`relativeTo` is not provided, get the position relative to
the top-most superview (the root of the scence graph.).

### view.containsLocalPoint (point)
1. `point {Point}` ---A point being an object with `x` and `y` numeric properties.
2. Return: `{boolean}`

Determine if the given point is contained by the view.

### view.getBoundingShape ()
1. Return: `{Rect}` or `{Circle}`, the shape defined when the view was created.

Get the bounding shape for a view.

### view.getRelativeRegion (region, parent)
1. `region {Rect}`
2. `parent {View}`
3. Return `{Rect}`

Return the location of a rectangle region in a parent's coordinate space.

### view.getFilters ()
1. Return: `{array}`

Return an array of filters attached to a view.

### view.addFilter (filter)
1. `filter {Filter}`

Adds a filter to this view. Only one filter of each type can
exist on a view.

### view.removeFilter (type)
1. `type {string}`

Remove a named filter from this view.

### view.toString()
1. Return: `{string}`

### view.getTag()
1. Return: `{string}`

Return a readable tag for a view.

### view.show()

Make the view visible, trigger a repaint.

### view.hide()

Make the view invisible, trigger a repaint.


### Events

#### \'InputSelect\', callback (event, point)
1. `event {InputEvent}`
2. `point {Point}`

Select a view by click or touch. `point` is a point relative to the top-left corner of the view.

~~~
view.on('InputSelect', function (evt, pt) {
  console.log("View clicked at position: " + pt.x + "," + pt.y);
});
~~~

Subscribe to the capture-phase event with `'InputSelectCapture'`.

#### \'InputOver\', callback (over, overCount, atTarget)
1. `over`
2. `overCount {number}`
3. `atTarget`

#### \'InputOut\', callback (over, overCount, atTarget)
1. `over`
2. `overCount {number}`
3. `atTarget`

#### \'InputStart\', callback (event, point)
1. `event {InputEvent}`
2. `point {Point}`

Fired on mousedown/touch. `point` is a point relative to the top-left corner of the view.

Subscribe to the capture-phase event with `'InputStartCapture'`.

#### \'InputScroll\', callback ()

#### \'InputMove\', callback ()

#### \'DragStart\', callback (dragEvent)
1. `dragEvent {InputEvent}`

Fired when dragging starts.

#### \'Drag\', callback (dragEvent, moveEvent, delta)
1. `dragEvent {InputEvent}`
2. `moveEvent {InputEvent}`
3. `delta {number}`

Fired during dragging.

~~~
view.on('Drag', function (dragEvent, moveEvent, delta) {
  var dx = moveEvent.srcPt.x - dragEvt.srcPt.x;
  console.log("Moved " + dx + " pixels along the x-axis from where the drag started!");
  console.log("Moved " + delta.x + "pixels along the x-axis from where the last drag event happened!");
});
~~~

#### \'DragStop\', callback (dragEvent, selectEvent)
1. `dragEvent {InputEvent}`
2. `selectEvent {InputEvent}`

Fired when dragging is stopped.

~~~
view.on('DragStop', function (dragEvent, selectEvent) {
  console.log("Drag started at " + dragEvt.srcPt + " and ended at " + selectEvent.srcPt);
});
~~~

## Class: ui.ViewStyle

Style definitions in `view.style`.

~~~
import ui.ViewStyle as ViewStyle;
~~~

### new ViewStyle ([options])
1. `options {object}`

~~~
var style = new ViewStyle();
~~~

### style.x
1. `{number} = 0`

### style.y
1. `{number} = 0`

### style.anchorX
1. `{number} = 0`

The x position of the anchor point for rotation. This is
relative to the top-left corner of the view.

### style.anchorY
1. `{number} = 0`

The x position of the anchor point for rotation. This is
relative to the top-left corner of the view.

### style.width
1. `{number}`

Defaults to parent `width` value.

### style.height
1. `{number}`

Defaults to parent `height` value.

### style.widthPercentage
1. `{number}`

Defaults to `__onResize` value.

### style.heightPercentage
1. `{number}`

Defaults to `__onResize` value.

### style.scale
1. `{number} = 1`

Increase or decrease the size of the view.

### style.rotation
1. `{number} = 0`

Rotation.

### style.radius
1. `{number}` (read-only)

The radius.

### style.visible
1. `{boolean} = true`

If the view is shown or hidden.

### style.opacity
1. `{number} = 1`

Transparency of the view.

### style.zIndex
1. `{number} = 0`

The higher the number the closer to the top.

### style.shadowColor
1. `{string} = 'black'`

Shadow color of the view.

### style.clip
1. `{boolean} = false`

View and children get clipped to parent.

### style.backgroundColor
1. `{string}`

Background color of the view.

### style.layout
1. `{string} = 'relative'`

### style.direction
1. `{string} = 'down'`

### style.flex
1. `{number} = 0`

### style.align
1. `{string} = 'start'`

### style.selfAlign
1. `{}`

### style.distribute
1. `{string} = 'start'`

### style.rows
1. `{number} = 0`

### style.columns
1. `{number} = 0`

### style.rowSpan
1. `{number} = 0`

### style.colSpan
1. `{number} = 0`

### style.expandX
1. `{boolean} = false`

### style.expandY
1. `{boolean} = false`


### style.update (style)
1. `style {ViewStyle}`

Set the view's style.

### style.copy ()
1. `style {ViewSyle}`

Returns a copy of the current style.


### Class Property: ViewStyle.keys
1. `{object}`

Object containing the supported style properties.


 
## Example: Nested views

Create two rectangles, one red half transparent and one green fully opaque. Make
the red rectangle sit on top of the green using `zIndex`.

~~~
m4_include(./examples/api/view.js)
~~~

## Example: Modify a view's style

Create a view and change the background to blue. Scale it to half the original size.

~~~
m4_include(./examples/api/viewstyle.js)
~~~
