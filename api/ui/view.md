# ui.View

A view is the base display object for rendering regions to
the screen. Each view has a size and position, and can be nested
within other views to create a scene graph. This scene graph
is a tree of views that composes the visible elements of the
screen, organizing the game content in to a hierarchy which
can be used to define boundaries for capturing input
events. The game engine uses `View` objects to accelerate
performance on mobile devices.

Views have methods for adding and removing superviews and
subviews (parents and children), can set handler functions
for events, and contain properties for styling how the view
is displayed on the screen.

## Examples

* [A Basic View](../example/views-basic/)
* [Changing the View Style](../example/views-style/)
* [Nested Views](../example/views-nested/)
* [Add and Remove Views](../example/views-addremove/)
* [Input Click Event](../example/events-input-click/)
* [Input Move Event](../example/events-input-move/)
* [Input Out Event](../example/events-input-out/)
* [Modifying a View's Style](../example/views-style/)

## Class: ui.View

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### new View ([options])
1. `options {object}` ---Optional.
    * `superview {View}` ---Parent or Super view to place this view.
    * `id {string}` ---Unique identifier.
    * `tag {string}` ---Human readable tag for the UI Inspector.
    * `filters {Filter}` ---Filter object.
    * `circle {boolean} = false` ---Whether the view is a circle.
    * `infinite {boolean} = false` ---Infinite width and height generally for maps or backgrounds.
    * `canHandleEvents {boolean} = true` ---Input events can pass through if `false`.

The constructor used to create an instance of a `ui.View`
object. In addition to the options listed here,
[style definition properties](#styles) can also be
passed in this object.

~~~
import ui.View as View;

var view = new View({
  id: 'MyCrazyView',
  superview: parent,
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  backgroundColor: '#0000ff'
});
~~~

### view.updateOpts ([options])

Parmeters
:    1. `options {object}` ---The options object is the same as defined for the constructor.

Returns
:    1. `{object}` ---Returns the options object.

Update the properties and styles of a view.

### view.style
1. `{object}` ---Contains the [style definitions](#styles) of a view, as enumerated below.

The properties on this object determine the look and style
of a view. If not passed as options to a view constructor,
the style properties can be set on this object.

~~~
var view = new View({visible: true}); //now you see me

view.style.visible = false;           //now you don't
~~~

### view.getApp ()

Returns
:    1. `{ui.Engine}`

Returns the root application for the view, [GC.app.engine](./appengine.html#singleton-gc.app.engine).
This is the top-level node of the scene graph, a [ui.Engine](./appengine.html#class-ui.engine) singleton automatically instantiated by the game engine.

### view.getSuperview ()

Returns
:    1. `{View}` ---Return the view's parent in the scene graph hierarchy.

### view.getParents ()

Returns
:    1. `{array}` ---A collection of `View` elements.

Returns an array of all parent ancestors of the current view
to the root of the scene graph.

### view.getSubviews ()

Returns
:    1. `{array}` ---A collection of `View` elements.

Returns an array containing a reference to all of the view's
children. Since this function has an execution time of *O(n)*,
you should store a reference to the array and then iterate:

~~~
for (var i = 0, children = view.getSubviews(), len = children.length; i < len; i++) {
  children[i].style.update({
    x = i * 10,
    y = i * 10
  });
}
~~~

### view.getSubview (i)

Parameters
:    1. `i {number}` ---Array index position.

Returns
:    1. `{View}` ---Return a child subview at the given array index.

### view.addSubview (view)

Parameters
:    1. `view {View}` ---The view to add as a child of this view.

Returns
:    2. `{View}` ---Returns the view that was passed to this method.

Add a view as a child subview.

### view.removeSubview (view)

Parameters
:    1. `view {View}`

Removes a child subview from this view.

### view.removeAllSubviews ()

Removes all child subviews from this view.

### view.removeFromSuperview ()

Removes this view from its parent superview.

### view.needsRepaint ()

Notifies the renderer that the view needs to be redrawn on
next animation frame. This function is only needed if you're
using a DOM rendering backend.

### view.needsReflow ()

Notifies the `ui.Engine` that the view needs its position updated.

### view.setHandleEvents (handleEvents [, ignoreSubviews])

Parameters
:    1. `handleEvents {boolean} = true` ---Configure the view to handle or not handle input events.
     2. `ignoreSubviews {boolean} = false` ---Optionally block input events on all subviews.

A view that can not handle events will pass them through to
other views positioned beneath them on the screen. By
default, a view handles all input events. In the *UI Inspector*
you can see which views are underneath the input
cursor by hovering over an element and using *control-click*.

If the `ignoreSubviews` option is set to `true`, all events
on the view's children are also ignored.

### view.isInputOver ()

Returns
:    1. `{boolean}`

If an input event is over a view, return `true`, otherwise `false`.

### view.startDrag ([options])

Parameters
:    1. `options {object}`
         * `inputStartEvent {InputEvent} = 'START'`
         * `radius {number} = 0`

Respond to an input event by dragging the view. This will
fire drag events so you can make a view follow the drag events.

For example, to listen for a drag on a view and update its
position to follow:

~~~
view.on('Drag', function (startEvt, dragEvt, delta) {
  this.style.x = dragEvt.pt['1'].x;
  this.style.y = dragEvt.pt['1'].y;
});
~~~

### view.isDragging ()

Returns
:    1. `{boolean}`

Test if the view is being dragged.

### view.localizePoint (point)

Parameters
:    1. `point {Point}`

Returns
:    1. `{Point}` ---Returns the given point, with updated values.

Convert a point to a local position relative to this view.

### view.getPosition ([relativeTo])

Parameters
:    1. `relativeTo {View}` ---Optional.

Returns
:    1. `{object}`
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

Parameters
:    1. `point {Point}` ---A point being an object with `x` and `y` numeric properties.

Returns
:    1. `{boolean}`

Determine if the given point is contained by the view.

### view.getBoundingShape ()

Returns
:    1. `{Rect}` or `{Circle}`, the shape defined when the view was created.

Return the bounding shape for a view, this is a rectangle or circle.

### view.getRelativeRegion (region, parent)

Parameters
:    1. `region {Rect}`
     2. `parent {View}`

Returns
:    1. Return `{Rect}`

Return the location of a rectangle region in a parent's coordinate space.

### view.getFilters ()

Returns
:    1. `{array}`

Return an array of filters attached to a view.

### view.addFilter (filter)

Parameters
:    1. `filter {Filter}`

Adds a filter to this view. Only one filter of each type can
exist on a view.

### view.removeFilter (type)

Parameters
:    1. `type {string}`

Remove a named filter from this view.

### view.getTag ()

Returns
:    1. `{string}`

Return the human-readable name for a view.

### view.hide ()

Make the view invisible.

### view.show ()

Make the view visible.

### view.focus ()

Returns
:    1. `{this}`

Indicate to the focus manager this view has focus.

### view.blur ()

Returns
:    1. `{this}`

Indicate to the focus manager this element has been blurred.


## Events
  
There are several input events which can be subscribed to 
on a view.  Subscribing to these events allows you to do 
things such as click or drag a view, or react to these 
events within their respectives callbacks from the event
handler.  
  
Input Events which can currently be subscribed to include:  

- InputStart
- InputSelect
- InputMove  
- InputOver
- InputOut
- InputScroll
- DragStart
- Drag  
  
and are described below.  

### Handler: view.onFocus ()

The callback function is triggered when focus is given to this view.

~~~
view.onFocus = function () {
  console.log("View has focus!");
};
~~~

### Handler: view.onBlur ()

The callback function is triggered when this view loses focus.

~~~
view.onBlur = function () {
  console.log("View has lost focus!");
};
~~~

### Handler: view.tick (dt)

Parameters
:    1. `dt {number}`

This callback function is executed on every tick of the game engine.

~~~
view.tick = function (dt) {
  this.exampleMethod(dt);
};
~~~

This is a convenience method that can be used instead of
subscribing to the `'Tick'` event on the main game engine:

~~~
GC.app.engine.on('Tick', function (dt) {
  view.exampleMethod(dt);
});
~~~

### \'InputStart\', callback (event, point)

Parameters
:    1. `event {InputEvent}`
     2. `point {Point}`

Fired on a mousedown / touch occurrence. `event` represents
the InputEvent which occurred from InputStart
occurring. `point` is a point relative to the top-left
corner of the view.

Subscribe to the capture-phase event with `'InputStartCapture'`.  

~~~
view.on('InputStart', function (event, point) {
  console.log("This view had touch begin on it at: " + point.x + "," + point.y);
});
~~~

### \'InputSelect\', callback (event, point)

Parameters
:    1. `event {InputEvent}`
     2. `point {Point}`

Fired on a mouseup / touchend occurence. `event` represents
the InputEvent which occurred from InputSelect
occurring. `point` is a point relative to the top-left
corner of the view. The capture-phase event is available by
subscribing to `'InputSelectCapture'`.

~~~
view.on('InputSelect', function (event, point) {
  console.log("View clicked at position: " + point.x + "," + point.y);
});
~~~
 
### \'InputMove\', callback (event, point)

Parameters
:    1. `event {InputEvent}`
     2. `point {Point}`

Fired after an `'InputStart'` event, when the input is moving on the view.  

~~~
view.on('InputMove', function (event, point) {
  console.log("This view had touch begin on it at: " + point.x + "," + point.y);
});
~~~

### \'InputOver\', callback (over, overCount, atTarget)

Parameters
:    1. `over`
     2. `overCount {number}`
     3. `atTarget`

The event is fired when input is moved over a view.
  
~~~
view.on('InputOver', function (over, overCount, atTarget) {
  ...
});
~~~

### \'InputOut\', callback (over, overCount, atTarget)

Parameters
:    1. `over`
     2. `overCount {number}`
     3. `atTarget`

The event is fired when input is moved off a view.  

~~~
view.on('InputOut', function (over, overCount, atTarget) {
  ...
});
~~~

### \'DragStart\', callback (dragEvent)

Parameters
:    1. `dragEvent {InputEvent}`

Fired when dragging starts. `dragEvent` represents the event from which dragging started.

~~~
view.on('DragStart', function (dragEvent, selectEvent) {
  console.log("Drag started at " + dragEvt.srcPoint);
});
~~~

### \'Drag\', callback (dragEvent, moveEvent, delta)

Parameters
:    1. `dragEvent {InputEvent}`
     2. `moveEvent {InputEvent}`
     3. `delta {number}`

Fired during dragging. `dragEvent` represents the event from
which dragging started. `moveEvent` represents the event
occuring from movement on the view. `delta` represents the
difference between the last `moveEvent` and this one.

~~~
view.on('Drag', function (dragEvent, moveEvent, delta) {
  var dx = moveEvent.srcPoint.x - dragEvt.srcPoint.x;
  console.log("Moved " + dx + " pixels along the x-axis from where the drag started!");
  console.log("Moved " + delta.x + "pixels along the x-axis from where the last drag event happened!");
});
~~~

### \'DragStop\', callback (dragEvent, selectEvent)

Parameters:
    1. `dragEvent {InputEvent}`
    2. `selectEvent {InputEvent}`

Fired when dragging is stopped.  `dragEvent` represents the
event from which dragging started.  `selectEvent` represents
the event which occurs when the dragging has stopped.

~~~
view.on('DragStop', function (dragEvent, selectEvent) {
  console.log("Drag started at " + dragEvt.srcPoint + " and ended at " + selectEvent.srcPoint);
});
~~~


## Styles

A view can be styled by modifying the properties of its `view.style` object.

~~~
var style = view.style;
~~~

### style.update (style)

Parameters
:    1. `style {object}` ---Using the properties enumerated here.

Returns
:    1. `{this}` ---Returns this view.

Update the view's style.

~~~
view.style.update({
  x: 100,
  y: 200,
  backgroundColor: 'red'
});
~~~

### style.copy ()

Returns
:    1. `{object}`

Returns a shallow copy of the view's style object. You can
use this object to update another view's style.

~~~
var old_style = view1.style.copy();

view2.style.update(old_style);
~~~

### style.layout
1. `{string} = false` ---Options are `'box'` or `'linear'`.

The layout system and its properties are described in the [Designing User Interfaces Guide](../guide/designing-user-interfaces.html).

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

### style.flipX
1. `{boolean} = false`

If set to `true`, flips the view in-place on the x-axis.

### style.flipY
1. `{boolean} = false`

If set to `true`, flips the view in-place on the y-axis.

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

The rotation of a view in radians.

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

### style.clip
1. `{boolean} = false`

If set to `true`, child views will get clipped to this view's s boundaries.
