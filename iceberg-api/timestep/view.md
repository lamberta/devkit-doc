# `timestep.View`

## Inheritence

1. [lib.PubSub](../lib/pubsub.html)

## Methods

### Scene Graph

* __getSubviews__ ---Returns children. (Defined in `timestep.canvas.View`.)
	* @return `{array}`

* __getSubview (i)__ ---Returns the child view at a given index.
	* @param `{number} i` ---Index.
	* @return `{View}` ---Index.

* __addSubview (view)__ ---Add a child view. (Defined on `timestep.canvas.View`.)
	* @param `{View} view`
	* @return `{View}`

* __removeSubview (view)__ ---Remove a child view. (Defined in `timestep.canvas.View`.)
	* @param `{View} view`

* __removeAllSubviews__ ---Removes all children.

* __getSuperview__ ---Returns parent view. (Defined in `timestep.canvas.View`.)
	* @return `{View}` The parent view.

* __removeFromSuperview__ ---Remove this view from parent.

* __getParents__ ---Returns parent and all relatives to the top of the scene graph.
	* @return `{array}`

* __getApp__ ---Returns `GC.app.engine`.
	* @return `{View}`


### Events

* __getInput__ ---Grab the InputEvent instance.
	* @return `{timestep.input.InputEvent}`

* __isInputOver__ ---If the mouse is over the view.
	* @return `{boolean}`

* __onEventPropagate (evt, pt, atTarget)__ ---Should be private. Allows construction of meta-events. ??
	* @param `{event} evt`
	* @param `{point} pt`
	* @param `{boolean} atTarget`

* __canHandleEvents (handleEventsp)__ ---Set if a view can handle events. Odd name.
	* @param `{boolean} handleEventsp`

* __startDrag__ ---Start the drag by assigning event handlers on the views.
	* @param `{object} opts` 
		* @param `{timestep.input.InputEvent} opts.inputStartEvent` ---Event that triggers the starts the drag.

* __isDragging__ ---Is the view currently being dragged.
	* @return `{boolean}`

* __focus__ ---Change the focus to this view. Will execute the `onBlur` event on the current focused view and the `onFocus` event on the new focused view.	
	* @return `{thisObj}`

* __onFocus__ ---Called when the whole application is focused.

* __onBlur__ ---Called when the application loses focus.



### Geometry

* __containsLocalPt (pt)__ ---Determine if the given point is contained by the view.
	* @param `{point} pt` ---Object containing x and y properties.
	* @return `{boolean}`

* __localizePt (pt)__ ---Convert a point to it's local position relative to this view.
	* @param `{point} pt` ---Point to localize.

* __getPosition (relativeTo)__ ---Get position of the view relative a superview or by default the top-most superview (rootview).
	* @param `{View} relativeTo` ---Get position relative to a specific superview.
	* @return `{Rect}`

* __getBoundingShape__ ---Return a Shape object that represents the view.
	* @return `{Rect|Circle}`

* __getRelativeRegion (region, parent)__ ---Return location or rectangle in parent space.
	* @param `{Rect} region`
	* @param `{view} parent`
	* @return `{Rect}`


### Filters

* __getFilters__ ---
	* @return `{object}`

* __addFilter (filter)__ ---
	* @param `{} filter`

* __removeFilter (type)__ ---
	* @param `{} type`


### Animations

* __animate (style, duration, easing)__ ---
	* @return ---Calls `getAnimation`.

* __getAnimation (groupID)__ ---
	* @param `{} groupID`
	* @return ---An animation object?


### Misc.

* __show__ ---Make the view visible.

* __hide__ ---Make the view hidden.

* __toString__ ---Defined in `timestep.canvas.View`.
	* @return `{string}`

* __getTag__ ---
	* @return `{string}`


## Properties

* __uid__ `{string}` ---Unique identifier. Used internally

* __style__ `{timestep.canvas.ViewStyle}` ---All style properties belong here. See `ViewStyle` below.

* __tick__ `{function}` ---A function that is called every tick.
  
* __render__ `{function}` ---Allows a custom rendering function for a view.

* __buildView__ `{function}` ---Called just before the first render call.

* __needsRepaint__ `{boolean}` ---Notifies the renderer that the view needs to be repainted next tick.

* __needsSort__ `{boolean}` ---Notifies the need for sorting views.

* __needsReflow__ `{boolean}` ---Notifies the need for repositioning.

## Usage

Create two rectangles, one red half transparent and one green fully opaque. Make
the red rectangle sit on top of the green using `zIndex`.

~~~

"use import";

import timestep.View as View;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		//draw me a red rectangle!
		var redRect = new View({
			parent: this,
			opacity: 0.5,
			backgroundColor: "#FF0000",
			width: 100,
			height: 100,
			zIndex: 2
		}); 

		//draw me a green rectangle!
		var greenRect = new View({
			parent: this,
			opacity: 0.8,
			backgroundColor: "#00FF00",
			width: 100,
			height: 100,
			x: 80
		}); 
	}   
});
~~~

# `timestep.ViewStyle`

Style definitions in `view.style`.

## Properties

* __x__ `{number} = 0` 

* __y__ `{number} = 0`

* __anchorX__ `{number} = 0` ---X position of the anchor point for rotation.

* __anchorY__ `{number} = 0` ---Y position of the anchor point.

* __width__ `{number}` ---Defaults to parent `width` value.

* __height__ `{number}` ---Defaults to parent `height` value.

* __widthPercentage__ `{number}` ---Defaults to `__onResize` value.

* __heightPercentage__ `{number}` ---Defaults to `__onResize` value.

* __scale__ `{number} = 1` ---Increase or decrease the size of the view.

* __r__ `{number} = 0` ---Rotation. Bad name.

* __radius__ `{number}` ---*Read only*

* __visible__ `{boolean} = true` ---If the view is shown or hidden.

* __clip__ `{boolean} = false` ---View and children get clipped to parent.

* __opacity__ `{number} = 1` ---Transparency of the view.

* __zIndex__ `{number} = 0` ---The higher the number the closer to the top.

* __backgroundColor__ `{string}` ---Background color of the view.

* __shadowColor__ `{string} = 'black'` ---Shadow color of the view.

	
## Methods

* __update (style)__ ---Set the view's style.
	* @param `{ViewStyle} style`

* __copy__ ---Returns a copy of the current style.
	* @return `{ViewStyle}`

* __updateRadius__ ---Private??
	* @return `{number}`

* __clearCache__ ---Clears the style cache.

### Class Properties

* __keys__ `{object}` ---Object containing the supported style properties.

## Usage

Create a view and change the background to blue. Scale it to half the original size.

~~~

"use import";

import timestep.View as View;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		//modify the ViewStyle properties
		this.style.backgroundColor = "#0000FF";
		this.style.scale = 0.5;
	}   
});
~~~
