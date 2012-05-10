# `timestep.animate` is a function.

* __animate (obj, groupId)__ ---
	* @param `{object} obj`
	* @param `{number} groupID`
	* @return `{Animator|ViewAnimator}`


## Namespace Functions

* __setViewAnimator (ctor)__ ---

* __getGroup (i)__ ---
	* @param `{number} i`
	* @return `{Group}`

## Properties

* __linear__ `{number} = 1` ---Animation has the same speed from start to finish.

* __easeIn__ `{number} = 2` ---Animation has a slow start.

* __easeOut__ `{number} = 3` ---Animation has a slow end.

* __easeInOut__ `{number} = 4` ---Animation has both slow start and slow end.

* __bounce__ `{number} = 5` ---Animation overshoots target and animates back to simulate bouncing.

## Usage

Animate a red rectangle view to the edge of the device while rotating.

~~~

"use import";

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

# `Animator` 

## Inheritence

1. [lib.PubSub](./lib-pubsub.html)

## Methods

* __clear__ ---Clear the current animations scheduled.
	* @return `{this}` ---This instance of Animator.

* __pause__ ---Pause the animation.

* __isPaused__ ---Is the animation paused.
	* @return `{boolean}`

* __wait (duration)__
	* @param `{number} duration` ---I assume it's a number.

* __resume__ ---Resume the animation if paused.

* __hasFrames__ ---If there are any frames to animate.

* __now (target, duration, transition, onTick)__ ---Start an animation straight away.
	* @param `{View|object} target` ---Will interpolate the appropriate number values of the provided object.
	* @param `{number} duration` ---Duration of the animation in milliseconds.
	* @param `{number} transition` ---Type of animation transition. See [`animate` properties](#properties).
	* @param `{function} onTick` ---

* __then (target, duration, transition, onTick)__ --Same as `now()` but will animate after the previous animation is over.

* __debug__ --- Set `_debug` to `true`.
	* @return `{thisAnimator}`

* __commit__ ---
	* @return `{thisAnimator}`

* __onTick (dt)__ ---
	* @param `{number}` dt

* __next__ ---

## Properties

* __subject__


# `ViewAnimator` 

## Inheritence

1. [Animator](#animator)
2. [lib.PubSub](./lib-pubsub.html)

For dealing with views as animation subjects.

# `Group` 

## Inheritence

1. [lib.PubSub](./lib-pubsub.html)

## Methods

* __get (id)__ ---

	@param `{number}` id
	@return `{}`

* __add (id, q)__ ---

	@param {} id<br/>
	@param {} q<br/>
	@return {} q ---?

* __isActive__ ---

	@return {boolean}

* __onAnimateFinish (anim)__ --- Deletes the animation and publishes a `'Finish'` event.


# `Frame`

## Methods

* __onTick__

* __exec__

* __onInterrupt__

## Properties

* __subject__

* __target__

* __duration__

* __transition__


## `CallbackFrame` inherits from `Frame`

## `WaitFrame` inherits from `Frame`

Actually, it *is* a `Frame`; it's a frame that does nothing.

## `ObjectFrame` inherits from `Frame`

## `ViewStyleFrame` inherits from `Frame`


# Usage

~~~

var anim = animate(obj);
anim.now({x: 100}, duration, animate.linear);
~~~
