# GC.user

### GC.user.accounts

### GC.user.clear ()

### GC.user.uploadPhoto (imgData [, callback])
1. `imgData {string}` ---PNG image in base64 encoding.
2. `callback {function(err, res)}` ---Optional.

### GC.user.setDetails (details)

Not implemented.

### GC.user.setPublicData (data, callback)
1. `data {object}`
2. `callback {function}`

### GC.user.getPublicData (callback)
1. `callback {function(err, res)}`

### GC.user.setName (name, callback)
1. `name {string}` ---User name.
2. `callback {function(err, res)}`
   
### GC.user.getName (callback)
1. `callback {function(err, res)}`

### GC.user.hasAccount (type)
1. `type {}`
2. Return: `{}`

### GC.user.getAccount (type)
1. `type {}`
2. Return: `{}`

Same as `GC.user.hasAccount`.

### GC.user.withAuth ()

### GC.user.logout (callback)
1. `callback {function}` ---I don't see where this parameter is used.

### GC.user.getSession (callback)
1. `callback {function}`

### GC.user.createSessionFrame ()

### GC.user.saveSessionToken (token, callback)
1. `token {}`
2. `callback {function(err, obj)}`

### GC.user.setPlayer (player)
1. `player {}`

### GC.user.getPlayer ()
1. Return: `{}`

### GC.user.setUserID (id)
1. `id {}`

### GC.user.getUserID ()
1. Return: `{}`
