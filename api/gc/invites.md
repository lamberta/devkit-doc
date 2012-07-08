# `invites`



## Methods

* __getInvites (callback)__
	* @param `{function} callback`

* __createInvite (opts, callback)__
	* @param `{object} opts`
	* @param `{function} callback`

* __sendNotification (opts, callback)__
	* @param `{object} opts`
	
		* __service__ ---Can be `'facebook'` or `'phone'`.
		* __user__ `{object}`
			* __phone__ `{object}`
				* __number__ `{string}`
		* __url__
		* __message__
		* __smsMessage__
		* __includeLink__
		* __isInvite__
	
	* @param `{function} callback`

* __send (opts, callback)__
  * @param `{object} opts`
	  * __isInvite__ `{boolean} = true`
	  * __url__

