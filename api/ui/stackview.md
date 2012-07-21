# timestep.StackView

## Class: timestep.StackView

A view that contains multiple child views, one of which is
at the top of the stack and displayed.

Inherits
:    1. [timestep.ui.UIView](./timestep-ui-uiview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.StackView ([options])
1. `options {object}`

### stackview.getStack ()
1. Return: `{array}`

Return an array of stacks contained in this view.

### stackview.getCurrentView ()
1. Return: `{View}`

Return the current visible view at the top of the stack.

### stackview.hasView (view)
1. `view {View}`
2. Return: `{boolean}`

Check if a given view is contained in this StackView.

### stackview.push (view, dontAnimate)
1. `view {View}`
2. `dontAnimate {boolean}`
3. Return: `{View}` ---The pushed view.

Add a view to the top of the StackView, which makes is visible.

### stackview.pop (dontAnimate)
1. `dontAnimate {boolean}`
2. Return: `{View}`

Remove a view from the top of the StackView.

### stackview.popAll (dontAnimate)
1. `dontAnimate {boolean}`

Removes all child views from the StackView.

### stackview.remove (view)
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
