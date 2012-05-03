# `timestep.device` is a namespace.

On an undefined platform, `timestep.device` is `{isUnknown: true}`.

## Functions

* __registerDevice (name, path)__

	@param `{string}` name
	@param `{string}` path

* __get (module)__ ---Internal? Dynamically use jsio to import a platform-specific module.

	@param {} module
	@return {}

* __importUI (module)__ ---Internal? Dynamically use jsio to import a platform-specific module.

	@param {} module

* __hideAddressBar__ ---Seems to be empty.

* __getDimensions (isLandscape)__

	@param `{boolean}` isLandscape ---Defaults to `false`.
	@return `{object}` ---Returns object with properties `width` and `height`.

## Properties

* __name__ `{string}` --- Defaults to `'tealeaf'` or `'browser'`.

* __width__ `{number}`

* __height__ `{number}`

* __isMobile__ `{boolean}`

* __screen__ `{lib.PubSub}`: --Contains the following properties:

	* __width__ `{number}`
	
	* __height__ `{number}`
	
	* __orientation__ `{string}`
	
	* __defaultOrientation__ `{string}` --This doesn't seem
      to be set all the time.
	
	* __isPortrait__ `{boolean}`
	
	* __isLandscape__ `{boolean}`
	
	* __browserChrome__ `{object}` ---Not always there, but contains the properties:
 
		* __portrait__ `{object}` --- `{top: 0, bottom: 0}`
		* __landscape__ `{object}` --- `{top: 0, bottom: 0}`

* __devicePixelRatio__ `{number}` ---Probably `1`?

* __defaultFontFamily__ `{string}` ---Defaults to `'Helvetica'`

* __events__ `{object}` --Contains the following properties:

	* __start__ `{string}` ---Defaults to `'touchstart'` or `'mousedown'`
	
	* __move__ `{string}` ---Defaults to `'touchmove'` or `'mousemove'`
	
	* __end__ `{string}` ---Defaults to `'touchend'` or `'mouseup'`

* __onReady__ `{lib.Callback}`

* __useDOM__ `{boolean}` --Defaults to `false`.

### These properties are dependant upon the user-agent, some may be there, some may not.

* __isIOS__ `{boolean}`

* __isAndroid__ `{boolean}`

* __isSafari__ `{boolean}`

* __isMobileBrowser__ `{boolean}`

* __isUIWebView__ `{boolean}`

* __canResize__ `{boolean}`
