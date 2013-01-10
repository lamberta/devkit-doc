# ui.widget.ButtonView

## Class: ui.widget.ButtonView

Inherits from:
:    1. [ui.ImageScaleView](./ui-images.html#class-ui.imagescaleview)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.ButtonView as ButtonView;
~~~

### new ButtonView([options])
1. `options {object}`
	* `onClick {function}` ---Shortcut way of assigning a callback to a click.
	* `clickOnce {boolean} = false` ---When true, button will enter `DISABLED` state after a click.
	* `toggleSelected {boolean} = false` ---When true, button will toggle inbetween `SELECTED` and `UNSELECT` state on every click.
	* `images {Object}` ---Change the image to the specified image upon entering a state. The key referes to the state and the value is either `Image` or a `string` image path.
	* `sounds {Object}` ---Run a sound when the button enters a state.

Change images and play a sound when the button toggles selected state.
~~~
import ui.widget.ButtonView as ButtonView;

new ButtonView({
	superview: parent,
	width: 200,
	height: 100,
	x: 0,
	y: 0,

	images: {
		"selected": "resources/selected.png",
		"unselect": "resources/unselect.png"
	},

	sounds: {
		"down": "resources/ting.mp3"
	}
});
~~~

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

#### \'up\', callback ()

Emitted when the button state is `up`.

#### \'down\', callback ()

Emitted when the button state is `down`.

#### \'disabled\', callback ()

Emitted when the button state becomes `disabled`.

#### \'selected\', callback ()

Emitted when the button selected state becomes `selected`.

#### \'unselect\', callback ()

Emitted when the button selected state becomes `unselect`.
