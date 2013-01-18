# Filters

## Class: ui.filter.Filter

~~~
from ui.filter import LinearAddFilter;
from ui.filter import MultiplyFilter;
~~~

### new Filter ([options])
1. `options {object}`
	* `priority {number} = 0`
	* `r {number} = 0` ---Red component.
	* `g {number} = 0` ---Green component.
	* `b {number} = 0` ---Blue component.
	* `a {number} = 0` ---Strength of the filter (interpolation value ranging from 0.0 - 1.0).

A generic class that specialized filters inherit from. Currently filters exist on the `style` object of views under the `viewFilter` variable. 

~~~
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

## Class: ui.filter.LinearAddFilter

Linear add (lighten) filter.

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

~~~
from ui.filter import LinearAddFilter;
~~~

### new LinearAddFilter ([options])


## Class: ui.filter.TintFilter

Tint Filter will turn the given view into a solid color of rgb at full strength of a = 1.0, and interpolates up to a solid color when a < 1.0.

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

~~~
from ui.filter import TintFilter;
~~~

### new TintFilter ([options])


## Class: ui.filter.MultiplyFilter

Filter a view by multiplying pixels by the given rgb values with the given strength. This filter has it's best use in the case of having a grayscaled image and "colorizing" it. (Such as using a single grayscaled image for a marble, and coloring it with a multiply filter so as to reduce assets).

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

~~~
from ui.filter import MultiplyFilter;
~~~

### new MultiplyFilter ([options])


## Class: ui.filter.PositiveMaskFilter

Positive masking.

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

~~~
from ui.filter import PositiveMaskFilter;
~~~

### new PositiveMaskFilter ([options])
1. `options {object}`
	* `image {string}` ---Image URL.


## Class: ui.filter.NegativeMaskFilter

Negative masking.

Inherits from:
:    1. [ui.filter.Filter](#class-ui.filter.filter)

~~~
from ui.filter import NegativeMaskFilter;
~~~

### new NegativeMaskFilter ([options])
1. `options {object}`
	* `image {string}` ---Image URL.
