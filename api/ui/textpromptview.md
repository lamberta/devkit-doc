# ui.TextPromptView

## Class: ui.TextPromptView

[event.Emitter](./event.html#class-event.emitter)<br>
&nbsp;&nbsp;&nbsp;&nbsp;↪ [ui.View](./ui-view.html)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↪ [ui.ScrollView](./ui--textview.html)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↪ **ui.TextPromptView**

#### Overview

The `TextPromptView` consists of two elements, the view part which is visible and a dialog. When
the view is clicked a prompt dialog is shown. If the user enters or changes text and presses ok then
the text of the view will be updated.

## API

### new TextPromptView([opts])

* `opts {object}`

  * `prompt {string} = ""` ---the text message shown on the dialog
	* `autoShowKeyboard {boolean} = false` ---show the keyboard when the dailog is shown on native

~~~
var textPromptView = new TextPromptView({});
~~~

A [complete example](../example/text-prompt/) is available in the `addon-examples` package.

### textPromptView.setPrompt(prompt)

`prompt {string}` --- Set the text displayed in the dialog.

### textPromptView.showPrompt()

Show the input dialog.

### Events

#### \'Change\', callback(value)

* `value {string}` --- the new value

The `Change` event is published when the text in the dialog is changed and ok is pressed.

#### \'Cancel\', callback()

The `Cancel` event is published when the cancel button in the dialog is pressed.
