# ui.widget.Cell

## Class: ui.widget.Cell

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.PubSub](./event.html#class-event.pubsub)

~~~
import ui.widget.Cell as Cell;
~~~

### new Cell ([options])
1. `options {object}`

~~~
var cell = new Cell();
~~~

### cell.remove ()

Remove this View from the superview.

### cell.getHeight ()
1. Return: `{number}`

Returns `this.style.height`.

### cell.getWidth ()
1. Return: `{number}`

Returns `this.style.width`.

### cell.setData (data)
1. `data {object}`

This needs to be redefined if you  want to use this data in your view.

### cell.setPosition (pos)
1. `pos {object}`

Object with `x` and `y` properties.

### cell.model
1. `{squill.models.Cell}`

### Events

#### \'Recycle\'

When `this.model` receives a `'Recycle'` event, this `Cell`
is removed from it's superview.
