# `squill.models.persistence.BasicPersistenceHandler`

Not accessed directly using the SDK.

## Inheritence

1. [lib.PubSub](./lib-pubsub.html)

## Options

* __onLoad__ `{function} = null`
* __params__ `{object} = {}`
* __key__ `{string} = undefined` ---This doesn't seem optional, needs to be a string key.
* __loadURL__ `{function} = null`
* __saveURL__ `{function} = null`

## Methods

* __clear__ ---Creates an empty object that the `BasicPersistenceHandler` instance uses to store data.

* __load__ ---Doesn't seem to do anything.

* __commit__ ---Doesn't seem to do anything.

* __update (data)__
	@param `{object|array} data` ---Object or array of data objects.

* __remove (data)__
	@param `{string|array} data` ---Key or array of keys.

* __setParams (params)__
	@param `{} params`

* __setLoadURL (loadURL)__
	@param `{string} loadURL` --- (need to check this parameter type.)

* __setSaveURL (saveURL)__
	@param `{string} saveURL` --- (need to check this parameter type.)
