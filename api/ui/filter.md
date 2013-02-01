# Class: ui.filter.Filter

## Methods

### new Filter ([options])

Parameters
:    1. `options {object}`
         * `priority {number} = 0`
         * `r {number} = 0` ---Red component.
         * `g {number} = 0` ---Green component.
         * `b {number} = 0` ---Blue component.
         * `a {number} = 0` ---Alpha component.

A generic class that specialized filters inherit from.

~~~
import ui.filter.Filter as Filter;

var filter = new Filter();
~~~

### get ()

Returns
:    1. `{object}`

Returns the filter options.

### getType ()

Returns
:    1. `{string}`

Returns the filter type.

### update ([options])

Parameters
:    1. `options {object}`

Update the filter using the values supplied in the given options.

### setView (view)

Parameters
:    1. `view {View}`

Set the view for a filter.

### getColorString ()

Returns
:    1. `{string}`

Returns the color of a filter in the format: `"rgba(R, G, B, A)"`.


# Class: ui.filter.LinearAddFilter

Inherits from
:    1. [ui.filter.Filter](#class-ui.filter.filter)

Linear add (lighten) filter.

## Methods

### new LinearAddFilter ([options])

Parameters
:    1. `options {object}`

~~~
import ui.filter.LinearAddFilter as LinearAddFilter;
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

Multiply filter.

### new MultiplyFilter ([options])

Parameters
:    1. `options {object}`

~~~
import ui.filter.MultiplyFilter as MultiplyFilter;
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
import ui.filter.PositiveMaskFilter as PositiveMaskFilter;
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
import ui.filter.NegativeMaskFilter as NegativeMaskFilter;
~~~
