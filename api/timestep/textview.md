# `timestep.TextView` inherits from `timestep.View`

To use: `textview = new TextView(options)`, where `options`
are defined in the `opts` property below.

## Methods

* __setText (text)__ --- Set the display text.

	@param `{string}` text

* __getText__ --- Return the display text.

	@return `{string}`

* __getCharacterWidth (ctx)__

	@param `{CanvasRenderingContext2D}` ctx<br/>
	@return `{number}`

* __getLineWidth (ctx, line)__

	@param `{CanvasRenderingContext2D}` ctx<br/>
	@param `{string}` line
	@return `{number}`

* __updateOpts (opts)__ ---Update text options.

	@param `{object}` opts


## Properties

* __opts__ `{object}` ---Why don't all views have this?

	* `text {string}`: ''
	* `fontSize {number}`: 12
	* `fontFamily {string}`: `timestep.device.defaultFontFamily`
	* `color {string}`: 'black'
	* `backgroundColor {string}`: null
	* `horizontalPadding {number}`: 0
	* `verticalPadding {number}`: 0
	* `lineHeight {number}`: 1.2
	* `textAlign {string}`: 'center' ---Options: 'left', 'right', 'center'
	* `verticalAlign {string}`: 'middle' --Options: 'top', 'bottom', 'middle'
	* `multiline {boolean}`: true
	* `fontWeight {string}`: ''
	* `strokeStyle {}`: null
	* `lineWidth {number}`: 2
	* `shadow {boolean}`: false
	* `shadowColor {string}`: 'black'
