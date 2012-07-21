# ui.StackView

## Class: ui.StackView

A view that contains multiple child views, one of which is
at the top of the stack and displayed.

Inherits
:    1. [ui.widget.UIView](./ui-widget-uiview.html)
     2. [ui.View](./ui-view.html)
     3. [event.PubSub](./event.html#class-event.pubsub)

~~~
import ui.StackView as StackView;
~~~

### new StackView ([options])
1. `options {object}`

~~~
var stack = new StackView();
~~~

### stack.getStack ()
1. Return: `{array}`

Return an array of stacks contained in this view.

### stack.getCurrentView ()
1. Return: `{View}`

Return the current visible view at the top of the stack.

### stack.hasView (view)
1. `view {View}`
2. Return: `{boolean}`

Check if a given view is contained in this StackView.

### stack.push (view, dontAnimate)
1. `view {View}`
2. `dontAnimate {boolean}`
3. Return: `{View}` ---The pushed view.

Add a view to the top of the StackView, which makes is visible.

### stack.pop (dontAnimate)
1. `dontAnimate {boolean}`
2. Return: `{View}`

Remove a view from the top of the StackView.

### stack.popAll (dontAnimate)
1. `dontAnimate {boolean}`

Removes all child views from the StackView.

### stack.remove (view)
1. `view {View}`

Removes a child view from the stack. Will not animate out
reguardless of position.

### Event: \'ViewWillAppear\', callback ()

Event emitted to the StackView's child view when it is
schedules to appear, but before it has animated in.

### Event: \'ViewDidAppear\', callback ()

Event emitted to the StackView's child view once it has
appeared, and after any animations.

### Event: \'ViewWillDisappear\', callback ()

Event emitted to the StackView's child view when it is
scheduled to disappear, but before it has animated out.

### Event: \'ViewDidDisapear\', callback ()

Event emitted to the StackView's child view once it has
disappeared, after any animations.
