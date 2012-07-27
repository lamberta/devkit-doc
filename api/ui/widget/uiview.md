# ui.widget.UIView

This is not complete and subject to change.

## Class: ui.widget.UIView

A view proxy for a contained LinearLayout. Contains logic
for reflowing in either significant direction.

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.PubSub](./event-index.html#class-event.pubsub)

~~~
import ui.widget.UIView as UIView;
~~~

### new UIView ([options])
1. `options {object}`
	* `left {number}`
	* `right {number}`
	* `top {number}`
	* `bottom {number}`
	* `centerX {number}`
	* `centerY {number}`
	* `widthPercent {number}`
	* `heightPercent {number}`

~~~
var view = new UIView();
~~~

### view.reflowX (padding)

### view.reflowY (padding)

### Callback handler: view.wrapReflow

Determines the position and style of a view and its child
views. If you want to customize the layout flow you can
override this function.

### Events

#### \'Resize\', callback ()

Event emitted to view when it has been resized.
