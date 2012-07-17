# GC.invites

### GC.invites.getInvites (callback)
1. `callback {function}`

### GC.invites.createInvite (opts, callback)
1. `opts {object}`
2. `callback {function}`

### GC.invites.sendNotification (opts, callback)
1. `opts {object}`	
	* `service {string}` ---Can be `'facebook'` or `'phone'`.
	* `user {object}`
	* `phone {object}`
	* `number {string}`
	* `url`
	* `message`
	* `smsMessage`
	* `includeLink`
	* `isInvite`
2. `callback {function}`

### GC.invites.send (opts, callback)
1. `opts {object}`
	* `isInvite {boolean} = true`
	* `url`
