# timestep.ImageView

## Class: timestep.ImageView

Inherits
:    1. [timestep.View](./timestep-view.html)
     2. [lib.PubSub](./lib-pubsub.html)

### new timestep.ImageView ([options])
1. `options {object}`
	* `image {string|timestep.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

### imageview.getImage ()
1. Return: `{timestep.Image}`

### imageview.setImage (img [, opts])
1. `img {timestep.Image}`
2. `opts {object}` ---Optional.
	* `image {string|timestep.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

Set the image for the ImageView.

### imageview.setImage (url [, opts])
1. `url {string}`
2. `opts {object}` ---Optional.
	* `image {string|timestep.Image} = false` ---Image to render.
	* `autoSize {boolean} = false` ---Stretch the image to the View dimensions if `false`. Use the image dimensions if `true`.
	* `scaleMethod {string} = false`

Set the image for the ImageView.

### Callback handler: imageview.doOnLoad

### imageview.autoSize (method, url, width, height)
1. `method {string}` ---Options: `'none'`, `'fit'`, `'proportional'`, and `'resize'`.
2. `url {string}`
3. `width {number}`
4. `height {number}`

### imageview.getOrigWidth ()
1. Return `{number}`

Returns the image width.

### imageview.getOrigHeight ()
1. Return: `{number}`

Returns the image height.


## Class: resource.Image

Model an Image for rendering. Supports taking a subset of
images, to support extracting from compacted sprite
sheets. Also supports applying filters to an image, usually
by the View class.

~~~
import resource.Image as Image;
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

### image.isReady ()
1. Return: `{boolean}`

Returns `true` if the image has loaded.

### image.destroy ()

Destroys the image.

### image.setSrcImage (image)
1. `image {Image}`

### image.setSrcImage (image)
1. `image {string}`

### image.getURL ()
1. Return: `{string}`

### image.setURL (url)
1. `url {string}`

### image.setImageData (data)
1. `data {ImageData}`

Not implemented.

### image.getImageData ()
1. Return: `{ImageData}`

Returns the image data object from a canvas.

### image.getWidth ()
1. Return: `{number}`

### image.getOrigWidth ()
1. Return: `{number}`

### image.getHeight ()
1. Return: `{number}`

### image.getOrigHeight ()
1. Return: `{number}`

### image.getSource ()
1. Return: `{Image}`

### image.setSourceWidth (n)
1. `n {number}`

### image.setSourceHeight (n)
1. `n {number}`

### image.setSourceX (n)
1. `n {number}`

### image.setSourceY (n)
1. `n {number}`

### image.setMarginTop (n)
1. `n {number}`

### image.setMarginBottom (n)
1. `n {number}`

### image.setMarginBottom (n)
1. `n {number}`

### image.setMarginLeft (n)
1. `n {number}`

### image.getBounds ()
1. Return `{}`

### image.setBounds (x, y, w, h, marginTop, marginRight, marginBottom, marginRight)
1. `x {number}`
2. `y {number}`
3. `w {number}`
4. `h {number}`
5. `marginTop {number}`
6. `marginRight {number}`
7. `marginBottom {number}`
8. `marginRight {number}`


### Callback handler: image.doOnLoad ([args ...])
1. Return: `{this}`



## Example: Create an ImageView

~~~
m4_include(./examples/api/imageview.js)
~~~
