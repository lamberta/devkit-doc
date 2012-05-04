`GC.app` is an instance of the user's `shared/Application.js` file,
which inherits of the sdk's `_api/client/Application.js`. Inits the `initUI` function.

`GC.app.engine` is an instance of `timestep.Application` and
its view hierarchy is at `GC.app.view`. It controls the tick
and the rendering.

`GC.app.view === GC.app.engine._view`

`GC.app.initUI` is run after the `GC.app.engine` and
`GC.app.view` have been created.


Gc.app is an instace of your application file.
tc.app,engine is an instance of the timeset.App
gc.app.view is a shortcut to GC.app.engine views

# `Application`

## Inheritence

1. `shared/Application.js`
2. `sdk/_api/client/Application.js`
3. [lib.PubSub](../lib/pubsub.md)


## Settings

Setting options are added to a `_settings` object within an
instance of `GC.Application`. This should be set before the
`initUI` and `launchUI` methods are called.

* __logsEnabled__ `{boolean}`
* __noTimestep__ `{boolean}`
* __showFPS__ `{boolean}`
* __alwaysRepaint__ `{boolean}`
* __repaintOnEvent__ `{boolean}`
* __clearEachFrame__ `{boolean}`
* __continuousInputCheck__ `{boolean}`
* __keyListenerEnabled__ `{boolean}`
* __mergeMoveEvents__ `{boolean}`
* __view__
* __width__ `{number}`
* __height__ `{number}`
* __dtFixed__ `{number}` `[0]`
* __dtMinimum__ `{number}` `[0]`
* __preload__ `{array}` ---Preload resource groups.


## Methods

* __getCanvas__

	@return `{HTMLCanvasElement}`

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
