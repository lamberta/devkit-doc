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
	* `isFixedSize {boolean} = true` ---Set to false to allow variable sizes for list items (hurts rendering performance)
	* `isTiled {boolean} = false` ---Allow multiple items per row.
	* `renderMargin {number} = 0` ---The vertical margin between list items.
	* `autoSize {boolean} = false` ---Set to true to automatically set the height of the ListView based on MaxY.
	* `getCell {function(listItem, itemResource)}` ---A function that returns a cell view given an item from the list.
		* `listItem {object}` ---The object representing the current list item.
		* `itemResource {object}` ---The resource object for the current list item.
	* `sorter {function(listItem)} ---A function that returns a cardinal value (number or string) for the current item so the javascript interpreter can use it as the sort key.
	* `recycle {boolean} = true` ---Reuse CellView objects when scrolling rather than calling getCell for each item.
	* `selectable {boolean} = false` ---Set to true to allow items to be selectable (toggled).
	* `maxSelections {number} = 1` ---The maximum number of selectable items at a time.
	* `dataSource` ---The datasource for the list. (see below for documentation)

~~~
var listview = new ListView({
  getCell: function(listItem) {
    return new CellView(listItem);
  },
  sorter: function(listItem) {
    return listItem.getName();
  }
});
~~~

### listview.updateOpts (options)
1. `options {object}`

~~~
listview.updateOpts({
  dataSource: contacts.toDataSource()
});
~~~

### listview.addCell (cell)
1. `cell {ui.widget.CellView}` ---The cell to add to the list.

Adds a CellView to the ListView.

### listview.setMaxY (maxY)
1. `maxY {number}` ---The maximum height of the list to set.

Set the maximum height of the ListView.

### listview.getSelections ()
1. Return: `{GCDataSource}` ---A data source with just the selected list items.

Return the selected items.

### listview.getSelectionCount ()
1. Return `{number}` ---The number of selected items

Return the number of selected items.


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

### Handler: cellview.setData (data)
1. `data {object}` ---Data representing the cell item to set.

Called when a cellview is set.

### cellview.remove (list)
1. `list {ui.widget.ListView}` ---List to remove the cell from.

Remove the cell from a given `ListView`.

### cellview.setPosition (position)
1. `position {object}`
	* `x {number}` ---Vertical position of cell to set.
	* `y {number}` ---Horizontal position of cell to set.

### cellview.getWidth ()
1. Return: `{number}`

Return the width of the `CellView`.

### cellview.getHeight ()
1. Return: `{number}`

Return the height of the `CellView`.

### cellview.isSelected ()
1. Return: `{boolean}`

Return `true` if the current cell item has been selected.

### cellview.select ()

Select the current cell item.

### cellview.deselect ()

Deselect the current cell item.


## Class: GCDataSource

~~~
import GCDataSource;
~~~

### new GCDataSource ([options])
1. `options {object}`
	* `key {string} = 'id'` ---A key in the item's data object that will be unique.
	* `ctor {function(data)}` ---The constructor function for datasource items given a generic data object
	* `reverse {boolean} = false` ---Set to true to sort in reverse order.
	* `sorter {function(item)}` ---A function that returns a cardinal value (number or string) for the current item so the javascript interpreter can use it as the sort key.
	* `persistence {PersistenceHandler}` ---The persistence handler object for preserving datasource items.

~~~
var datasource = new GCDataSource();
~~~

### datasource.setSorter (sortFunction)
1. `sortFunction {function(item)}` ---A function that returns a cardinal value (number or string) for the current item so the javascript interpreter can use it as the sort key.

Set the sorting function used to determine the order of the datasource.

~~~
datasource.setSorter(function(item) {
  return item.getName();
});
~~~

### datasource.add (item)
1. `item {object|array}` ---The item(s) to be added or updated.
2. Return: `{object|array}` ---The item(s) passed in.

Add or update an item(s) in the datasource.

### datasource.remove (key)
1. `key {string}` ---The key value of the item to be removed.
2. Return: `{object}` ---The removed item.

Remove an item from the datasource.

### datasource.clear ()

Remove all items from the datasource.

### datasource.getCount ()
1. Return: `{number}`

Return the number of items in the datasource.

### datasource.contains (key)
1. `key {string}` ---The key value of the item to search for in the datasource.
2. Return: `{boolean}`

Return `true` if an item with the given key is contained within the datasource.

### datasource.getKey ()
1. Return: `{string}`

Returns the key for the datasource.

### datasource.get (key)
1. `key {string}` ---The key value of the item to return.
2. Return: `{object}`

Returns an item from the list with the given key.

### datasource.getItemForIndex (i)
1. `i {number}` ---The index of the item to return.
2. Return: `{object}`

Return the item with the given index based on the current sort order.

### datasource.forEach (callback [, thisArg])
1. `callback {function(item, index)}` ---Function invoked for each item in the datasource
2. `thisArg {object} = undefined` ---Object to use as `this` when executing `callback`.

Iterator used to execute a function on each item in the datasource.

### datasource.getFilteredDataSource (filterFunction)
1. `filterFunction {function(item)}` ---Function used to check whether to filter an item from the datasource
2. Return: `{GCDataSource}`

Return a datasource with all the items that fail the filter function removed.

### datasource.filter (filter)
1. `filter {array}` ---Array of items to filter from the current datasource.
2. Return: `{DataSource}`

Return a datasource with all the items in the filter array removed.

### datasource.sort ()

Sort the array based on the current sort key.

### datasource.toJSON ()
1. Return: `{object}`
	* `key {string}` ---The key of the datasource.
	* `items {array}` ---An array representing all items in the datasource.

Return a JSON object representing the current datasource.

### datasource.fromJSON (data)
1. `data {object}`
	* `key {string}` ---The key of the datasource.
	* `items {array}` ---An array representing all items in the datasource.

Populate the current datasource using the given key and items.

### datasource.toArray ()
1. Return: `{array}`

Return an array of all the items in the datasource.

### datasource.beginChanges ()

Signal the start of a changeset to be commited to the persistence handler.

### datasource.saveChanges ()

Add current changes to the persistence handler.

### datasource.load (callback)
1. `callback {function}` ---The function to be invoked after loading from the persistence handler.

Load datasource from the persistence handler.

### datasource.save ()

Save changes to the persistence handler.

### datasource.compare (list, callback)
1. `list {object|array}` ---A list of items to compare to the current datasource.
2. `callback {function}` ---The function to invoke for each comparison.

Compare a list to the current datasource.

### datasource.keepOnly (list)
1. `list {object|array}` ---The list of items we wish to keep.

Remove items from the current datasource not in the given list.

### Events

#### \'Update\', callback (key, item)
1. `key {string}` ---The key value of the item being updated or added.
2. `item {object}` ---The item being updated or added.

Published when an item has been added or updated.

#### \'Remove\', callback (key, item)
1. `key {string}` ---The key value of the item being removed.
2. `item {object}` ---The item being removed.

Published when an item has been removed.