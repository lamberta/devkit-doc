# ui.widget.GridView

The `GridView` divides a view into horizontal and vertical
tiles. The width of each tile is equal to the width of the
`GridView` divided by the number of columns, and the height
of each tile is equal to the height of the `GridView`
divided by the number of rows.

A [complete example](../example/ui-grid-basic/) is available in the `addon-examples` package.

## Class: ui.widget.GridView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.GridView as GridView;
~~~

Once a `GridView` is created and its tile coordinates are
set up, subviews are positioned by setting the `row` and
`col` properties of a subview's options object.

~~~
var gridview = new GridView(); //defaults to a 3x3 grid

var view = new ui.View({
  superview: gridview,
  col: 1,
  row: 2
});
~~~

The subview is positioned on the left-side of the middle row:

~~~
┌─┬─┬─┐
│ │ │ │
├─┼─┼─┤
│█│ │ │
├─┼─┼─┤
│ │ │ │
└─┴─┴─┘
~~~

If the `col` or `row` property of a subview is changed, then
the `GridView` will automatically update the position:

~~~
view.col = 2;
view.row = 1;
~~~

Making these changes will position the subview in the center
of the top row:

~~~
┌─┬─┬─┐
│ │█│ │
├─┼─┼─┤
│ │ │ │
├─┼─┼─┤
│ │ │ │
└─┴─┴─┘
~~~

A [complete example](../example/ui-grid-movecell/) is available in the `addon-examples` package.

A subview of `GridView` can span multiple rows or columns by
setting a `rowspan` or `colspan` option. A cell 

~~~
var view = new View({
  superview: gridview,
  col: 0,
  row: 1,
  rowspan: 2,
  colspan: 2
});
~~~

This places the subview in the upper-left tile, which now
extends in to the second row and column. The subview is
positioned relative to the top-left corner of the tile:

~~~
┌───┬─┐
│█  │ │
│   ├─┤
│   │ │
├─┬─┼─┤
│ │ │ │
└─┴─┴─┘
~~~

If the `colspan` or `rowspan` property of the subview is
changed, and the `autoCellSize` property of the `GridView` is
`true`, then the size of the subview is updated.

A [complete example](../example/ui-grid-span/) is available in the `addon-examples` package.

The margin properties add space around the cells. The gutter
properties add space between the columns and rows, but not
between the cells and the edge of the `GridView`.


### new GridView ([options])
1. `options {object}`
	* `cols {number} = 3` ---The number of columns in a grid.
	* `rows {number} = 3` ---The number of rows in a grid.
	* `horizontalMargin {number} = 0` ---The space around the top and bottom of a grid cell.
	* `verticalMargin {number} = 0` ---The space around the left and right of a grid cell.
	* `verticalGutter {number} = 0` ---The space between grid rows.
	* `horizontalGutter {number} = 0` ---The space between grid columns.
	* `autoCellSize {boolean} = true` ---Automatically set the width and height of the sub-view to fit the grid cell.
	* `hideOutOfRange {boolean} = false` ---If `true`, do not display sub-views outside the row/column range of the grid.
	* `showInRange {boolean} = false` ---If `true`, automatically display out-of-range sub-views when they re-enter the grid.

To create a basic 2x2 grid with a subview in the lower-right corner:

~~~
var gridview = new GridView({cols: 2, rows: 2});

var view = new View({
  superview: gridview,
  col: 1,
  row: 1
});
~~~

A more complicated `GridView` more typically used for layout
might look something like this:

~~~
var gridview = new GridView({
  superview: this.view,
  backgroundColor: '#ff0000',
  x: device.width / 2 - 140,
  y: 10,
  width: 280,
  height: 200,
  cols: 5,
  rows: 4,
  hideOutOfRange: true, //Hide any cells outside of the grid
  showInRange: true     //Make cells in the grid range visible
});
~~~

### gridview.getCols ()
1. Return: `{number}`

Return the the number of columns in the `GridView`.

### gridview.setCols (cols)
1. `cols {number}`

Set the number of columns in the `GridView`.

### gridview.getRows ()
1. Return: `{number}`

Return the the number of rows in the `GridView`.

### gridview.setRows (rows)
1. `rows {number}`

Set the number of rows in the `GridView`.
