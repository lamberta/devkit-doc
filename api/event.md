# Events

## Class: event.PubSub

Publish and subscribe to events dispatched on an object.

~~~
import event.PubSub as PubSub;
~~~

### new PubSub ()

Creates a PubSub instance.

~~~
var pubsub = new PubSub();
~~~

### pubsub.publish (event [, args ...])
1. `event {string}`
2. `args {...*}` ---Optional arguments to pass to the subscriber's handler function.
3. Return: `{this}`

Emit an event to the PubSub object. Any listener functions
subscribed to the given event are executed.

### pubsub.subscribe (event, [thisArg,] listener)
1. `event {string}` ---Event to subscribe the listener.
2. `thisArg {object}` ---Optional argument to use as `this` in the listener function. Defaults to the global context.
3. `listener {function|string}` ---The dispatch function, or method name on an object.
4. Return: `{this}`

Add a listener function that is subscribed to an event
type. The function will execute when an object is registered
for a specific event, and that event is published to the object.

Subscribing to the `'__any'` event will execute the listener
function on every received event, with the actual event name
passed as the first argument to the listener.

### pubsub.subscribe (event, thisArg, listener [, args ...])
1. `event {string}` ---Event to subscribe the listener.
2. `thisArg {object}` ---Object used as `this` in the listener function.
3. `listener {function|string}` ---The dispatch function, or method name on an object.
4. `args {...*}` ---Optionally curry arguments to the listener.
5. Return: `{this}`

If arguments are curried to the listener function, then the
`thisArg` must be explicitly passed.

~~~
function run_away (name) {
  console.log("Run, " + name + ", run!");
}

var j = new PubSub(),
    s = new PubSub();

j.subscribe('run', run_away);
s.subscribe('run', null, run_away, "Stephanie");

j.publish('run', "Jimmy"); //=> "Run, Jimmy, run!"
s.publish('run');          //=> "Run, Stephanie, run!"
~~~

### pubsub.subscribeOnce (event, [thisArg,] listener)
1. `event {string}` ---Event to subscribe the listener.
2. `thisArg {object}` ---Optional argument to use as `this` in the listener function. Defaults to the global context.
3. `listener {function|string}` ---The dispatch function, or method name on an object.
4. Return `{this}`

Subscribe to a event once, optionally binding an object to
the `this` context in the listener function. Once an event
is received, the listener is unsubscribed.

Subscribing to the `'__any'` event will execute the listener
function on every received event, with the actual event name
passed as the first argument to the listener.

### pubsub.subscribeOnce (event, thisArg, listener [, args ...])
1. `event {string}` ---Event to subscribe the listener.
2. `thisArg {object}` ---Object used as `this` in the listener function.
3. `listener {function|string}` ---The dispatch function, or method name on an object.
4. `args {*}` ---Optionally curry arguments to the listener.
5. Return `{this}`

If arguments are curried to the listener function, then the
`thisArg` must be explicitly passed.

~~~
pubsub.subscribeOnce('one-time', function () {
  console.log("Once is all you get.");
});

pubsub.publish('one-time'); //=> "Once is all you get."
pubsub.publish('one-time'); //=> ... crickets ...
~~~

### pubsub.unsubscribe (event [, thisArg, listener])
1. `event {string}` ---Event to unsubscribe the listener.
2. `thisArg {object}` ---Object used as `this` in the listener function.
3. `listener {function|string}` ---The optional dispatch function, or method name on an object.
4. Return: `{this}`

Unsubscribe a listener for a specific event type. If a
listener function i not provided, unsubscribe all listeners
on an event.

~~~
pubsub.subscribe('try-it', function () {
  console.log("Ta-da!");
});

pubsub.publish('try-it');     //=> "Ta-da!"
pubsub.unsubscribe('try-it');
pubsub.publish('try-it');     //=> ... tumbleweed rolls by ...
~~~


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
2. Return: `{function}`

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

Set `canceled` property to `true`.

### event.canceled
1. `{boolean} = false`

If true, event won't propagate.

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

Bottom view where the event occurred.

### event.when
1. `{}`

Time of dispatch.

### event.depth
1. `{number} = 0`

Number of levels of the tree from root to target.
