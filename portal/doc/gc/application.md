# `GC.Application`

`GC.app` is an instance of the user's `shared/Application.js` file,
which inherits from the sdk's `_api/client/Application.js`. When this object is
instantiated, `GC.app.engine` and `GC.app.view` are created,
and the `initUI` method in the user's application is called.

`GC.app.engine` is an instance of [`timestep.Application`](./timestep-application.html) and
manages the view hierarchy contained in `GC.app.view`; it
controls the animation tick and renders the scene graph.

`GC.app.view` is a shortcut to `GC.app.engine._view`.


## Inheritence

1. shared/Application.js
2. sdk/_api/client/Application.js
3. [lib.PubSub](./lib-pubsub.html)


## Settings

Application options are added to the `_settings` object within an
instance of the user's `GC.Application`. Options need to be set before the
`initUI` and `launchUI` methods are called, since they reference this object.

* __logsEnabled__ `{boolean}` ---Print the logging output to the browser console.
* __noTimestep__ `{boolean} = false` ---Do not load the timestep library. *Deprecated*
* __showFPS__ `{boolean}` ---Display the running speed of the animation in frames per second.
* __alwaysRepaint__ `{boolean} = false` ---Redraw the
  screen every animation tick. If the display requires continuous
  updates, you should set this to `true`.
* __repaintOnEvent__ `{boolean}` ---Redraw the screen when a
  user event occurs, such as touch or click.
* __clearEachFrame__ `{boolean} = true` ---Clear the screen
  on each animation frame. If set to `false`, the image will
  be drawn on top of the previous one.
* __continuousInputCheck__ `{boolean} = true|false` ---Continually
  triggers the most recent `input:move` event on each
  tick. This allows for more responsive input. On a browser
  this defaults to `true`, and `false` on a mobile device.
* __keyListenerEnabled__ `{boolean} = true` ---Enable the listener to detect keyboard events.
* __mergeMoveEvents__ `{boolean}` ---Multiple move events in
  an animation frame are merged together by taking the last event.
* __view__ `{View}` ---The root view of the application.
* __width__ `{number}` ---The width of application view.
* __height__ `{number}` ---The height of application view.
* __dtFixed__ `{number} = 0` ---Fixed delta time.
* __dtMinimum__ `{number} = 0` ---*Not used?*
* __preload__ `{array}` ---Preload resource groups.


## Methods

* __getCanvas__ ---Returns the canvas element used to render
  graphics. If not running in a browser environment, returns a canvas-like object
	* @return `{HTMLCanvasElement}`

* __run__ ---Displays the scene graph managed by `GC.app.engine` and starts the animation loop.

## Properties

These are functions that can be overridden by the user in their application:

* __initUI__ `{function}` ---

* __launchUI__ `{function}` ---A user defined function that
  serves as the entry point for applications built on the
  Game Closure SDK.

These callbacks coincide with phone events that indicate
when the screen looses and regains focus.

* __onPause__ `{function}` ---This callback is executed when
  the application process is sent to the background.

* __onResume__ `{function}` ---This callback is executed
  when the application resumes.


## Usage

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
