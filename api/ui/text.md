# ui.text

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

Returns the width of a single character.

### text.getLineWidth (ctx, line)
1. `ctx {CanvasRenderingContext2D}`
2. `line {string}`
3. Return: `{number}`

Returns the width of the `line`.

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

### Events

#### \'Change\', callback (text)
1. `text {string}`

Called when the text value changes.

#### \'InputSelect\', callback ()

Called when TextInputView has been selected.


## Class: ui.resource.Font

Basic font representation class.

~~~
import ui.resource.Font as Font;
~~~

### new Font (font)
1. `font {string}`

Creates a font from a standard CSS font string.

### new Font (opts)
1. `opts {object}`
	* `name {string} = device.defaultFamilyName`
	* `size {number} = 20`
	* `unit {string} = 'px'`
	* `style {string}`
	* `weight {string}`

Creates a font from options.

~~~
var font = new Font("16px Helvetica");
~~~

### font.getName ()
1. Return: `{string}`

Returns the font family.

### font.getSize ()
1. Return: `{number}`

Returns the font size in pixels.

### font.getWeight ()
1. Reurn: `{string}`

Returns the font weight.

### Class method: Font.parse (font)
1. `font {string}`
2. `Return: {Font}`

Creates a Font from a font string.


## Example: Using a TextView

~~~
m4_include(./examples/api/textview.js)
~~~
