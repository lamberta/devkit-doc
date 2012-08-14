# Application and Scene Graph


## Class: GC.Application

Inherits:
:    1. [event.Emitter](./event.html#class-event.emitter)

### Settings

Application options are configured in the `_settings` object within an
instance of the user's `GC.Application`. Options must be set before the
`initUI` and `launchUI` methods are called.

* `logsEnabled {boolean}` ---Print the logging output to the browser console.
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

For example, the settings in the `shared/Application.js`
file of an empty project can be changed:

~~~
exports = Class(GC.Application, function () {
  this._settings = {
    logsEnabled: true,
    showFPS: true,
    alwaysRepaint: true
  };

  this.initUI = function () {};
  this.launchUI = function () {};
});
~~~

### Event handlers

#### initUI ()

Called before `launchUI`.

#### launchUI ()

A user defined function that serves as the entry point for
applications built on the Game Closure SDK.

#### onPause ()

Executed when the application process is sent to the background.

#### onResume ()

Executed when the application resumes.


## Example: Hello, World!

We'll step through a simple example by creating a new
project, and using the following code as the
`shared/Application.js` file: 

~~~
m4_include(./examples/api/hello-world.js)
~~~

First, the `ui.TextView` module is imported in to the file and aliased
as `TextView`. Next, a constructor function is defined for
our application, it inherits from `GC.Application` and is
assigned to `exports`, which ensures that it will be
executed when the application is run. The application's
`launchUI` method is overridden and will serve as the entry
point of our example code. Here, we create the display text
using the `TextView`, setting the color and font size. To
render the text object, it must be added to the scene
graph, so we attach it by setting the node's parent
view---or `superview`---as the root view object, which is
`GC.app.view`. This is a property on `GC.app`, which is the
instance of our application, and is introduced next.


## Singleton: GC.app

A reference to the running application. When the application
is instantiated, the scene graph hierarchy and rendering
engine are created, and the application's `initUI` and
`launchUI` methods are called.

Inherits:
:    1. {project}/shared/Application
     2. [GC.Application](#class-gc.application)
     3. [event.Emitter](./event.html#class-event.emitter)

### GC.app.view
1. `{ui.StackView}`

The root of the application's scene graph. All child views
attached to this will be rendered to the screen.

### GC.app.getCanvas ()
1. Return: `{HTMLCanvasElement}`

Returns the canvas element used to render graphics. If not
running in a browser environment, returns a canvas-like
object.

### GC.app.run ()

Renders the application's scene graph and starts the animation loop.


## Class: ui.Engine

Manages a view hierarchy by rendering its scene graph and
controlling the animation loop. It has native, Canvas, and
DOM rendering backends.

Inherits
:    1. [event.Emitter](./event.html#class-event.emitter)

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

If a rendering engine has been initialized, return
`GC.app.engine`, otherwise, return `null`.


## Singleton: GC.app.engine

Inherits:
:    1. [ui.Engine](#class-ui.engine)
     2. [event.Emitter](./event.html#class-event.emitter)

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

### GC.app.engine.render ()

Supposedly renders everything.

### GC.app.engine.needsRepaint ()
1. Return: `{this}`

Signals that the engine needs to repaint.

### Events

#### \'Tick\', callback (dt)
1. `dt {number}`

Emitted each `Timer.onTick`.

To keep track of the amount of frames rendered over an
application's lifetime:

~~~
var frame = 0;

GC.app.engine.on('Tick', function (dt) {
  frame += 1;
  console.log(frame);
});
~~~

#### \'Render\', callback (context)
1. `context {Context2D}`

Called every render, with the internal canvas context.
