# device

Information and settings about the device running the application.

~~~
import device;
~~~

If the device is unknown, `device` is set to `{isUnknown: true}`.

### device.name
1. `{string}`

The name of the runtime platform, e.g. `'tealeaf'` or `'browser'`.

### device.defaultFontFamily
1. `{string} = 'Helvetica'`

The default font used by the device.

### device.width
1. `{number}`

The screen width of the device.

### device.height
1. `{number}`

The screen height of the device.

### device.getDimensions (isLandscape)
1. `isLandscape {boolean} = false` ---Return size in landscape-mode.
2. Return: `{object}`
	* `width {number}`
	* `height {number}`

Returns the screen dimensions of the device. The default
size is given in portrait-mode, but it can be returned in
landscape-mode by passing a `true` argument.

### device.screen
1. `{event.PubSub}`
	* `width {number}`
	* `height {number}`
	* `orientation {string}`
	* `defaultOrientation {string}` ---Defaults to `'portrait'` or `'landscape'`.
	* `isPortrait {boolean}`
	* `isLandscape {boolean}`
	* `browserChrome {object}`
		* `portrait {object} = {top: 0, bottom: 0}`
		* `landscape {object} = {top: 0, bottom: 0}`

Information about the device's screen size and
orientation. Depending on the device, `defaultOrientation`
and `browserChrome` may not be available.

### device.canResize
1. `{boolean}`

Test if the device's screen is able to resize.

### device.pixelRatio
1. `{number} = 1`

The pixel ratio of the device.

### device.isMobile
1. `{boolean}`

Test if the device is a mobile browser.

### device.isIOS
1. `{boolean}`

Property is `true` when run on iOS, otherwise `undefined`.

### device.isAndroid
1. `{boolean}`

Property is `true` when run on Android, otherwise `undefined`.

### device.isSafari
1. `{boolean}`

Property is `true` when run in a Safari web browser, otherwise `undefined`.

### device.isMobileBrowser
1. `{boolean}`

Property is `true` when run in a mobile web browser, otherwise `undefined`.

### device.isUIWebView
1. `{boolean}`

Property is `true` when run in a WebView, otherwise `undefined`.

### device.onReady
1. `{event.Callback}`

Functions added to this `event.Callback` are executed when the device is ready.

### device.useDOM
1. `{boolean} = false`

Set the rendering engine to use the HTML DOM backend instead of
the default HTML Canvas element.

### device.events
1. `{object}`
	* `start {string} = 'touchstart'|'mousedown'`
	* `move {string} = 'touchmove'|'mousemove'`
	* `end {string} 'touchend'|'mouseup'`

A collection events supported by the device. Since it may be
run in a web browser or touch device, this provides a
convenient mapping of both types if input.
