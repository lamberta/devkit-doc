# Utilities

## Global utilities

### Class (superConstructor, constructor)
1. `superConstructor {function}`
2. `constructor {function}`
3. Return: `{function}`

Inherits the properties and methods of one class into another.

~~~
var SuperClass = Class(function () {
  this.init = function (name) {
    this.name = name;
  };
});

var MyClass = Class(SuperClass, function (supr) {
  this.init = function (name) {
    supr(this, 'init', arguments);
  };
  this.say = function () {
    console.log("Hello, " + this.name + "!");
  };
});

var a = new MyClass('Arjun'),
    b = new MyClass('Billy');

a.say(); //=> "Hello, Arjun!"
b.say(); //=> "Hello, Billy!"
~~~

### bind (thisArg, callback [, args ...])
1. `thisArg {object}`
2. `callback {function}`
3. `args {...*}`
4. Return: `{function}`

Binds the first parameter as `this` in the callback
function. Additional arguments are curried on the function.

~~~
function add_to_point (x, y) {
  return {
    x: this.x + x,
    y: this.y + y
  };
}
var pt = {x: 100, y: 400};
var fn = bind(pt, add_to_point, 23);

fn(56); //=> {x: 123, y: 456}
~~~

### merge (obj1, obj2 [, obj3 ...])
1. `base {object}`
2. `props {...object}`
3. Return: `{object}`

Combine the properties of multiple objects in to one. If a
property already exists, it is *not* overwritten.

~~~
var obj1 = {a: 1, b: 2},
    obj2 = {b: 3, c: 4};

merge(obj1, obj2); //=> obj1

console.log(obj1); //=> {a: 1, b: 2, c: 4}
~~~

### GLOBAL
1. `{object}`

The global object. Properties assigned to this object will be
available in the global scope.
