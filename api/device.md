# Device Properties

## Module: device

Information and settings about the device running the application.

~~~
import device;
~~~

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
	* `width {number}` ---The horizontal size of the screen
	* `height {number}` ---The vertical size of the of the screen

Returns the screen dimensions of the device. The default
size is given in portrait-mode, but it can be returned in
landscape-mode by passing a `true` argument.

### device.screen
1. `{event.Emitter}`
	* `width {number}` ---The horizontal size of the screen
	* `height {number}` ---The vertical size of the of the screen
	* `devicePixelRatio {number} = 1` ---The ratio between physical pixels and device-independent pixels (dips) on the device
	* `orientation {string}` ---Value can be `'portrait'` or `'landscape'`
	* `defaultOrientation {string}` ---Defaults to `'portrait'` or `'landscape'`
	* `isPortrait {boolean}` ---`'true'` if in portrait mode
	* `isLandscape {boolean}` ---`'true'` if in landscape mode
	* `browserChrome {object}` ---Information about the size of the addess bar
		* `portrait {object} = {top: 0, bottom: 0}`
		* `landscape {object} = {top: 0, bottom: 0}`

Information about the device's screen size and
orientation. Depending on the device, `defaultOrientation`
and `browserChrome` may not be available.

### device.canResize
1. `{boolean}`

Test if the device's screen is able to resize.

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

### device.isUnknown
1. `{boolean}`

Property is `true` if unable to determine the device,
otherwise `undefined`. When run on an unknown device, there
are no other properties defined beyond this one.

### device.useDOM
1. `{boolean} = false`

Check if the current rendering backend is using the DOM.

### device.setUseDOM (useDOM)
1. `useDOM {boolean}`

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

### device.hideAddressBar ()

If available on the device, hides the address bar. If not
available, this function does nothing.
