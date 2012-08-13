# Color Utilities

## Module: color

~~~
import color;
~~~

### parse (color)
1. `color {string}`
2. Return: `{RGBA}`

### createRGBA (rgba)
1. `rgba {}`
2. Return: `{RGBA}`

~~~
var rgba = color.createRGBA(r, g, b, a);
~~~

### createHSLA (hsla)
1. `hsla {}`
2. Return: `{HSLA}`

~~~
var hsla = color.createHSLA(h, s, l, a);
~~~

### RGBAtoHSLA (color)
1. `color {object}`
	* `r {number}` ---Red component, a number between 0 and 255.
	* `g {number}` ---Green component, a number between 0 and 255.
	* `b {number}` ---Blue component, a number between 0 and 255.
	* `a {number} = 1` ---Optional alpha component, a number between 0 and 1.
2. Return: `{object}`
	* `h {number}` ---Hue component between 0 and 360 degrees.
	* `s {number}` ---Saturation component between 0 and 100 percent.
	* `l {number}` ---Lightness component between 0 and 100 percent.
	* `a {number}` ---Alpha component between 0 and 1.


## Class: RGBA

~~~
var rgba = color.createRGBA(r, g, b, a);
~~~

### rgba.r
1. `{number} = 0` ---A number between 0 and 255.

The red component of the color.

### rgba.g
1. `{number} = 0` ---A number between 0 and 255.

The green component of the color.

### rgba.b
1. `{number} = 0` ---A number between 0 and 255.

The blue component of the color.

### rgba.a
1. `{number} = 1` ---A number between 0 and 1.

The alpha component of the color.

### rgba.set (color)
1. `color {object}`
	* `r {number} = 0` ---Red component, a number between 0 and 255.
	* `g {number} = 0` ---Green component, a number between 0 and 255.
	* `b {number} = 0` ---Blue component, a number between 0 and 255.
	* `a {number} = 1` ---Optional alpha component, a number between 0 and 1.

Set the component values of a color.

### rgba.get ()
1. Return: `color {object}`
	* `r {number}` ---Red component, a number between 0 and 255.
	* `g {number}` ---Green component, a number between 0 and 255.
	* `b {number}` ---Blue component, a number between 0 and 255.
	* `a {number}` ---Alpha component, a number between 0 and 1.

Return a new object containing the component values of this color.

### rgba.parse (color)
1. `color {string}`

Parse a color string and store the component values.

### rgba.toString ()
1. Return: `{string}`

Returns the color as a string in the CSS-style format: `'rgba(R, G, B, A)'`.

### rgba.toHex ()
1. Return: `{string}`

Returns the color as a string in the hexadecimal format: `'#RRGGBB'`.


## Class: HSLA

An HSLA color instance, initially set with a color
string. Accepts most CSS3 colors, including hex, rgb/rgba,
hsl/hsla, and all valid CSS color names. Defaults alpha to 1.

~~~
var hsla = color.createHSLA(h, s, l, a);
~~~

HSLA colors can be created from a variety of formats:

~~~
var red = color.createHSLA("#FF000"),
	blue = color.createHSLA("azure"),
	pink = color.createHSLA({ r: 255, g: 20, b: 120, a: 0.5 }),
	sky = color.createHSLA({ h: 178, s: 96, l: 50 });
~~~

### hsla.h
1. `{number} = 0` ---A number between 0 and 360 degrees.

The hue component of the color.

### hsla.s
1. `{number} = 0` ---A number between 0 and 100 percent.

The saturation component of the color.

### hsla.l
1. `{number} = 0` ---A number between 0 and 100 percent.

The lightness component of the color.

### hsla.a
1. `{number} = 1` ---A number between 0 and 1.

The alpha component of the color.

### hsla.get ()
1. Return: `{object}`
	* `h {number}` ---Hue component between 0 and 360 degrees.
	* `s {number}` ---Saturation component between 0 and 100 percent.
	* `l {number}` ---Lightness component between 0 and 100 percent.
	* `a {number}` ---Alpha component between 0 and 1.

Returns an object of the HSLA components of the color.

### hsla.set (color)
1. `color {object}`
	* `h {number} = 0` ---Hue component between 0 and 360 degrees.
	* `s {number} = 0` ---Saturation component between 0 and 100 percent.
	* `l {number} = 0` ---Lightness component between 0 and 100 percent.
	* `a {number} = 1` ---Alpha component between 0 and 1.
2. Return: `{this}`

Sets any of the HSLA components of the color.

### hsla.parse (color)
1. `color {string}`
2. Return: `{this}`

Sets the full color. Defaults alpha back to 1. Accepts the
same strings the constructor does.

~~~
var blue = color.createHSLA("azure");
blue.parse('azure');
~~~

### hsla.getRGBA ()
1. Return: `{object}`
	* `r {number}`
	* `g {number}`
	* `b {number}`
	* `a {number}`

Returns an object of the RGBA components of the color.

### hsla.setRGBA (color)
1. `color {object}`
	* `r {number}` ---Red component between 0 and 255.
	* `g {number}` ---Green component between 0 and 255.
	* `b {number}` ---Blue component between 0 and 255.
	* `a {number}` ---Alpha component between 0 and 1.
2. Return: `{this}`

Sets any of the RGBA components of the color.

### hsla.spin (degrees)
1. `degrees {number}`
2. Return: `{this}`

Rotates the hue of the color.

~~~
var blue = color.createHSLA("yellow").spin(180);
~~~

### hsla.saturate (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the saturation of the color.

### hsla.desaturate (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the saturation of the color.

### hsla.lighten (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the lightness of the color.

### hsla.darken (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the lightness of the color.

### hsla.fadeIn (amount)
1. `amount {number}`
2. Return: `{this}`

Increases the alpha of the color.

### hsla.fadeOut (amount)
1. `amount {number}`
2. Return: `{this}`

Decreases the alpha of the color.

### hsla.clone ()
1. Return: `{color.HSLA}`

Returns a separate instance (deep copy) of the same color.

~~~
var blue = color.createHSLA("#08C"),
    green = blue.clone().spin(-60);
~~~

### hsla.toString ()
1. Return: `{string}`

Returns the color as a string in the CSS-style format: `'hsla(H, S%, L%, A)'`.

### hsla.toHex ()
1. Return `{string}`

Returns the color as a string in the hexadecimal format: `'#RRGGBB'`.

### hsla.toRGBA ()
1. Return: `{string}`

Returns the color as a string in the CSS-style format: `'rgba(R, G, B, A)'`.
