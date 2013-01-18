# Images

Examples:

* [A Basic Image](../example/images-basic/)
* [9-Slice Scaling](../example/images-nine-slice/)


## Class: ui.ImageView

Display an image within a `View`.

Inherits from:
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageView as ImageView;
~~~

### new ImageView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false` ---Image to render. A path in the resources directory or [`Image`](#class-ui.resource.image) instance.
	* `autoSize {boolean} = false` ---If `false`, stretch the image to the dimensions of the view. Use the image dimensions if `true`.

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

Returns the internal `ui.resource.Image` instance to be rendered.

### imageview.setImage (url [, options])
1. `url {string}`
2. `options {object}` ---Optional.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.

Set the image from its path in the resources directory. This
will create a new `Image` instance on each call to
`setImage`. Doing this frequently may cause garbage
collection issues so consider using `Image` instead of path strings *(see definition below)*.

~~~
imageview.setImage('resources/images/example2.png');
~~~

### imageview.setImage (img [, options])
1. `img {ui.resource.Image}`
2. `options {object}`
	* `autoSize {boolean} = false` ---Stretch the image to the view dimensions if `false`. Use the image dimensions if `true`.

Sets the image for the `ImageView` using an instance of `ui.resource.Image`.

~~~
import ui.resource.Image as Image;

var image = new Image({url: 'resources/images/example2.png'};
imageview.setImage(image);
~~~

### Handler: imageview.doOnLoad (callback)
1. `callback {function}`
1. Return: `{this}`

Registers a callback to be run once the image has fully
loaded (uses [event.Callback](./event.html#class-event.callback)). Callback
is executed with the `ImageView` instance as the context.

### imageview.autoSize ()

Resize the views width and height to the actual dimensions
of the image. If `fixedAspectRatio` is set, it will
constrain the dimensions to the ratio.

### imageview.getOrigWidth ()
1. Return `{number}`

Returns the source image width.

### imageview.getOrigHeight ()
1. Return: `{number}`

Returns the source image height.


## Class: ui.ImageScaleView

A specialized `ImageView` for advanced scaling techniques, including 9-Slice.

Inherits from:
:    1. [ui.widget.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.ImageScaleView as ImageScaleView;
~~~

### new ImageScaleView ([options])
1. `options {object}`
	* `image {string|ui.resource.Image} = false` ---Source image. Just like `ImageView`, specify a string path or an instance of `ui.resource.Image`.
	* `autoSize {boolean} = false` ---Stretch the image to the view dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = 'stretch'` ---Valid options are `'none'`, `'stretch'`, `'cover'`, `'9slice'`, `'6slice'`, `'3slice'` and `'2slice'`.
	* `debug {boolean} = false` ---Display 9-slice scaling measurements.
	* `sourceSlices {object}` ---9-slice source slices. See below for details.
		* `horizontal {object}`
			* `left {number}`
			* `center {number}`
			* `right {number}`
		* `vertical {object}`
			* `top {number}`
			* `middle {number}`
			* `bottom {number}`
	* `destSlices {object}` ---9-slice destination slices. Setting these values to 0 can create 3- and 6-slice scaling.
		* `horizontal {object}`
			* `left {number}`
			* `right {number}`
		* `vertical {object}`
			* `top {number}`
			* `bottom {number}`

#### 9-Slice Options

The `sourceSlices` is an object that specifies where the slices 
start and end. For 9-slice you need to specify the sizes of the 
3 columns and 3 rows. `horizontal` refers to the columns and `vertical` 
refers to the rows if you were to visualise it as a grid. 

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/9slice.png" class="diagram" />
<figcaption>Demonstrates how the `sourceSlices` object determines slice sizes and the
effects after resizing the view.</figcaption>
</figure>
</div>

The above diagram demonstrates how the numbers in `sourceSlices` represent the width
of the horizontal slices and heights of the vertical slices. It also
shows how resizing will retain the sizes of the corner slices
while only stretching the edge and center slice.

The `destSlices` option is an advanced option to change the size of
the slices when it's rendered. By default it will retain it's original
size (by using the values in `sourceSlices`).

#### Overlapping Sides

If the sum of the destination values exceeds the width or
the height of the view then the sides will be scaled
back. For example: A view has a `width` of 40 pixels and the
`left` and `right` values are 25 then the `center` will not
be applied and the `left` and `right` values will be scaled
back to the maximum available size of 20 pixels for each
side.

#### Using 6-Slice

For horizontal slices you must pass the following properties:

* `sourceSlices {object}`
	* `horizontal {object}`
		* `left {number}`
		* `center {number}`
		* `right {number}`
	* `vertical {object}`
		* `top {number}`
		* `bottom {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `horizontal {object}`
		* `left {number}`
		* `right {number}`
	* `vertical {object}`
		* `top {number}`
		* `bottom {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/6slice-h.png" class="diagram" />
<figcaption>Horizontal 6-slice.</figcaption>
</figure>
</div>

For vertical slices you must pass the following properties:

* `sourceSlices {object}`
	* `horizontal {object}`
		* `left {number}`
		* `right {number}`
	* `vertical {object}`
		* `top {number}`
		* `middle {number}`
		* `bottom {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `horizontal {object}`
		* `left {number}`
		* `right {number}`
	* `vertical {object}`
		* `top {number}`
		* `bottom {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/6slice-v.png" class="diagram" />
<figcaption>Vertical 6-slice.</figcaption>
</figure>
</div>

#### Using 3-Slice

For horizontal slices you must pass the following properties:

* `sourceSlices {object}`
	* `horizontal {object}`
		* `left {number}`
		* `center {number}`
		* `right {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `horizontal {object}`
		* `left {number}`
		* `right {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/3slice-h.png" class="diagram" />
<figcaption>Horizontal 3-slice.</figcaption>
</figure>
</div>

For vertical slices you must pass the following properties:

* `sourceSlices {object}`
	* `vertical {object}`
		* `top {number}`
		* `middle {number}`
		* `bottom {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `vertical {object}`
		* `top {number}`
		* `bottom {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/3slice-v.png" class="diagram" />
<figcaption>Vertical 3-slice.</figcaption>
</figure>
</div>

#### Using 2-Slice

If the `scaleMethod` is set to `'2slice'` then you can
control the direction of the slices through the source slice
properties.

For horizontal slices you must pass the following properties:

* `sourceSlices {object}`
	* `horizontal {object}`
		* `left {number}`
		* `right {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `horizontal {object}`
		* `left {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/2slice-h.png" class="diagram" />
<figcaption>Horizontal 2-slice.</figcaption>
</figure>
</div>

For vertical slices you must pass the following properties:

* `sourceSlices {object}`
	* `vertical {object}`
		* `top {number}`
		* `bottom {number}`
* `destSlices {object}` ---Optional, if omitted then the `sourceSlices` will be used
	* `vertical {object}`
		* `top {number}`

<div class="figure-wrapper">
<figure>
<img src="./assets/ui-imageview/2slice-v.png" class="diagram" />
<figcaption>Vertical 2-slice.</figcaption>
</figure>
</div>

## Class: ui.resource.Image

This class represents an Image resource. It is not
renderable without a `View`. A view will use this resource
as the source and can therefore do advanced rendering with the
resource. Supports taking a subset of
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

Registers a callback to be run once the image has fully
loaded (done with [event.Callback](./event.html#class-event.callback)).
