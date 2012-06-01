# `SyncedCollection`

This class is located at `sdk/_api/client/SyncedCollection.js`.

## Methods

* __get (itemID)__ ---
	* @param `{} itemID` ---Optional item identification.
	* @return `{|Array}` ---Returns the item associated with
      the synced collection's `GCDataSource`. If no argument
      is provided, return the `GCDataSource` as an array.
	  
	  A synced collection is associated with
	  [<code>GCDataSource</code>](./gc-gcdatasource.html)
	  whose `persistence` property is a [<code>LocalPersistenceHandler</code>](./squill-models-persistence-localpersistencehandler.html).

* __sync__ ---

## Messages

### Subscribe

* `OnlineStateChanged` ---If the network connection is
  online when this event is received, then this object is synced.
