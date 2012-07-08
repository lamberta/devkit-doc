# `timestep.TextView`

Use this View to display text.

## Inheritence

1. [timestep.View](./timestep-view.html)
2. [lib.PubSub](./lib-pubsub.html)

## Options

* __text__ `{string} = ''`

* __fontSize__ `{number} = 12`

* __fontFamily__ `{string} = timestep.device.defaultFontFamily`

* __color__ `{string} = 'black'`

* __backgroundColor__ `{string} = null`

* __horizontalPadding__ `{number} = 0`

* __verticalPadding__ `{number} = 0`

* __lineHeight__ `{number} = 1.2`

* __textAlign__ `{string} = 'center'` ---Options: 'left', 'right', 'center'

* __verticalAlign__ `{string} = 'middle'` ---Options: 'top', 'bottom', 'middle'

* __multiline__ `{boolean} = true`

* __fontWeight__ `{string} = ''`

* __strokeStyle__ `{} = null`

* __lineWidth__ `{number} = 2`

* __shadow__ `{boolean} = false`

* __shadowColor__ `{string} = 'black'`

## Methods

* __setText (text)__ --- Set the display text.
	* @param `{string} text`

* __getText__ --- Return the display text.
	* @return `{string}`

* __getCharacterWidth (ctx)__
	* @param `{CanvasRenderingContext2D}` ctx
	* @return `{number}`

* __getLineWidth (ctx, line)__
	* @param `{CanvasRenderingContext2D}` ctx
	* @param `{string} line`
	* @return `{number}`

* __updateOpts (opts)__ ---Update text options.
	* @param `{object} opts`

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
