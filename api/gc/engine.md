# GC.app.engine

The game engine and scene graph manager for the Game Closure
SDK; it has Canvas and DOM rendering back-ends.

The game engine initializes a number of components,
including the input and key event listeners, the game loop,
the view hierarchy, and rendering the scene graph.

## Class: ui.Engine

Inherits
:    1. [event.PubSub](./event-index.html#class-event.pubsub)

~~~
import ui.Engine as Engine;
~~~

### new Engine ([options])
1. `options {object}`
	* `width {number} = device.width`
	* `height {number} = device.width`
	* `alwaysRepaint {boolean} = false`
	* `clearEachFrame {boolean} = false`
	* `view {} = null`
	* `showFPS {boolean} = false`
	* `dtFixed {number} = 0`
	* `dtMinimum {number} = 0`
	* `keyListenerEnabled {boolean} = true`
	* `continuousInputCheck {boolean} = true` ---(if on mobile)
	* `repaintOnEvent {boolean} = true`
	* `mergeMoveEvents {boolean} = false`

### Class Method: Engine.get ()
1. Return: `{Application}`

Returns the instance of `GC.app.engine`


## GC.app.engine

A single `ui.Engine` is instantiated for games at `GC.app.engine`.

### GC.app.engine.updateOpts (opts)
1. `opts {object}`

### GC.app.engine.supports (key)
1. `key {}`
2. Return: `{}`

### GC.app.engine.getInput ()
1. Return: `{}`

### GC.app.engine.getEvents ()
1. Return: `{}`

### GC.app.engine.getKeyListener ()
1. Return: `{}`

### GC.app.engine.getCanvas ()
1. Return: `{}`

### GC.app.engine.getViewCtor ()
1. Return: `{View}`

Returns the actual timestep.View constructor.

### GC.app.engine.getView ()
1. Return `{View}` ---This view.

### GC.app.engine.setView (view)
1. `view {}`
2. Return: `{this}`

### GC.app.engine.show ()
1. Return: `{this}`

### GC.app.engine.hide ()
1. Return: `{this}`

### GC.app.engine.pause ()

### GC.app.engine.resume ()

### GC.app.engine.startLoop ()

### GC.app.engine.stopLoop (dtMin)
1. `dtMin {number}`
2. Return: `{this}`
  
### GC.app.engine.doOnTick (callback)
1. `callback {function}`

### GC.app.engine.render ()

### GC.app.engine.needsRepaint ()

### Event: \'Tick\', callback (dt)
1. `dt {number}`

Emitted each `Timer.onTick`.

To keep track of the amount of frames rendered over an
application's lifetime:

~~~
var frame = 0;

GC.app.engine.subscribe('Tick', function (dt) {
  frame += 1;
  console.log(frame);
});
~~~

### Event: \'Render\', callback (context)
1. `context {}`
