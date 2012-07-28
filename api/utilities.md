# Utilities

## Global utilities

### Class ([superConstructor,] constructor)
1. `superConstructor {function}` ---The optional superclass which this class inherits from.
2. `constructor {function(supr)}` ---The function that will define this class.
3. Return: `{function}` ---The class constructor.

Our class system for simplifying JavaScript object
inheritance. Objects of a class-type inherit the properties and methods
defined on that class. A sub-class inherits the attributes of its super-class.

Properties and methods defined on the `this` object within
the constructor function are considered public.

If an `init` method exists on the constructor definition, it
is automatically called when an object is instantiated.

The constructor function is passed a `supr` argument---an
accessor function which calls a given method name on the
superclass. Typically, this is used to initialize all the
objects in a class hierarchy.

~~~
var MySuperClass = Class(function () {
  this.init = function (name) {
    this.name = name;
  };
});

var MyClass = Class(MySuperClass, function (supr) {
  this.init = function (name) {
    //Call the init of the super class with the arguments passed to this class.
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
var add_to_y = bind(pt, add_to_point, 23);

add_to_y(56); //=> {x: 123, y: 456}
~~~


### merge (obj1, obj2 [, obj3 ...])
1. `base {object}`
2. `props {...object}`
3. Return: `{object}`

Combine the properties of multiple objects into the object
passed as the first parameter. If a property already exists
on the first object, then that value is used.

~~~
var obj1 = {a: 1, b: 2},
    obj2 = {b: 3, c: 4};

merge(obj1, obj2); //=> obj1

console.log(obj1); //=> {a: 1, b: 2, c: 4}
~~~

This function is particularly useful for combining objects
that contain options that are passed up a class
initialization hierarchy.

### GLOBAL
1. `{object}`

The global object. Properties assigned to this object are
available in the global scope, within any class or module.
