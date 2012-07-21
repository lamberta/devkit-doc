# ui.widget.List

## Class: ui.widget.List

Inherits
:    1. [ui.ScrollView](./ui-scrollview.html)
     2. [ui.View](./ui-view.html)
     3. [event.PubSub](./event-index.html#class-event.pubsub)

~~~
import ui.widget.List as List;
~~~

### new List ([options])
1. `options {object}`
	* `isFixedSize {boolean}`
	* `isTiled {boolean}`
	* `getCell`
	* `sorter`
	* `selectable`
	* `dataSource`

~~~
var list = new List();
~~~

### list.addCell (cell)
1. `cell {ui.widget.Cell}`

### list.setMaxY (maxY)
1. `maxY {number}`

### list.model
1. `{}`

### list.selection
1. `{}`


## Example: Create a list

Requires a data source and cell.

~~~
m4_include(./examples/api/list.js)
~~~
