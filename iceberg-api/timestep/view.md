# `timestep.View`.

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

* __getInput__ ---

* __isInputOver__ ---
	* @return {boolean}

* __onEventPropagate (evt, pt, atTarget)__ ---Should be private. Allows construction of meta-events. ??
	* @param `{event} evt`
	* @param `{point} pt`
	* @param `{boolean} atTarget`

* __canHandleEvents (handleEventsp)__ ---Set if a view can handle events. Odd name.
	* @param `{boolean} handleEventsp`

* __startDrag__ ---

* __isDragging__ ---
	* @return `{boolean}`

* __focus__	
	* @return `{thisObj}`

* __blur__ 	
	* @return `{thisObj}`

* __onFocus__ ---Called when the whole application is focused.

* __onBlur__ ---Called when the application loses focus.



### Geometry

* __containsLocalPt (pt)__ ---
	* @param `{point} pt` ---Object containing x and y properties.
	* @return `{boolean}`

* __localizePt (pt)__ ---
	* @param `{point} pt`

* __getPosition (relativeTo)__ ---
	* @param `{View} relativeTo`
	* @return `{Rect}`

* __getBoundingShape__ ---
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

# `timestep.canvas.ViewStyle`

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
