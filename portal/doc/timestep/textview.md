# `timestep.TextView`

## Inheritence

1. [timestep.View](./timestep-view.html)
2. [lib.PubSub](./lib-pubsub.html)

## Options

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


## Methods

* __setText (text)__ --- Set the display text.
	* @param `{string}` text

* __getText__ --- Return the display text.
	* @return `{string}`

* __getCharacterWidth (ctx)__
	* @param `{CanvasRenderingContext2D}` ctx
	* @return `{number}`

* __getLineWidth (ctx, line)__
	* @param `{CanvasRenderingContext2D}` ctx
	* @param `{string}` line
	* @return `{number}`

* __updateOpts (opts)__ ---Update text options.
	* @param `{object}` opts

## Usage
~~~

"use import";

import timestep.View as View;
import timestep.TextView as TextView;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);

		//show a big heading
		var titleText = new TextView({
			text: "Welcome to the TextView",
			color: "white",
			fontSize: 26, 
			verticalAlign: "top",
			y: 100,
			parent: this
		}); 

		//show a smaller subheading
		var subText = new TextView({
			text: "The best TextView in the depths of Timestep",
			color: "#CCCCCC",
			fontSize: 14, 
			parent: this
		}); 
	}   
});
~~~
