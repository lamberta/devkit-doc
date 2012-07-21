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
	* `a {number} = 0` ---Alpha component.

~~~
var color = new Color({r: 255, g: 20, b: 120});
~~~

### new timestep.Color (color)
1. `color {object}`
	* `h {number}` ---Hue component between 0 and 360.
	* `s {number}` ---Saturation component between 0 and 360.
	* `l {number}` ---Lightness component between 0 and 360.
	* `a {number} = 0`

### color.setColor (color)

Todo.

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
	* `a {number} = 0` ---Alpha component.
2. Return:`{this}`

### color.getHSLA ()
1. Return: `{object}`
	* `h {number}`
	* `s {number}`
	* `l {number}`
	* `a {number}`

### color.setHSLA (color)
1. `color {object}`
	* `h {number}` ---Hue component between 0 and 360.
	* `s {number}` ---Saturation component between 0 and 360.
	* `l {number}` ---Lightness component between 0 and 360.
	* `a {number} = 0`
2. Return: `{this}`

### color.spin (degrees)
1. `degrees {number}`
2. Return: `{this}`

### color.saturate (amount)
1. `amount {number}`
2. Return: `{this}`

### color.desaturate (amount)
1. `amount {number}`
2. Return: `{this}`

### color.lighten (amount)
1. `amount {number}`
2. Return: `{this}`

### color.darken (amount)
1. `amount {number}`
2. Return: `{this}`

### color.fadeIn (amount)
1. `amount {number}`
2. Return: `{this}`

### color.fadeOut (amount)
1. `amount {number}`
2. Return: `{this}`

### color.clone ()
1. Return: `{Color}`

### color.toHex ()
1. Return `{string}`

Returns the color as a string in the format: `'#RRGGBB'`.

### color.toRGBA ()
1. Return `{string}`

Returns the color as a string in the format: `'rgba(R, G, B, A)'`.

### color.toHSLA ()
1. Return: `{string}`

Returns the color as a string in the format: `'hsla(hue, saturation, lightness, alpha)'`.
