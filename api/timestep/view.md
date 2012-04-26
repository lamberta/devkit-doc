# `timestep.View`

## Methods

### Scene Graph

* __getSubviews__ ---Returns children. Defined in `timestep.canvas.View`.

	@return `{array}`

* __getSubview (i)__ ---Returns the child view at a given index.

	@param `{number} i` ---Index.<br/>
	@return `{View}`

* __addSubview (view)__ ---Add a child view. Defined on `timestep.canvas.View`.

	@param `{View}` view<br/>
	@return `{View}`

* __removeSubview (view)__ ---Remove a child view. Defined in `timestep.canvas.View`.
  
	@param `{View}` view

* __removeAllSubviews__ ---Removes all children.


* __getSuperview__ ---Returns parent view. Defined in `timestep.canvas.View`.

	@return `{View}` The parent view.

* __removeFromSuperview__ ---Remove this view from parent.


* __getParents__ ---Returns parent and all relatives to the top of the scene graph.

	@return `{array}`

* __getApp__ ---Returns `GC.app.engine`.

	@return `{View}`


### (Don't call them) Events

* __getInput__ ---

* __isInputOver__ ---

	@return {boolean}

* __onEventPropagate (evt, pt, atTarget)__ ---Should be private. Allows construction of meta-events. ??
  
	@param `{event} evt`<br/>
	@param `{point} pt`<br/>
	@param `{boolean} atTarget`

* __canHandleEvents (handleEventsp)__ ---Set if a view can handle events. Odd name.
  
	@param `{boolean} handleEventsp`

* __startDrag__ ---

* __isDragging__ ---

	@return `{boolean}`

* __focus__ ---

	@return `{thisObj}`

* __blur__ ---

	@return `{thisObj}`

* __onFocus__ ---

* __onBlur__ ---


### Geometry

* __containsLocalPt (pt)__ ---

	@param `{point} pt` ---Object containing x and y properties.<br/>
	@return `{boolean}`

* __localizePt (pt)__ ---

	@param `{point} pt`

* __getPosition (relativeTo)__ ---

	@param `{View=} relativeTo`<br/>
	@return `{Rect}`

* __getBoundingShape__ ---

	@return `{Rect|Circle}`

* __getRelativeRegion (region, parent)__ ---Return location or rectangle in parent space.

	@param `{Rect} region`<br/>
	@param `{view} parent`<br/>
	@return `{Rect}`


### Filters

* __getFilters__ ---

	@return `{object}`

* __addFilter (filter)__ ---

	@param `{} filter`

* __removeFilter (type)__ ---

	@param `{} type`


### Animations

* __animate (style, duration, easing)__ ---

	@return ---Calls `getAnimation`.

* __getAnimation (groupID)__ ---

	@param `{} groupID`<br/>
	@return ---An animation object?


### Misc.

* __show__ ---

* __hide__ ---

* __toString__ ---Defined in `timestep.canvas.View`.

	@return `{string}`

* __getTag__ ---

	@return `{string}`


### Properties

* __uid__ `{string}` ---

* __style__ `{timestep.canvas.ViewStyle}` ---

* __tick__ `{function}` ---A function that is called every tick.
  
* __render__ `{function}` ---Allows a custom rendering function for a view.

* __buildView__ `{function}` ---Called just before the first render call.

* __needsRepaint__ `{boolean}` ---

* __needsSort__ `{boolean}` ---

* __needsReflow__ `{boolean}` ---


## Inherits from `lib.PubSub` [js.io]

### Methods

* __publish (signal)__ ---

	@param `{string} signal`<br/>
	@return `{this}`

* __subscribe (signal, thisObj, method)__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`

* __subscribeOnce (signal, thisObj, method)__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`

* __unsubscribe (signal, thisObj, method)__ ---

	@param `{string} signal`<br/>
	@param `{object=} thisObj`<br/>
	@param `{function|string} method`


## Style definitions in `view.style` from `timestep.canvas.ViewStyle`

### Properties

* __x__ ---Defaults to 0.

* __y__ ---Defaults to 0.

* __anchorX__ ---Defaults to 0.

* __anchorY__ ---Defaults to 0.

* __width__ ---Defaults to `__onResize` value.

* __height__ ---Defaults to `__onResize` value.

* __widthPercentage__ ---Defaults to `__onResize` value.

* __heightPercentage__ ---Defaults to `__onResize` value.

* __scale__ ---Defaults to 1.

* __r__ ---Rotation. Bad name. Defaults to 0.

* __radius__ --- [Read only]

* __visible__ ---Defaults to `true`.

* __clip__ ---View and children get clipped to parent. Defaults to `false`.

* __opacity__ ---Defaults to 1.

* __zIndex__ ---Defaults to 0.

* __backgroundColor__ ---Defaults to `undefined`.

* __shadowColor__ ---Defaults to `'black'`.


### Methods

* __update (style)__ ---Set the view's style.

	@param `{ViewStyle}`

* __copy__ ---Returns a copy of the current style.

	@return `{ViewStyle}`

* __updateRadius__ ---Private??

	@return `{number}`

* __clearCache__ ---Clears the style cache.

* __setAddedAt (addedAt)__ ---??

* __setSortKey__ ---??


### Class Properties

* __keys__ ---Object containing the supported style properties.
