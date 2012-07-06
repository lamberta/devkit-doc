# `gifts`

This is a singleton instance of `GiftAPI`, located at `sdk/_api/client/gifts.js`.

## Inheritence

1. [SyncedCollection](./gc-synced-collection.html)

## Methods

* __send (opts, callback)__
	* @param `{object}`
	
		* __giftID__ `{string}`
		* __target__ `{object}`
		
			* __userID__ `{string}` ---If `userID` is
              provided, make asynchronous PUT request and run callback parameter..
	
	* @param `{function}`


# Gift

## Options

* __id__ ---Universal ID.
* __name__ `{string}` ---
* __description__ `{string}`---
* __image__
* __data__ `{object} = {}`
