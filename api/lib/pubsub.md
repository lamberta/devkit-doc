# lib.PubSub

Pubish and subscribe to messages dispatched on an object.

## Class: lib.PubSub

### new lib.PubSub ()

### pubsub.publish (signal)
1. `signal {string}`
2. Return: `{this}`

### pubsub.subscribe (signal [, thisObj], method)
1. `signal {string}`
2. `thisObj {object}` ---Optional.
3. `method {function|string}` ---A function or method name on an object.

### pubsub.subscribeOnce (signal [, thisObj], method)
1. `signal {string}`
2. `thisObj {object}` ---Optional.
3. `method {function|string}` ---A function or method name on an object.

### pubsub.unsubscribe (signal, thisObj, method)
1. `signal {string}`
2. `thisObj {object}` ---Optional.
3. `method {function|string}` ---A function or method name on an object.
