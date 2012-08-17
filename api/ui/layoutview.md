# ui.LayoutView

## Class: ui.LayoutView

Laying out user interface components with the SDK generally
requires setting their x, y coordinates. However, in a
LayoutView, these coordinates are unused, and each subview
is positioned sequentially in a given direction. Using this
layout, children never overlap, and the direction is set with
the `direction` property of the LayoutView's style. If the
size of the child view exceed it's superview, it will
overflow the containing box.

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.LayoutView as LayoutView;
~~~

### new LayoutView ([options])
1. `options {object}`
	* `direction {string} = 'down'` ---Options are `'up'`, `'down'`, `'right'`, or `'left'`.
	* `halign {string} = 'start'`
	* `valign {string} = 'start'`

~~~
var layoutview = new LayoutView();
~~~


## Example: Using the LayoutView

~~~
m4_include(./examples/api/layoutview.js)
~~~
