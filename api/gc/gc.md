# GC

The singleton that does it all. Defined in `sdk/_api/client/init.js`.
We got here through `desktop.html`, which calls
`runtimeBrowser.launchClient`, which imports `init.js`.

Inherits
:    1. [shared.Common](#shared.common) ---Only sets `this.env` to the name of the environment (`from jsio.__jsio.__env.name`).
     2. [lib.PubSub](./lib-pubsub.html)

### GC.getPlayer ()

Gone?

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

Broken?

### GC.isClient ()
1. Return: `{boolean}` ---Hardcoded to return `true` ??

Broken?

### GC.isConnected ()
1. Return `{boolean}`

Broken.

### GC.getConnection ()
1. Return `{ClientConnection}`

Broken.

### GC.startMultiplayerGame (opts, callback)
1. `opts {object}`
2. `callback {function(err, reponse)}` ---Not sure if the callback is always passed these.

Async call. Broken.
 
### GC.clearServerTimeout (id, callback)
1. `id {string}`
2. `callback {function}`

Tells the server to clear a timeout.

### GC.clearAllServerTimeouts (callback)
1. `callback {function}`

Tells the server to clear all timeouts.

### GC.startNativeUpsell ()

Tracks showing a native upsell.

### GC.cancelNativeUpsell ()

Tracks a native upsell being ignored.

### GC.startCrossPromo (appID)
1. `appID {string}`

Starts a cross promo to the game with `appID`.

### GC.openAppStore ()

Opens the native app store.

### GC.hidePreloader ()

Hides the preloader.

### GC.getPushNotifications ()
1. Return: `{Array}`

Returns the list of any push notifications.

### GC.Application
1. `{Application}`

Reference to [Application](./gc-application.html#class-gc.application).

### GC.ui
1. `{UI}`

UI instance.

### GC.overlay
1. `{OverlayAPI}`

HTML overlay API instance.

### GC.isOnline
1. `{boolean}`

Whether or not we're online.

### GC.isNative
1. `{boolean}`

Whether or not this is a native app.

### GC.isIOS
1. `{boolean|undefined}` ---Depends on `isNative` being `true`.

Whether or not this is an iOS app.

### GC.isAndroid
1. `{boolean|undefined}` ---Depends on `isNative` being `true`.

Whether or not this is an Android app.

### GC.isMobileBrowser
1. `{boolean|undefined}`

Whether or not this is on a mobile browser.

### GC.isUIWebView
1. `{boolean|undefined}`

Whether or not this is in a UIWebView.

### GC.isDesktop
1. `{boolean|undefined}`

Whether or not this is a desktop app.

### GC.isFacebook
1. `{boolean|undefined}`

Whether or not this is a Facebook app.

### Event: \'Show\'

Published when the app is shown/resumed.

### Event: \'AfterShow\'

Published after the app is shown/resumed.

### Event: \'Hide\'

Published when the app is hidden/paused.

### Event: \'AfterHide\'

Published after the app is hidden/paused.

### Event: \'OnlineStateChanged\'

Published when the online state changes. Passes either `true` or `false` depending on whether the new state is online or offline.

### Event: \'PushNotificationReceived\'

First attempts to publish
`'__internal_push_notification'`,then if that isn't handled,
published this one.
