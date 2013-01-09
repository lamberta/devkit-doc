# ui.widget.GridView

## Class: ui.widget.GridView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.GridView as GridView;
~~~

The `GridView` allows you to divide a view into tiles. The width of each tile is equal to the width of the `GridView`
divided by the number or columns, the height of each tile is equal to the height of the `GridView` divided by the 
number of rows.

The position of a subview of the `GridView` can be contolled by setting the  `row` and `col` in the options of the subview.

~~~
new View({superview: gridview, col: 1, row: 2});
~~~

If the `col` or `row` property of the subview is changed then the `GridView` will update the position.

A subview of `GridView` can also span multiple rows or columns, this can be achieved by adding a `rowspan` or
`colspan` option. The default `rowspan` and `colspan` is one.

~~~
new View({superview: gridview, col: 0, row: 1, rowspan: 2, colspan: 3});
~~~

If the `colspan` or `rowspan` property of the subview is changed and the `autoCellSize` property of the `GridView`
is true then the size of the subview is updated.

The margin properties add space around the cells, the gutter properties add space between the cells but not between
the cells and the edge of the GridView.

### new GridView ([options])
1. `options {object}`
  * `horizontalMargin {number}`
	* `verticalMargin {number}`
	* `horizontalGutter {number}`
	* `verticalGutter {number}`
	* `autoCellSize {boolean}`
  * `rows {number}`
  * `cols {number}`

### gridview.getCols ()
1. Return: `{number}`

Return the the number of columns in the `GridView`.

### gridview.setCols (cols)
1. `cols {number}`

Set the number of comumns in the `GridView`.

### gridview.getRows ()
1. Return: `{number}`

Return the the number of rows in the `GridView`.

### gridview.setRows (rows)
1. `rows {number}`

Set the number of rows in the `GridView`.
