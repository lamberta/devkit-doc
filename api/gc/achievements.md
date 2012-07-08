# `GC.achievements`

This is a namespace for adding and querying achievements. A
game developer specifies achievements in `manifest.json`.

## Inheritence

1. [SyncedCollection](./gc-synced-collection.html)

## Methods

* __get (itemID)__ ---Returns the achievement.
	1. @param `{string=} itemID` ---Achievement id, optional.
	2. @return `{*|array}` ---Returns the item, or array of all items.

* __earn (id, callback)__ ---Sets the `earned` property of an achievement to `true`, and syncs with server. 
	1. @param `{string|Achievement} itemID` ---Item identification.
	2. @param `{function=} callback(err, res)` ---If successful, `res` is `{'success': true}`, otherwise,
      `err` with contain a message why not. Optional.


## Events

### Subscribe

* `OnlineStateChanged` ---If online, sync collection. Inherited from `SyncedCollection`.


# Achievement

## Properties

* __id__ ---Achievement ID.
* __name__ `{string}` ---Achievement name.
* __description__ `{string}` ---Description.
* __image__ `{string}` ---Image URL.
* __weight__ `{number}`
* __created__ `{number}` --Timestamp in seconds.
* __earned__ `{boolean} = false`
