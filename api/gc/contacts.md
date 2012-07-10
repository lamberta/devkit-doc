# GC.contacts

### GC.contacts.getDataSource ()

Returns the underlying `DataSource` for contacts.

### GC.contacts.sync (callback)
1. `callback {function}`

### GC.contacts.loadContactPhotos ()

### GC.contacts.showPicker ()

### GC.contacts.get (nativeID)

### GC.contacts.getAll (callback)
1. `{function} callback`

*Deprecated*

### GC.contacts.withServerContacts (callback)
1. `callback {function}`

### GC.contacts.find (data, callback)
1. `data {}` ---Contact.
2. `callback {function(err, contact)}`

Asynchronously return a contact.
	
### GC.contacts.getRandom ()
1. Return: `{Contact}`

Return a random contact.


## Class: Contact

### contact.userID
1. `{} = null`

### contact.id

### contact.name

### contact.email

### contact.phones

### contact.wasInvited
1. `{boolean} = false`

### contact.update (details)
1. `details {object}`
	* `user`
	* `name`
	* `email`
	* `phones`

### contact.isGCUser ()
1. Return: `{boolean}`

### contact.getImage ([img])
1. `img {timestep.Image}` ---Optional.
2. Return: `{timestep.Image}`

### contact.getPublicData (callback)
1. `callback {function}`

Asynchronous.

### contact.updateFromServer (details)
1. `details {object}`
	* `user`
	* `email`

Preserves native phone numbers, but replace everything else with server details.

### contact.updateFromNative (details)
1. `details {object}`
	* `id`
	* `phones`
	* `name`

Update the native contact ID and phone number.
