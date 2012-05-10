# `GC.Application`

`GC.app` is an instance of the user's `shared/Application.js` file,
which inherits of the sdk's
`_api/client/Application.js` ---which executes the `initUI` function.
`GC.app.engine` is an instance of `timestep.Application` and
its view hierarchy is at `GC.app.view`; it controls the tick
and the rendering.
`GC.app.view` is a shortcut to `GC.app.engine._view`.
`GC.app.initUI` is run after the `GC.app.engine` and
`GC.app.view` have been created.


## Inheritence

1. shared/Application.js
2. sdk/_api/client/Application.js
3. [lib.PubSub](./lib-pubsub.html)


## Settings

Setting options are added to a `_settings` object within an
instance of `GC.Application`. This should be set before the
`initUI` and `launchUI` methods are called.

* __logsEnabled__ `{boolean}` ---show the logs in the console.
* __noTimestep__ `{boolean}` ---(Deprecated) don't load timestep.
* __showFPS__ `{boolean}` ---show the frames per second display in the top left corner.
* __alwaysRepaint__ `{boolean}` ---always redraw on each frame. Defaults to `false` but for real-time games should be `true`.
* __repaintOnEvent__ `{boolean}` ---only redraw when a user event occurs such as touch/click.
* __clearEachFrame__ `{boolean}` ---clear the screen on each frame. Defaults to `true`.
* __continuousInputCheck__ `{boolean}` ---keep triggering the previous input event for more responsive input (on each tick)
* __keyListenerEnabled__ `{boolean}` ---enable the keyboard listener. Defaults to `true`.
* __mergeMoveEvents__ `{boolean}` ---multiple move events in a tick/frame are merged by taking the last event
* __view__ `[{timestep.View}]()` ---root view
* __width__ `{number}` ---width of application view
* __height__ `{number}` ---height of application view
* __dtFixed__ `{number}` `[0]` ---fixed delta time
* __dtMinimum__ `{number}` `[0]` ---nevermind (not used)
* __preload__ `{array}` ---preload resource groups.


## Methods

* __getCanvas__
	* @return `{HTMLCanvasElement}`

* __run__ ---Displays the `GC.app.engine` hierarchy and starts the animation loop.

## Properties

These functions should be overridden by the user in their application:

* __initUI__ `{function}`

* __launchUI__ `{function}`


These callbacks coincide with phone events that indicate
when the screen looses and regains focus.

* __onPause__ `{function}` --callback()

* __onResume__ `{function}` --callback()


## Usage

`window.DEV_MODE` defaults to `true`.

~~~
exports = Class(GC.Application, function () {
  this._settings = {
    logsEnabled: window.DEV_MODE,
	noTimestep: false,
	showFPS: window.DEV_MODE,
	alwaysRepaint: true
  };

  this.initUI = function () {};

  this.launchUI = function () {
    // let's go! ...
  };
});
~~~
