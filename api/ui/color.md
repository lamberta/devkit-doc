# ui.Color

## Class: ui.Color

~~~
import ui.Color as Color;
~~~

### new Color (color)
1. `color {string}`

Creates a Color instance, initially set with a color string. Accepts most CSS3 colors, including hex, rgb()/rgba(), hsl()/hsla(), and all valid CSS color names. Defaults alpha to 1.

~~~
var red = new Color("#FF000");
var blue = new Color("azure");
~~~

### new Color (color)
1. `color {object}`
	* `r {number}` ---Red component between 0 and 255.
	* `g {number}` ---Green component between 0 and 255.
	* `b {number}` ---Blue componet between 0 and 255.
	* `a {number}` ---Alpha component between 0 and 1.

Creates a Color instance, initially set with RGBA components. Defaults alpha to 1.

~~~
var pink = new Color({ r: 255, g: 20, b: 120, a: 0.5 });
~~~

### new Color (color)
1. `color {object}`
	* `h {number}` ---Hue component between 0 and 360 degrees.
	* `s {number}` ---Saturation component between 0 and 100 percent.
	* `l {number}` ---Lightness component between 0 and 100 percent.
	* `a {number}` ---Alpha component between 0 and 1.

Creates a Color instance, initially set with HSLA components. Defaults alpha to 1.

~~~
var sky = new Color({ h: 178, s: 96, l: 50 });
~~~

### color.setColor (color)
1. `color {string}`
2. Return: `{this}`

Sets the full color. Defaults alpha back to 1. Accepts the same strings the constructor does.

### color.getRGBA ()
1. Return: `{object}`
	* `r {number}`
	* `g {number}`
	* `b {number}`
	* `a {number}`

Returns an object of the RGBA components of the color.

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

Returns an object of the HSLA components of the color.

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

~~~
var blue = new Color("yellow").spin(180);
~~~

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

Returns a separate instance (deep copy) of the same color.

~~~
var blue = new Color("#08C");
var green = blue.clone().spin(-60);
~~~

### color.toHex ()
1. Return `{string}`

Returns the color as a string in the format: `'#RRGGBB'`.

### color.toRGBA ()
1. Return: `{string}`

Returns the color as a string in the format: `'rgba(R, G, B, A)'`.

### color.toHSLA ()
1. Return: `{string}`

Returns the color as a string in the format: `'hsla(H, S%, L%, A)'`.