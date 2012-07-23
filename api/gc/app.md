# GC.Application

`GC.app` is an instance of the user's `shared/Application.js` file,
which inherits from the sdk's `_api/client/Application.js`. When this object is
instantiated, `GC.app.engine` and `GC.app.view` are created,
and the `initUI` method in the user's application is called.

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


### app.getCanvas ()
1. Return: `{HTMLCanvasElement}`

Returns the canvas element used to render graphics. If not
running in a browser environment, returns a canvas-like
object.

### app.run ()

Displays the scene graph managed by `GC.app.engine` and
starts the animation loop.


### Callback handler: app.initUI

### Callback handler: app.launchUI

A user defined function that serves as the entry point for
applications built on the Game Closure SDK.

### Callback handler: app.onPause

Executed when the application process is sent to the background.

### Callback handler: app.onResume

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
