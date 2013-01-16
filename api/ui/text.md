# Text

## Class: ui.TextView

Display text on a screen within a `View`.

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.TextView as TextView;
~~~

### new TextView ([options])
1. `options {object}` --- `TextView` specific options, also accepts [`View` options](./ui-view.html#new-view-options).
	* `text {string}` --- The text to display.
	* `size {number} = 12` --- The default font size of the text.
	* `lineHeight {number} = 1.2` --- How tall each line should be when wrap is turned on.
	* `lineWidth {number} = 2` --- How wide each line should be in a wrap is turned on.
	* `fontFamily {string} = device.defaultFontFamily` --- Font family to be used by the text in the text view (ex: "Helvetica")
	* `fontWeight {string} = 'normal'` --- How thick the characters are. Options: `'normal'`, `'bold'`, or a number weight.
	* `color {string} = "#000000"` --- The color of the text.
	* `backgroundColor {string} = null` --- The background color of the text view.
	* `outlineColor {string} = null` --- Color of the outline surrounding the text.  A value of `null` means that an outline will not be present.
	* `shadow {boolean} = false` --- 
	* `shadowColor {string} = null` --- Color of the drop shadow behind the text. A value of `null` means that a shadow will not be present.
	* `verticalPadding {number|array} = 0` --- The amount of vertical padding the text exhibits within the text view.
	* `horizontalPadding {number|array} = 0` --- The amount of horizontal padding the text exhibits within the text view.
	* `verticalAlign: "middle"` --- How the text should be aligned vertically within the text view. Options: `'top'`, `'bottom'`, `'middle'`.
	* `horizontalAlign: "center"` --- How the text should be aligned horizontall within the text view. Options: `'left'`, `'right'`, `'center'`, `'justify'`.
	* `wrap {boolean} = true` --- Whether or not the text should wrap. A description of the rules of wrapping when wrap is turned on can be found below.
	* `autoSize {boolean} = true` --- Fit the text view to text (details below).
	* `autoFontSize {boolean} = true` --- Fit text to the text view (details below).

~~~
var text = new TextView({
  superview: parent,
  x: 25,
  y: 100,
  width: 400,
  text: "Hello, world!",
  size: 24,
  shadowColor: '#999999'
});
~~~

A [complete example](../example/text-randomtextviews/) is available in the `addon-examples` package.  
[Example usage of TextView options](../example/text-randomtextviews/) is also available in the `addon-examples` package.

The `TextView` supports several options for handling how a
text is sized within the view. You can control these options
through the properties `'autoSize'`, `'autoFontSize'` or `'wrap'`.

* `autoFontSize = true`, `wrap = true`, `autoSize = true`:
  Wrap words until the text fits horizontally or the line is
  reduced to a single word. If the widest word does not
  fit, decrease the font size. If the resulting lines exceed
  the height of the widget, then increase the height of the widget.
* `autoFontSize = true`, `wrap = false`, `autoSize = true`:
  Measure the maximum line width and the height of the
  lines, then increase the size of the widget if necessary.
* `autoFontSize = true`, `wrap = true`, `autoSize = false`: Wrap
  words until the text fits horizontally or the line is
  reduced to a single word. If the largest word doesn’t fit,
  then reduce the font size. If the resulting number of
  lines exceeds the widget height then reduce the font size.
* `autoFontSize = true`, `wrap = false`, `autoSize = false`:
  Measure the maximum line width and the height of the lines
  and decrease the size of the font is necessary.
* `autoFontSize = false`, `wrap = true`, `autoSize = true`: Wrap
  words until the text fits horizontally or the line is
  reduced to a single word. If the most wide word does not
  fit then increase the width of the widget. If the
  resulting number of lines exceeds the height of the widget
  the increase the height of the widget.
* `autoFontSize = false`, `wrap = false`, `autoSize = true`:
  Measure the maximum line width and the height of the lines
  and increase the size of the widget if necessary.
* `autoFontSize = false`, `wrap = true`, `autoSize = false`:
  Wrap words until the text fits horizontally or the line is
  reduced to a single word. If the text does not fit then is
  will either overflow or be clipped depending on the clip
  setting of the widget. Whether the overflow is top,
  bottom, left or right depends on the alignment settings.
* `autoFontSize = false`, `wrap = false`, `autoSize = false`:
  If the text does not fit then is will either overflow or
  be clipped depending on the clip setting of the
  widget. Whether the overflow is top, bottom, left or right
  depends on the alignment settings.


### text.setText (text)
1. `text {string}`

Set the display text.  The text view will readjust itself with the current options using the given text.

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


<!--
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

-->

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
