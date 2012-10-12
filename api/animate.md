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

~~~
animate(myView);

// typical usage is via method chaining
animate(myView).now({x: 100}).then({y: 100}); //moves a view 100px to the right, then 100px downwards.
~~~

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
:    1. [event.Emitter](./event.html#class-event.emitter)

### new Animator (subject, group)
1. `subject {object}`
2. `group {Group}`

Creates a new Animator with an object with properties to animate, and a Group to add them to. (For internal or extending use only.)

~~~
var animator = animate(object);
~~~

### animator.clear ()
1. Return: `{this}`

Clears the animations currently scheduled. This will stop the animation immediately, without completing the animation.

~~~
var myAnimation = animate(view).now({
  x: 100
}, 5000);
setTimeout( function() {
  myAnimation.clear(); //view.x has stopped in its tracks, without reaching the target value.
}, 1500);
~~~

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

Queues a delay (in milliseconds). These can also be used in lieu of `setTimeout` functions when used in conjunction with `animator.then(callback)`, which affords greater control than `setTimeout`.

~~~
animate(view).wait(500).then(function () {
  console.log("called after 500ms");
});
~~~

### animator.now (target, duration, transition, onTick)
1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
2. `duration {number}` ---Duration of the animation in milliseconds.
3. `transition {number}` ---Type of animation transition. See [`animate` properties](#properties).
4. `onTick {function}` ---A callback to control the speed of the transition.
5. Return: `{this}`

Starts an animation immediately.

An animation transition can be one of the following:

* `animate.linear` ---Animation has the same speed from start to finish.
* `animate.easeIn` ---Animation has a slow start.
* `animate.easeOut` ---Animation has a slow end.
* `animate.easeInOut` ---Animation has both slow start and slow end.

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

//these can be chained
animate(view).now({x: 10}, 300).then({
  x: 500,
  y: 500
}, 1000).then({
  x: 50,
  y: 50
}, 200).then({
  x: 100,
  y: 10
}, 1000);
~~~

### animator.then (callback)
1. `callback {function}`
2. Return: `{this}`

Same as `.now()`, but adds the callback to the queue.

~~~
animate.then(function(){
  console.log('calling back.')
});
~~~

### animator.debug ()
1. Return: `{this}`

Turns debug logging on.

### animator.commit ()
1. Return: `{this}`

Finishes the animation immediately, moving all values to their end position. Unlike `clear`, this runs `onAnimationFinish()` for the animation's group.

~~~
var myAnimation = animate(view).now({
  x: 100
}, 5000);
setTimeout( function() {
  myAnimation.commit(); //view.x is now at 100 and the animation is complete.
}, 1500);
~~~


## Class: Group

A group of animations. Typically used to track a complex animation involving multiple views.

~~~
animate(firstView, 'complexAnimation1').now({ //the second argument is the group id 
  x: 100
});
animate(secondView, 'complexAnimation1').now({
  x: 100
});

animate.getGroup('complexAnimation1').on('Finish', function(){
  console.log('The complex animation is finished!');
});
~~~

Inherits
:    1. [event.Emitter](./event.html#class-event.emitter)

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
