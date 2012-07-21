# timestep.Color

## Class: timestep.Color

~~~
import timestep.Color as Color;
~~~

### new timestep.Color (color)
1. `color {string}`

~~~
var red = new Color('#ff000'),
    blue = new Color('azure');
~~~

### new timestep.Color (color)
1. `color {object}`
	* `r {number}` ---Red component between 0 and 255.
	* `g {number}` ---Green component between 0 and 255.
	* `b {number}` ---Blue componet between 0 and 255.
	* `a {number}` ---Alpha component between 0 and 1.

~~~
var color = new Color({r: 255, g: 20, b: 120});
~~~

### new timestep.Color (color)
1. `color {object}`
	* `h {number}` ---Hue component between 0 and 360 degrees.
	* `s {number}` ---Saturation component between 0 and 100 percent.
	* `l {number}` ---Lightness component between 0 and 100 percent.
	* `a {number}` ---Alpha component between 0 and 1.

### color.setColor (color)
1. `color {string}`
2. Return: `{this}`

### color.getRGBA ()
1. Return: `{object}`
	* `r {number}`
	* `g {number}`
	* `b {number}`
	* `a {number}`

### color.setRGBA (color)
1. `color {object}`
	* `r {number}` ---Red component between 0 and 255.
	* `g {number}` ---Green component between 0 and 255.
	* `b {number}` ---Blue componet between 0 and 255.
	* `a {number}` ---Alpha component between 0 and 1.
2. Return: `{this}`

Sets any of the RGBA components of the color.

### color.getHSLA ()
1. Return: `{object}`
	* `h {number}`
	* `s {number}`
	* `l {number}`
	* `a {number}`

### color.setHSLA (color)
1. `color {object}`
	* `h {number}` ---Hue component between 0 and 360 degrees.
	* `s {number}` ---Saturation component between 0 and 100 percent.
	* `l {number}` ---Lightness component between 0 and 100 percent.
	* `a {number}` ---Alpha component between 0 and 1.
2. Return: `{this}`

Sets any of the HSLA components of the color.

### color.spin (degrees)
1. `degrees {number}`
2. Return: `{this}`

Rotates the hue of the color.

### color.saturate (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the saturation of the color.

### color.desaturate (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the saturation of the color.

### color.lighten (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the lightness of the color.

### color.darken (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the lightness of the color.

### color.fadeIn (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the alpha of the color.

### color.fadeOut (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the alpha of the color.

### color.clone ()
1. Return: `{Color}`

Returns a separate instance of the same color.

### color.toHex ()
1. Return `{string}`

Returns the color as a string in the format: `'#RRGGBB'`.

### color.toRGBA ()
1. Return: `{string}`

Returns the color as a string in the format: `'rgba(R, G, B, A)'`.

### color.toHSLA ()
1. Return: `{string}`

Returns the color as a string in the format: `'hsla(H, S%, L%, A)'`.