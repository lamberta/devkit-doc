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
3. Return: `{Animator|ViewAnimator}`

Create an Animator for a View or object. Passing an empty
object literal `{}` allows you to perform arbitrary timing.

### animate.setViewAnimator (animator)
1. `animator {Animator}`

### animate.getGroup (i)
1. `i {number}`
2. Return: `{Group}`


## Class: Animator

Inherits
:    1. [event.PubSub](./event.html#class-event.pubsub)

### animator.clear ()
1. Return: `{this}` ---This instance of Animator.

Clear the current animations scheduled.

### animator.pause ()

Pause the animation.

### animator.isPaused () ---Is the animation paused.
1. Return: `{boolean}`

### animator.wait (duration)
1. `duration {number}`

### animator.resume ()

Resume the animation if paused.

### animator.hasFrames ()

If there are any frames to animate.

### animator.now (target, duration, transition, onTick)
1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
2. `duration {number}` ---Duration of the animation in milliseconds.
3. `transition {number}` ---Type of animation transition. See [`animate` properties](#properties).
4. `onTick {function}` ---A callback to control the speed of the transition.
5. Return: `{number}` ---A float value for how far the animation transition should be.

Start an animation right now.

An animation transition can be one of the following:

* `animate.LINEAR` ---Animation has the same speed from start to finish.
* `animate.EASE_IN` ---Animation has a slow start.
* `animate.EASE_OUT` ---Animation has a slow end.
* `animate.EASE_IN_OUT` ---Animation has both slow start and slow end.
* `animate.BOUNCE` ---Animation overshoots target and animates back to simulate bouncing.


### animator.now (callback)
1. `callback {function}`

Trigger a callback.

### animator.then (target, duration, transition, onTick)

Same as `now()` but will animate after the previous animation is over.

~~~
animate(view).then({
  x: 500,
  y: 500
}, 1000);
~~~

### animator.then (callback)
1. `callback {function}`

### animator.debug ()
1. Return: `{this}`

Set `_debug` to `true`.

### animator.commit ()
1. Return: `{this}`

### animator.next ()


## Class: Group

A group of styles that animate independently of other styles.

Inherits
:    1. [event.PubSub](./event.html#class-event.pubsub)

### group.get (id)
1. `id {number}`
2. Return: `{}`

### group.add (id, q)
1. `id {}`
2. `q {}`
3. Return: `{}`

### group.isActive ()
1. Return: `{boolean}`

### group.onAnimationFinish (anim)

Deletes the animation and publishes a `'Finish'` event.

### Event: \'Finish\'

Published when the group animation finishes.


## Class: Frame

### frame.onTick

### frame.exec

### frame.onInterrupt

### frame.subject

### frame.target

### frame.duration

### frame.transition


## Example: Moving rectangles

Move over each rectangle to animate it to the edge of the device.

~~~
m4_include(./examples/api/animate.js)
~~~
