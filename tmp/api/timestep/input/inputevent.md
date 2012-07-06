# `timestep.input.InputEvent`

## Instantiate

`var inputevt = new InputEvent(id, type, x, y, root, target);`

## Methods

* __cancel__ ---Set `cancelled` property to `true`.

* __clone__ ---Return a new `InputEvent` using this event's property values.
	@return `{InputEvent}`

## Properties

* __id__ ---Unique ID for a particular input.

* __type__ `{string}` ---Input event type.

* __pt__ `{object} = {}` ---Localized point coordinate, index by view uid.

* __srcPt__ `{Point}` ---Object containing `x` and `y` coordinates of the event.

* __trace__ `{array} = []` ---List of view nodes from target to root.

* __root__ `{View|null}` ---Top view where event is dispatched (the tree root).

* __when__ `{}` ---Time of dispatch.

* __target__ `{View|null}` ---Bottom view where the event occured.

* __cancelled__ `{boolean} = false` ---If true, event won't propogate.

* __depth__ `{number} = 0` ---Number of levels of the tree from root to target.
