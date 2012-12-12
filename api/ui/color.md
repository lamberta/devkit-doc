# Color

## Class: ui.Color

Usage:

~~~
import ui.Color as Color;
~~~

### new Color ([options])
1. `options {object}` ---Optional.
    * `r {number} = 0` ---The red value of the color, from 0 to 255.
    * `g {number} = 0` ---The green value of the color, from 0 to 255.
    * `b {number} = 0` ---The blue value of the color, from 0 to 255.
    * `a {number} = 1` ---The alpha value of the color, from 0 to 1.

~~~
var rgba = new Color({r: 23, g: 234, b: 0, a: 1});
~~~

### new Color ([r, g, b, a])
1. `r {number} = 0` ---The red value of the color, from 0 to 255.
2. `g {number} = 0` ---The green value of the color, from 0 to 255.
3. `b {number} = 0` ---The blue value of the color, from 0 to 255.
4. `a {number} = 1` ---The alpha value of the color, from 0 to 1.

Color compoent options can be passed as invidual parameters
to the constructor.

### new Color ([rgba])
1. `rgba {string}` ---A color string formatted in CSS-style.

A string in the CSS-style format: `'rgba(r, g, b, a)'`.

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
