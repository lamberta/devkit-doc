# Module: animate

`animate` is a module used for programmatically
moving, changing, and animating properties, especially
[ui.View](../api/ui-view.html) properties. It is a
"tweening engine" that interpolates between screen
positions, opacity, or any other numeric JavaScript
property. It's most important feature is that it's optimized
for mobile devices using native code, so you should favor
this module instead of manual position calculations within
your game loop.

## Examples

* [Basic Animation](../example/animation-basic/)
* [Continuous Animation](../example/animation-continuous/)
* [Pause an Animation](../example/animation-pause/)
* [Create a Trail Animation](../example/animation-trail/)
* [Multiple Animations](../example/animation-multibox/)


## Methods

### animate (obj, groupID)

Parameters
:    1. `obj {ui.View|object}` ---The view or object to animate.
     2. `groupID {number}` ---The group identifier for this animation, [see below](#class-group)

Returns
:    1. `{Animator}` ---Returns the animator object so the function call can be chained.

Create an Animator for a [View](../api/ui-view.html) or
generic JavaScript object. Note that when animating a
[View](../api/ui-view.html) object, the animation engine
will tween based on the object's `style` property. But when
passing in a generic object, the animation engine will tween
based on the object's top level properties instead.

~~~
import animate;

var animator = animate(myView);

// typical usage is via method chaining
// moves a view 100px to the right, then 100px downwards.
animate(myView).now({x: 100}).then({y: 100});
~~~

### animate.getGroup (id)

Parameters
:    1. `id {number}` ---The group identifier of the group to fetch.

Returns
:    1. `{Group}`

Returns the Group with the specified
identifier. [See below](#class-group) for more information on groups.


# Class: animate.Animator

Inherits from
:    1. [event.Emitter](./event.html#class-event.emitter)

The animation engine.


## Methods

### new Animator (subject, group)

Parameters
:    1. `subject {object}` ---The view or object to animate.
     2. `group {Group}` ---The group object for this animation, [see below](#class-group)

Creates a new Animator with a [View](../api/ui-view.html) or
object to animate, with an optional Group to add them
to. Note: the preferred method for creating an animator
object is not to use the `new` keyword, but instead to
invoke the animate function:

~~~
// do not use:
// var animator = new animate.Animator(object);
// instead use this:
var animator = animate(object);
~~~

### clear ()

Returns
:    1. `{this}`

Clears any animation frames currently scheduled. This will
stop the animation immediately without completing any
additional frames.

~~~
var myAnimation = animate(view).now({x: 100}, 5000);

setTimeout( function() {
  myAnimation.clear(); //view.x has stopped in its tracks, without reaching the target value.
}, 1500);
~~~

### pause ()

Pauses the animation.

### isPaused ()

Returns
:    1. `{boolean}`

Returns whether the animation is paused.

### resume ()

Resumes the animation if paused.

### hasFrames ()

Returns
:    1. `{boolean}`

Returns whether there are any frames left in the animation queue.

### wait (duration)

Parameters
:    1. `duration {number}` ---Duration of the wait in milliseconds.

Returns
:    1. `{this}`

Adds a delay (in milliseconds) to the animation queue. This
function can be invoked instead of `setTimeout`, and when
used in conjunction with `animator.then(callback)` affords
greater timing control than `setTimeout`.

~~~
animate(view).wait(500).then(function () {
  console.log("called after 500ms");
});
~~~

### now (target, duration, transition, onTick)

Parameters
:    1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
     2. `duration {number}` ---Duration of the animation in milliseconds.
     3. `transition {number}` ---Type of animation transition. See below for transition types.
     4. `onTick {function}` ---A callback to control the speed of the transition.

Returns
:    1. `{this}`

Starts an animation frame immediately. An animation frame is
defined by the duration, transition type, and properties
that are being "tweened" by the animation engine.

An animation transition can be one of the following:

* `animate.linear` ---Animation has the same speed from start to finish.
* `animate.easeIn` ---Animation has a slow start.
* `animate.easeOut` ---Animation has a slow end.
* `animate.easeInOut` ---Animation has both slow start and slow end.

### then (target, duration, transition, onTick)

Parameters
:    1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
     2. `duration {number}` ---Duration of the animation in milliseconds.
     3. `transition {number}` ---Type of animation transition. See above for transition types.
     4. `onTick {function}` ---A callback to control the speed of the transition.

Returns
:    1. Return: `{this}`

Similar to `.now()`, but adds the animation frame to the
object's animation queue rather than animating the frame
immediately.

~~~
animate(view).then({x: 500, y: 500}, 1000);

// these can be chained
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

### then (callback)

Parameters
:    1. `callback {function}` ---The callback function to be invoked at the appropriate point in the queue.

Returns
:    1. `{this}`

Adds a callback function to the queue. Useful for running
code after an animation frame completes.

~~~
animate(view).now({x: 10}).then(function(){
  console.log('view has been moved to x = 10.');
});
~~~

### debug ()

Returns
:    1. `{this}`

Turns debug logging on. This will log information about the
current animation frame like duration, transition, and what
properties are being animated.

### commit ()

Returns
:    1. `{this}`

Finishes the animation immediately, moving all values to the
position specified by the final frame in the animation
queue.

~~~
var myAnimation = animate(view).now({
  x: 100
}, 5000);

setTimeout( function() {
  myAnimation.commit(); //view.x is now at 100 and the animation is complete.
}, 1500);
~~~


# Class: Group

Inherits from
:    1. [event.Emitter](./event.html#class-event.emitter)

A group of animations. Groups are typically used to track a
complex animation involving multiple view animations.

~~~
animate(firstView, 'complexAnimation1').now({ //the second argument is the group id 
  x: 100
}, 100);

animate(secondView, 'complexAnimation1').now({
  x: 100
}, 200);

animate.getGroup('complexAnimation1').on('Finish', function(){
  console.log('The complex animation is finished!');
});
~~~


## Methods

### get (id)

Parameters
:    1. `id {string}` ---The identifier of the animation to fetch from the group.

Returns
:    1. `{Animator}`

Returns an animation from the group.

~~~
var animGroup = animate.getGroup('complexAnimation1');

var anim = animGroup.get('loopDeLoops');
~~~

### add (id, animation)

Parameters
:    1. `id {string}` ---The identifier of the animation to add to the group.
     2. `animation {Animator}`

Returns
:    1. `{Animator}`

Adds an animation to the group and returns it.

### isActive ()

Returns
:    1. `{boolean}`

Returns true if any animations in the group have frames in
their animation queue.

### onAnimationFinish (animation)

Parameters
:     1. `animation {Animator}` ---The animation object to signal as being finished.

Removes an animation from the group. If none of the
remaining animations in the group have frames left in their
queue, the `finish` event will be published.


## Events

### \'Finish\'

Published when all animations in the group have completed
all the frames in their respective animation queues.
