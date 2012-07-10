# timestep.animate

Is a function to animate Views or objects. It interpolates number properties over a given duration and with easing functions.

### timestep.animate (obj, groupId)
1. `obj {View|object}`
2. `groupID {number}`
3. Return: `{Animator|ViewAnimator}`

Create an Animator for a View or object. Passing an empty object literal `{}` allows you to perform arbitrary timing.

### animate.setViewAnimator (ctor)

### animate.getGroup (i)
1. `i {number}`
2. Return: `{Group}`

### animate.linear
1. `{number} = 1`

Animation has the same speed from start to finish.

### animate.easeIn
1. `{number} = 2`

Animation has a slow start.

### animate.easeOut
1. `{number} = 3`

Animation has a slow end.

### animate.easeInOut
1. `{number} = 4`

Animation has both slow start and slow end.

### animate.bounce
1. `{number} = 5`

Animation overshoots target and animates back to simulate bouncing.



## Class: Animator

Inherits
:    1. [lib.PubSub](./lib-pubsub.html)

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

### animator.then (target, duration, transition, onTick)

Same as `now()` but will animate after the previous animation is over.

### animator.now (callback)
1. `callback {function}`

Trigger a callback.

### animator.then (callback)
1. `callback {function}`

### animator.debug ()
1. Return: `{this}`

Set `_debug` to `true`.

### animator.commit ()
1. Return: `{this}`

### animator.next ()


## Class: ViewAnimator

For dealing with views as animation subjects.

Inherits
:    1. [Animator](#animator)
     2. [lib.PubSub](./lib-pubsub.html)

## Class: Group

A group of styles that animate independently of other styles.

Inherits
:    1. [lib.PubSub](./lib-pubsub.html)

### group.get (id)
	* @param `{number} id`
	* @return `{}`

### group.add (id, q)
	* @param `{} id`
	* @param `{} q`
	* @return `{} q` ---?

### group.isActive ()
	* @return `{boolean}`

### group.onAnimationFinish (anim)

Deletes the animation and publishes a `'Finish'` event.


## Class: Frame

### frame.onTick

### frame.exec

### frame.onInterrupt

### frame.subject

### frame.target

### frame.duration

### frame.transition


## Class: CallbackFrame`

Inherits
:    1. [Frame](#frame)


## Class: `WaitFrame` 

Actually, it *is* a `Frame`. It's a frame that does nothing.

Inherits
:    1. [Frame](#frame)


## Class: ObjectFrame

Inherits
:    1. [Frame](#frame)


## Class: ViewStyleFrame

Inherits
:    1. [Frame](#frame)


## Example: Move a rectangle

Animate a red rectangle view to the edge of the device while rotating.

~~~
import timestep.View as View;
import timestep.animate as animate;
import timestep.device as device;

exports = Class(View, function(supr) {
    this.init = function(opts) {
        supr(this, "init", arguments);

        this.style.width = this.style.height = 50;
        this.style.backgroundColor = "#FF0000";
        this.style.anchorX = this.style.anchorY = 25;
        
        animate(this)
            .now({opacity: 0.1, x: device.width, r: Math.PI * 2}, 1000, animate.easeIn)
            .then({opacity: 1, x: 0}, 1000, animate.easeOut);
    }   
});
~~~
