# `math2d`

Math functions for 2D manipulation.

## math2D.Point

* __Point({x, y})__, __Point(x, y)__ ---

* __rotate(r)___

* __translate({x, y})__, __translate(x, y)__
* __add({x, y})__, __add(x, y)__

* __subtract({x, y})__, __subtract(x, y)__

* __scale(factor)__

* __setMagnitude(mag)__

* __normalize()__

* __addMagnitude(mag)__

* __getMagnitude()__

* __getSquaredMagnitude()__

* __getDirection()__, __getAngle()__

Point.getPolarR = function(x, y)

Point.getPolarTheta = function(x, y)

Point.add = Point.translate = function(a, b, c, d)

Point.subtract = function(a, b, c, d)

Point.scale = function(a, b, c) 

Point.setMagnitude = function(a, b, c)

Point.addMagnitude = function(a, b, c)

Point.getMagnitude = function(a, b)

Point.rotate = function(a, b, c)

## math2D.Line

Line(point, point)

* __getMagnitude()__
* __getLength()__

## math2D.Circle

Circle(x, y, radius)

* __scale(factor)__

## math2D.Rect

Rect(x, y, width, height)

* __normalize__ ---Normalize negative dimensions so that the rectange (x, y) is based on the upper left corner.

* __unionRect__ ---Resizes this rectangle to its union with another rectangle.

* __getCorner(corner)__ ---Returns a point corresponding to the specified corner of the rectangle.
    * @returns `{Point}`

* Rect.CORNERS
    * TOP_LEFT
    * TOP_RIGHT
    * BOTTOM_LEFT
    * BOTTOM_RIGHT

* __getSide(side)__ ---Returns a line corresponding to the specified side of the rectangle.
    * @returns `{Line}`

* Rect.SIDES
    * TOP
    * RIGHT
    * BOTTOM
    * LEFT

* __getCenter()__ ---Returns the center point of this circle.
    * @returns `{Point}`

## math2D.Vec2D

Vec2D({x, y})

* __addForce({x, y})__

* __getAngle()__ ---Returns the angle of this vector.
* __getMagnitude()__ ---Returns the magnitude of this vector.
* __getUnitVector()__ ---Returns this vector's unit vector.
* __dot(vec)__ ---Returns the dot product of this and another vector.
* __add(vec)__ ---Returns the sum of this and another vector.
* __minus(vec)__ ---Returns this vector subtracted by another.
* __negate()__ ---Returns the negative of this vector.
* __multiply(scalar)__ ---Returns this vector multiplied by a scalar.

## math2D.angle

* __range__ ---Angular range from a to b.
	* @params `{number} angleA` ---
	* @params `{number} angleB` ---
	* @returns `{number}` ---Float between [0, 2PI].

* __average__ ---Returns a weighted angle between two angles.
	* @params `{number} angleA` ---
	* @params `{number} angleB` ---
	* @returns `{number} weight = 0.5` ---Float between 0.0 and 1.0

* __normalize__ ---Normalize an angle between -PI and PI.
	* @params `{number} angle`
	* @returns `{number}`

* __add__ ---Compute the sum of two angles.
	* @params `{number} angle`
	* @returns `{number}` ---Within the range [-PI, PI].

* __difference__ ---Compute the difference between two angles.
	* @params `{number} angle`
	* @returns `{number}` ---Within the range [-PI, PI].

## math2D.intersect

intersect.rectAndPt

intersect.ptAndRect

intersect.circAndPt

intersect.ptAndCirc

intersect.rectAndRect

intersect.rectAndCircle

intersect.circleAndRect

intersect.circleAndLine

intersect.lineAndCircle

intersect.util.ptToLine

intersect.util.rectAndRect

## math2D.morphology

morphology.open

morphology.close

exports.getSquareMask

exports.getCircleMask

exports.multiply

exports.subtract

exports.erode

exports.dilate