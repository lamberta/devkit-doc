# Class: ui.TextView

Inherits from
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

Display text on a screen within a `View`.

## Examples

* [TextViews Options](../example/text-textviews/)
* [Lots of TextViews](../example/text-textviews-random/)
* [TextView Clock](../example/text-textviewsclock/)

## Methods

### new TextView ([options])

Parameters
:    1. `options {object}` ---`TextView` specific options, also accepts [`View` options](./ui-view.html#new-view-options).
	     * `text {string}` ---The text to display.
		 * `size {number} = 12` ---The default font size of the text.
		 * `lineHeight {number} = 1.2` ---How tall each line should be when wrap is turned on.
		 * `fontFamily {string} = device.defaultFontFamily` ---Font family to be used by the text in the text view (ex: "Helvetica")
		 * `fontWeight {string} = 'normal'` ---How thick the characters are. Options: `'normal'`, `'bold'`, or a number weight.
		 * `color {string} = "blue"` ---The color of the text.  See below for color string format.
		 * `backgroundColor {string} = "blue"` ---The background color of the text view.  See below for color string format.
		 * `outlineColor {string} = "blue"` ---Color of the outline surrounding the text.  See below for color string format.
		 * `shadowColor {string} = "blue"` ---Color of the drop shadow behind the text.  See below for color string format.
		 * `strokeWidth {number} = 2` ---Width of text stroke (outline or shadow).
		 * `verticalPadding {number|array} = 0` ---The amount of vertical padding the text exhibits within the text view.
		 * `horizontalPadding {number|array} = 0` ---The amount of horizontal padding the text exhibits within the text view.
		 * `verticalAlign: "middle"` ---How the text should be aligned vertically within the text view. Options: `'top'`, `'bottom'`, `'middle'`.
		 * `horizontalAlign: "center"` ---How the text should be aligned horizontall within the text view. Options: `'left'`, `'right'`, `'center'`, `'justify'`.
		 * `wrap {boolean} = true` ---Whether or not the text should wrap. A description of the rules of wrapping when wrap is turned on can be found below.
		 * `autoSize {boolean} = true` ---Fit the text view to text (details below).
		 * `autoFontSize {boolean} = true` ---Fit text to the text view (details below).

Colors can be one of the following values:
		 * `null` or `undefined` : No color (transparent).
		 * "blue" : Standard CSS color names.  See [this website](http://www.w3schools.com/cssref/css_colornames.asp) for a complete list.
		 * "#330033" : Standard HTML Hexadecimal RGB code.  See [this website](http://www.w3schools.com/cssref/css_colors.asp) for a detailed description of this format.
		 * "rgb(255,0,0)" : Standard HTML RGB code.  See [this website](http://www.w3schools.com/cssref/css_colors.asp) for a detailed description of this format.
		 * "rgb(255,0,0,0.8)" : Standard HTML RGB code with alpha value between 0 and 1 in the final parameter.

~~~
import ui.TextView as TextView;

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

## Sizing

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


### setText (text)

Parameters
:    1. `text {string}`

Set the display text. The text view will readjust itself
with the current options using the given text.

### getText ()

Returns
:    1. `{string}`

Return the display text.

### updateOpts (options)

Parameters
:    1. `options {object}`

Update text options.


# Class: ui.TextPromptView

Inherits from
:    1. [ui.TextView](./ui-text.html#class-ui.textview)
     2. [ui.View](./ui-view.html)
	 3. [event.Emitter](./event.html#class-event.emitter)

This class presents the user a prompt for entering text
input. The `TextPromptView` consists of two elements, the
view part which is visible and a dialog. When the view is
clicked a prompt dialog is shown. If the user enters or
changes text and presses ok then the text of the view will
be updated.

## Examples

* [Using a Text Prompt](../example/text-prompt/)

## Methods

### new TextPromptView ([options])

Parameters
:    1. `options {object}`
	     * `prompt {text} = ''` ---The text message shown on the dialog.
		 * `autoShowKeyboard {boolean} = false` ---Show the keyboard when the dailog is shown on native.

~~~
import ui.TextPromptView as TextPromptView;

var textprompt = new TextPromptView({
  prompt: "Please enter your name"
});
~~~

### setPrompt (prompt)

Parameters
:    1. `prompt {string}` ---Set the text to display in the prompt dialog.

### showPrompt ()

Present the input dialog to the user.


## Events

### \'Change\', callback (value)

Parameters
:    1. `value {string}` ---The updated value of the `TextPromptView`.


The `Change` event is published when the text in the dialog
is changed and ok is pressed.

### \'Cancel\', callback ()

The `Cancel` event is published when the cancel button in
the dialog is pressed.


<!--
# Class: ui.TextInputView

Inherits from
:    1. [ui.View](./ui-view.html)
	 2. [event.Emitter](./event.html#class-event.emitter)

Enter text input inline. *This is not working.*

## Methods

### new TextInputView ([options])

Parameters
:    1. `options {object`

~~~
import ui.TextInputView as TextInputView;
~~~
-->


# Class: ui.resource.Font

Basic font representation class.

## Methods

### new Font (font)

Parameters
:    1. `font {string}`

Creates a font from a standard CSS font string.

### new Font ([options])

Parameters
:    1. `options {object}`
	     * `name {string} = device.defaultFamilyName`
		 * `size {number} = 20`
		 * `unit {string} = 'px'`
		 * `style {string}`
		 * `weight {string}`

Creates a font from options.

~~~
import ui.resource.Font as Font;

var font = new Font("16px Helvetica");
~~~

### getName ()

Returns
:    1. `{string}`

Returns the font family.

### getSize ()

Returns
:    1. `{number}`

Returns the font size in pixels.

### getWeight ()

Returns
:    1. `{string}` ----Returns the font weight.

## Class Methods

### Font.parse (font)

Parameters
:    1. `font {string}`

Returns
:    1. `{Font}`

Creates a Font from a font string.
