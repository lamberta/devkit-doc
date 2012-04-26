# `timestep.View`

## Methods

### Scene Graph

* __`getSubviews`__ ---Returns children. Defined in `timestep.canvas.View`.

	@return `{array}`

* __`getSubview (i)`__ ---Returns the child view at a given index.

	@param `{number} i` ---Index.<br/>
	@return `{View}`

* __`addSubview (view)`__ ---Add a child view. Defined on `timestep.canvas.View`.

	@param `{View}` view<br/>
	@return `{View}`

* __`removeSubview (view)`__ ---Remove a child view. Defined in `timestep.canvas.View`.
  
	@param `{View}` view

* __`removeAllSubviews`__ ---Removes all children.


* __`getSuperview`__ ---Returns parent view. Defined in `timestep.canvas.View`.

	@return `{View}` The parent view.

* __`removeFromSuperview`__ ---Remove this view from parent.


* __`getParents`__ ---Returns parent and all relatives to the top of the scene graph.

	@return `{array}`

* __`getApp`__ ---Returns `GC.app.engine`.

	@return `{View}`


### (Don't call them) Events

* __`getInput`__ ---

* __`isInputOver`__ ---

	@return {boolean}

* __`onEventPropagate (evt, pt, atTarget)`__ ---Should be private. Allows construction of meta-events. ??
  
	@param `{event} evt`<br/>
	@param `{point} pt`<br/>
	@param `{boolean} atTarget`

* __`canHandleEvents (handleEventsp)`__ ---Set if a view can handle events. Odd name.
  
	@param `{boolean} handleEventsp`

* __`startDrag`__ ---

* __`isDragging`__ ---

	@return `{boolean}`

* __`focus`__ ---

	@return `{thisObj}`

* __`blur`__ ---

	@return `{thisObj}`

* __`onFocus`__ ---

* __`onBlur`__ ---


### Geometry

* __`containsLocalPt (pt)`__ ---

	@param `{point} pt` ---Object containing x and y properties.<br/>
	@return `{boolean}`

* __`localizePt (pt)`__ ---

	@param `{point} pt`

* __`getPosition (relativeTo)`__ ---

	@param `{View=} relativeTo`<br/>
	@return `{Rect}`

* __`getBoundingShape`__ ---

	@return `{Rect|Circle}`

* __`getRelativeRegion (region, parent)`__ ---Return location or rectangle in parent space.

	@param `{Rect} region`<br/>
	@param `{view} parent`<br/>
	@return `{Rect}`


### Filters

* __`getFilters`__ ---

	@return `{object}`

* __`addFilter (filter)`__ ---

	@param `{} filter`

* __`removeFilter (type)`__ ---

	@param `{} type`


### Animations

* __`animate (style, duration, easing)`__ ---

	@return ---Calls `getAnimation`.

* __`getAnimation (groupID)`__ ---

	@param `{} groupID`<br/>
	@return ---An animation object?


### Misc.

* __`show`__ ---

* __`hide`__ ---

* __`toString`__ ---Defined in `timestep.canvas.View`.

	@return `{string}`

* __`getTag`__ ---

	@return `{string}`


### Properties

* __`uid {string}`__ ---

* __`style {timestep.canvas.ViewStyle}`__ ---

* __`tick {function}`__ ---A function that is called every tick.
  
* __`render {function}`__ ---Allows a custom rendering function for a view.

* __`buildView {function}`__ ---Called just before the first render call.

* __`needsRepaint {boolean}`__ ---

* __`needsSort {boolean}`__ ---

* __`needsReflow {boolean}`__ ---


## Inherits from `lib.PubSub` [js.io]

### Methods

* __`publish (signal)`__ ---

	@param `{string} signal`<br/>
	@return `{this}`

* __`subscribe (signal, thisObj, method)`__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`

* __`subscribeOnce (signal, thisObj, method)`__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`

* __`unsubscribe (signal, thisObj, method)`__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`


## Style definitions in `view.style` from `timestep.canvas.ViewStyle`

### Properties

* __`x`__ ---Defaults to 0.

* __`y`__ ---Defaults to 0.

* __`anchorX`__ ---Defaults to 0.

* __`anchorY`__ ---Defaults to 0.

* __`width`__ ---Defaults to `__onResize` value.

* __`height`__ ---Defaults to `__onResize` value.

* __`widthPercentage`__ ---Defaults to `__onResize` value.

* __`heightPercentage`__ ---Defaults to `__onResize` value.

* __`scale`__ ---Defaults to 1.

* __`r`__ ---Rotation. Bad name. Defaults to 0.

* __`radius`__ --- [Read only]

* __`visible`__ ---Defaults to `true`.

* __`clip`__ ---View and children get clipped to parent. Defaults to `false`.

* __`opacity`__ ---Defaults to 1.

* __`zIndex`__ ---Defaults to 0.

* __`backgroundColor`__ ---Defaults to `undefined`.

* __`shadowColor`__ ---Defaults to `'black'`.


### Methods

* __`update (style)`__ ---Set the view's style.

	@param `{ViewStyle}`

* __`copy`__ ---Returns a copy of the current style.

	@return `{ViewStyle}`

* __`updateRadius`__ ---Private??

	@return `{number}`

* __`clearCache`__ ---Clears the style cache.

* __`setAddedAt (addedAt)`__ ---??

* __`setSortKey`__ ---??

### Class Properties

* __`keys`__ ---Object containing the supported style properties.
