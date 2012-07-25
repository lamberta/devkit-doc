# device

On an undefined platform, `device` is `{isUnknown: true}`.

### device.registerDevice (name, path)
1. `name {string}`
2. `path {string}`

Registers a new backend environment.

### device.get (module)
1. `name {string}` ---Name of the module to import.
2.  Return: `{Class} module`

Dynamically import a platform-specific module.

### device.hideAddressBar ()

Seems to be empty.
 
### device.getDimensions (isLandscape)
1. `isLandscape {boolean} = false` ---Switch the dimensions if landscape.
2. Return: `{object}` ---Returns object with properties `width` and `height`.

Returns the device's screen dimensions.

### device.name
1. `{string}`

Runtime name. Defaults to `'tealeaf'` or `'browser'`.

### device.width
1. `{number}`

Width of the device's screen.

### device.height
1. `{number}`

Height of the device's screen.

### device.isMobile
1. `{boolean}`

If the device is a mobile device.

### device.screen
1. `{event.PubSub}`
	* `width {number}`
	* `height {number}`
	* `orientation {string}`
	* `defaultOrientation {string}` ---This doesn't seem to be set all the time.
	* `isPortrait {boolean}`
	* `isLandscape {boolean}`
	* `browserChrome {object}` ---Not always there.
		* `portrait {object}` ---`{top: 0, bottom: 0}`
		* `landscape {object}` ---`{top: 0, bottom: 0}`

Information on the device's screen.

### device.devicePixelRatio
1. `{number} = 1`

The device's pixel ratio.

### device.defaultFontFamily
1. `{string}`

Defaults to `'Helvetica'`

### device.events
1. `{object}`
	* `start {string} = 'touchstart'|'mousedown'`
	* `move {string} = 'touchmove'|'mousemove'`
	* `end {string} 'touchend'|'mouseup'`

Mapping between timestep's abstracted events and the device's events.

### device.onReady
1. `{event.Callback}`

### device.useDOM
1. `{boolean} = false`

Whether or not to use the DOM backend.

### device.isIOS
1. `{boolean}`

These properties are dependant upon the user-agent, may, or
may not, be there.

### device.isAndroid
1. `{boolean}`

### device.isSafari
1. `{boolean}`

### device.isMobileBrowser
1. `{boolean}`

### device.isUIWebView
1. `{boolean}`

### device.canResize
1. `{boolean}`
