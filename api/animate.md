# animate

Is a function to animate Views or objects. It interpolates
number properties over a given duration and with easing
functions.

~~~
import animate;
~~~

### animate (obj, groupId)
1. `obj {View|object}`
2. `groupID {number}`
3. Return: `{Animator}`

Create an Animator for a View or object. Passing a plain object allows you to perform arbitrary tweening.

### animate.setViewAnimator (animator)
1. `animator {Animator}`

Overrides the standard View animator with a custom one.

### animate.getGroup (id)
1. `id {number}`
2. Return: `{Group}`

Returns a Group.


## Class: animate.Animator

The main force of animate.

Inherits
:    1. [event.PubSub](./event.html#class-event.pubsub)

### new Animator (subject, group)
1. `subject {object}`
2. `group {Group}`

Creates a new Animator with an object with properties to animate, and a Group to add them to. (For internal or extending use only.)

~~~
var animator = animate(object);
~~~

### animator.clear ()
1. Return: `{this}`

Clears the animations currently scheduled.

### animator.pause ()

Pauses the animation.

### animator.isPaused ()
1. Return: `{boolean}`

Returns whether the animation is paused.

### animator.resume ()
1. Return: `{boolean}`

Resumes the animation if paused.

### animator.hasFrames ()
1. Return: `{boolean}`

Returns whether there are any frames left to animate.

### animator.wait (duration)
1. `duration {number}`
2. Return: `{this}`

Queues a delay (in milliseconds).

### animator.now (target, duration, transition, onTick)
1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
2. `duration {number}` ---Duration of the animation in milliseconds.
3. `transition {number}` ---Type of animation transition. See [`animate` properties](#properties).
4. `onTick {function}` ---A callback to control the speed of the transition.
5. Return: `{this}`

Starts an animation immediately.

An animation transition can be one of the following:

* `animate.LINEAR` ---Animation has the same speed from start to finish.
* `animate.EASE_IN` ---Animation has a slow start.
* `animate.EASE_OUT` ---Animation has a slow end.
* `animate.EASE_IN_OUT` ---Animation has both slow start and slow end.
* `animate.BOUNCE` ---Animation overshoots target and animates back to simulate bouncing.


### animator.now (callback)
1. `callback {function}`
2. Return: `{this}`

Trigger a callback.

### animator.then (target, duration, transition, onTick)
1. Return: `{this}`

Same as `.now()`, but adds to the queue.

~~~
animate(view).then({
  x: 500,
  y: 500
}, 1000);
~~~

### animator.then (callback)
1. `callback {function}`
2. Return: `{this}`

Same as `.now()`, but adds the callback to the queue.

### animator.debug ()
1. Return: `{this}`

Turns debug logging on.

### animator.commit ()
1. Return: `{this}`

### animator.next ()

Runs the next frame.


## Class: Group

A group of animations.

Inherits
:    1. [event.PubSub](./event.html#class-event.pubsub)

### group.get (id)
1. `id {number}`
2. Return: `{Animator}`

Returns an animation in the group.

### group.add (id, animation)
1. `id {number}`
2. `animation {Animator}`
3. Return: `{Animator}`

Adds an animation to the group and returns it.

### group.isActive ()
1. Return: `{boolean}`

Returns whether there are any running animations in the group.

### group.onAnimationFinish (animation)

Deletes the animation and publishes a `'Finish'` event.

### Events

#### \'Finish\'

Published when the group animation finishes.


## Example: Moving rectangles

Move over each rectangle to animate it to the edge of the device.

~~~
m4_include(./examples/api/animate.js)
~~~
