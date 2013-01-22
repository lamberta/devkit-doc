# Class: ui.widget.SliderView

Inherits from
:    1. [ui.ImageScaleView](./)

Basic info

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
       * `track {Object}` ---Information about the styling of the track.
		 * `active {string|Image}` ---The active background image or an URL to an active background image.
		 * `inactive {string|Image}` ---The inactive background image or an URL to an inactive background image.
		 * `activeColor {string}` ---The color of the track.
		 * `inactiveColor {string}` ---The color of the track if the view is not active.
       * `thumb {Object}` ---Information about the styling of the thumb.
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
  id: 'MyCrazyView',
  superview: parent,
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  backgroundColor: '#0000ff'
});
~~~

### updateOpts ([options])

Parameters
:    1. `options {object}` ---The options object is the same as defined for the constructor.

Returns
:    1. `{object}` ---Returns the options object.

Update the properties and styles of a view.

### getApp ()

Returns
:    1. `{ui.Engine}`

Returns the root application for the view, [GC.app.engine](./appengine.html#singleton-gc.app.engine).
This is the top-level node of the scene graph, a [ui.Engine](./appengine.html#class-ui.engine) singleton automatically instantiated by the game engine.

### getSuperview ()

Returns
:    1. `{View}` ---Return the view's parent in the scene graph hierarchy.

### getParents ()

Returns
:    1. `{array}` ---A collection of `View` elements.

Returns an array of all parent ancestors of the current view
to the root of the scene graph.

### getSubviews ()

Returns
:    1. `{array}` ---A collection of `View` elements.

Returns an array containing a reference to all of the view's
children. Since this function has an execution time of *O(n)*,
you should store a reference to the array and then iterate:

### \'Change\', callback (value)

Parameters
:    1. `value {Number}`

Fired on a mousedown / touch occurrence. `event` represents
the InputEvent which occurred from InputStart
occurring. `point` is a point relative to the top-left
corner of the view.

Subscribe to the capture-phase event with `'InputStartCapture'`.  

~~~
view.on('InputStart', function (event, point) {
  console.log("This view had touch begin on it at: " + point.x + "," + point.y);
});
~~~
