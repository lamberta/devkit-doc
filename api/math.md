# math

## Module: math.util

Basic math utility functions. [Source code](https://github.com/gameclosure/js.io/blob/master/packages/math/util.js)

~~~
import math.util as util;
~~~

### util.interpolate (a, b, t)
1. `a {number}`
2. `b {number}`
3. `t {number}`
4. Return: `{number}`

Interpolate between values `a` and `b` at point `t` in the interval.

### util.random (a, b [, seed])
1. `a {number}`
2. `b {number}`
3. `seed {number} = Math.random()` ---Optional.
4. Return: `{number}`

Generate and return a random number from `a` to `b` (excluding `b`). Optionally, a random seed can be given.
 
### util.clip (n, min, max)
1. `n {number}`
2. `min {number}`
3. `max {number}`
3. Return: `{number}`

Return a value `min` <= `n` <= `max`.

### util.sign (n)
1. `n {number}`
2. Return: `{number}` ---Possible values are `1`, `-1`, or `0`.

Returns `1` if the value for `n` is positive, or `-1` if it is negative. If `n` is zero, return `0`.


## Module: math.array

Basic functions for operating on one or more arrays.

~~~
import math.array as array;
~~~

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


## Module: math.geom

Math functions for 2D manipulation.

## Class: math.geom.Point

An object with `x` and `y` numeric properties, typically
representing coordinates on a Cartesian plane. In many cases
it refers to a location on a device's screen, where the
position `{x: 0, y: 0}` is the top-left corner.

~~~
import math.geom.Point as Point;
~~~

### new Point (x, y)
1. `x {number} = 0`
2. `y {number} = 0`

### new Point (pt)
1. `pt {object}`
	* `x {number} = 0`
	* `y {number} = 0`

Creates a Point.

### point.rotate (radians)
1. `radians {number}`
2. Return: `{this}`

Rotates this point around the origin by a value in radians.

### point.translate (x, y)
1. `x {number} = 0`
2. `y {number} = 0`
3. Return `{this}`

### point.add (x, y)

Alias for `point.translate`.

### point.subtract (x, y)
1. `x {number} = 0`
2. `y {number} = 0`
3. Return `{this}`

Subtract this point by two scalars or by another point.

### point.scale (factor)
1. `factor {number}`
2. Return: `{this}`

Scale point by the given factor.

### point.normalize ()
1. Return: `{number}`

Normalize this point to the unit circle.

### point.setMagnitude (mag)
1. `mag {number}`
2. Return `{this}`

Set the magnitude of this point at a constant angle.

### point.addMagnitude (mag)
1. `mag {number}`
2. Return `{this}`

Add a magnitude to a point.

### point.getMagnitude ()
1. Return: `{number}`

Return the magnitude of a point.

### point.getSquaredMagnitude ()
1. Return: `{number}`

Return the magnitude of a point ... squared!

### point.getAngle ()
1. Return: `{number}`

Return the angle of a point by using `Math.atan2`.

### point.getDirection ()
1. Return: `{number}`

Alias for `point.getAngle`.


## Class: math.geom.Line

~~~
import math.geom.Line as Line;
~~~

### new Line ([x1, y1, x2, y2])
1. `x1 {number}`
2. `y1 {number}`
3. `x2 {number}`
4. `y2 {number}`

### new Line ([point, point])
1. `point {Point}`
2. `point {Point}`

### line.start
1. `{Point}`

### line.end
1. `{Point}`

### line.getLength ()
1. Return: `{number}`

Return the length of a line.

### line.getMagnitude ()

Alias for `line.getLength`.


## Class: math.geom.Circle

Circles!

Inherits from:
:    1. [math.geom.Point](#class-math.geom.point)

~~~
import math.geom.Circle as Circle;
~~~

### new Circle ([x, y, radius])
1. `x {number} = 0`
2. `y {number} = 0`
3. `radius {number} = 0`

### new Circle ([circle])
1. `circle {object}`
	* `x {number} = 0`
	* `y {number} = 0`
	* `radius {number} = 0`

Creates a Circle.

### circle.scale (factor)
1. `factor {number}`
2. Return: `{this}`

Scales the position and radius of the circle by a factor (where 1 = 100%).


## Class: math.geom.Rect

~~~
import math.geom.Rect as Rect;
~~~

### new Rect ([x, y, width, height])
1. `x {number}`
2. `y {number}`
3. `width {number}`
4. `height {number}`

Creates a rect instance.

### rect.normalize ()
1. Return: `{this}`

Normalize negative dimensions so that the rectange (x, y) is based on the upper left corner.

### rect.unionRect (rect)
1. `rect {Rect}`

Resizes this rectangle to its union with another rectangle.

### rect.getCenter ()
1. Return: `{Point}`

Returns the center point of this circle.

### rect.getCorner (corner)
1. `corner {Rect.CORNER}`
2. Return: `{Point}`

Returns a point corresponding to the specified corner of the rectangle, found below.

### Class property: Rect.CORNER
* `TOP_LEFT`
* `TOP_RIGHT`
* `BOTTOM_LEFT`
* `BOTTOM_RIGHT`

### rect.getSide (side)
1. `side {Rect.SIDE}`
2. Return: `{Line}`

Returns a line corresponding to the specified side of the rectangle, found below.

### Class property: Rect.SIDE
* `TOP`
* `RIGHT`
* `BOTTOM`
* `LEFT`


## Class: math.geom.Vec2D

Model a vector in two-dimensional space.

~~~
import math.geom.Vec2D as Vec2D;
~~~

### new Vec2D ([options])
1. `options {object}`
	* `x {number}`
	* `y {number}`

### new Vec2D ([options])
1. `options {object}`
	* `angle {number}`
	* `magnitude {number}`

Pass an "angle" option in radians to this function to
initialize an angle.

### vec.addForce (vec)
1. `vec {Vec2D}`

Applies a force vector.

### vec.getAngle ()
1. Return: `{number}`

Returns the angle of this vector.

### vec.getMagnitude ()
1. Return: `{number}`

Returns the magnitude of this vector.

### vec.getUnitVector ()
1. Return: `{Vec2D}`

Returns this vector's unit vector.

### vec.dot (vec)
1. `vec {Vec2D}`
2. Return: `{number}`

Returns the dot product of this and another vector.

### vec.add (vec)
1. `vec {Vec2D}`
2. Return: `{Vec2D}`

Returns the sum of this and another vector.

### vec.minus (vec)
1. `vec {Vec2D}`
2. Return: `{Vec2D}`

Returns this vector subtracted by another.

### vec.negate ()
1. `vec {Vec2D}`
2. Return: `{Vec2D}`

Returns the negative of this vector.

### vec.multiply (scalar)
1. `scalar {number}`
2. Return: `{Vec2D}`

Returns this vector multiplied by a scalar.


## Module: math.geom.angle

~~~
import math.geom.angle as angle;
~~~

### angle.average (angle1, angle2 [, weight])
1. `angle1 {number}`
2. `angle2 {number}`
3. `weight {number} = 0.5` ---Float between 0.0 and 1.0
4. Return: `{number}`

Returns a weighted angle between two angles.

### angle.normalize (angle)
1. `angle {number}`
2. Return: `{number}`

Normalize an angle between -PI and PI.

### angle.add (angle1, angle2)
1. `angle1 {number}`
2. `angle2 {number}`
3. Return: `{number}`

Compute the sum of two angles, within the range of PI and -PI.

### angle.difference (angle1, angle2)
1. `angle1 {number}`
2. `angle2 {number}`
3. Return: `{number}`

Compute the difference between two angles, within the rangle
of PI and -PI.

### angle.range (angle1, angle2)
1. `angle1 {number}`
2. `angle2 {number}`
3. Return: `{number}`

Angular range from a to b, in the range of 0 and 2PI.


## Module: math.geom.intersect

~~~
import math.geom.intersect as intersect;
~~~

### intersect.pointAndRect (point, rect)
1. `point {Point}`
2. `rect {Rect}`
3. Return: `{boolean}`

Determine if a `point` and `rect` overlap.

### intersect.pointAndCircle (point, circle)
1. `point {Point}`
2. `circle {Circle}`
3. Return: `{boolean}`

Determine if a `point` and `circle` overlap.

### intersect.rectAndRect (rect1, rect2)
1. `rect1 {Rect}`
2. `rect2 {Rect}`
3. Return: `{boolean}`

Determine if `rect1` and `rect2` overlap.

### intersect.circleAndRect (circle, rect)
1. `circle {Circle}`
2. `rect {Rect}`
3. Return: `{boolean}`

Returns whether `circle` and `rect` overlap.

### intersect.circleAndLine (circle, line)
1. `circle {Circle}`
2. `line {Line}`
3. Return: `{boolean}`

Returns whether `circle` and `line` overlap.

### intersect.util.pointToLine (point, line)
1. `point {Point}`
2. `line {Line}`
3. Return: `{Line}`

Returns a `Line` from `point` to the nearest point on `line`.

### intersect.util.rectAndRect (rect1, rect2)
1. `rect1 {Rect}`
2. `rect2 {Rect}`
3. Return: `{Rect}`

Returns the overlap between `rect1` and `rect2` as a `Rect`.
