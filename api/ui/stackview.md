# ui.StackView

## Class: ui.StackView

A view that contains multiple child views. The view at the
top of the stack is displayed.

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.StackView as StackView;
~~~

### new StackView ([options])
1. `options {object}` ---Pptions parameters are inherited from the `ui.View` class.

~~~
var stackview = new StackView({
  superview: this,
  x: 0,
  y: 0,
  width: 300,
  height: 300,
  scale: 1,
  zIndex: 3
});
~~~

A [complete example](../example/ui-stackview-basic/) is available in the `addon-examples` package.

### stackview.getStack ()
1. Return: `{array}` --Return an array of views contained in this stack.

The bottom view is indexed at 0, and the current view is at
the end of the returned array. Avoid modifying the returned
stack directly, instead use the helper functions below.

### stackview.getCurrentView ()
1. Return: `{View}`

Return the current visible view at the top of the stack.

### stackview.hasView (view)
1. `view {View}`
2. Return: `{boolean}`

Return `true` if the given view is contained in this stack.

### stackview.push (view [, dontAnimate, backward])
1. `view {View}`
2. `dontAnimate {boolean} = false` ---If `true`, do not animate the view when displaying.
3. `backward {boolean} = false` ---By default, wipe in from the right. If `true`, wipe in from the left.
4. Return: `{View}` ---Same as the provided view object.

Add a view to the top of the StackView, which makes it
visible. The added view's x,y coordinates will be relative
to the top-left corner of the stack view. And the
height,width of the added view will be scaled up to fit the
dimensions of the stack view.

By default, when a view is pushed to the top of a
`StackView`, it will animate in from right to left. When
`dontAnimate` is set to `true`, the view will not animate
in, and will simply appear on top. If `backwards` is set to
`true`, the view will animate in from the left to right.

~~~
var view = new ui.View({
  x: 0, //relative to the top-left corner of stackview
  y: 0,
  width: 100, //automatically scaled to the dimensions of stackview
  height: 100
});

stackview.push(view);
~~~

### stackview.pop ([dontAnimate, animateBackward])
1. `dontAnimate {boolean} = false` ---If `true`, do *not* animate in the new top view.
2. `animateBackward {boolean} = true` ---By default, the view is animated from right to left. If `false`, animate the wipe from left to right.
3. Return: `{View}`

Remove a view from the top of the `StackView`. Unless
`dontAnimate` is true, this animates the view to the right,
makes it invisible, then removes it as a subview.

### stackview.popAll ([dontAnimate])
1. `dontAnimate {boolean} = false` ---If `true`, do *not* animate out the child views.

Removes all child views from the `StackView`, allowing it to
be re-used. Note that this should be used instead of
`removeAllSubviews` as it clears the inner stack.

### stackview.remove (view)
1. `view {View}`

Removes a child view from the stack. Will not animate out
reguardless of position.


### Events

#### \'ViewWillAppear\', callback ()

Event emitted to the child view when it is schedules to
appear, but before it has animated in.

#### \'ViewDidAppear\', callback ()

Event emitted to the child view once it has appeared, and
after any animations.

#### \'ViewWillDisappear\', callback ()

Event emitted to the child view when it is scheduled to
disappear, but before it has animated out.

#### \'ViewDidDisappear\', callback ()

Event emitted to the child view once it has disappeared,
after any animations.
