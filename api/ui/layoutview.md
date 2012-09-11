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


## Subview Styles

The subviews of a LayoutView can accept addtional options
which override their parent's alignment (only in the
perpendicular direction) or whether the child view should be
"flexible" and fills up all available space. In the direction of the
LayoutView, this consumes all free space not taken by other
subviews. In the perpendicular direction, this matches the
dimension of its parent.

The subviews of a LayoutView can accept addtional options
for arrangement within their parent.

### new View ([options])
1. `options {object}`
    * `hflex {integer} = 0`
    * `vflex {integer} = 0`
    * `halignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
    * `valignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
    * `contentWidth {integer} = 0`
    * `contentHeight {integer} = 0`

This view represents any child view of a LayoutView.

The `'contentWidth'` and `'contentHeight'` parameters
specify minimum dimensions for a flexible view, so that it
does not shrink to below a specific size. These have no
impact on the default relative layout.

## Example: Setting up Navigation Bars

Setting up a basic header/content/footer layout is
easy. Here we create our main `LayoutView` to fit the device
dimensions, then stack the three child views within it. The
`topmenu` and `bottomnav` views have their height set to 50
pixels, while the`ScrollView` fills out the middle. Include
the following in your `Application.js` file:

~~~
m4_include(./examples/api/example-layoutview-navbars.js)
~~~

<img src="./assets/ui-layoutview/example-navbars.png" alt="nav bars with layoutview" class="screenshot">


## Example: Using Relative Sizes

~~~
m4_include(./examples/api/layoutview.js)
~~~

<img src="./assets/ui-layoutview/example-layoutview.png" alt="layoutview example screenshot" class="screenshot">
