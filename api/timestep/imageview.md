# `timestep.ImageView`

To use: `imageview = new ImageView(options)`.

## Options

* __image__ ---Defaults to `false`.

* __autoSize__ ---Defaults to `false`.

* __scaleMethod__ ---Defaults to `false`.


## Methods

* __getImage__ ---

	@return `{timestep.Image}`

* __setImage (img, opts)__ ---

	@param `{string|timestep.Image}` img<br/>
	@param `{object}` opts

* __doOnLoad__ ---

* __autoSize (method, url, width, height)__ ---

	@param `{string`} method ---Options: 'none', 'fit', 'proportional', 'resize'<br/>
	@param `{string}` url<br/>
	@param `{number}` width<br/>
	@param `{number}` height

* __getOrigW__ ---

	@return `{number}` ---The image width.

* __getOrigH__ ---

	@return `{number}` ---The image height.



# `timestep.Image`

## Options

* __scale__ ---Defaults to `false`.

* __sourceW__ ---Defaults to `-1`.

* __sourceH__ ---Defaults to `-1`.

* __sourceX__ ---Defaults to `0`.

* __sourceY__ ---Defaults to `0`.

* __url__ ---Defaults to `''`.

## Methods

* __setSrcImg (srcImg)__ ---

* __setUrl (url)__ ---

* __getUrl__ ---

* __getOrigW__ ---

* __getOrigH__ ---

* __setSourceW (w)__ ---

* __setSourceH (h)__ ---

* __setSourceX (x)__ ---

* __setSourceY (y)__ ---

* __getSource__ ---

* __getWidth__ ---

* __getBounds__ ---

* __getMap__ ---Same as `getBounds`.

* __setBounds (x, y, w, h)__ ---

* __doOnLoad__ ---

* __isReady__ ---

* __isLoaded__ ---Same as `isReady`.

* __getImageData__ ---

* __setImageData__ ---

* __destroy__
