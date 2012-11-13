# storage

These parts of squill are used by other classes on
the backend, but shouldn't be directly referenced.

Hopefully, their features will be implemented by newer
storage facilities, but until then, they are documented here.

## Class: squill.models.BasicDataSource

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### new squill.models.BasicDataSource ([options])
1. `options {object}
	* `key {}`
	* `channel {}`
	* `hasRemote {}`

### datasource.getKey ()
1. Return: `{}`


## Class: squill.models.persistence.BasicPersistenceHandler

Not accessed directly using the SDK.

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### new squill.models.persistence.BasicPersistenceHandler ([options])
1. `object {object}`
	* `onLoad {function} = null`
	* `params {object} = {}`
	* `key {string} = undefined` ---This doesn't seem optional, needs to be a string key.
	* `loadURL {function} = null`
	* `saveURL {function} = null`

### handler.clear ()

Creates an empty object that the `BasicPersistenceHandler` instance uses to store data.

### handler.load ()

Doesn't seem to do anything.

### handler.commit ()

Doesn't seem to do anything.

### handler.update (data)
1. `data {object|array}` ---Object or array of data objects.

### handler.remove (data)
1. `data {string|array}` ---Key or array of keys.

### handler.setParams (params)
1. `params {}`

### handler.setLoadURL (loadURL)
1. `loadURL {string}` --- (need to check this parameter type.)

### handler.setSaveURL (saveURL)
1. `saveURL {string}` --- (need to check this parameter type.)


## Class: squill.models.persistence.LocalPersistenceHandler

Inherits from:
:    1. [squill.models.persistence.BasicPersistenceHandler](./squill-models-persistence-basicpersistencehandler.html)
     2. [event.Emitter](./event.html#class-event.emitter)

### new squill.models.persistence.localpersistencehandler ([options])
1. `object {object}`
