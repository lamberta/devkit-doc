# Class: ui.filter.Filter

## Methods

### new Filter ([options])

Parameters
:    1. `options {object}`
	     * `priority {number} = 0`
		 * `r {number} = 0` ---Red component.
		 * `g {number} = 0` ---Green component.
		 * `b {number} = 0` ---Blue component.
		 * `a {number} = 0` ---Strength of the filter (interpolation value ranging from 0.0 - 1.0).

A generic class that specialized filters inherit
from. Currently filters exist on the `style` object of views
under the `viewFilter` variable.

~~~
from ui.filter import LinearAddFilter;

var filteredView = new ImageView({
	parent: this,
	x: 0,
	y: 0,
	width: 100, 
	height: 100,
	image: "resources/images/game/test.png",
	viewFilter: new LinearAddFilter({r: 255, g: 0, b: 0, a: 1.0})
});	

filteredView.style.viewFilter = new MultiplyFilter({r: 255, g: 150, b: 0, a: 0.5});
~~~

# Class: ui.filter.LinearAddFilter

Inherits from
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Linear add (lighten) filter.

## Methods

### new LinearAddFilter ([options])

Parameters
:    1. `options {object}`

~~~
from ui.filter import LinearAddFilter;
~~~


# Class: ui.filter.TintFilter

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Tint Filter will turn the given view into a solid color of
rgb at full strength of a = 1.0, and interpolates up to a
solid color when a < 1.0.

## Methods

### new TintFilter ([options])

Parameters
:    1. `options {object}`

~~~
from ui.filter import TintFilter;
~~~


# Class: ui.filter.MultiplyFilter

Inherits from
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Filter a view by multiplying pixels by the given rgb values
with the given strength. This filter has it's best use in
the case of having a grayscaled image and "colorizing"
it. (Such as using a single grayscaled image for a marble,
and coloring it with a multiply filter so as to reduce
assets).

## Methods

### new MultiplyFilter ([options])

Parameters
:    1. `options {object}`

~~~
from ui.filter import MultiplyFilter;
~~~


# Class: ui.filter.PositiveMaskFilter

Inherits from
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Positive masking.

## Methods

### new PositiveMaskFilter ([options])

Parameters
:    1. `options {object}`
	     * `image {string}` ---Image URL.

~~~
from ui.filter import PositiveMaskFilter;
~~~


# Class: ui.filter.NegativeMaskFilter

Inherits from
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Negative masking.

## Methods

### new NegativeMaskFilter ([options])

Parameters
:    1. `options {object}`
	     * `image {string}` ---Image URL.

~~~
from ui.filter import NegativeMaskFilter;
~~~
