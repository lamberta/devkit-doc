# timestep.filter

### new timestep.filter.Filter ([options])
1. `options {object}`
	* `priority {number} = 0`
	* `r {number} = 0` ---Red component.
	* `g {number} = 0` ---Green component.
	* `b {number} = 0` ---Blue component.
	* `a {number} = 0` ---Alpha component.

A generic class that specilized filters inherit from.

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

Returns the color of a filter in the format: `"rgba(r, g, b, a)"`.


## Class: timestep.filter.LinearAddFilter

Linear add (lighten) filter.

### new timestep.filter.LinearAddFilter ([options])


## Class: timestep.filter.TintFilter

Tint (averaging) filter.

### new timestep.filter.TintFilter ([options])


## Class: timestep.filter.MultiplyFilter

Multiply filter.

### new timestep.filter.MultiplyFilter ([options])


## Class: timestep.filter.PositiveMaskFilter

Positive masking.

### new timestep.filter.PositiveMaskFilter ([options])
1. `options {object}`
	* `priority {number} = 0`
	* `image {string}` ---Image URL.
	* `r {number} = 0` ---Red component.
	* `g {number} = 0` ---Green component.
	* `b {number} = 0` ---Blue component.
	* `a {number} = 0` ---Alpha component.

## Class: timestep.filter.NegativeMaskFilter

Negative masking.

### new timestep.filter.NegativeMaskFilter ([options])
1. `options {object}`
	* `priority {number} = 0`
	* `image {string}` ---Image URL.
	* `r {number} = 0` ---Red component.
	* `g {number} = 0` ---Green component.
	* `b {number} = 0` ---Blue component.
	* `a {number} = 0` ---Alpha component.
