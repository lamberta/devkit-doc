# Images

## Class: ui.ImageView

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageView as ImageView;
~~~

### new ImageView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false` ---Image to render. You may specify a path in your resources directory or instance of an Image resource.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.

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

Returns the internal Image resource instance to be rendered.

### imageview.setImage (url [, options])
1. `url {string}`
2. `options {object}` ---Optional.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.

Set the image for the ImageView based on a path to the resources directory. This will create a new Image instance upon every call to `setImage`. Doing this frequently may cause garbage collection issues so consider using Image instances over Strings. 

~~~
imageview.setImage('resources/images/example2.png');
~~~

### imageview.setImage (img [, options])
1. `img {ui.resource.Image}`
2. `options {object}` ---Optional.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.

Sets the image for the ImageView using an instance of `ui.resource.Image`.

~~~
import ui.resource.Image as Image;

var image = new Image({url: 'resources/images/example2.png'};
imageview.setImage(image);
~~~

### Handler: imageview.doOnLoad (callback)
1. `callback {function}`
1. Return: `{this}`

Registers a callback to be run once the image has fully loaded (uses [event.Callback](./event.html#class-event.callback)). Callback is executed with the `ImageView` instance as the context.

### imageview.autoSize ()

Resize the views width and height to the actual dimensions of the image. If `fixedAspectRatio` is set, it will constrain the dimensions to the ratio.

### imageview.getOrigWidth ()
1. Return `{number}`

Returns the source image width.

### imageview.getOrigHeight ()
1. Return: `{number}`

Returns the source image height.


## Class: ui.ImageScaleView

A specialised ImageView for advanced scaling techniques including 9-Slice.

Inherits from:
:    1. [ui.widget.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageScaleView as ImageScaleView;
~~~

### new ImageScaleView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false` ---Source image. Just like `ImageView`, you may specify a path as a String or an instance of `ui.resource.Image`.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = 'stretch'` ---Valid options are `'none'`, `'stretch'`, `'cover'`, and `'9slice'`.
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
	* `scale {boolean} = false` ---If `true`, will scale the width and height according to the original ratio.
	* `sourceWidth {number} = -1` ---Source width of the desired area on the image. 
	* `sourceHeight {number} = -1` ---Source height of the desired area on the source image.
	* `sourceX {number} = 0` ---Source X position of the desired area on the source image.
	* `sourceY {number} = 0` ---Source Y position of the desired area on the source image.
	* `marginTop {number} = 0`
	* `marginBottom {number} = 0`
	* `marginRight {number} = 0`
	* `marginLeft {number} = 0`
	* `sourceScale {number} = 1` ---Scale of the source area.
	* `url {string}` ---A URL or a base64 encoded image string.
	* `srcImage {Image}` ---Using an instance of the native DOM Image object.

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

### image.getImageData ()
1. Return: `{ImageData}`

Returns the image data object from a canvas. Only available in browsers.

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

Returns the internal `ImageMap` object. This class models the region of a larger image that this "Image" references.

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


### Handler: image.doOnLoad (callback)
1. `callback {function}`
1. Return: `{this}`

Registers a callback to be run once the image has fully loaded (done with [event.Callback](./event.html#class-event.callback)).
