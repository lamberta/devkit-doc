# ui.widget.ListView

## Class: ui.widget.ListView

Inherits from:
:    1. [ui.ScrollView](./ui-scrollview.html)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

If items have to be presented in a list then the `ListView` is the class to use. The `ListView` subclasses `ScrollView` 
which allows it to scroll vertical or horizontal. The `ListView` must be populated by cells of the type `Cell` or a 
subclass of `Cell`.

Cells are created by the list based on data from a `DataSource`. When the list can display a cell it calls the `getCell`
function which has to be provided as an opts property to the `ListView` constructor. The `getCell` function returns
an instance of a cell.

The `ListView` has a feature which allows it to keep performing excellent even with a large number of items: the 
number of subviews in the list -instances or subclasses of `Cell`- is limited to the visible area of the view.

When a cell scrolls out of the boundary of the list it is recycled and used for a cell which scrolls into the boundary
of the list. This limits the number of subviews of the list. Right before the cell becomes visible the `setData` 
function of the cell is called with the data to show in the cell as a parameter.

~~~
import ui.widget.ListView as ListView;
~~~

### new ListView ([options])
1. `options {object}`
	* `isFixedSize {boolean} = true` ---If set to `false`, allow variable sizes for list items (hurts rendering performance).
	* `isTiled {boolean} = false` ---Allow multiple items per row.
	* `scrollX {boolean}` ---Optional, set to true if you want horizontal scrolling.
	* `scrollY {boolean}` ---Optional, set to true is you want vertical scrolling.
	* `renderMargin {number} = 0` ---The vertical margin between list items.
	* `autoSize {boolean} = false` ---If `true`, automatically set the height of the `ListView` to its `maxY` value.
	* `getCell {function(listItem, itemResource)}` ---A function that returns a `CellView` instance given an item from the list.
		* `listItem {object}` ---An object representing the current list item.
		* `itemResource {object}` ---The resource object for the current list item.
	* `sorter {function(listItem)}` ---A function that returns a cardinal value (number or string) for the current item to use as the sort key.
	* `recycle {boolean} = true` ---Reuse `CellView` objects when scrolling rather than calling `getCell` for each item.
	* `selectable {boolean} = false` ---If `true`, make items selectable (toggled).
	* `maxSelections {number} = 1` ---The maximum number of selectable items at a time.
	* `dataSource` ---The [GCDataSource](#class-gcdatasource) for the list.

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

A [complete example](../example/ui-listbasic/) is available in the `addon-examples` package.

### listview.updateOpts (options)
1. `options {object}`

~~~
listview.updateOpts({
  dataSource: contacts.toDataSource()
});
~~~

### listview.addCell (cell)
1. `cell {ui.widget.CellView}` ---The cell to add to the list.

Add a `CellView` to display in the list.

### listview.setMaxX (maxX)
1. `maxX {number}` ---The maximum width of the list to set.

If the `autoSize` property passed to the constructor is true then calling `setMaxX` sets the
height of the list to the given value. The x values for the scroll bounds (`minX` and `maxX`)
are updated to allow the content to scroll within the given width.

If the `autoSize` property is false then the boundary values (`minX` and `maxX`) are updated
which changes the distance which the list can scroll.

### listview.setMaxY (maxY)
1. `maxY {number}` ---The maximum height of the list to set.

If the `autoSize` property passed to the constructor is true then calling `setMaxY` sets the
height of the list to the given value. The y values for the scroll bounds (`minY` and `maxY`)
are updated to allow the content to scroll within the given height.

If the `autoSize` property is false then the boundary values (`minY` and `maxY`) are updated
which changes the distance which the list can scroll.

### listview.getSelections ()
1. Return: `{GCDataSource}` ---A data source with just the selected list items.

Return the selected items.

### listview.getSelectionCount ()
1. Return `{number}` ---The number of selected items.

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

This callback is executed when a `CellView` is set.

### cellview.remove (list)
1. `list {ui.widget.ListView}` ---List to remove the cell from.

Remove the cell from a given `ListView`.

### cellview.setPosition (position)
1. `position {object}`
	* `x {number}` ---Vertical position of the cell to set.
	* `y {number}` ---Horizontal position of the cell to set.

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

An observable collection of items with features for adding,
removing, filtering, and the determining when a list as been modified.

~~~
import GCDataSource;
~~~

### new GCDataSource ([options])
1. `options {object}`
	* `key {string} = 'id'` ---A unique key in the data object in an item.
	* `ctor {function(data)}` ---The constructor function for items given a generic data object
	* `reverse {boolean} = false` ---If `true`, sort data source in reverse order.
	* `sorter {function(item)}` ---A function that returns a cardinal value (number or string) for the current item to use as the sort key.

~~~
var datasource = new GCDataSource();
~~~

### datasource.setSorter (sortFunction)
1. `sortFunction {function(item)}` ----A function that returns a cardinal value (number or string) for the current item to use as the sort key.

Set the sorting function used to determine the order of the datasource.

For example, to set the sorting order based on a return
value for an item's `getName` method:

~~~
datasource.setSorter(function (item) {
  return item.getName();
});
~~~

### datasource.add (item)
1. `item {object}` ---Add an item to the data source. Multiple items can be added by combining them in an `array`.
2. Return: `{object}` ---The item passed in. If passed multiple items, return them in an `array`.

Add or update an item in the datasource. Add multiple items
to a datasource by passing them in an array: `datasource.add([item1, item2, item3])`.

### datasource.remove (key)
1. `key {string}` ---The key value of the item to be removed.
2. Return: `{object}` ---The removed item.

Remove an item from the data source. By default, a data
source uses the `id` property of an item as a key.

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

### datasource.getItemForIndex (index)
1. `index {number}` ---The index of the item to return.
2. Return: `{object}`

Return the item with the given index based on the current sort order.

### datasource.forEach (callback [, thisArg])
1. `callback {function(item, index)}` ---Function invoked for each item in the datasource
2. `thisArg {object} = undefined` ---Object to use as `this` when executing `callback`.

Iterator used to execute a function on each item in the datasource.

For example, to print out the name of each item using it's `getItem` method:

~~~
datasource.forEach(function (item) {
  console.log("Item name: " + item.getName());
});
~~~

### datasource.getFilteredDataSource (callback)
1. `callback {function(item)}` ---Function to test on each item in the datasource.
2. Return: `{GCDataSource}`

Return a datasource with all the items that return `true`
for the callback function.

~~~
var evenItems = datasource.getFilteredDataSource(function (item) {
  return (item.getValue() % 2) === 0;
});
~~~

### datasource.filter (items)
1. `items {array}` ---Array of items to exclude from this data source.
2. Return: `{DataSource}`

Return a copy of this datasource, but with the items in the
filter array removed from it.

~~~
datasource.add([item1, item2, item3, item4]);

var filtered = datasource.filter([item2, item3]);

filtered.toArray(); //=> [item1, item4]
~~~

### datasource.keepOnly (list)
1. `list {array}` ---Array of items to include from this data source.

Remove items from the current datasource not in the given list.

~~~
datasource.add([item1, item2, item3, item4]);

datasource.keepOnly([item2, item3]);

datasource.toArray(); //=> [item2, item3]
~~~

### datasource.sort ()

Sort the array based on the current sort key. This defaults to `'id'`.

### datasource.toArray ()
1. Return: `{array}`

Return an array of all the items in the datasource.

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


### Events

#### \'Update\', callback (key, item)
1. `key {string}` ---The key value of the item being updated or added.
2. `item {object}` ---The item being updated or added.

The event is published when an item has been added or
updated in the data source.

#### \'Remove\', callback (key, item)
1. `key {string}` ---The key value of the item being removed.
2. `item {object}` ---The item being removed.

The event is published when an item has been removed from the data source.
