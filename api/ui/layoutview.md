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
	* `halign {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
	* `valign {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`

LayoutViews have a given direction in which children are
positioned. They can be given a horizontal and vertical
align parameter, which along the direction axis positions
all children (`'space'` and `'space-outside`' control
distribution of space *between* children) and along the
perpendicular axis controls the alignment of a single child.

~~~
var layoutview = new LayoutView();
~~~

## LayoutView subviews
1. `options {object}`
	* `hflex {integer} = 0`
	* `vflex {integer} = 0`
	* `halignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
	* `valignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
	* `contentWidth {integer} = 0`
	* `contentHeight {integer} = 0`

Subviews of LayoutViews have style properties which can
override their parent's alignment (only in the perpendicular
direction) or whether the child should be "flexible" and
take up all available space. In the direction of the
LayoutView, this consumes all free space not taken by other
subviews. In the perpendicular direction, this matches the
dimension of its parent.

The `'contentWidth'` and `'contentHeight'` parameters
specify minimum dimensions for a flexible view, so that it
does not shrink to below a specific size. These have no
impact on the default relative layout.

## Example: Using the LayoutView

~~~
m4_include(./examples/api/layoutview.js)
~~~
