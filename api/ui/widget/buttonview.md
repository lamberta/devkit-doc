# Class: ui.widget.ButtonView

This class provides a quick and easy way to create Buttons or any other 
widget with button-like states (such as checkboxes, switches or radiobuttons).
You can listen for state changes, automatically swap an image or play a sound
for entering a state.

Inherits from
:    1. [ui.ImageScaleView](./ui-images.html#class-ui.imagescaleview)
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)


## Methods

### new ButtonView([options])

Parameters
:    1. `options {object}`
	     * `onClick {function}` ---Shortcut way of assigning a callback to a click.
		 * `clickOnce {boolean} = false` ---When true, button will enter `DISABLED` state after a click.
		 * `toggleSelected {boolean} = false` ---When true, button will toggle in between `SELECTED` and `UNSELECT` state on every click.
		 * `images {Object}` ---Change the image to the specified image upon entering a state. The key refers to the state and the value is either `Image` or a `string` image path.
		 * `sounds {Object}` ---Run a sound when the button enters a state.

Change images and play a sound when the button toggles selected state.

~~~
import ui.widget.ButtonView as ButtonView;

var buttonview = new ButtonView({
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
  },
  on: {
    "down": function () {
      console.log("This function is called when the button transitions to down!");
    },
    "up": function () {
      console.log("This function is called when the button transitions to up!");
    }
  }
});
~~~

### updateOpts({options})

Parameters
:    1. `options {object}`

Replaces the current options (including `images`, `sounds`
and `on`) with the `options` object passed to this
function. This replaces, and does not merge, the current
options. This is similar to `TextView.updateOpts`. This
means that you may want to `util.merge` the object you pass
in with the current options, like in the example below.

~~~
var buttonview = new ButtonView({
	superview: parent,
	width: 200,
	height: 100,
	x: 0,
	y: 0,
	sounds: {
		"down": "resources/ting.mp3"
	}
});

//now, to change the "down" sound, we must use updateOpts
//however, we wish to keep the other options, so we shall `merge` the objects

buttonView.updateOpts(util.merge(buttonView.opts, {
	sounds: {
		"down": "resources/bang.mp3"
	}
}));
~~~


## Events

### \'InputSelect\', callback (event, srcPoint)

Parameters
:    1. `event {InputEvent}`
	 2. `srcPoint {Point}`

Emitted when the button is pressed.

### \'InputOver\', callback (over, overCount, atTarget)

Parameters
:    1. `over {object}`
	 2. `overCount {number}`
	 3. `atTarget {boolean}`

Emitted when the input is pressed and is moved over the
button. Also emitted on `'InputSelect'`.

### \'InputOut\', callback (over, overCount)

Parameters
:    1. `over {object}`
	 2. `overCount {number}`

Emitted when the input is pressed and is moved off of the
button. Also emitted on `'InputSelect'`.

### \'up\', callback ()

Emitted when the button state is `up`.

### \'down\', callback ()

Emitted when the button state is `down`.

### \'disabled\', callback ()

Emitted when the button state becomes `disabled`.

### \'selected\', callback ()

Emitted when the button selected state becomes `selected`.

### \'unselect\', callback ()

Emitted when the button selected state becomes `unselect`.
