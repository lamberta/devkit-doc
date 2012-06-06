# `scores`

## Methods

* __get (opts, callback)__
	@param `{object} opts`
		* __type__ `{string} = 'everyone'`
		* __leaderboard__ `{string} = 'default'`
	@param `{function} callback`
	@return `{string|null}` ---Return the leaderboard type or `null`.

* __post (opts, callback)__ ---Post a new score. By default, overwrite the old score if this one is higher.
	@param `{object} opts`
		* __replace__ `{boolean} = false` ---If `true`, replace the score even if old score is higher.
	@param `{function} callback(error, response)` ---Callback to run after asynchronous POST operation.


# `Leaderboard`

## Options

* __id__
* __name__
* __description__
* __me__
* __friends__
* __everyone__

## Properties

* __id__ `{string} = 'default'`

* __name__

* __description__

* __me__

* __friends__

* __everyone__
