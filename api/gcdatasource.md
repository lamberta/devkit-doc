# `GCDataSource` wraps `squill.models.DataSource` (shown here) which inherits from
  [`squill.models.BasicSource`](./squill/models/basicdatasource.md).

## Options

* __key__
* __channel__
* __hasRemote__
* __sorter__


## Methods

* __onMessage (data)__

	@param `{object}` data ---`data.type` can be `'UPDATE'` or `'REMOVE'`.

* __signalUpdate (type, iten, id)__

	@param `{string}` type ---Can be `'UPDATE'` or `'REMOVE'`.
	
	@param  `{}` item
	
	@param `{}` id

* __add (item)__

	@param `{object}` item
	@return `{this}`

* __remove (id)__

	@param `{}` id
	@return `{this}`

* __keepOnly (list)__

	@param `{}` list

* __clear__

* __getCount__

	@return `{number}` ---Return `this.length`.

* __setSorter (sorter)__

	@return `{this}`

* __contains (id)__

	@paramn `{string}` id
	@return `{boolean}`

* __getKey__

	@return `{}`

* __get (id)__

	@param `{string}` id
	@return `{object|null}`

* __getItemForIndex (index)__

	@param `{number}` index
	@return `{object|null}`

* __sort__

* __forEach (callback, thisArg)__

	@param `{function}` callback(object, number)
	@param `{object}` thisArg

* __toJSON__

	@return `{object}` ---Not sure how this is JSON, should be a string.

* __fromJSON (data)__

	@param `{object}` data

* __beginChanges__

* __saveChanges__

* __load__


## Messages

* `'Update'`

* `'Remove'`

* `'Remote'`

## Usage
