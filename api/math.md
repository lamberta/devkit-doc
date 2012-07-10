# math

Basic math functions.

## Module: math.array

Basic functions for operating on one or more arrays.

### array.average (array [,count])
1. `array {array}`
2. `count {number} = arr.length`
3. Return: `{number}`

Compute the average of an array.

### array.weightedAverage (array, weight [, count])
1. `array {array}`
2. `weight {number}`
3. `count {number} = array.length`
4. Return: `{number}`

Compute the weighted average of an array.

### array.subtract (array1, array2)
1. `array1 {array}`
2. `array2 {array}`
3. Return: `{array}` ---Returns `b - a`.

Subtract `array2` from `array1`.

### array.stddev (array [, count])
1. `array {array}`
2. `count {number} = arr.length`
3. Return: `{number}`

Compute the standard deviation of an array.

### array.shuffle (array [, seed])
1. `array {array}`
2. `seed {number} = null`
3. Return: `{array}` ---Returns the original, shuffled array.

Shuffle an array in-place.

### array.rotate (array, count)
1. `array {array}`
2. `count {number}` ---Positive numbers rotate left, negative numbers rotate right.
3. Return: `{array}`

Rotates an array's elements left. Returns a new array.


## Module: math.util

### util.interpolate (a, b, x)
1. `a {number}`
2. `b {number}`
3. `x {number}`
4. Return: `{number}`

Interpolate between values `a` and `b` at the point `x` in the interval.

### util.random (a, b [, seed])
1. `a {number}`
2. `b {number}`
3. `seed {number} = Math.random()` ---Optional.
4. Return: `{number}`

Return a random integer between a and b. Optionally, a
random seed can be given.
 
### util.clip (n, min, max)
1. `n {number}`
2. `min {number}`
3. `max {number}`
3. Return: `{number}`

Return a value `min` <= `n` <= `max`.

### util.sign (n)
1. `n {number}`
2. Return: `{number}`

Return the sign of a number value, 1 or -1.

### util.round (n [, precision, method])
1. `n {number} value`
2. `precision {number} = null` ---Optional.
3. `method {number}` ---Optional enum from `math.util.round`.
4. Return `{number}`

Round a number to a given precision, or by a given method.

### util.round.ROUND_HALF_UP

Round 0.5 to 1.

### util.round.ROUND_HALF_AWAY_FROM_ZERO

### util.round.ROUND_HALF_TO_EVEN

Round to the nearest even number.

### util.round.ROUND_HALF_TO_ODD

Round to the nearest odd number.

### util.round.ROUND_HALF_STOCHASTIC

Round at random.

### util.round.ROUND_HALF_ALTERNATE

Alternate rounding up/down with sequential uses of this function.
