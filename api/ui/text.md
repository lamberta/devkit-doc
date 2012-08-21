# Text

## Class: ui.TextView

Use this View to display text.

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextView as TextView;
~~~

### new TextView ([options])
1. `options {object}`
	* `text {string}`
	* `fontSize {number} = 12`
	* `autoSize {boolean} = true`
	* `fontFamily {string} = device.defaultFontFamily`
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


## Class: ui.TextInputView

Inherits
:    1. [ui.TextView](./ui-text.html#class-ui.textview)
     2. [ui.View](./ui-view.html)
	 3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextInputView as TextInputView;
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


## Example: Many Random TextViews

Here we'll create a header using some of the `TextView`
positional options, then add many, many random letters
scattered around the screen, each its own `TextView`.

~~~
m4_include(./examples/api/example-textview.js)
~~~

Place this in the `Application.js` file of your project and
you should see something like this:

<img src="./assets/ui-textview/example-textview.png" alt="many, many textviews screenshot" class="screenshot">

It should be noted that this is a static scene for the purpose of
demonstrating `TextView` creation. If you tried to animate
this many views at once on an actual mobile device, you may
run into performance issues.
