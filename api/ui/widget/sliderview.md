# Class: ui.widget.SliderView

Inherits from
:    1. [ui.ImageScaleView](./)

The slider is an input element the select a value. The orientation of the silder can be horizontal or vertical.
If the option `horizontal` is set then this value is used independent of the size of the view, if not then 
the slide direction is based on the relation between the width and the height. If the width is larger than the
height then the direction is horizontal else the direction is vertical.

When the `track` option contains the `activeColor` property then a color is applied to the background else
the background is styled based on image properties (which should be passed as and option).

## Examples

* [SliderView](../example/views-basic/)

## Methods

### new SliderView ([options])

Parameters
:    1. `options {object}`
       * `minValue {number} = 0` ---The minimum value.
       * `maxValue {number} = 100` ---The maximum value.
       * `thumbSize {number} = "auto"` ---The size of the thumb, if `auto` then it will be based on the size of the view.
       * `active {boolean} = true` ---Is the view active?
       * `increment {number} = false` ---If increment is a value then an integer diviseble by the increment will be returned.
       * `track {Object}` ---Information about the styling of the track, equal to `ImageScaleView` options.
		 * `active {string|Image}` ---The active background image or an URL to an active background image.
		 * `inactive {string|Image}` ---The inactive background image or an URL to an inactive background image.
		 * `activeColor {string}` ---The color of the track.
		 * `inactiveColor {string}` ---The color of the track if the view is not active.
       * `thumb {Object}` ---Information about the styling of the thumb, equalt to `ImageScaleView` options.
		 ----
		 * `active {string|Image}` ---The active background image or an URL to an active background image.
		 * `pressed {string|Image}` ---The pressed background image or an URL to an pressed background image.
		 * `inactive {string|Image}` ---The inactive background image or an URL to an inactive background image.
		 * `activeColor {string}` ---The color of the track.
		 * `pressedColor {string}` ---The color of the track when pressed.
		 * `inactiveColor {string}` ---The color of the track if the view is not active.

The constructor used to create an instance of a `ui.widget.SliderView`
object. In addition to the options listed here,
[style definition properties](#styles) can also be
passed in this object.

~~~
import ui.widget.SliderView as SliderView;

var sliderView = new SliderView({
  superview: parent,
  x: 50,
  y: 50,
  width: 100,
  height: 30,
  track: {
    activeColor: '#008800',
    inactiveColor: '#E0E0E0'
  },
  thumb: {
    activeColor: '#00AA00',
    pressedColor: '#990000',
    inactiveColor: '#008800'
  }
});
~~~

### updateOpts ([options])

Parameters
:    1. `options {object}` ---The options object is the same as defined for the constructor.

Returns
:    1. `{object}` ---Returns the options object.

Update the properties and styles of a view.

### getValue ()

Returns
:    1. `{number}` ---Return the value

Get the value, if the increment is `false` then the value can be a floating point value else 
it's an integer diviseble by the increment.

### setIncrement (increment)

Parameters
:    1. `increment {number}`

Set the increment, if the increment is `false` then no increment value is applied.

### setMinValue (minValue)

Parameters
:    1. `minValue {number}`

Set the minimum value, this value should be lower than the maximum value.

### setMaxValue (maxValue)

Parameters
:    1. `maxValue {number}`

Set the maximum value, this value should be higher than the minimum value.

### setThumbSize (thumbSize)

Parameters
:    1. `thumbSize {number}`

Set the thumb size, the default is based on the size of the view.

### setValue (value)

Parameters
:    1. `value {number}`

Set the value, the value is clamped on the set minimum and maximum value.

### \'Change\', callback (value)

Parameters
:    1. `value {Number}`

Fired when the slider is dragged, the minimum or maximum value changed or the increment changed.
When the increment is set then the value is an integer diviseble by the increment.

~~~
view.on('InputStart', function (event, point) {
  console.log("This view had touch begin on it at: " + point.x + "," + point.y);
});
~~~
