# ui.filter

## Class: ui.filter.Filter

~~~
import ui.filter.Filter as Filter;
~~~

### new Filter ([options])
1. `options {object}`
	* `priority {number} = 0`
	* `r {number} = 0` ---Red component.
	* `g {number} = 0` ---Green component.
	* `b {number} = 0` ---Blue component.
	* `a {number} = 0` ---Alpha component.

A generic class that specialized filters inherit from.

~~~
var filter = new Filter();
~~~

### filter.get ()
1. Return: `{object}`

Returns the filter options.

### filter.getType ()
1. Return: `{string}`

Returns the filter type.

### filter.update ([options])
1. `options {object}`

Update the filter using the values supplied in the given options.

### filter.setView (view)
1. `view {View}`

Set the view for a filter.

### filter.getColorString ()
1. Return: `{string}`

Returns the color of a filter in the format: `"rgba(R, G, B, A)"`.


## Class: ui.filter.LinearAddFilter

Linear add (lighten) filter.

~~~
import ui.filter.LinearAddFilter as LinearAddFilter;
~~~

### new LinearAddFilter ([options])


## Class: ui.filter.TintFilter

Tint (averaging) filter.

~~~
import ui.filter.TintFilter as TintFilter;
~~~

### new TintFilter ([options])


## Class: ui.filter.MultiplyFilter

Multiply filter.

~~~
import ui.filter.MultiplyFilter as MultiplyFilter;
~~~

### new MultiplyFilter ([options])


## Class: ui.filter.PositiveMaskFilter

Positive masking.

~~~
import ui.filter.PositiveMaskFilter as PositiveMaskFilter;
~~~

### new PositiveMaskFilter ([options])


## Class: ui.filter.NegativeMaskFilter

Negative masking.

~~~
import ui.filter.NegativeMaskFilter as NegativeMaskFilter;
~~~

### new NegativeMaskFilter ([options])