# Utilities

## Global utilities

### import

The system for referring to an external module, as defined in
a separate file, and including it in this file. Modules may
be arranged in a namespace hierarchy to indicate a usage
category. Additionally, modules may be aliased using the `as`
keyword for easier reference.

~~~
import device;
import ui.View;
import src.path.to.Module as Module;

var view = new ui.View(),
    mod = new Module();

console.log(device.defaultFontFamily); //=> 'Helvetica'
console.log(typeof ui);                //=> 'object'
~~~

The path of a user defined module is relative to the
project's root directory. So, in the above example, the
import path of `Module` refers to the file located at
`{project}/src/path/to/Module.js`.


### Class ([name, superConstructor,] constructor)
1. `name {string}` ---An optional name to assign to the class for debugging purposes.
2. `superConstructor {function}` ---The optional superclass which this class inherits from.
3. `constructor {function(supr)}` ---The function that will define this class.
4. Return: `{function}` ---The class constructor.

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
function. Additional arguments are curried to the given function.

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

This function is provided for readability over the
traditonal JavaScript `.bind` method:

~~~
view.on('InputSelect', bind(this, function (evt) {
  //...
}));

view.on('InputSelect', (function (evt) {
  //..
}).bind(this));
~~~

In the first example, it's clear that a new context is
assigned for `this` in the callback function at the
beginning, where in the second example, the new binding of
`this` doesn't happen until the end of the function declaration.

Of course, the regular JavaScript `.bind` can still be used
when it makes sense, as in assigning a bound function name
to a new variable:

~~~
var my_bound_fn = my_function.bind(this);
~~~


### merge (obj1, obj2 [, obj3 ...])
1. `base {object}`
2. `props {...object}`
3. Return: `{object}`

Combine the properties of multiple objects. All properties
are collected on the object passed as the first argument,
and if a property already exists, subsequent values are ignored.

~~~
var obj1 = {a: 1, b: 2},
    obj2 = {b: 3, c: 4};

merge(obj1, obj2); //=> obj1

console.log(obj1); //=> {a: 1, b: 2, c: 4}
~~~

This function is particularly useful for combining objects
that contain options that are passed up a class
initialization hierarchy. However, there is a caveat for
this common usage, since an options object may not exist,
the properties can not be merged on an `undefined` value. To
account for this, set the `opts` parameter to the return
value of `merge` as illustrated here:

~~~
function not_merged (opts) {
  merge(opts, {x: 1});
  return opts;
}

function merged (opts) {
  opts = merge(opts, {x: 1});
  return opts;
}

not_merged();  //=> undefined
merged();      //=> {x: 1}
~~~

This way you can be assured that the options object contains
all the properties you intend for it to have.

### GLOBAL
1. `{object}`

The global object. Properties assigned to this object are
available in the global scope, within any class or module.
