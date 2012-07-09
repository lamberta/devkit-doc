# `math`

Basic math functions.

## math.arrays

Basic functions for operating on one or more arrays.

* __average__ ---Compute the average of an array.
	* @params `{array} arr` ---
	* @params `{number} count = arr.length` ---
	* @return `{number}` ---Returns the average.

* __weightedAverage__ ---Compute the weighted average of an array.
	* @params `{array} arr` ---
	* @params `{number} weight` ---
	* @params `{number} count = arr.length` ---
	* @return `{number}` --- Returns the weighted average.

* __subtract__ ---Subtract two arrays.
	* @params `{array} a`
	* @params `{array} b`
	* @return `{array}` ---Returns `b - a`.

* __stddev__ ---Compute the standard deviation of an array.
	* @params `{array} arr`
	* @params `{number} count = arr.length`
	* @return `{number}` ---Returns the standard deviation.

* __shuffle__ ---Shuffle an array in-place.
	* @params `{array} array`
	* @params `{number} randSeed = null`
	* @return `{array}` ---Returns the original, shuffled array.

* __rotate__ ---Rotates an array's elements left. Returns a new array.
	* @params `{array} arr`
	* @params `{number} count` ---Positive numbers rotate left, negative numbers rotate right.
	* @return `{array}` ---New, rotated array.

## math.util

* __interpolate__ ---Interpolate between values a and b at the point x in the interval.
    * @params `{number} a`
    * @params `{number} b`
    * @params `{number} x`

* __random__ ---Return a random integer between a and b.
    * @params `{number} a`
    * @params `{number} b`
    * @params `{number} randSeed = null`

* __integer__ ---Return a (floored) integer value.
* __truncate__ ---Return a (floored) integer value.
    * @params `{number} value`

* __clip__ ---Return a value min < n < max.
    * @params `{number} value`
    * @params `{number} min`
    * @params `{number} max`

* __sign__ ---Return the sign of a number value, 1 or -1.
    * @params `{number} value`

* __round__ ---Round a number to a given precision, or by a given method.
    * @params `{number} value`
    * @params `{number} precision = null`
    * @params `{number} method`
        * ROUND_HALF_UP -- Round .5 to 1.
        * ROUND_HALF_AWAY_FROM_ZERO ---???
        * ROUND_HALF_TO_EVEN ---Round to the nearest even number.
        * ROUND_HALF_TO_ODD ---Round to the nearest odd number.
        * ROUND_HALF_STOCHASTIC ---Round at random.
        * ROUND_HALF_ALTERNATE ---Alternate rounding up/down with sequential uses of this function.

