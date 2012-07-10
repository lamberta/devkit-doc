# timestep.Engine

The game engine and scene graph manager for the Game Closure
SDK; it has Canvas and DOM rendering back-ends.

The game engine initializes a number of components,
including the input and key event listeners, the game loop,
the view hierarchy, and rendering the scene graph.

A single `timestep.Engine` is instantiated for games at `GC.app.engine`.

## Class: timestep.Engine

Inherits
:    1. [lib.PubSub](./lib-pubsub.html)

### new timestep.Engine ([options])
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

### engine.updateOpts (opts)
1. `opts {object}`

### engine.supports (key)
1. `key {}`
2. Return: `{}`

### engine.getInput ()
1. Return: `{}`

### engine.getEvents ()
1. Return: `{}`

### engine.getKeyListener ()
1. Return: `{}`

### engine.getCanvas ()
1. Return: `{}`

### engine.getViewCtor ()
1. Return: `{View}`

Returns the actual timestep.View constructor.

### engine.getView ()
1. Return `{View}` ---This view.

### engine.setView (view)
1. `view {}`
2. Return: `{this}`

### engine.show ()
1. Return: `{this}`

### engine.hide ()
1. Return: `{this}`

### engine.pause ()

### engine.resume ()

### engine.startLoop ()

### engine.stopLoop (dtMin)
1. `dtMin {number}`
2. Return: `{this}`
  
### engine.doOnTick (callback)
1. `callback {function}`

### engine.render ()

### engine.needsRepaint ()

### Event: \'Tick\', callback ()

Emitted each `Timer.onTick`.

## Class Method: timestep.Engine.get ()
1. Return: `{Application}`

Returns the instance of `GC.app.engine`
