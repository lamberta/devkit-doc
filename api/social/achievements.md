# GC.achievements

This is a namespace for adding and querying achievements. A
game developer specifies achievements in `manifest.json`.

Inherits
:    1. [SyncedCollection](./gc-synced-collection.html)

### GC.achievements.get (id)
1. `id {string}` ---Achievement ID.
2. Return: `{Achievement}` ---Returns the item.

Returns an achievement.

### GC.achievements.get ()
1. Return `{array}`

Returns an array of all achievements.

### GC.achievements.earn (id [, callback])
1. `id {string|Achievement}` ---Achievement ID..
2. `callback {function(err, res)}` ---Optional.

Set the `earned` property of an achievement to `true`, then
sync with server.

If provided a callback, on success `res` is `{'success': true}`, otherwise, `err` with contain a message why not.


## Class: Achievement

### achievement.id

Achievement ID.

### achievement.name
`{string}`

Achievement name.

### achievement.description
`{string}`

Description.

### achievement.image
`{string}`

Image URL.

### achievement.weight
`{number}`

### achievement.created
1. `{number}`

Timestamp in seconds.

### achievement.earned
1. `{boolean} = false`
