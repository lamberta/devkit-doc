# Application and Scene Graph

This document contains information on the classes and
instances that are initialized when the game engine is
created and the scene graph is drawn to the screen.

## Class: GC.Application

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### Application Settings

Application options are configured in the `_settings` object within an
instance of the user's `GC.Application`. Options must be set before the
`initUI` and `launchUI` methods are called.

* `logsEnabled {boolean}` ---Print the logging output to the browser console.
* `showFPS {boolean}` ---Display the running speed of the animation in frames per second.
* `alwaysRepaint {boolean} = false` ---Redraw the screen every animation tick. If the display requires continuous updates, you should set this to `true`.
* `repaintOnEvent {boolean}` ---Redraw the screen when a user event occurs, such as touch or click.
* `clearEachFrame {boolean} = true` ---Clear the screen on each animation frame. If set to `false`, the image will be drawn on top of the previous one.
* `continuousInputCheck {boolean} = true|false` ---Continually triggers the most recent `input:move` event on each
  tick. This allows for more responsive input. On a browser this defaults to `true`, and `false` on a mobile device.
* `keyListenerEnabled {boolean} = true` ---Enable the listener to detect keyboard events.
* `mergeMoveEvents {boolean}` ---Multiple move events in an animation frame are merged together by taking the last event.
* `view {View}` ---The root view of the application.
* `width {number}` ---The width of application view.
* `height {number}` ---The height of application view.
* `dtFixed {number} = 0` ---Fixed delta time.
* `dtMinimum {number} = 0` ---The minimum delta time to use between ticks in the game loop.
* `preload {array}` ---Preload resource groups.

For example, the settings in the `src/Application.js`
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

### Handler: initUI ()

A user defined function that is executed when the game
engine is set up and the scene graph is constructed. This
is called before the `launchUI` function.

### Handler: launchUI ()

A user defined function that serves as the entry point for
applications built on the Game Closure SDK. This is executed
after the splash screen is removed.

### Handler: onPause ()

Executed when the application process is sent to the background.

### Handler: onResume ()

Executed when the application resumes from a backgrounded state.


## Singleton: GC.app

A reference to the running application. When the application
is instantiated, the scene graph hierarchy and rendering
engine are created, and the application's `initUI` and
`launchUI` methods are called.

Inherits from:
:    1. {project}/src/Application ---The user defined application.
     2. [GC.Application](#class-gc.application)
     3. [event.Emitter](./event.html#class-event.emitter)

### GC.app.view
1. `{ui.StackView}`

The root of the application's scene graph. All child views
attached to this are rendered to the screen.

### GC.app.getCanvas ()
1. Return: `{HTMLCanvasElement}`

Returns the canvas element used to render graphics. If not
running in a browser environment, return a canvas-like
object. The HTML Canvas API is not supported completely on mobile devices.

### GC.app.run ()

Renders the application's scene graph and starts the animation loop.


## Class: ui.Engine

Manages a view hierarchy by rendering its scene graph and
controlling the animation loop. It has native, Canvas, and
DOM rendering backends.

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.Engine as Engine;
~~~

### new Engine ([options])
1. `options {object}`
	* `width {number} = device.width` ---Used to set the width of the rendering context.
	* `height {number} = device.height` ---Used to set the height of the rendering context.
	* `alwaysRepaint {boolean} = false` ---Redraw the screen every animation tick. If the display requires continuous updates, you should set this to `true`.
	* `clearEachFrame {boolean} = false` ---Clear the screen on each animation frame. If set to `false`, the image will be drawn on top of the previous one.
	* `view {ui.View} = null` ---The root view of the scene graph.
	* `showFPS {boolean} = false` ---Display the running speed of the animation in frames per second.
	* `dtFixed {number} = 0` ---Fixed delta time.
	* `dtMinimum {number} = 0` ---The minimum delta time to use between ticks in the game loop.
	* `keyListenerEnabled {boolean} = true` ---Enable the listener to detect keyboard events.
	* `continuousInputCheck {boolean} = true` ---Continually triggers the most recent `input:move` event on each tick. This allows for more responsive input. On a browser this defaults to `true`, and `false` on a mobile device.
	* `repaintOnEvent {boolean} = true` ---Redraw the screen when a user event occurs, such as touch or click.
	* `mergeMoveEvents {boolean} = false` ---Multiple move events in an animation frame are merged together by taking the last event.

### Class Method: Engine.get ()
1. Return: `{Application}`

If a rendering engine has been initialized, return
`GC.app.engine`, otherwise return `null`.


## Singleton: GC.app.engine

Inherits from:
:    1. [ui.Engine](#class-ui.engine)
     2. [event.Emitter](./event.html#class-event.emitter)

The game engine initializes a number of components,
including the input and key event listeners, the game loop,
the view hierarchy, and rendering the scene graph. A single
`ui.Engine` is instantiated for games at `GC.app.engine`.

### GC.app.engine.updateoptions (options)
1. `options {object}`

Update the options of of the instantiated `ui.Engine`.

### GC.app.engine.supports (option)
1. `option {string}` ---Key used to return a setting value for the application.
2. Return: `{*}` ---If the setting does not exist, return `undefined`.

Returns the value for an options declared in the
application's `this._settings` object. If the option does
not exist, return `undefined`.

~~~
GC.app.engine.supports('alwaysRepaint'); //=> true
~~~

### GC.app.engine.getEvents ()
1. Return: `{Array}`

Returns any events that haven't been dispatched by the engine yet.

### GC.app.engine.getCanvas ()
1. Return: `{Canvas}`

Returns the internal Canvas element used for rendering. If
not in a browser, return a Canvas-like object. Not all of
the HTML5 API is available across all devices.

### GC.app.engine.getView ()
1. Return: `{View}`

Returns the root view of the scene graph.

### GC.app.engine.setView (view)
1. `view {View}`
2. Return: `{this}`

Sets the root view of the scene graph.

### GC.app.engine.hide ()
1. Return: `{this}`

Hide the root Canvas element of the scene graph.

### GC.app.engine.show ()
1. Return: `{this}`

Display the Canvas element that contains the scene graph, but only when `useDOM` is turned off.

### GC.app.engine.pause ()

Pauses the game engine and disable the input listeners.

### GC.app.engine.resume ()

Resumes the game engine and enables the input listeners.

### GC.app.engine.stopLoop ()
1. Return: `{this}`

Stops the engine loop timer.

### GC.app.engine.startLoop ([dtMin])
1. `dtMin {number} = options.dtMinimum` ---Optional interval to use for the game loop timer.
2. Return: `{this}`

Starts the engine loop timer.

### GC.app.engine.render ()

Renders the entire scene graph by emitting a `'Render'`
event to the rendering context.

### GC.app.engine.needsRepaint ()
1. Return: `{this}`

Explicitly signals to the engine that the scene graph needs
to be redrawn.

### Events

#### \'Tick\', callback (dt)
1. `dt {number}`

Emitted on each frame of the game render loop.

For example, to keep track of the amount of frames rendered
over an application's lifetime:

~~~
var frame = 0;

GC.app.engine.on('Tick', function (dt) {
  frame += 1;
  console.log(frame);
});
~~~

#### \'Render\', callback (context)
1. `context {Context2D}` ---The internal canvas context.

This event is emitted every time the scene graph is drawn.
