# ui.View

The base display object.

## Class: ui.View

Inherits
:    1. [event.Emitter](./event.html#class-event.emitter)

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

In addition to these options, you can also pass the
[style definitions](#styles) listed below.

~~~
var view = new View({
  superview: parent,
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  backgroundColor: '#0000ff'
});
~~~

### view.style
1. `{object}` ---Contains the [style definitions](#styles) enumerated below.

The properties on this object determine the look and style
of a view. If not passed as options to the view constructor,
the properties can be set here.

~~~
var view = new View({visible: true}); //now you see me

view.style.visible = false;           //now you don't
~~~

### Callback handler: view.buildView

This function is run before the view is first rendered. Any
subview creation should be in here since their dimensions
will be dependent on their parent.

~~~
var view = Class(ui.View, function (supr) {

  this.buildView = function () {
    var mysubview = new ui.View({
      superview: this,
      x: 0,
      y: 0,
      width: this.style.width,
      height: this.style.width
    });
  };
});
~~~

### view.getApp ()
1. Return: `{ui.Engine}`

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

### view.needsRepaint ()

Notifies the renderer that the view needs to be repainted next tick.

### view.needsReflow ()

Notifies the need for positioning.

### view.canHandleEvents (handlep)
1. `handlep {boolean}`

Set if a view will handle events or not.

### view.getInput ()
1. Return: `{InputHandler}`

Return the input handler of a view.

### view.isInputOver ()
1. Return `{boolean}`

Check if an input event is over a view.

### view.startDrag (options)
1. `options {object}`
    * `inputStartEvt {InputEvent}`
    * `radius {number} = 0`

Start responding to an input event by dragging the view.

~~~
view.on('InputStart', function (evt, pt) {
  //will emit a 'drag' event if moved further than 15 pixels in any direction
  this.startDrag({ radius: 15 });
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
the top-most superview (the root of the scene graph.).

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

### view.toString ()
1. Return: `{string}`

### view.getTag ()
1. Return: `{string}`

Return a readable tag for a view.

### view.show ()

Make the view visible, trigger a repaint.

### view.hide ()

Make the view invisible, trigger a repaint.

### view.focus ()
1. Return: `{this}`

Indicate to the focus manager this element is focused.

### view.blur ()
1. Return: `{this}`

Indicate to the focus manager this element is blurred.


### Event handlers

#### view.onFocus ()

The callback function is triggered when focus is given to this view.

#### view.onBlur ()

The callback function is triggered when this view loses focus.


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
  var dx = moveEvent.srcPoint.x - dragEvt.srcPoint.x;
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
  console.log("Drag started at " + dragEvt.srcPoint + " and ended at " + selectEvent.srcPoint);
});
~~~

## Styles

A view can be styled by modifying its `view.style` property.

~~~
var style = view.style;
~~~

### style.x
1. `{number} = 0`

The position of the top-left corner of a view on the x-axis
relative to its parent.

### style.y
1. `{number} = 0`

The position of the top-left corner of a view on the y-axis
relative to its parent.

### style.offsetX
1. `{number} = 0`

The x position of the anchor point for translation. This is
relative to the top-left corner of the view.

### style.offsetY
1. `{number} = 0`

The y position of the anchor point for translation. This is
relative to the top-left corner of the view.

### style.anchorX
1. `{number} = 0`

The x position of the anchor point for rotation and
scaling. This is relative to the top-left corner of the view.

### style.anchorY
1. `{number} = 0`

The y position of the anchor point for rotation and
scaling. This is relative to the top-left corner of the view.

### style.width
1. `{number}`

The width of a view, defaults to the width of the view's parent.

### style.height
1. `{number}`

The height of a view, defaults to the height of the view's parent.

### style.widthPercentage
1. `{number}`

### style.heightPercentage
1. `{number}`

### style.scale
1. `{number} = 1`

Increase or decrease the size of the view.

### style.r
1. `{number} = 0`

The rotation of a view in radins.

### style.visible
1. `{boolean} = true`

If the view is shown or hidden. The view will not accept input events while hidden.

### style.opacity
1. `{number} = 1`

The transparency of a view. The view will always accept input events even if it is fully transparent.

### style.zIndex
1. `{number} = 0`

The higher this number, the closer to the front the view
appears. This value is only relative to a view's siblings,
not the entire scene graph.

### style.backgroundColor
1. `{string}`

Background color of the view.

### style.shadowColor
1. `{string} = 'black'`

Shadow color of the view.

### style.clip
1. `{boolean} = false`

If set to `true`, child views will get clipped to this view.

### style.layout
1. `{string} = 'relative'`

### style.direction
1. `{string} = 'down'`

### style.flex
1. `{number} = 0`

### style.align
1. `{string} = 'start'`

### style.selfAlign
1. `{undefined}`

### style.distribute
1. `{string} = 'start'`

### style.contentWidth
1. `{number} = 0`

### style.contentHeight
1. `{number} = 0`

### style.update (style)
1. `style {object}` ---Using the properties enumerated here.

Update the view's style.

### style.copy ()
1. Return: `{object}`

Returns a copy of the style object.

 
## Example: Nested views

Create two rectangles, one red and blue. The red rectangle
is displayed in front of the blue by modifying its `zIndex` property.

~~~
m4_include(./examples/api/view.js)
~~~

Load this code as the `Application.js` file in your project,
run the simulator, and you should see something like this:

<img src="./assets/ui-view/example-nested-views.png" alt="nested views screenshot" class="screenshot">

## Example: Modify a view's style

Create many views with random positions, sizes, rotations,
and colors.

~~~
m4_include(./examples/api/update-view-style.js)
~~~

<img src="./assets/ui-view/example-update-view-style.png" alt="update view style screenshot" class="screenshot">
