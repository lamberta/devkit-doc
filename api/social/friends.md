# GC.friends

## Class: Friend

### friend.update (details)
1. @param `{object}`
	* `user`
	* `id`
	* `favorite`

### friend.getName ()
1. Return: `{string}`

Returns a user's name.

### friend.isFavorite ()
1. Return: `{boolean}`

Is the user a favorite?

### friend.setFavorite (isFav [, callback])
1. `isFav {boolean}`
2. `callback {function(err, res)}` ---Optional.

Sets which friends are favorite.

### friend.remove (callback)
1. @param `{function} callback(err, res)`

Removes the friend from your friend list.
