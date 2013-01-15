# Animation

`animate` is a module used primarily for 
animating [ui views](../api/ui-view.html). It is a 
"tweening engine" that interpolates between screen 
positions, opacity, or any other numeric javascript property. 
Most importantly, it is optimized for mobile 
devices, so you should favor this module over manual position 
calculations within your game loop.

Examples:

* [Basic Animation](../example/animation-basic/)
* [Continuous Animation](../example/animation-continuous/)
* [Pause an Animation](../example/animation-pause/)
* [Create a Trail Animation](../example/animation-trail/)
* [Multiple Animations](../example/animation-multibox/)

## Module: animate

Usage:

~~~
import animate;
~~~

### animate (obj, groupId)
1. `obj {View|object}` ---The view or object to animate.
2. `groupID {number}` ---The group identifier for this animation, [see below](#class-group)
3. Return: `{Animator}` ---Returns the animator object so the function call can be chained.

Create an Animator for a [View](../api/ui-view.html) or generic javascript object. Note that when animating a [View](../api/ui-view.html) object, the animation engine will tween based on the object's `style` property. But when passing in a generic object, the animation engine will tween based on the object's top level properties instead.

~~~
var myAnimator = animate(myView);

// typical usage is via method chaining
animate(myView).now({x: 100}).then({y: 100}); //moves a view 100px to the right, then 100px downwards.
~~~

### animate.getGroup (id)
1. `id {number}` ---The group identifier of the group to fetch.
2. Return: `{Group}`

Returns the Group with the specified identifier. [See below](#class-group) for more information on groups.

## Class: animate.Animator

The animation engine.

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### new Animator (subject, group)
1. `subject {object}` ---The view or object to animate.
2. `group {Group}` ---The group object for this animation, [see below](#class-group)

Creates a new Animator with a [View](../api/ui-view.html) or object to animate, with an optional Group to add them to. Note: the preferred method for creating an animator object is not to use the `new` keyword, but instead to invoke the animate function:

~~~
// do not use:
// var animator = new animate.Animator(object);
// instead use this:
var animator = animate(object);
~~~

### animator.clear ()
1. Return: `{this}`

Clears any animation frames currently scheduled. This will stop the animation immediately without completing any additional frames.

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

Resumes the animation if paused.

### animator.hasFrames ()
1. Return: `{boolean}`

Returns whether there are any frames left in the animation queue.

### animator.wait (duration)
1. `duration {number}` ---Duration of the wait in milliseconds.
2. Return: `{this}`

Adds a delay (in milliseconds) to the animation queue. This function can be invoked instead of `setTimeout`, and when used in conjunction with `animator.then(callback)` affords greater timing control than `setTimeout`.

~~~
animate(view).wait(500).then(function () {
  console.log("called after 500ms");
});
~~~

### animator.now (target, duration, transition, onTick)
1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
2. `duration {number}` ---Duration of the animation in milliseconds.
3. `transition {number}` ---Type of animation transition. See below for transition types.
4. `onTick {function}` ---A callback to control the speed of the transition.
5. Return: `{this}`

Starts an animation frame immediately. An animation frame is defined by the duration, transition type, and properties that are being "tweened" by the animation engine.

An animation transition can be one of the following:

* `animate.linear` ---Animation has the same speed from start to finish.
* `animate.easeIn` ---Animation has a slow start.
* `animate.easeOut` ---Animation has a slow end.
* `animate.easeInOut` ---Animation has both slow start and slow end.

### animator.then (target, duration, transition, onTick)
1. `target {View|object}` ---Will interpolate the appropriate number values of the provided object.
2. `duration {number}` ---Duration of the animation in milliseconds.
3. `transition {number}` ---Type of animation transition. See above for transition types.
4. `onTick {function}` ---A callback to control the speed of the transition.
5. Return: `{this}`

Similar to `.now()`, but adds the animation frame to the object's animation queue rather than animating the frame immediately.

~~~
animate(view).then({
  x: 500,
  y: 500
}, 1000);

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

### animator.then (callback)
1. `callback {function}` ---The callback function to be invoked at the appropriate point in the queue.
2. Return: `{this}`

Adds a callback function to the queue. Useful for running code after an animation frame completes.

~~~
animate(view).now({x: 10}).then(function(){
  console.log('view has been moved to x = 10.');
});
~~~

### animator.debug ()
1. Return: `{this}`

Turns debug logging on. This will log information about the current animation frame like duration, transition, and what properties are being animated.

### animator.commit ()
1. Return: `{this}`

Finishes the animation immediately, moving all values to the position specified by the final frame in the animation queue.

~~~
var myAnimation = animate(view).now({
  x: 100
}, 5000);
setTimeout( function() {
  myAnimation.commit(); //view.x is now at 100 and the animation is complete.
}, 1500);
~~~


## Class: Group

A group of animations. Groups are typically used to track a complex animation involving multiple view animations.

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

Inherits from:
:    1. [event.Emitter](./event.html#class-event.emitter)

### group.get (id)
1. `id {string}` ---The identifier of the animation to fetch from the group.
2. Return: `{Animator}`

Returns an animation from the group.

### group.add (id, animation)
1. `id {string}` ---The identifier of the animation to add to the group.
2. `animation {Animator}`
3. Return: `{Animator}`

Adds an animation to the group and returns it.

### group.isActive ()
1. Return: `{boolean}`

Returns true if any animations in the group have frames in their animation queue.

### group.onAnimationFinish (animation)
1. `animation {Animator}` ---The animation object to signal as being finished.

Removes an animation from the group. If none of the remaining animations in the group have frames left in their queue, the `finish` event will be published.

### Events

#### \'Finish\'

Published when all animations in the group have compeleted all the frames in thier respective animation queues.