# ui.View

The base display object for rendering elements to the
screen. A `ui.View` is rendered to the viewport when it is
attached to the game's scene graph---a hierarchy of `View`
nodes. Views have methods for adding and removing superviews
and subviews (parents and children), can set handler
functions for events, and contain properties for styling how
the view is displayed on the screen.

## Class: ui.View

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

Usage:

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

The constructor used to create an instance of a `ui.View`
object. In addition to the options listed here,
[style definition properties](#styles) can also be
passed in this object.

~~~
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
1. `options {object}` ---The options object is the same as defined for the constructor.
2. Return: `{object}` ---Returns the options object.

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

### Callback handler: view.buildView

This function on a view is run immediately before the
view is first rendered to the screen. Consequently, since
the view is guaranteed to be part of scene graph when this
function called, any subview creation should be placed here
since the child dimensions are dependent upon their parent.

~~~
var MyView = Class(ui.View, function (supr) {

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

Returns the root application for the view, [GC.app.engine](./appengine.html#singleton-gc.app.engine).
This is the top-level node of the scene graph, a [ui.Engine](./appengine.html#class-ui.engine) singleton automatically instantiated by the game engine.

### view.getSuperview ()
1. Return: `{View}`

Return the view's parent in the scene graph hierarchy.

### view.getParents ()
1. Return: `{array}`

Returns an array of all parent ancestors of the current view
to the root of the scene graph.

### view.getSubviews ()
1. Return: `{array}`

Returns an array of all subview children of the view.

### view.getSubview (i)
1. `i {number}` ---Array index position.
2. Return: `{View}`

Return a child subview at the given array index.

### view.addSubview (view)
1. `view {View}` ---The view to add as a child of this view.
2. Return: `{View}` ---Returns the view that was passed to this method.

Add a view as a child subview.

### view.removeSubview (view)
1. `view {View}`

Removes a child subview from this view.

### view.removeAllSubviews ()

Removes all child subviews from this view.

### view.removeFromSuperview ()

Removes this view from its parent superview.

### view.needsRepaint ()

Notifies the renderer that the view needs to be redrawn on next animation frame.

### view.needsReflow ()

Notifies the `ui.Engine` that the view needs its position updated.

### view.canHandleEvents (handleEvents [, ignoreSubviews])
1. `handleEvents {boolean}`
2. `ignoreSubviews {boolean} = false` ---Optionally block input events on all subviews.

A view that can not handle events will pass them through to
other views positioned beneath them on the screen. By
default, a view handles all input events. In the *UI Inspector*
you can see which views are underneath the input
cursor by hovering over an element and using *control-click*.

If the `ignoreSubviews` option is set to `true`, all events
on the view's children are also ignored.

### view.isInputOver ()
1. Return `{boolean}`

If an input event is over a view, return `true`, otherwise `false`.

### view.startDrag ([options])
1. `options {object}`
    * `inputStartEvt {InputEvent}`
    * `radius {number} = 0`

Respond to an input event by dragging the view.

~~~
view.on('InputStart', function (evt, pt) {
  //will emit a 'drag' event if moved further than 15 pixels in any direction
  this.startDrag({radius: 15});
});
~~~

### view.isDragging ()
1. Return: `{boolean}`

Test if the view is being dragged.

### view.localizePoint (point)
1. `point {Point}`
2. Return `{Point}` ---Returns the given point, with updated values.

Convert a point to a local position relative to this view.

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

Return the bounding shape for a view, this is a rectangle or circle.

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

### view.getTag ()
1. Return: `{string}`

Return the human-readable name for a view.

### view.hide ()

Make the view invisible.

### view.show ()

Make the view visible.

### view.focus ()
1. Return: `{this}`

Indicate to the focus manager this view has focus.

### view.blur ()
1. Return: `{this}`

Indicate to the focus manager this element has been blurred.


### Event handlers

#### view.onFocus ()

The callback function is triggered when focus is given to this view.

~~~
view.onFocus = function () {
  console.log("View has focus!");
};
~~~

#### view.onBlur ()

The callback function is triggered when this view loses focus.

~~~
view.onBlur = function () {
  console.log("View has lost focus!");
};
~~~

### view.tick (dt)
1. `dt {number}`

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

The event is fired when input is moved over a view.

#### \'InputOut\', callback (over, overCount, atTarget)
1. `over`
2. `overCount {number}`
3. `atTarget`

The event is fired when input is moved off a view.

#### \'InputStart\', callback (event, point)
1. `event {InputEvent}`
2. `point {Point}`

Fired on mousedown/touch. `point` is a point relative to the top-left corner of the view.

Subscribe to the capture-phase event with `'InputStartCapture'`.

#### \'InputScroll\', callback ()

#### \'InputMove\', callback (event, point)
1. `event {InputEvent}`
2. `point {Point}`

Fired after an `'InputStart'` event, when the input is moving on the device.

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
