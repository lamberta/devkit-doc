# GC

The singleton that does it all. Defined in `sdk/_api/client/init.js`.
We got here through `desktop.html`, which calls
`runtimeBrowser.launchClient`, which imports `init.js`.

Inherits
:    1. [shared.Common](#shared.common) ---Only sets `this.env` to the name of the environment (`from jsio.__jsio.__env.name`).
     2. [lib.PubSub](./lib-pubsub.html)

### GC.getPlayer ()

### GC.buildApp (entry)
1. `entry {}`
2. Return: `{}` ---Returns `this.app`.

This is where the user's `shared.Application` is
instantiated and its entry point is called, because it
inherits from `client/Application`, which runs the `entry`
after all the preloading. In `launchClient.js` this is
called as `GC.buildApp('launchUI')`.

### GC.isServer ()
1. Return: `{boolean}` ---Hardcoded to return `false` ??

### GC.isClient ()
1. Return: `{boolean}` ---Hardcoded to return `true` ??

### GC.isConnected ()
1. Return `{}`

### GC.getConnection ()
1. Return `{}`

### GC.startMultiplayerGame (opts, callback)
1. `opts {object}`
2. `callback {function(err, reponse}` ---Not sure if the callback is always passed these.

Async call.
 
### GC.clearServerTimeout (id, callback)
1. `id {}`
2. `callback {function}`

### GC.clearServerTimeout (id, callback)
1. `id {}`
2. `callback {function}`

### GC.startNativeUpsell ()

### GC.cancelNativeUpsell ()

### GC.startCrossPromo (appID)

### GC.openAppStore ()

### GC.hidePreloader ()

### GC.getPushNotifications ()

### GC.Application

### GC.ui
1. `{UI}`

### GC.overlay
`{OverlayAPI}`

### GC.isOnline
`{boolean}`

### GC.facebookApp
`{object|undefined}`

### GC.isNative
`{boolean}`

### GC.isIOS
`{boolean|undefined}` ---Depends on `isNative` being `true`.

### GC.isAndroid
`{boolean|undefined}` ---Depends on `isNative` being `true`.

### GC.isMobileBrowser
`{boolean|undefined}`

### GC.isUIWebView

### GC.isDesktop
`{boolean|undefined}`

### GC.isFacebook
`{boolean|undefined}`

### Event: \'Show\'

### Event: \'AfterShow\'

### Event: \'Hide\'

### Event: \'AfterHide\'

### Event: \'OnlineStateChanged\'

### Event: \'PushNotificationReceived\'

First attempts to publish
`'__internal_push_notification'`,then if that isn't handled,
published this one.
