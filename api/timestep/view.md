# timestep.View

The base display object.

## Class: timestep.View

Inherits
:    1. [lib.PubSub](./lib-pubsub.html)

### new timestep.View ([options])
1. `options {object}` ---Optional.
	* `id {string}`
	* `tag {string}`
	* `filters {}`
	* `circle {boolean} = false`
	* `infinite {boolean} = false`
	* `canHandleEvents {boolean} = true`
	* `superview`
	* `rotation {number} = 0`

### view.style

Property containing the view's style defintions. [timestep.ViewStyle](#class-timestep.viewstyle)

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

### view.isDragging ()
1. Return: `{boolean}`

Indicate if the view is being dragged.

### Event: \'InputOver\', callback (over, overCount, atTarget)
1. `over`
2. `overCount {number}`
3. `atTarget`

### Event: \'InputOut\', callback (over, overCount, atTarget)
1. `over`
2. `overCount {number}`
3. `atTarget`

### Event: \'DragStart\', callback (dragEvent)
1. `dragEvent {InputEvent}`

### Event: \'Drag\', callback (dragEvent, moveEvent, delta)
1. `dragEvent {InputEvent}`
2. `moveEvent {InputEvent}`
3. `delta {number}`

### Event: \'DragStop\', callback (dragEvent, selectEvent)
1. `dragEvent {InputEvent}`
2. `selectEvent {InputEvent}`

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

### view.animate (style, duration, easing)
1. `style {}`
2. `duration {}`
3. `easing {}`
4. Return:

Subject to change with the animation api.

### view.getAnimation (groupID)
1. `groupID {number}`
2. Return: `{}`

Subject to change with the animation api.

### view.toString()
1. Return: `{string}`

### view.getTag()
1. Return: `{string}`

Return a readable tag for a view.

### view.show()

Make the view visible, trigger a repaint.

### view.hide()

Make the view invisible, trigger a repaint.




## Class: timestep.ViewStyle

Style definitions in `view.style`.

### style.x
1. `{number} = 0`

### style.y
1. `{number} = 0`

### style.anchorX
1. `{number} = 0`

The x position of the anchor point for rotation.

### style.anchorY
1. `{number} = 0`

The y position of the anchor point.

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
var DoubleRect = Class(timestep.View, function (supr) {
	//called when an object is instantiated
	this.init = function (opts) {
		supr(this, 'init', arguments);

		var redRect = new timestep.View({
			superview: this,
			opacity: 0.5,
			backgroundColor: '#ff0000',
			width: 100,
			height: 100,
			zIndex: 2
		}); 

		var greenRect = new timestep.View({
			superview: this,
			opacity: 0.8,
			backgroundColor: '#00ff00',
			width: 100,
			height: 100,
			x: 80
		});
	}
});

var rects = new DoubleRect();
~~~

## Example: Modify a view's style

Create a view and change the background to blue. Scale it to half the original size.

~~~
import timestep.View as View;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		//modify the ViewStyle properties
		this.style.backgroundColor = '#0000FF';
		this.style.scale = 0.5;
	}   
});
~~~
