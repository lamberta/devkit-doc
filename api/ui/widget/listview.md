# ui.widget.ListView

## Class: ui.widget.ListView

Inherits from:
:    1. [ui.ScrollView](./ui-scrollview.html)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

If you need to display a scrollable list that contains a
large number of items, then `ListView` is the class for
you. `ListView` is a subclass of
[ScrollView](./ui-scrollview.html), which allows list items
to be scrolled either vertically or horizontally. The
`ListView` is populated by items of the type
[Cell](#class-ui.widget.cellview), and is optimized to
scroll smoothly even when the list contains a large number
of items.

[Cells](#class-ui.widget.cellview) are created by the list
based on data from a [DataSource](#class-gcdatasource). When
the list first attempts to render a cell to the screen, it
will invoke the `getCell` function, which you must provide
as an opts property to the `ListView` constructor. Your
`getCell` function must return a instance or subclass of the
[Cell](#class-ui.widget.cellview) type.

`ListView` works by limiting the amount of subviews it has
at any given time to the amount that fits into its visible
area. When an item scrolls out of the visible boundary of
the list, the [Cell](#class-ui.widget.cellview) instance is
recycled and re-used for a cell which scrolls into its
visible boundary. Right before a cell becomes visible, the
`setData` function of the cell is invoked with the item's
data as a parameter. By overriding this function, you can
populate the contents of the cell with the current item's
data.

To see the `ListView` in action, check out [the example](../example/ui-listbasic/).

~~~
import ui.widget.ListView as ListView;
~~~

### new ListView ([options])
1. `options {object}`
	* `isFixedSize {boolean} = true` ---If set to `false`, allow variable sizes for list items (hurts rendering performance).
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

### listview.setMaxX (maxX)
1. `maxX {number}` ---The maximum width of the list to set.

Sets the maximum horizontal distance which the list is able
to scroll. Also, if the `autoSize` property passed to the
constructor is true, then this also sets the absolute width
of the list.

### listview.setMaxY (maxY)
1. `maxY {number}` ---The maximum height of the list to set.

Sets the maximum vertical distance which the list is able to
scroll. Also, if the `autoSize` property passed to the
constructor is true, then this also sets the absolute height
of the list.

### listview.getSelection ()
1. Return: `{Object}`

Gets the selected items from the list. Return data is in the
form of an object, with the keys being the selected items.

### listview.getSelectionCount ()
1. Return `{number}`

Returns the number of selected items.

### listview.getCells ()
1. Return `{array}`

Gets an array of cell instances which are contained in the list.

## Class: ui.widget.CellView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

The `CellView` is the basic class for displaying items in a
list. The `CellView` class has functions for selecting,
deselecting and keeping track of selecting items.

When a cell becomes visible in a list, then the `setData`
function is called. The reference to data should be stored
in the cell for later use.

~~~
this.setData = function (data) {
	this._data = data; // Store the reference to the data
	// Apply the data to the cell by updating a color, text, etc....
};
~~~

#### Cell selection

The `CellView` handles most selection logic
internally. There are however two functions which have to be
implemented to update the view when the cell is selected or
deselected; `_onSelect` and `_onDeselect`.

~~~
this._onSelect = function () {
  // Called when the cell is selected
  // Change something in the cell like the color, text, etc...
};

this._onDeselect = function () {
  // Called when the cell is deselected
  // Change something in the cell like the color, text, etc...
};
~~~

#### Creating cells

Cells should only be created in the `getCell` function,
which is invoked by `ListView` whenever it needs a new
cell. Adding and removing cells from the list manually will
lead to strange behavior!

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

When a list item scrolls into the list's visible area, the
cell instance must be updated with the item's data so that
it displays the correct information. The `setData` function
is the mechanism by which this happens. Moreover, if the
list items are selectable, it's important to also update the
cell state based on its selected state. The `isSelected`
function is the appropriated way to check selected state.

~~~
this.setData = function (data) {
	this._data = data; // Save data
	// Do something with the data like settings the text in a `TextView` or displaying an image...
	// You can call `this.isSelected()` to show the selection state of the cell.
};
~~~

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

A `GCDataSource` is a collection of items that adheres to
the
[observable pattern](http://en.wikipedia.org/wiki/Observer_pattern). This
means that any time items are added, removed, or updated,
the datasource will publish an appropriate event for the
item(s) in question ([See below](#events) for a list of
available events). `GCDataSources` are useful, for instance,
when you have a UI element (like a `ListView`) that is
displaying a collection of items, but you don't want to
re-render the entire collection any time the collection is
modified in some way. Instead of re-rendering the entire
list, you can simply update individual UI items based on the
events the datasource publishes.

For more information, check out the [Listview example](../example/ui-listbasic/).

~~~
import GCDataSource;
~~~

### new GCDataSource ([options])
1. `options {object}`
	* `key {string} = 'id'` ---A unique key in the data object in an item.
	* `ctor {function(data)}` ---The constructor function for items given a generic data object
	* `reverse {boolean} = false` ---If `true`, sort data source in reverse order.
	* `sorter {function(item)}` ---A function that returns a cardinal value (number or string) for the current item to use as the sort key.

Creates a `GCDataSource` object. The most important argument
is the `key` parameter, which specifies what property on
each item is unique. If you do not specify a key, the
datasource will default to the "id" property of the
item. You may also specify a constructor function (`ctor`),
which will be used to create item objects when the
[`datasource.add(data)`](#datasource.add-item) method is
invoked. You may also specify a sorter function which, when
given an item from the datasource, returns the item's
cardinal value. The sort order of the sorting functionality
may be specified using the `reverse` flag.

~~~
var datasource = new GCDataSource({
	key: 'id',
	ctor: function (data) {
		this.id = data.id;
		this.name = data.name;
	},
	sorter: function (item) {
		return item.name;
	}
});
~~~

### datasource.setSorter (sortFunction)
1. `sortFunction {function(item)}` 

Sets the `sorter` function, which must return a cardinal
value (number or string) for the current item, and will be
used in the sorting logic.

For example, to set the sorting order to be based on an
item's name propery, you might set the sorter function as
follows:

~~~
datasource.setSorter(function (item) {
  return item.getName();
});
~~~

### datasource.add (item)
1. `item {array|object}` ---Add an item to the data source. Multiple items can be added by combining them in an `array`.
2. Return: `{array|object}`

Adds or updates an item in the datasource. Add multiple
items to a datasource by passing them in an array:
`datasource.add([item1, item2, item3])`. Returns the item(s)
you passed in.

### datasource.remove (key)
1. `key {string}` ---The key value of the item to be removed.
2. Return: `{object}`

Removes and returns an item from the data source by its key value.

### datasource.clear ()

Remove all items from the datasource. Note that this will
cause the "Remove" event to be published for all the items
currently in the list.

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

Returns the item from the list with the given key if one exists.

### datasource.getItemForIndex (index)
1. `index {number}` ---The index of the item to return.
2. Return: `{object}`

Return the item with the given index based on the current sort order.

### datasource.forEach (callback, thisArg)
1. `callback {function(item, index)}` ---Function invoked for each item in the datasource
2. `thisArg {object} = undefined` ---Object to use as `this` when executing `callback`.

Iterator used to execute a function on each item in the datasource.

For example, to log out the name of each item using it's `getItem` method:

~~~
datasource.forEach(function (item) {
  console.log("Item name: " + item.getName());
});
~~~

### datasource.getFilteredDataSource (callback)
1. `callback {function(item)}` ---Function to test on each item in the datasource.
2. Return: `{GCDataSource}`

Returns a new datasource with all the items that return `true`
for the callback function.

~~~
var evenItems = datasource.getFilteredDataSource(function (item) {
  return (item.getValue() % 2) === 0;
});
~~~

### datasource.filter (items)
1. `items {array}` ---Array of items to exclude from this data source.
2. Return: `{DataSource}`

Return a copy of this datasource with the items in the
filter array removed from it. Note that the difference
between `datasource.filter` and
`datasource.getFilteredDataSource` is that filter removes
items based on the filter once, whereas the
`getFilteredDataSource` function prevents items that fail
the filter function from ever being added in the future.

~~~
datasource.add([item1, item2, item3, item4]);

var filtered = datasource.filter([item2, item3]);

filtered.toArray(); //=> [item1, item4]
~~~

### datasource.keepOnly (list)
1. `list {array}` ---Array of items to include from this data source.

Remove items from the current datasource not in the given list. This is essential the opposite of `datasource.filter`

~~~
datasource.add([item1, item2, item3, item4]);

datasource.keepOnly([item2, item3]);

datasource.toArray(); //=> [item2, item3]
~~~

### datasource.sort ()

Sorts the array based on the current sorter function.

### datasource.toArray ()
1. Return: `{array}`

Returns an array of all the items in the datasource.

### datasource.toJSON ()
1. Return: `{object}`
	* `key {string}` ---The key of the datasource.
	* `items {array}` ---An array representing all items in the datasource.

Returns a JSON object representing the current datasource.

### datasource.fromJSON (data)
1. `data {object}`
	* `key {string}` ---The key of the datasource.
	* `items {array}` ---An array representing all items in the datasource.

Populates the current datasource using the given key and items.


### Events

#### \'Update\', callback (key, item)
1. `key {string}` ---The key value of the item being updated or added.
2. `item {object}` ---The item being updated or added.

The `Update` event is published when an item in the datasource has been added or updated.

#### \'Remove\', callback (key, item)
1. `key {string}` ---The key value of the item being removed.
2. `item {object}` ---The item being removed.

The `Remove` event is published when an item has been removed from the data source.
