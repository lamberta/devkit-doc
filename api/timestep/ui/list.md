# timestep.ui.List

## Class: timestep.ui.List

Inherits
:    1. [timestep.ScrollView](./timestep-scrollview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.ui.List ([options])
1. `options {object}`
	* `isFixedSize {boolean}`
	* `isTiled {boolean}`
	* `getCell`
	* `sorter`
	* `selectable`
	* `dataSource`

### list.addCell (cell)
1. `cell {timestep.ui.Cell}`

### list.setMaxY (maxY)__
1. `maxY {number}`

### list.model
1. `{squill.models.List}`

### list.selection
1. `{}`


## Example: Create a list

Requires a data source and cell.

~~~
var list = new timestep.ui.List({
	parent: this.view,
	dataSource: GC.contacts.getDataSource(),
	width: timestep.device.width-20,
	height: timestep.device.height-20,
	x: 10,
	y: 10,
	scrollX: false,
	backgroundColor: 'white',
	sorter: function (data) { return data.name.toLowerCase(); },
	getCell: function () { return new ContactCell({parent: list}); },
});
~~~
