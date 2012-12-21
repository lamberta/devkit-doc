# ui.StackView

## Class: ui.StackView

A view that contains multiple child views, one of which is
at the top of the stack and displayed.

Inherits from:
:    1. [ui.View](./view.md)
     2. [event.Emitter](../event.md#class-event.emitter)

~~~
import ui.StackView as StackView;
~~~

### new StackView ([options])
1. `options {object}`

Example:
~~~
var stack = new StackView(
          	parent: this,
			x: 0,
			y: 0,
			width: 300,
			height: 300,
			scale: 1,
			zIndex: 4
);
~~~
Note that all of the options parameters are inherited from the ui.View class.

### stack.getStack ()
1. Return: `{array}`

Return an array of stacks contained in this view.

The current view is at the top of the stack (array.length - 1), and the bottom view is at index 0.

Avoid modifying the returned stack directly.  Instead use the helper functions below:

### stack.getCurrentView ()
1. Return: `{View}`

Return the current visible view at the top of the stack.

### stack.hasView (view)
1. `view {View}`
2. Return: `{boolean}`

Check if a given view is contained in this StackView.

### stack.push (view, dontAnimate, backward)
1. `view {View}`
2. `dontAnimate {boolean}` ---`true`: Do not wipe animate in, simply display it. Default: false.
3. `backward {boolean}` ---`true`: Wipe in from the left.  Default: `false`; wipe in from the right.
3. Return: `{View}` ---Same as the provided view object.

Normally it will wipe in from the right.  If `backwards` is specified, then the view will wipe in from the left.

When `dontAnimate` is set, then the view will not wipe animate in, and it will simply appear on top.

Add a view to the top of the StackView, which makes it visible.

The added view's x,y coordinates will be relative to the top-left corner of the stack view.
And the height,width of the added view will be scaled up to fit the dimensions of the stack view.

~~~
var myView = new ui.View({
  x: 0, //relative to the stackView's topleft corner
  y: 0,
  width: 100, //automatically scaled to the dimensions of the stackView
  height: 100
});

myStackView.push(myView);
~~~

### stack.pop (dontAnimate, animateBackward)
1. `dontAnimate {boolean}` ---`true`: Don't animate in the new top view.
2. `animateBackward {boolean}` ---`true`: Animate wipe view in from the left instead of the right. Default: `false`; wipe from right.
3. Return: `{View}`

Remove a view from the top of the StackView. Unless `dontAnimate` is true, this animates the view to the right, makes it invisible, then removes it as a subview.

### stack.popAll (dontAnimate)
1. `dontAnimate {boolean}`

Removes all child views from the StackView, allowing it to be re-used. Note that this should be used instead of `removeAllSubviews` as it clears the inner stack.

### stack.remove (view)
1. `view {View}`

Removes a child view from the stack. Will not animate out
reguardless of position.

### Events

#### \'ViewWillAppear\', callback ()

Event emitted to the StackView's child view when it is
schedules to appear, but before it has animated in.

#### \'ViewDidAppear\', callback ()

Event emitted to the StackView's child view once it has
appeared, and after any animations.

#### \'ViewWillDisappear\', callback ()

Event emitted to the StackView's child view when it is
scheduled to disappear, but before it has animated out.

#### \'ViewDidDisappear\', callback ()

Event emitted to the StackView's child view once it has
disappeared, after any animations.
