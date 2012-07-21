# timestep.input

## Class: timestep.input.InputEvent

## new timestep.input.InputEvent (id, type, x, y, root, target)
1. `id {string}`
2. `type {string}`
3. `x {number}`
4. `y {number}`
5. `root {View}`
6. `target {View}`

### event.clone ()
1. Return: `{InputEvent}`

Return a new `InputEvent` using this event's property values.

### event.cancel ()

Set `cancelled` property to `true`.

### event.cancelled
1. `{boolean} = false`

If true, event won't propogate.

### event.id

Unique ID for a particular input.

### event.type
1. `{string}`

Input event type.

### event.point
1. `{object} = {}`

Localized point coordinate, index by view uid.

### event.srcPoint
1. `{Point}`

Object containing `x` and `y` coordinates of the event.

### event.trace
1. `{array} = []`

List of view nodes from target to root.

### event.root
1. `{View|null}`

Top view where event is dispatched (the tree root).

### event.target
1. `{View|null}`

Bottom view where the event occured.

### event.when
1. `{}`

Time of dispatch.

### event.depth
1. `{number} = 0`

Number of levels of the tree from root to target.
