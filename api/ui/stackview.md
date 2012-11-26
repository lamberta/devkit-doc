# ui.StackView

## Class: ui.StackView

A view that contains multiple child views, one of which is
at the top of the stack and displayed.

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

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

Add a view to the top of the StackView, which makes it visible.

~~~
var myView = new ui.View({
  x: 0, //relative to the stackView's topleft corner
  y: 0,
  width: 100, //automatically scaled to the dimensions of the stackView
  height: 100
});

myStackView.push(myView);
~~~

### stack.pop (dontAnimate)
1. `dontAnimate {boolean}`
2. Return: `{View}`

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

## Example: Multiple stacked modals using a StackView. 

~~~
m4_include(./examples/api/stackview.js)
~~~
