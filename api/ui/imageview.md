# ui.ImageView

## Class: ui.ImageView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageView as ImageView;
~~~

### new ImageView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

Create an ImageView.

~~~
var imageview = new ImageView({
  superview: parent,
  image: 'resources/images/example.png',
  width: 100,
  height: 100,
  x: 0,
  y: 0
});
~~~

### imageview.getImage ()
1. Return: `{ui.resource.Image}`

Returns the internal Image.

### imageview.setImage (url [, options])
1. `url {string}`
2. `options {object}` ---Optional.
	* `image {string|ui.resource.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

Set the image for the ImageView.

~~~
imageview.setImage('resources/images/example2.png');
~~~

### imageview.setImage (img [, options])
1. `img {ui.resource.Image}`
2. `options {object}` ---Optional.
	* `image {string|ui.resource.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

Sets the image for the ImageView.

~~~
import ui.resource.Image as Image;

var image = new Image({url: 'resources/images/example2.png'};
imageview.setImage(image);
~~~

### Callback handler: imageview.doOnLoad (callback, [args ...])
1. `callback {function}`
2. `args {...*}`
1. Return: `{this}`

Registers a callback to be run once the image has fully loaded, optionally with args (done with event.Callback).

### imageview.autoSize ()

Automatically resize the view to the size of the image.

### imageview.getOrigWidth ()
1. Return `{number}`

Returns the image width.

### imageview.getOrigHeight ()
1. Return: `{number}`

Returns the image height.


## Class: ui.ImageScaleView

Inherits from:
:    1. [ui.widget.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageScaleView as ImageScaleView;
~~~

### new ImageScaleView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false`
	* `autoSize {boolean} = false`
	* `scaleMethod {string} = 'stretch'` ---Valid options are `'none'`, `'stretch'`, `'cover'`, and `'9slice'`.
	* `renderCenter {boolean} = true`
	* `clip {boolean} = true`
	* `debug {boolean} = false` ---Display 9-slice scaling measurements.
	* `sourceSlices {object}` ---9-slice source slices.
		* `horizontal {object}`
			* `left {number}`
			* `center {number}`
			* `right {number}`
		* `vertical {object}`
			* `top {number}`
			* `middle {number}`
			* `bottom {number}`
	* `destSlices {object}` ---9-slice destination slices. Setting the below values to 0 can create 3- and 6-slice scaling.
		* `horizontal {object}`
			* `left {number}`
			* `right {number}`
		* `vertical {object}`
			* `top {number}`
			* `bottom {number}`

## Class: ui.resource.Image

Model an Image for rendering. Supports taking a subset of
images, to support extracting from compacted sprite
sheets. Also supports applying filters to an image, usually
by the View class.

~~~
import ui.resource.Image as Image;
~~~

### new Image ([options])
1. `options {object}`
	* `scale {boolean}`
	* `sourceWidth {number} = -1`
	* `sourceHeight {number} = -1`
	* `sourceX {number} = 0`
	* `sourceY {number} = 0`
	* `marginTop {number} = 0`
	* `marginBottom {number} = 0`
	* `marginRight {number} = 0`
	* `marginLeft {number} = 0`
	* `sourceScale {number} = 1`
	* `url {string}` ---A URL or a base64 encoded image string.
	* `srcImage {Image}`

Creates an Image.

~~~
import ui.resource.Image as Image;

var image = new Image({url: 'resources/images/example.png'};
~~~

### image.isReady ()
1. Return: `{boolean}`

Returns whether the image has loaded.

### image.destroy ()

Destroys the image.

### image.setSrcImage (image)
1. `image {Image}`

Sets the raw (HTML) internal image.

### image.setSrcImage (image)
1. `image {string}`

Sets the raw (HTML) internal image's URL.

### image.getURL ()
1. Return: `{string}`

Returns the image URL.

### image.setURL (url)
1. `url {string}`

Sets the image URL.

### image.setImageData (data)
1. `data {ImageData}`

Not implemented.

### image.getImageData ()
1. Return: `{ImageData}`

Returns the image data object from a canvas.

### image.getWidth ()
1. Return: `{number}`

Returns the image's computed width (taking into account margin and scale).

### image.getOrigWidth ()
1. Return: `{number}`

Returns the image's actual, "natural" width (i.e. width ignoring margin and scale).

### image.getHeight ()
1. Return: `{number}`

Returns the image's computed height (taking into account margin and scale).

### image.getOrigHeight ()
1. Return: `{number}`

Returns the image's actual, "natural" height (i.e. height ignoring margin and scale).

### image.getSource ()
1. Return: `{Image}`

Returns the raw (HTML) image.

### image.getMap ()
1. Return: `{object}`

Returns the internal `ImageMap` object.

### image.setMap (x, y, w, h, marginTop, marginRight, marginBottom, marginLeft)
1. `x {number}`
2. `y {number}`
3. `w {number}`
4. `h {number}`
5. `marginTop {number}`
6. `marginRight {number}`
7. `marginBottom {number}`
8. `marginLeft {number}`

Sets the properties of the internal `ImageMap` object.


### Callback handler: image.doOnLoad (callback, [args ...])
1. `callback {function}`
2. `args {...*}`
1. Return: `{this}`

Registers a callback to be run once the image has fully loaded, optionally with args (done with event.Callback).
