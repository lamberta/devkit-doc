# GC.GCDataSource

## Class: GC.GCDataSource

Inherits
:    1. squill.models.DataSource
     2. [squill.models.BasicDataSource](./squill/models/basicdatasource.html)
     3. [lib.PubSub](./lib/pubsub.html)

### new GC.GCDataSource ([options])
1. `options {object}`
	* `key`
	* `channel`
	* `hasRemote`
	* `sorter`


### datasource.onMessage (data)
1. `data {object}`
	* `type` ---Can be `'UPDATE'` or `'REMOVE'`.

### datasource.signalUpdate (type, iten, id)
1. `type {string}` ---Can be `'UPDATE'` or `'REMOVE'`.
2. `item {}`
3. `id {}`

### datasource.add (item)
1. `item {object}`
2. Return: `{this}`

### datasource.remove (id)
1. `id {}`
2. Return: `{this}`

### datasource.keepOnly (list)
1. `list {}`

### datasource.clear ()

### datasource.getCount ()
1. Return: `{number}`

Return `this.length`.

### datasource.setSorter (sorter)
1. @return `{this}`

### datasource.contains (id)
1. `id {string}`
2. Return: `{boolean}`

### datasource.getKey ()
1. Return: `{}`

### datasource.get (id)
1. `id {string}`
2. Return: `{object|null}`

### datasource.getItemForIndex (i)
1. `i {number}`
2. Return: `{object|null}`

### datasource.sort ()

### datasource.forEach (callback, thisArg)
1. `callback {function(elem, i)}`
2. `thisArg {object}`

### datasource.toJSON ()
1. Return: `{string}`

### datasource.fromJSON (data)
1. `data {object}`

### datasource.beginChanges ()

### datasource.saveChanges ()

### datasource.load ()

### Event: \'Update\'

### Event: \'Remove\'

### Event: \'Remote\'
