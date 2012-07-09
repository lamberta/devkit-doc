# timestep.StackView

## Class: timestep.StackView

Inherits
:    1. [timestep.ui.UIView](./timestep-ui-uiview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.StackView ([options])
1. `options {object}`

### stackview.getCurrentView ()
1. Return: `{View}`

### stackview.hasView (view)
1. `view {View}`
2. Return: `{boolean}`

### stackview.push (view, dontAnimate)
1. `view {View}`
2. `dontAnimate {boolean}`
3. Return: `{View}` ---The pushed view.

### stackview.pop (dontAnimate)
1. `dontAnimate {boolean}`
2. Return: `{View}`

### stackview.remove (view)
1. `view {View}`

### stackview.popAll (dontAnimate)
1. `dontAnimate {}`

Removes all views; returns nothing.


### Event: \'ViewWillAppear\', callback ()

### Event: \'ViewDidAppear\', callback ()

### Event: \'ViewWillDisappear\', callback ()

### Event: \'ViewDidDisapear\'
