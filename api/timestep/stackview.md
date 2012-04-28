# `timestep.StackView` extends [`timestep.ui.UIView`](./ui/uiview.md).

## Methods

* __getCurrentView__

	@return `{View}`

* __hasView (view)__

	@param `{View}` view
	@return `{boolean}`

* __push (view, dontAnimate)__

	@param `{View}` view
	@param `{boolean}` dontAnimate
	@return `{View}` ---The pushed view.

* __pop (dontAnimate)__

	@param `{boolean}` dontAnimate
	@return `{View}`

* __remove (view)__

	@param `{View}` view

* __popAll (dontAnimate)__ ---Removes all views; returns nothing.


## Messages

### Publish

* `'ViewWillAppear'`

* `'ViewDidAppear'`

* `'ViewWillDisappear'`

* `'ViewDidDisapear'`
