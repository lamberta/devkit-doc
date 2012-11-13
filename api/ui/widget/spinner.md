# ui.widget.Spinner

## Class: ui.widget.Spinner

Display an animated spinner. Great for showing that the
application is not broke (yet).

Inherits
:    1. ui.widget.UIView
     2. [ui.View](./ui-view.html)
     3. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.widget.Spinner as Spinner;
~~~

### new Spinner ([options])
1. `options {object}`
	* `cycles {number} = 0.5` ---Optional.
	* `radius {number} = 10` ---Optional.
	* `spokes {number} = 20` ---Optional.
	* `thickness {number} = 2` ---Optional.
	* `trail {number} = 10` ---Optional.
	* `color {color} = '#ffffff` ---Optional. Color of the spinner lines.
	* `backgroundColor {color} = ''rgba(0, 0, 0, 0.5)''` ---Optional. Background color of spinner.

~~~
var spinner = new Spinner({
  color: '#0000ff'
});
~~~
