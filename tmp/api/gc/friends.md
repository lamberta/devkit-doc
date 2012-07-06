# `GC.friends`



# `Friend`

## Methods

* __update (details)__
	1. @param `{object}`
	   * __user__
	   * __id__
	   * __favorite__

* __getName__ ---Returns a user's name.
	1. @return `{string}`

* __isFavorite__ ---Is the user a favorite?
	1. @return `{boolean}`

* __setFavorite (isFav, callback)__ ---Sets which friends are favorite.
	1. @param `{boolean} isFav`
	2. @param `{function=} callback(err, res)` ---Optional callback used to catch an error.

* __remove (callback)__ ---Removes the friend from your friend list.
	1. @param `{function} callback(err, res)`
