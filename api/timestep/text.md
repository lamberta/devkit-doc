# timestep.text


## Class: timestep.text.TextView

Use this View to display text.

Inherits
:    1. [timestep.View](./timestep-view.html)
     2. [lib.PubSub](./lib-pubsub.html)

### new timestep.TextView ([options])
1. `options {object}`
	* `text {string}`
	* `fontSize {number} = 12`
	* `autoSize {boolean} = true`
	* `fontFamily {string} = timestep.device.defaultFontFamily`
	* `color {string} = 'black'`
	* `backgroundColor {string} = null`
	* `horizontalPadding {number} = 0`
	* `verticalPadding {number} = 0`
	* `lineHeight {number} = 1.2`
	* `textAlign {string} = 'center'` ---Options: `'left'`, `'right'`, `'center'`.
	* `verticalAlign {string} = 'middle'` ---Options: `'top'`, `'bottom'`, `'middle'`.
	* `multiline {boolean} = true`
	* `fontWeight {string}`
	* `strokeStyle {} = null`
	* `lineWidth {number} = 2`
	* `shadow {boolean} = false`
	* `shadowColor {string} = 'black'`

### textview.setText (text)
1. `text {string}`

Set the display text.

### textview.getText ()
1. Return: `{string}`

Return the display text.

### textview.getCharacterWidth (ctx)
1. `ctx {CanvasRenderingContext2D}`
2. Return: `{number}`

### textview.getLineWidth (ctx, line)
1. `ctx {CanvasRenderingContext2D}`
2. `line {string}`
3. `{number}`

### textview.updateOpts (opts)
1. `opts {object}`

Update text options.


## Class: timestep.text.TextInputView

Inherits
:    1. [timestep.text.TextView](./timestep-text-textview.html)
     2. [timestep.View](./timestep-view.html)
     3. [lib.PubSub](./lib-pubsub.html)

### new timestep.text.TextInputView ([options])
1. `options {object}`
	* `prompt {text}`


## text.parseFont (font)
1. `font {string}`
2. Return: `{Font}` ---From resources.

Not implemented. This function was in the Font.js file, but
should be moved into this namespace, which now acts as a
util file for text.


### Event: \'Change\', callback (text)
1. `text {string}`

Called when the text value changes.

### Event: \'InputSelect\', callback ()

Called when TextInputView has been selected.


## Class: Font

This class is not instaniated by the developer, but returned
by `text.parseFont`.

### font.getName ()
1. Return: `{string}`

### font.getSize ()
1. Return: `{number}`

### font.getWeight ()
1. Return: `{number}`


## Example: Using a TextView

~~~
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
