# Events

## Class: event.Emitter

Publish and subscribe to events dispatched on an object.

~~~
import event.Emitter as Emitter;
~~~

### new Emitter ()

Create an Emitter instance.

~~~
var emitter = new Emitter();
~~~

### emitter.emit (type [, args ...])
1. `type {string}` ---The name of the event type.
2. `args {...*}` ---Optional arguments to pass to the subscriber's handler function.
3. Return: `{boolean}`

Emit an event to the object. Any of its handler functions
subscribed to the given event type are executed. Returns
`true` if the event was handled, otherwise `false`.

### emitter.on (type, callback)
1. `type {string}` ---The name of the event type.
2. `callback {function|string}` ---The dispatch function, or method name on an object.
3. Return: `{this}`

Add a callback function that is subscribed to a given event
type. The function will execute when that event is emitted to the object.

~~~
var emitter = new Emitter();

emitter.on('add', function (a, b) {
  var sum = a + b;
  console.log("The sum is: " + sum);
});

emitter.emit('add', 3, 5);  //=> true (console prints "The sum is 8")
~~~

### emitter.addListener (type, callback)
1. `type {string}` ---The name of the event type.
2. `callback {function|string}` ---The dispatch function, or method name on an object.
3. Return: `{this}`

This is an alias for `emitter.on`.

### emitter.once (type, callback)
1. `type {string}` ---The name of the event type.
2. `callback {function|string}` ---The dispatch function, or method name on an object.
3. Return `{this}`

Subscribe to an event, and remove the listener after it is received once.

~~~
emitter.once('one-time', callback);

emitter.emit('one-time'); //=> true
emitter.emit('one-time'); //=> false
~~~

### emitter.removeListener (type, callback)
1. `type {string}` ---The name of the event type.
2. `callback {function|string}` ---The dispatch function, or method name on an object.
3. Return `{this}`

Unsubscribe a listener. This function will no longer execute
when its event type is emitted to the object.

~~~
emitter.on('myevent', callback);
emitter.emit('myevent');                     //=> true
emitter.removeListener('myevent', callback);
emitter.emit('myevent');                     //=> false
~~~

### emitter.removeAllListeners (type)
1. `type {string}` ---The name of the event type.
2. Return `{this}`

Unsubscribe all listeners for a given event type.

~~~
emitter.on('myevent', callback);
emitter.on('myevent', callback);

emitter.removeAllListeners('myevent');
emitter.emit('myevent');               //=> false
~~~

### emitter.listeners (type)
1. `type {string}` ---The name of the event type.
2. Return: `{array}`

Returns an emitter's listener functions for a given event type.

~~~
emitter.on('myevent', callback);

emitter.listeners('myevent');  //=> [callback]
~~~

### emitter.setMaxListeners (n)
1. `n {number}`

By default, a warning message will display in the console if
more than 10 listeners are added to an object, which may
indicate a potential memory leak. Use this method to
increase this limit.

~~~
emitter.setMaxListeners(20);
~~~

### Events

#### \'newListener\', callback (type, handler)
1. `type {string}`
2. `handler {function}`

Emitted when a new listener is added to the object.


## Class: event.Callback

Construct and chain callbacks.

~~~
import event.Callback as Callback;
~~~

### new Callback ()

~~~
var callback = new Callback();
~~~

### callback.run ([thisArg,] callback)
1. `thisArg {object}` ---Optional object to use as `this`. Defaults to the callback itself.
2. `callback {function}`
3. Return: `{this}`

Add a callback to the callback chain by specifying the
object and the method to call within that object. If
callback has fired, run it straight away.

~~~
var cb = new Callback();
cb.run(function (name) { console.log("Hi, " + name); });
cb.fire("Louis"); //=> "Hi, Louis"

cb.run(function () { console.log("Runs immediately!"); }); //=> "Runs immediately!"
~~~

### callback.run (thisArg, callback [, args ...])

If arguments are curried to the function then the `thisArg`
object is required.

~~~
function meet_and_greet (a, b) {
  console.log(a + " say hi to " + b);
}
var cb = new Callback();
cb.run(null, meet_and_greet, "Carl");
cb.fire("Tim"); //=> "Carl say hi to Tim"
~~~

### callback.runOrTimeout (onFire, onTimeout, duration)
1. `onFire {function}` ---Run if the callback is fired before the timeout.
2. `onTimeout {function}` ---Executed if the timeout occurs before the callback is fired.
3. `duration {number}` ---Amount of milliseconds before a timeout occurs.

Run two separate callbacks depending on whether the specified timeout occurs or the callback is triggered.

~~~
var cb = new Callback();
cb.runOrTimeout(function () {
  console.log("Run if fired before 5 seconds.");
}, function () {
  console.log("Run after 5 seconds.");
}, 5000);
~~~

### callback.chain ()
1. Return: `{function}`

Chaining allows the loaded callback functions to run *after* another
function is explicitly executed. Each call to `chain` returns
a function that acts as a trigger, when every trigger is
called, the callback functions execute.

This can be used for managing the flow of asynchronous
tasks, such as loading external resources or making
connections over a network.

~~~
var cb = new Callback();
cb.run(function () {
  console.log("Resources loaded!");
});

var fn1 = cb.chain(),
    fn2 = cb.chain();

function load_images () {
  do_load_images():
  fn1();
}

function load_sounds () {
  do_load_sounds():
  fn2();
}

load_sounds();
load_images(); //=> "Resources loaded!"
~~~

### callback.fire ([args ...])
1. `args {...*}`

Fire all the registered callbacks. Any arguments passed to this will be passed into the registered callbacks.

### callback.fired ()
1.	Return: `{boolean}`

Check if the callback chain has been fired.

### callback.reset ()

Allow the callback chain to be fired again.

### callback.clear ()

Clears all of the registered callbacks.


## Class: event.input.InputEvent

When an input event is created it is passed sequentially up
a hierarchy of View objects, with the top-most view being
the main application.

Events are assigned a *target*, the view where it occurred,
and a *root*, the top-most view where it's dispatched. Event
propagation has two phases: capturing and bubbling.

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

### event.id
1. `{number}`

Each input type is identified by a unique ID, for example,
the mouse has the same identifier, and each finger touch
will have the same ID throughout the start-move-end process.

### event.type
1. `{string}`

Input event type.

### event.srcPoint
1. `{Point}`

Object containing `x` and `y` coordinates of the event.

### event.root
1. `{View|null}`

Top view where event is dispatched (the tree root).

### event.target
1. `{View|null}`

Bottom view where the event occurred.

### event.when
1. `{number}`

Total elapsed number of dt's accumulated since the beginning
of the application start.

### event.depth
1. `{number} = 0`

Number of levels of the tree from root to target.

### event.point
1. `{object} = {}`

Localized point coordinate, index by View UID.

### event.clone ()
1. Return: `{InputEvent}`

Return a new `InputEvent` using this event's property values.

### event.cancel ()

Cancel an event from propagating further.

### event.cancelled
1. `{boolean} = false`

Check if an event has been canceled, and therefore, will not
propagate further.
