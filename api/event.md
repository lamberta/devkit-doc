# Events


## Class: event.PubSub

Publish and subscribe to messages dispatched on an object.

~~~
import event.PubSub as PubSub;
~~~

### new PubSub ()

Creates a PubSub instance.

~~~
var pubsub = new PubSub();
~~~

### pubsub.subscribe (signal, callback [, args ...])
1. `signal {string}` ---Signal to subscribe to.
2. `callback {function|string}` ---A function, or the name of method on an object.
3. `args {...*}` ---Optional arguments to bind.
4. Return: `{this}`

Subscribes a method to a signal, optionally binding a context and initial arguments. Subscribing to the `'__any'` signal is effectively a catch-all, and passes the actual signal as the first argument to the callback.

### pubsub.subscribe (signal, thisObj, callback [, args ...])

Subscribe to a signal, binding an object to the `this`
context in the callback function.

### pubsub.subscribeOnce (signal, callback [, args ...])
1. `signal {string}` ---Signal to subscribe to.
2. `callback {function|string}` ---A function or method name on an object.
3. `args {*}` ---Optional arguments to bind.

Temporarily subscribes a method to a signal, optionally binding a context and initial arguments. Once the signal has been received, unsubscribes the method. Subscribing to the `'__any'` signal is effectively a catch-all, and passes the actual signal as the first argument to the callback.

### pubsub.subscribeOnce (signal [, thisObj], callback [, args ...])

Subscribe to a signal once, binding an object to the `this`
context in the callback function.

### pubsub.unsubscribe (signal, callback)
1. `signal {string}`
3. `callback {function|string}` ---A function or method name on an object.

Unsubscribes the method from the signal.

### pubsub.unsubscribe (signal, thisObj [, callback])
1. `signal {string}`
2. `thisObj {object}`
3. `callback {function|string}` ---Optional function or method name on an object.

Unsubscribes anything subscribed with the `thisObj` context, optionally specifically targeting `callback`.

### pubsub.publish (signal [, args ...])
1. `signal {string}`
2. `args {...*}` ---Optional arguments to pass to the subscriber's handler function.
3. Return: `{this}`

Calls all subscribers to the signal with any arguments provided.


## Class: event.Callback

Construct and chain callbacks.

~~~
import event.Callback as Callback;
~~~

### new Callback ()

### callback.run (callback)
1. `callback {function}`
2. Return: `{this}`

Add a callback function to the list of callbacks.

### callback.run (thisObj, callback)
1. `thisObj {object}` 
2. `callback {string}`
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


## Class: event.input.InputEvent

~~~
import event.input.InputEvent as InputEvent;
~~~

### new InputEvent (id, type, x, y, root, target)
1. `id {string}`
2. `type {string}`
3. `x {number}`
4. `y {number}`
5. `root {View}`
6. `target {View}`

### event.clone ()
1. Return: `{InputEvent}`

Return a new `InputEvent` using this event's property values.

### event.cancel ()

Set `cancelled` property to `true`.

### event.cancelled
1. `{boolean} = false`

If true, event won't propogate.

### event.id

Unique ID for a particular input.

### event.type
1. `{string}`

Input event type.

### event.point
1. `{object} = {}`

Localized point coordinate, index by view uid.

### event.srcPoint
1. `{Point}`

Object containing `x` and `y` coordinates of the event.

### event.trace
1. `{array} = []`

List of view nodes from target to root.

### event.root
1. `{View|null}`

Top view where event is dispatched (the tree root).

### event.target
1. `{View|null}`

Bottom view where the event occured.

### event.when
1. `{}`

Time of dispatch.

### event.depth
1. `{number} = 0`

Number of levels of the tree from root to target.
