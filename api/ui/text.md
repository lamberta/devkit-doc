# Text

## Class: ui.TextView

Use this View to display text.

The TextView supports several ways to handle the sizing of either the view or the text. 
The properties to control this are `'autoSize'`, `'autoFontSize'` or `'wrap'`.

* autoFontSize is on, wrap is on, autoSize is on:<br>
	Wrap words until the text fits horizontally or the line is reduced to a single word. If the most wide word does not fit then decrease the font size. If the resulting number of lines exceeds the height of the widget the increase the height of the widget.
* autoFontSize is on, wrap is off, autoSize is on:<br>
	Measure the maximum line width and the height of the lines and increase the size of the widget is necessary.
* autoFontSize is on, wrap is on, autoSize is off:<br>
	Wrap words until the text fits horizontally or the line is reduced to a single word. If the largest word doesn’t fit then reduce the font size. If the resulting number of lines exceeds the widget height then reduce the font size.
* autoFontSize is on, wrap is off, autoSize is off:<br>
	Measure the maximum line width and the height of the lines and decrease the size of the font is necessary.
* autoFontSize is off, wrap is on, autoSize is on:<br>
	Wrap words until the text fits horizontally or the line is reduced to a single word. If the most wide word does not fit then increase the width of the widget. If the resulting number of lines exceeds the height of the widget the increase the height of the widget.
* autoFontSize is off, wrap is off, autoSize is on:<br>
	Measure the maximum line width and the height of the lines and increase the size of the widget is necessary.
* autoFontSize is off, wrap is on, autoSize is off:<br>
	Wrap words until the text fits horizontally or the line is reduced to a single word. If the text does not fit then is will either overflow or be clipped depending on the clip setting of the widget. Whether the overflow is top, bottom, left or right depends on the alignment settings.
* autoFontSize is off, wrap is off, autoSize is off:<br>
	If the text does not fit then is will either overflow or be clipped depending on the clip setting of the widget. Whether the overflow is top, bottom, left or right depends on the alignment settings.

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextView as TextView;
~~~

### new TextView ([options])
1. `options {object}` ---`TextView` specific options, also accepts [`View` options](./ui-view.html#new-view-options).
	* `text {string}`
	* `wrap {boolean} = true`
	* `autoSize {boolean} true`
	* `autoFontSize {boolean} true`
	* `verticalPadding {number|array} = 0`
	* `horizontalPadding {number|array} = 0`
	* `lineHeight {number} - 1.2`
	* `color {string} = "#000000"`
	* `fontFamily {string} = device.defaultFontFamily`
	* `fontWeight {string} = ""`
	* `size {number} = 12`
	* `lineWidth {number} = 2`
	* `outlineColor {string} = null`
	* `shadowColor {string} = null`
	* `verticalAlign: "middle"` ---Options: `'top'`, `'bottom'`, `'middle'`.
	* `horizontalAlign: "center"` ---Options: `'left'`, `'right'`, `'center'`, `'justify'`.
	* `backgroundColor: null`

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

### text.updateOpts (options)
1. `options {object}`

Update text options.


## Class: ui.TextPromptView

Present the user a prompt for entering text input.

Inherits from:
:    1. [ui.TextView](./ui-text.html#class-ui.textview)
     2. [ui.View](./ui-view.html)
	 3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextPromptView as TextPromptView;
~~~

### new TextPromptView ([options])
1. `options {object}`
	* `prompt {text} = ''`
	* `autoShowKeyboard {boolean} = false`

~~~
var textprompt = new TextPromptView();
~~~

### Events

#### \'Change\', callback (text)
1. `text {string}`

Called when the text value changes.

#### \'InputSelect\', callback ()

Called when the `TextPromptView` is selected.



## Class: ui.TextInputView

Enter text input inline. *This is not working.*

Inherits from:
:    1. [ui.View](./ui-view.html)
	 2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextInputView as TextInputView;
~~~

### new TextInputView ([options])
1. `options {object`



## Class: ui.resource.Font

Basic font representation class.

~~~
import ui.resource.Font as Font;
~~~

### new Font (font)
1. `font {string}`

Creates a font from a standard CSS font string.

### new Font ([options])
1. `options {object}`
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
