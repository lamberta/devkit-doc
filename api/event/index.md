# event

## Class: event.PubSub

Publish and subscribe to messages dispatched on an object.

~~~
import event.PubSub as PubSub;
~~~

### new PubSub ()

Creates a PubSub instance.

### pubsub.publish (signal [, args, ...])
1. `signal {string}`
2. `args {*}`
3. Return: `{this}`

Calls all subscribers to the signal with any arguments provided.

### pubsub.subscribe (signal [, thisObj], method [, args, ...])
1. `signal {string}` ---Signal to subscribe to.
2. `thisObj {object}` ---Optional context to bind.
3. `method {function|string}` ---A function or method name on an object.
4. `args {*}` ---Optional arguments to bind.

Subscribes a method to a signal, optionally binding a context and initial arguments. Subscribing to the `'__any'` signal is effectively a catch-all, and passes the actual signal as the first argument to the callback.

### pubsub.subscribeOnce (signal [, thisObj], method)
1. `signal {string}` ---Signal to subscribe to.
2. `thisObj {object}` ---Optional context to bind.
3. `method {function|string}` ---A function or method name on an object.
4. `args {*}` ---Optional arguments to bind.

Temporarily subscribes a method to a signal, optionally binding a context and initial arguments. Once the signal has been received, unsubscribes the method. Subscribing to the `'__any'` signal is effectively a catch-all, and passes the actual signal as the first argument to the callback.

### pubsub.unsubscribe (signal, method)
1. `signal {string}`
3. `method {function|string}` ---A function or method name on an object.

Unsubscribes the method from the signal.

### pubsub.unsubscribe (signal, thisObj [, method])
1. `signal {string}`
2. `thisObj {object}`
3. `method {function|string}` ---Optional function or method name on an object.

Unsubscribes anything subscribed with the `thisObj` context, optionally specifically targeting `method`.


## Class: event.Callback

Construct and chain callbacks.

~~~
import event.Callback as Callback;
~~~

### new Callback ()

### callback.run (fn)
1. `fn {function}`
2. Return: `{this}`

Add a callback function to the list of callbacks.

### callback.run (thisObj, method)
1. `thisObj {object}` 
2. `method {string}`
3. Return: `{this}`

Add a callback to the callback chain by specifying the
object and the method to call within that object. If
callback has fired, run it straight away.
	
### callback.runOrTimeout (onFire, onTimeout, duration)
1. `onFire {function}` ---Function to call if callback is or has fired.
2. `onTimeout {function}` ---Function to call if timeout occurs first.
3. `duration {number}` ---Amount of milliseconds before timeout occurs.

Run two seperate callbacks depending on whether the specified timeout occurs or the callback is triggered.

### callback.chain (id)
1. `id {number}`
2. Return: `{function}`

Returns a function that will not trigger the callbacks until all functions created by this is executed. The callback will be fired when every function created by `chain()` is executed. It essentially increases a pending counter, while the function it returns decreases it and if `0`, `fire()`.

### callback.fire ([args ...])

Fire all the registered callbacks. Any arguments passed to this will be passed into the registered callbacks.

### callback.fired ()
1.	Return: `{boolean}`

Check if the callback chain has been fired.

### callback.reset ()

Allow the callback chain to be fired again.

### callback.clear ()

Clears all of the registered callbacks.

### callback.forward (args)
1. `args {array}`

Apply the `args` array as arguments to `callback.run()`.
