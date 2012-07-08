# `timestep.ui.List`

## Inheritence

1. [timestep.ScrollView](./timestep-scrollview.html)
2. [timestep.View](./timestep-view.html)
3. [lib.PubSub](./lib-pubsub.html)

## Options

* __isFixedSize__ `{boolean}`

* __isTiled__ `{boolean}`

* __getCell__

* __sorter__

* __selectable__

* __dataSource__

## Methods

* __addCell (cellView)__
	* @param `{timestep.ui.Cell}` cellView

* __setMaxY (maxY)__
	* @param `{number}` maxY


## Properties

* __model__ `{squill.models.List}` --From [squill.models.List](./squill-models-list.html)

* __selection__ `{}`


## Usage

Requires a DataSource and Cell.

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
