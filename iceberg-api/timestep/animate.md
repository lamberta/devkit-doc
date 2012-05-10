# `timestep.animate` is a namespace.




* __animate (obj, groupId)__ ---

	@param `{object}` obj<br/>
	@param `{number}` groupId<br/>
	@return `{Animator|ViewAnimator}`



## Namespace Functions

* __setViewAnimator (ctor)__ ---

* __getGroup (i)__ ---

	@param {number} i<br/>
	@return {Group}

## Namespace Properties

* __linear__ `{number}`: 1

* __easeIn__ `{number}`: 2

* __easeOut__ `{number}`: 3

* __easeInOut__ `{number}`: 4

* __bounce__ `{number}`: 5

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

# `Animator` inherits from `lib.PubSub`

## Methods

* __clear__ ---

	@return `{this}` ---This instance of Animator.

* __pause__ ---

* __isPaused__ ---

	@return `{boolean}`

* __wait (duration)__

	@param `{number}` duration --I assume it's a number.

* __resume__ ---

* __hasFrames__ ---

* __buildFrame (opts)__

	@param `{object}` opts ---Frame options.<br/>
	@return `{CallbackFrame|ObjectFrame|WaitFrame}`

* __now (target, duration, transition, onTick)__

* __then (target, duration, transition, onTick)__

* __debug__ --- Set `_debug` to `true`.

	@return `{thisAnimator}`

* __commit__ ---

	@return `{thisAnimator}`

* __onTick (dt)__ ---

	@param `{number}` dt

* __next__ ---


## Properties

* __subject__


# `ViewAnimator` inherits from `Animator`

For dealing with views as animation subjects.

# `Group` inherits from `lib.PubSub`

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
