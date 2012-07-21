# text

## Class: ui.text.TextView

Use this View to display text.

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.PubSub](./event.html#class-event.pubsub)

~~~
import ui.text.TextView as TextView;
~~~

### new TextView ([options])
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

~~~
var text = new TextView({
  superview: parent,
  x: 25,
  y: 100,
  width: 400,
  text: "Hello, world!",
    fontSize: 24,
    shadow: true,
    shadowColor: '#999999'
});
~~~

### text.setText (text)
1. `text {string}`

Set the display text.

### text.getText ()
1. Return: `{string}`

Return the display text.

### text.getCharacterWidth (ctx)
1. `ctx {CanvasRenderingContext2D}`
2. Return: `{number}`

### text.getLineWidth (ctx, line)
1. `ctx {CanvasRenderingContext2D}`
2. `line {string}`
3. `{number}`

### text.updateOpts (opts)
1. `opts {object}`

Update text options.


## Class: ui.text.TextInputView

Inherits
:    1. [ui.text.TextView](./ui-text.html#class-timestep.text.textview)
     2. [ui.View](./ui-view.html)
	 3. [event.PubSub](./event.html#class-event.pubsub)

~~~
import ui.text.TextInputView as TextInputView;
~~~

### new TextInputView ([options])
1. `options {object}`
	* `prompt {text}`

~~~
var text = new TextInputView();
~~~

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


## Class: ui.resource.Font

~~~
import ui.resource.Font as Font;
~~~

### new Font ([options])
1. `options {object}`
	* `name {string} = device.defaultFamilyName`
	* `size {number} = 20`
	* `unit {string} = 'px'`
	* `style {string}`
	* `weight {string}`

~~~
var font = new Font();
~~~

### new Font (fontName)
1. `fontName {string}`

### font.getName ()
1. Return: `{string}`

### font.getSize ()
1. Return: `{number}`

### font.getWeight ()
1. Reurn: `{string}`

### Class method: Font.parse (fontName)
1. `fontName {string}`
2. `Return: {Font}`



## Example: Using a TextView

~~~
m4_include(./examples/api/textview.js)
~~~
