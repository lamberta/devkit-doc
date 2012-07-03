# `GC.user`

## Properties

* __accounts__

## Methods

* __clear__

* __uploadPhoto (imgData, callback)__
	1. @param `{string} imgData` ---PNG image in base64 encoding.
	2. @param `{function} callback(err, res)` ---Optional callback.

* __setDetails (details)__ ---Not implemented.

* __setPublicData (data, callback)__
	1. @param `{object} data`
	2. @param `{function} callback`

* __getPublicData (callback)__
	1. @param `{function} callback(err, res)`

* __setName (name, callback)__
	1. @param `{string} name` ---User name.
	2. @param `{function} callback(err, res)`

* __getName (callback)__
	1. @param `{function} callback(err, name)`

* __hasAccount (type)__
	1. @param `{} type`
	2. @return `{}`

* __getAccount (type)__ ---Same as `hasAccount`.
	1. @param `{} type`
	2. @return `{}`

* __withAuth__

* __logout (callback)__
	1. @param `{function} callback` ---I don't see where this parameter is used.

* __getSession (callback)__
	1. @param `{function} callback`

* __createSessionFrame__

* __saveSessionToken (token, callback)__
	1. @param `{} token`
	2. @param `{function} callback(err, object)`

* __setPlayer (player)__
	1. @param `{} player`

* __getPlayer__
	1. @return `{}`

* __setUserID (userID)__
	1. @param `{}`

* __getUserID ()__
	1. @return `{}`
