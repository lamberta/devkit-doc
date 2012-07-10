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


## Class: timestep.Image

### new timestep.Image ([options])
1. `options {object}`
	* `scale {boolean} = false`
	* `sourceW {number} = -1`
	* `sourceH {number} = -1`
	* `sourceX {number} = 0`
	* `sourceY {number} = 0`
	* `url {string}`

### image.setSrcImg (srcImg)
1. `srcImg {Image}`

### image.setUrl (url)
1. `url {string}`

### image.getUrl ()

### image.getOrigW

### image.getOrigH ()

### image.setSourceX (x)
1. `x {number}`

### image.setSourceY (y)
1. `y {number}`

### image.setSourceW (w)
1. `w {number}`

### image.setSourceH (h)
1. `h {number}`

### image.getSource ()

### image.getWidth ()

### image.getBounds ()

### image.getMap ()

Same as `getBounds`.

### image.setBounds (x, y, w, h)
1. `x {number}`
2. `y {number}`
3. `w {number}`
4. `h {number}`

### Callback handler: image.doOnLoad

### image.isReady ()

### image.isLoaded ()

Same as `isReady`.

### image.getImageData ()

### image.setImageData ()

### image.destroy ()


## Example: Create an ImageView

~~~
import timestep.View as View;
import timestep.ImageView as ImageView;

exports = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", arguments);
		
		var myImage = new ImageView({
			image: "resources/duck.png",
			autoSize: true,
			parent: this        
		}); 
	}
});
~~~
