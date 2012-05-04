# `GC`

The singleton that does it all. Defined in `sdk/_api/client/init.js`.
We got here through `desktop.html`, which calls
`runtimeBrowser.launchClient`, which imports `init.js`.


## Inheritence

1. `shared.Common`
2. [lib.PubSub](./lib/pubsub.md)

## Methods

* __log__ ---Deprecated
* __flushLogs__ ---Deprecated
* __error__ ---Deprecated
* __track__ ---Deprecated
* __getPlayer__

* __buildApp (entry)__ ---This is where the user's
  `shared.Application` is instantiated and its entry point
  os called (?). In launchClient.js this is called as `GC.buildApp('launchUI')`.

	@param `{}` entry
	@return `{}` --returns `this.app`

* __isServer__

	@return `{boolean}` ---Hardcoded to return `false` ??

* __isClient__

	@return `{boolean}` ---Hardcoded to return `true` ??

* __isConnected__

	@return `{}`

* __getConnection__

	@return `{}`

* __startMultiplayerGame (opts, cb)__ ---Async call.

	@param `{object}` opts
	@param `{function(err, reponse}` cb ---Not sure if the callback is always passed these.

* __clearServerTimeout (timeoutID, cb)__

	@param `{}` timeoutID
	@param `{function}`  cb

* __clearServerTimeout (timeoutID, cb__

	@param `{}` timeoutID
	@param `{function}`  cb

* __startNativeUpsell__ ---Uses `track`, which I thought was deprecated.

* __cancelNativeUpsell__

* __startCrossPromo (appID)__

* __openAppStore__

* __hidePreloader__

* __getPushNotifications__


## Properties

* __Application__
* __ui__ `{UI}`
* __overlay__ `{OverlayAPI}`
* __invites__ `{Invites}`
* __contacts__ `{Contacts}`
* __user__ `{User}`
* __track__ `{object}` ---From `.tracker`, I think this is deprecated?


* __achievements__
* __gifts__
* __scores__ `{Scores}`
* __feed__ `{Feed}`
* __coins__ `{Coins}`

* __isOnline__ `{boolean}`
* __facebookApp__ `{object|undefined}`

* __isNative__ `{boolean}` ---
* __isIOS__ `{boolean|undefined}` ---Depends on `isNative` being `true`.
* __isAndroid__ `{boolean|undefined}` ---Depends on `isNative` being `true`.
* __isMobileBrowser__ `{boolean|undefined}`
* __isUIWebView__
* __isDesktop__ `{boolean|undefined}`
* __isFacebook__ `{boolean|undefined}`


## Messages

### Publish

* __Show__
* __AfterShow__
* __Hide__
* __AfterHide__
* __OnlineStateChanged__
* __PushNotificationReceived__ ---First attempts to publish `'__internal_push_notification'`,
  then if that isn't handled, published this one.


# Inherits from `shared.Common`

## Properties

* __env__ `{string}` ---Values can be `'server'`, `'browser'`, `'ios'`, or `'android'`.
