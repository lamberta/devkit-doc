# ui.widget.ButtonView

## Class: ui.widget.ButtonView

Inherits from:
:    1. [ui.ImageView](./ui-images.html#class-ui.imageview)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.ButtonView as ButtonView;
~~~

### new ButtonView([options])
1. `options {object}`
	* `onClick {function}`
	* `clickOnce {boolean} = false`
	* `pressedOffsetX {number} = 0`
	* `pressedOffsetY {number} = 0`
	* `image {Image}`
	* `imagePressed = {Image}`
	* `soundOnStart {function}`
	* `soundOnEnd {function}`

### buttonview.pressed
1. `{boolean} = false`

### buttonview.hasBeenClicked
1. `{boolean} = false`


### Events

#### \'InputSelect\', callback (event, srcPoint)
1. `event {InputEvent}`
2. `srcPoint {Point}`

Emitted when the button is pressed.

#### \'InputOver\', callback (over, overCount, atTarget)
1. `over {object}`
2. `overCount {number}`
3. `atTarget {boolean}`

Emitted when the input is pressed and is moved over the
button. Also emitted on `'InputSelect'`.

#### \'InputOut\', callback (over, overCount)
1. `over {object}`
2. `overCount {number}`

Emitted when the input is pressed and is moved off of the
button. Also emitted on `'InputSelect'`.
