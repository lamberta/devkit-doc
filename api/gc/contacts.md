# `GC.Contacts`


## Functions

* __getDataSource__ ---Returns the underlying `DataSource` for contacts.

* __sync (callback)__
	1. @param `{function} callback`

* __loadContactPhotos__

* __showPicker__

* __get (nativeID)__

* __getAll (callback)__
	1. @param `{function} callback`

* __withServerContacts (callback)__
	1. @param `{function} callback`

* __find (data, callback)__ ---Asynchronously return a contact.
	1. @param `{} data` ---Contact.
	2. @param `{function} callback(error, contact)` ---Synchronous version is deprecated.

* __getRandom__ --Return a random contact.
	1. @return `{}`

* __getImageForPhone (phoneNumber)__ ---*Deprecated* and non-functional.


## Messages

### Subscribe

* __pagehide__

* __pageshow__


# `Contact`

## Properties

* __userID__ `{} = null`
* __id__
* __name__
* __email__
* __phones__
* __wasInvited__ `{boolean} = false`

## Methods

* __update (details)__
	1. @param `{object} details`
		* __user__
			* __name__
		* __name__
		* __email__
		* __phones__

* __isGCUser__
	1. @return `{boolean}`

* __getImage (timestepImg)__
	1. @param `{timestep.Image=}`
	2. @return `{timestep.Image}`

* __getPublicData (callback)__ ---Asynchronous.
	1. @param `{function}`

* __updateFromServer (details)__ ---Preserves native phone
  numbers, but replace everything else with server details.
	1. @param `{object} details`
		* __user__
		* __email__

* __updateFromNative (details)__ ---Update the native contact ID and phone number.
	1. @param `{object} details`
		* __id__
		* __phones__
		* __name__
