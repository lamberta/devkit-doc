# ui.widget.ListView

## Class: ui.widget.ListView

Inherits from:
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
1. `cell {ui.widget.CellView}`

### listview.setMaxY (maxY)
1. `maxY {number}`

### listview.model
1. `{}`

### listview.selection
1. `{}`


## Class: ui.widget.CellView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.CellView as CellView;
~~~

### new CellView ([options])
1. `options {object}`

~~~
var cellview = new CellView();
~~~

### Handler Function: cellview.setData (data)
1. `data {object}`

Called when a cellview is set.

### cellview.remove (list)
1. `list {ui.widget.ListView}`

Remove the cell from a given `ListView`.

### cellview.setPosition (position)
1. `position {object}`
	* `x {number}`
	* `y {number}`

### cellview.getWidth ()
1. Return: `{number}`

Return the width of the `CellView`.

### cellview.getHeight ()
1. Return: `{number}`

Return the height of the `CellView`.


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
