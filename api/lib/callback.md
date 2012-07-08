# `lib.Callback`

Utility to construct and chain callbacks.

## Methods

* __fired__ ---Has the callback been fired yet.
	* @return `{boolean}`

* __reset__ ---Allow the callbacks to be fired again.

* __clear__ ---Clears all registered callbacks.

* __forward (args)__ ---Pass the `args` object directly to `run()`.
	* @param `{object} args`

* __run (context, method)__ ---Add a callback to the list of callbacks by specifying the object and the method to call within that object. If callback has fired, run it straight away.
	* @param `{object} context` 
	* @param `{string} method`
	* @return `{this}`

* __run (callback)__ ---Add a callback function to the list of callbacks.
	* @param `{function} callback`
	* @return `{this}`

* __runOrTimeout (onFire, onTimeout, duration)__ ---Run two seperate callbacks depending on whether the specified timeout occurs or the callback is triggered.
	* @param `{function} onFire` ---Function to call if callback is or has fired.
	* @param `{function} onTimeout` ---Function to call if timeout occurs first.
	* @param `{number} duration` ---Amount of milliseconds before timeout occurs.

* __fire__ ---Fire all the registered callbacks. Any arguments passed to this will be passed into the registered callbacks.

* __chain (id)__ ---Returns a function that will not trigger the callbacks until all functions created by this is executed. The callback will be fired when every function created by `chain()` is executed. It essentially increases a pending counter, while the function it returns decreases it and if `0`, `fire()`.
	* @param `{number} id`
	* @return `{function}` ---A function that needs to be executed for the callbacks to be triggered.

## Usage


