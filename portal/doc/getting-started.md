#Getting Started with Game Closure SDK

##In the beginning
The entry point into your game is the method `launchUI()` in the generated file 
`Application.js`. Think of it as the `main` function.

From here you may initialise game objects and display objects.

##Common terms

* __`View`__ --- a View is any game object that should be visible on the
screen. There are interal Views for displaying Images, Sprites or Text. 

* __`subview`__ --- a child of a View.

* __`superview`__ --- a parent of a View.

* __`InputStart`__ --- an event for mouse and touch events. When mouse is down or touch has started.

* __`InputSelect`__ --- an event for mouse and touch when mouse is up or touch has ended.

* __`device`__ --- this is a namespace for information regarding the environment the game is running on for responsive games.

* __`opts`__ --- many Game Closure classes require an object as an argument as opposed to long complicated arguments. `opts` is just a common name for the argument as it is the options passed into the class.

* __`supr`__ --- in classic inheritance, it is necessary to execute functions in the parent class. This is usually known as `super` but as it is a reserved word in JavaScript, we use the nickname `supr`. It is passed into the class definition function when the class is created through an argument so you may name this whatever you want.

* __`DEV_MODE`__ --- a boolean flag whether the game is in development mode or not.

* __`exports`__ --- when using the SDK import system, whatever `exports` is set to will be the object that is returned from importing the file.

* __`Class`__ --- function to create a class using the Game Closure class system. This isn''t required as it is possible to create your own classes in whatever style you prefer.

* __`timestep`__ -- the Game Closure game engine and namespace.

##Hello World

Let''s start with `Application.js` as this is our entry point. A good idea
would be to create another View as the container rather than bloat
the Application file with game code. My convention is to create a generic
View called `World`. For now let''s start with `Application.js`.

    //use the SDK import system
    "use import";

    //import the GC namespace
    import GC;

    exports = Class(GC.Application, function() {

        this._settings = {
            logsEnabled: window.DEV_MODE,
            noTimestep: false,
            showFPS: window.DEV_MODE,
            alwaysRepaint: true
        };

        this.initUI = function() {
            //do stuff
        }

        this.launchUI = function() {
            //create the container view for the Game
            //pass the root view as an option to be the parent
            this.world = new World({parent: this.view});
        }
    });

In our Application file we created an instance of the `World` class I mentioned
earlier. Though there are a few problems:

1. The class doesn''t exist yet
2. We didn''t import it so the SDK won''t be able to find it

Create a file called `World.js`:

    "use import";

    import timestep.View as View;
    import timestep.TextView as TextView;

    exports = Class(View, function(supr) {
		//class contructor
		this.init = function() {
			supr(this, "init", arguments);

			//create a TextView with this View as the parent
			var text = new TextView({
				text: "Hello World!",
				parent: this
			});
		}
    });

Now we need to be able to reference it in `Application.js`. Add this line after `"use import";`.

	import .World;

Horray, now we have a cross browser, cross device implementation of 
Hello World!

The View heirarchy looks something like this:
    Application (root view) -> World -> TextView

##Import system

Each JavaScript file is a module. To identify a module, we use the file path 
to the JavaScript file. Dots (.) in the module identifier separate folder 
names and filenames (no need to specify the file extension). There are two 
types of path identifiers: __absolute paths__ and __relative paths__.

A leading dot indicates a __relative__ path where the import system will look
for the module within the current directory of the module importing the
file. Consecutive dots indicate the __parent__ directory.

Ommiting a leading dot indicates an __absolute__ path. This is required for
internal modules such as those under the `timestep` namespace.

    .ui.View -> ./ui/View.js
    .index   -> ./index.js
    ..foo    -> ../foo.js
    ...foo   -> ../../foo.js

You may also alias the module as an easy to use name by using `as`:

    import timestep.View as View;

That way you can reference it as `View` instead of `timestep.View`.

##Alternative Classes

We don't want to force an unwanted methodology when developers have their own
ideas about objects, structure and organization. That's why you may choose
not to use the internal class system as long as you include some bridge code.

We will create a basic red rectangle class that turns blue when a mouse is
down or touch has started (on the view) then green when the mouse is up or
touch has ended.

~~~
"use import";

import timestep.View as View;

//a custom red rectangle class
function RedRect(opts) {
    this.init.apply(this, arguments);
    this.style.backgroundColor = "#FF0000";

    this.onInputSelect = function() {
        this.style.backgroundColor = "#00FF00";
    }
}

//inherit the View prototype
exports = inherit(RedRect, View);

//custom prototype function
RedRect.prototype.onInputStart = function() {
    this.style.backgroundColor = "#0000FF";
}


/**
 * Utility to inherit the prototype chain
 */
function inherit(ctor, superCtor) {
    ctor.prototype = superCtor.prototype;
    return ctor;
};
~~~
