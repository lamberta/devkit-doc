# ui.layout.FlexView

## Class: ui.layout.FlexView

Laying out user interface components with the SDK generally
requires setting their x, y coordinates. However, in a
FlexView, these coordinates are unused, and each subview
is positioned sequentially in a given direction. Using this
layout, children never overlap, and the direction is set with
the `direction` property of the FlexView's style. If the
size of the child view exceed its superview, it will
overflow the containing box.

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.layout.FlexView as FlexView;
~~~

### new FlexView ([options])
1. `options {object}`
    * `direction {string} = 'down'` ---Options are `'up'`, `'down'`, `'right'`, or `'left'`.
    * `halign {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
    * `valign {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`

FlexViews have a given direction in which children are
positioned. They can be given a horizontal and vertical
align parameter, which along the direction axis positions
all children (`'space'` and `'space-outside`' control
distribution of space *between* children) and along the
perpendicular axis controls the alignment of a single child.

~~~
var flexview = new FlexView();
~~~


## Subview Styles

The subviews of a FlexView can accept addtional options
which override their parent's alignment (only in the
perpendicular direction) or whether the child view should be
"flexible" and fills up all available space. In the direction of the
FlexView, this consumes all free space not taken by other
subviews. In the perpendicular direction, this matches the
dimension of its parent.

The subviews of a FlexView can accept addtional options
for arrangement within their parent.

### new View ([options])
1. `options {object}`
    * `hflex {integer} = 0`
    * `vflex {integer} = 0`
    * `halignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
    * `valignSelf {string} = 'start'` ---Options are `'start'`, `'center'`, `'end'`, `'space'`, or `'space-outside'`
    * `contentWidth {integer} = 0`
    * `contentHeight {integer} = 0`

This view represents any child view of a FlexView.

The `'contentWidth'` and `'contentHeight'` parameters
specify minimum dimensions for a flexible view, so that it
does not shrink to below a specific size. These have no
impact on the default relative layout.

## Example: Setting up Navigation Bars

Setting up a basic header/content/footer layout is
easy. Here we create our main `FlexView` to fit the device
dimensions, then stack the three child views within it. The
`topmenu` and `bottomnav` views have their height set to 50
pixels, while the`ScrollView` fills out the middle. Include
the following in your `Application.js` file:

~~~
m4_include(./examples/api/example-flexview-navbars.js)
~~~

<img src="./assets/ui-layout-flexview/example-navbars.png" alt="nav bars with flexview" class="screenshot">


## Example: Using Relative Sizes

~~~
m4_include(./examples/api/flexview.js)
~~~

<img src="./assets/ui-layout-flexview/example-flexview.png" alt="flexview example screenshot" class="screenshot">
