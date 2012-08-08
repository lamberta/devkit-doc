# GC

Inherits
:    1. [shared.Common](#shared.common) ---Only sets `this.env` to the name of the environment (`from jsio.__jsio.__env.name`).
     2. [lib.PubSub](./lib-pubsub.html)

### GC.isServer ()
1. Return: `{boolean}`

Check if this application is running as the server.

### GC.isClient ()
1. Return: `{boolean}`

Check if this application is running as the client.

### GC.isConnected ()
1. Return `{boolean}`

Check if the appliaction is onlne.

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

### GC.getPushNotifications ()
1. Return: `{Array}`

Returns the list of pending push notifications.

### GC.Application
1. `{Application}`

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

### Events

#### \'Show\'

Published when the app is shown/resumed.

#### \'AfterShow\'

Published after the app is shown/resumed.

#### \'Hide\'

Published when the app is hidden/paused.

#### \'AfterHide\'

Published after the app is hidden/paused.

#### \'OnlineStateChanged\'

Published when the online state changes. Passes either `true` or `false` depending on whether the new state is online or offline.

#### \'PushNotificationReceived\'

First attempts to publish
`'__internal_push_notification'`,then if that isn't handled,
published this one.
