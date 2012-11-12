# ui.widget.ListView

## Class: ui.widget.ListView

Inherits
:    1. [ui.ScrollView](./ui-scrollview.html)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.ListView as ListView;
~~~

### new ListView ([options])
1. `options {object}`
	* `isFixedSize {boolean}`
	* `isTiled {boolean}`
	* `getCell`
	* `sorter`
	* `selectable`
	* `dataSource`

~~~
var listview = new ListView();
~~~

### listview.updateOpts (options)
1. `options {object}`

~~~
listview.updateOpts({
  dataSource: contacts.toDataSource()
});
~~~

### listview.addCell (cell)
1. `cell {ui.widget.Cell}`

### listview.setMaxY (maxY)
1. `maxY {number}`

### listview.model
1. `{}`

### listview.selection
1. `{}`


## Class: ui.widget.Cell

Inherits
:    1. ui.widget.UIView
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.Cell as Cell;
~~~

### new Cell ([options])
1. `options {object}`

~~~
var cell = new Cell();
~~~

### Handler Function: cell.setData (data)
1. `data {object}`

Called when a cell is set.

### cell.remove (list)
1. `list {ui.widget.ListView}`

Remove the cell from a given `ListView`.

### Cell.setPosition (position)
1. `position {object}`
	* `x {number}`
	* `y {number}`

### cell.getWidth ()
1. Return: `{number}`

Return the width of the cell view.

### cell.getHeight ()
1. Return: `{number}`

Return the height of the cell view.


## Class: GCDataSource

~~~
import GCDataSource;
~~~

### new GCDataSource ([options])
1. `options {object}`
	* `key {string}` ---Optional. Defaults to `'id'`.
	* `reverse {boolean}`
	* `sorter {function}`
	* `persistence {}`

~~~
var datasource = new GCDataSource();
~~~

### datasource.setSorter (callback)
1. `callback {function(data)}`

### datasource.add (item)
1. `item {object}`
2. Return: `{object}`

### datasource.add (items)
1. `items {array}` ---An array of items.

### datasource.remove (id)
1. `id {string}`
2. Return: `{object}`

### datasource.clear ()

### datasource.getCount ()
1. Return: `{number}`

### datasource.contains (id)
1. `id {string}`
2. Return: `{boolean}`

### datasource.getKey ()
1. Return: `{string}`

### datasource.get (id)
1. `id {string}`
2. Return: `{object}`

### datasource.getItemForIndex (i)
1. `i {number}`
2. Return: `{object}`

### datasource.forEach (callback [, thisArg])
1. `callback {function(item, index)}`
2. `thisArg {object}` ---Optional.

### datasource.getFilteredDataSource (callback)
1. `callback {function}`
2. Return: `{DataSource}`

### datasource.filter (filter)
1. `filter {object}`
2. Return: `{DataSource}`

### datasource.sort ()

### datasource.toJSON ()
1. Return: `{object}`
	* `key {string}`
	* `items {array}`

### datasource.fromJSON (data)
1. `data {object}`

### datasource.toArray ()
1. Return: `{array}`

### Events

#### \'Update\', callback (id, item)
1. `id {string}`
2. `item {object}`

#### \'Remove\', callback (id, item)
1. `id {string}`
2. `item {object}`


## Example: Create a ListView

Displaying a list of items requires the coordinated use of
three classes: `ui.widget.ListView`, `ui.widget.Cell`, and
`GCDataSource`. There are components that handle some of
these for you, but to understand how they work together,
we'll display a list of arbitrary data that we can scroll and
click.

Requires a data source and cell.

~~~
m4_include(./examples/api/listview.js)
~~~

Run this code in the simulator, and you should see something
like the following screenshot. You can drag the list up and
down, but not right or left. When you click on a film title,
it will turn red and output its title in the debugging console.

<img src="./assets/ui-widget-listview/example-listview.png" alt="film list screenshot" class="screenshot">
