# `timestep.Timer`

Namespace to timer functions and properties. There
is only one timer for the entire application.

## Namespace Functions

* __reset__ ---Reset the timer.

* __start__ ---Start the timer.

* __stop__ ---Stop the timer.

* __getTickProgress__ ---Find the time in milliseconds
since the last tick.
	* @return `{number}`

## Property Events

* __onTick__ ---Called on each tick.

* __onLargeTick__ ---Called after a long tick. Usually due to inactivity.

## Usage

Bind to a tick event to increase a counter. Bind to a large tick to reset the counter.

~~~
import timestep.Timer as Timer;

exports = Class(function() {
	this.init = function() {
		Timer.onTick = this.onTick;
		Timer.onLargeTick = this.onLargeTick;

		this.counter = 0;
	}

	this.onTick = function(dt) {
		this.counter++;
	}

	this.onLargeTick = function() {
		this.counter = 0;
	}
});
~~~
