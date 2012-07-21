# timestep.device

On an undefined platform, `timestep.device` is `{isUnknown: true}`.

### device.registerDevice (name, path)
1. `name {string}`
2. `path {string}`

### device.get (module)
1. `name {string}` ---Name of the module to import.
2.  Return: `{Class} module`

Dynamically use jsio to import a platform-specific module.

### device.importUI (name)
1. `name {string}` ---Name of the module to import.
2. Return: `{Class}` ---The module.

Internal? Dynamically use jsio to import a renderer-specific
module (`timestep.canvas` or `timestep.dom`).

### device.hideAddressBar ()

Seems to be empty.
 
### device.getDimensions (isLandscape)
1. `isLandscape {boolean} = false` ---Switch the dimensions if landscape.
2. Return: `{object}` ---Returns object with properties `width` and `height`.


### device.name
1. `{string}`

Defaults to `'tealeaf'` or `'browser'`.

### device.width
1. `{number}`

Width of the device.

### device.height
1. `{number}`

Height of the device.

### device.isMobile
1. `{boolean}`

If the device is a mobile device.

### device.screen
1. `{lib.PubSub}`
	* `width {number}`
	* `height {number}`
	* `orientation {string}`
	* `defaultOrientation {string}` ---This doesn't seem to be set all the time.
	* `isPortrait {boolean}`
	* `isLandscape {boolean}`
	* `browserChrome {object}` ---Not always there.
		* `portrait {object}` ---`{top: 0, bottom: 0}`
		* `landscape {object}` ---`{top: 0, bottom: 0}`

### device.devicePixelRatio
1. `{number}`

### device.defaultFontFamily
1. `{string}`

Defaults to `'Helvetica'`

### device.events
1. `{object}`
	* `start {string}` ---Defaults to `'touchstart'` or `'mousedown'`
	* `move {string}` ---Defaults to `'touchmove'` or `'mousemove'`
	* `end {string}` ---Defaults to `'touchend'` or `'mouseup'`

### device.onReady
1. `{lib.Callback}`

### device.useDOM
1. `{boolean} = false`

Internal flag to use DOM.

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
