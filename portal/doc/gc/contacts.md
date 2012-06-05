# `Contacts`

## Methods

* __getDataSource__

* __sync (callback)__
	@param `{function} callback`

* __loadContactPhotos__

* __showPicker__

* __get (nativeID)__

* __getAll (callback)__
	@param `{function} callback`

* __withServerContacts (callback)__
	@param `{function} callback`

* __find (data, callback)__ ---Asynchronously return a contact.
	@param `{} data` ---Contact.
	@param `{function} callback(error, contact)` ---Synchronous version is deprecated.

* __getRandom__ --Return a random contact.
	@return `{}`

* __getImageForPhone (phoneNumber)__ ---*Deprecated* and non-functional.


## Messages

### Subscribe

* __pagehide__

* __pageshow__


# `Contact`

## Methods

* __update (details)__
	@param `{object} details`
		* __user__
			* __name__
		* __name__
		* __email__
		* __phones__

* __isGCUser__
	@return `{boolean}`

* __getImage (timestepImg)__
	@param `{timestep.Image=}`
	@return `{timestep.Image}`

* __getPublicData (callback)__ ---Asynchronous.

* __updateFromServer (details)__ ---Sets phones and name and calls `update`.

* __updateFromNative (details)__ ---Update the native contact id and phone number.
	@param `{object} details`


## Properties

* __userID__ `{} = null`

* __id__

* __name__

* __email__

* __phones__

* __wasInvited__

