# timestep.ui.UIView

This is not complete and subject to change.

## Class: timestep.ui.UIView

A view proxy for a contained LinearLayout. Contains logic
for reflowing in either significant direction.

Inherits
:    1. [timestep.View](./timestep-view.html)
     2. [lib.PubSub](./lib-pubsub.html)

### new timestep.ui.UIView ([options])
1. `options {object}`
	* `left {number}`
	* `right {number}`
	* `top {number}`
	* `bottom {number}`
	* `centerX {number}`
	* `centerY {number}`
	* `widthPercent {number}`
	* `heightPercent {number}`

### view.reflowX (padding)

### view.reflowY (padding)

### Callback handler: view.wrapReflow

Determines the position and style of a view and its child
views. If you want to customize the layout flow you can
override this function.

### Event: \'Resize\', callback ()

Event emitted to view when it has been resized.
