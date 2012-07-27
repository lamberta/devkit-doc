# Application

`GC.app.engine` is an instance of [`timestep.Application`](./timestep-application.html) and
manages the view hierarchy contained in `GC.app.view`; it
controls the animation tick and renders the scene graph.

`GC.app.view` is a shortcut to `GC.app.engine._view`.

## Class: GC.Application

Inherits:
:    1. shared/Application.js
     2. sdk/_api/client/Application.js
     3. [lib.PubSub](./lib-pubsub.html)


Application options are added to the `_settings` object within an
instance of the user's `GC.Application`. Options need to be set before the
`initUI` and `launchUI` methods are called, since they reference this object.

* `logsEnabled {boolean}` ---Print the logging output to the browser console.
* `noTimestep {boolean} = false` ---Do not load the timestep library. *Deprecated*
* `showFPS {boolean}` ---Display the running speed of the animation in frames per second.
* `alwaysRepaint {boolean} = false` ---Redraw the screen
  every animation tick. If the display requires continuous
  updates, you should set this to `true`.
* `repaintOnEvent {boolean}` ---Redraw the screen when a
  user event occurs, such as touch or click.
* `clearEachFrame {boolean} = true` ---Clear the screen
  on each animation frame. If set to `false`, the image will
  be drawn on top of the previous one.
* `continuousInputCheck {boolean} = true|false` ---Continually
  triggers the most recent `input:move` event on each
  tick. This allows for more responsive input. On a browser
  this defaults to `true`, and `false` on a mobile device.
* `keyListenerEnabled {boolean} = true` ---Enable the listener to detect keyboard events.
* `mergeMoveEvents {boolean}` ---Multiple move events in
  an animation frame are merged together by taking the last event.
* `view {View}` ---The root view of the application.
* `width {number}` ---The width of application view.
* `height {number}` ---The height of application view.
* `dtFixed {number} = 0` ---Fixed delta time.
* `dtMinimum {number} = 0` ---*Not used?*
* `preload {array}` ---Preload resource groups.


## GC.app

`GC.app` is an instance of the user's `shared/Application.js` file,
which inherits from the sdk's `_api/client/Application.js`. When this object is
instantiated, `GC.app.engine` and `GC.app.view` are created,
and the `initUI` method in the user's application is called.

### GC.app.getCanvas ()
1. Return: `{HTMLCanvasElement}`

Returns the canvas element used to render graphics. If not
running in a browser environment, returns a canvas-like
object.

### GC.app.run ()

Displays the scene graph managed by `GC.app.engine` and
starts the animation loop.


### Callback handler: GC.app.initUI

### Callback handler: GC.app.launchUI

A user defined function that serves as the entry point for
applications built on the Game Closure SDK.

### Callback handler: GC.app.onPause

Executed when the application process is sent to the background.

### Callback handler: GC.app.onResume

Executed when the application resumes.


## Example: Create a new project

Within a newly created project, this is an example of an
empty application used at `example_app/shared/Application.js`.

~~~
exports = Class(GC.Application, function () {
  /* window.DEV_MODE defaults to true during development.
   */
  this._settings = {
    logsEnabled: window.DEV_MODE,
	showFPS: window.DEV_MODE,
	alwaysRepaint: true
  };

  this.initUI = function () {};

  this.launchUI = function () {
    // let's go! ...
  };
});
~~~


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

If an engine has yet to be created, returns `null`, otherwise returns the singleton.


## GC.app.engine

The game engine and scene graph manager for the Game Closure
SDK; it has Canvas and DOM rendering back-ends.

The game engine initializes a number of components,
including the input and key event listeners, the game loop,
the view hierarchy, and rendering the scene graph. A single
`ui.Engine` is instantiated for games at `GC.app.engine`.

### GC.app.engine.updateOpts (opts)
1. `opts {object}`

Updates any options.

### GC.app.engine.supports (key)
1. `key {string}`
2. Return: `{*}`

Returns the value of the option `key`.

### GC.app.engine.getInput ()
1. Return: `{Input}`

Returns the internal Input thingy (from runtimes).

### GC.app.engine.getEvents ()
1. Return: `{Array}`

Returns any events that haven't been dispatched yet.

### GC.app.engine.getKeyListener ()
1. Return: `{KeyListener}`

Returns the internal KeyListener (from runtimes).

### GC.app.engine.getCanvas ()
1. Return: `{Canvas}`

Returns the internal Canvas (from runtimes).

### GC.app.engine.getView ()
1. Return: `{View}`

Returns the root view.

### GC.app.engine.setView (view)
1. `view {View}`
2. Return: `{this}`

Sets the root view.

### GC.app.engine.show ()
1. Return: `{this}`

Shows the canvas, but only when useDOM is off.

### GC.app.engine.hide ()
1. Return: `{this}`

Hides the canvas.

### GC.app.engine.pause ()

Calls `.stopLoop()` and disables the key listener.

### GC.app.engine.resume ()

Calls `.startLoop()` and enables the key listener.

### GC.app.engine.startLoop ([dtMin])
1. `dtMin {number}`
2. Return: `{this}`

Starts the engine loop. If `dtMin` is provided, uses it as the argument to Timer.start(), instead of opts.dtMinimum.

### GC.app.engine.stopLoop ()
1. Return: `{this}`

Stops the engine loop.
  
### GC.app.engine.doOnTick (callback)
1. `callback {function}`

Registers `callback` to be called every tick.

### GC.app.engine.render ()

Supposedly renders everything.

### GC.app.engine.needsRepaint ()
1. Return: `{this}`

Signals that the engine needs to repaint.

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
1. `context {Context2D}`

Called every render, with the internal canvas context.
