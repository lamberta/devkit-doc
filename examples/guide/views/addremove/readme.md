## Adding and removing views

This example demonstrates how to move a (sub)view from one (super)view to another (super)view.

Import the View class:

~~~
import ui.View as View;
~~~

This is a box which will jump from the red box to the blue box and back...

~~~
var JumpingBox = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [opts]);

		this._dt = 0;
~~~

This view starts as a subview of the red box...

~~~
		this._index = 0;
	};

	this.tick = function(dt) {
		var superview;
~~~

The number of milliseconds passed since the last time the tick function was called

~~~
		this._dt += dt;
~~~

Jump every 500ms...

~~~
		if (this._dt > 500) {
			this._dt %= 500;
~~~

Get the superview of the superview which is the superview of the red or blue box...

~~~
			superview = this._superview.getSuperview();
~~~

Remove this view from its superview,
if this._index equals 0 the the superview is the red box
if this._index equals 1 the the superview is the blue box

~~~
			this.removeFromSuperview();
~~~

Use indices 0, 1, 0, 1, 0, 1, etc...

~~~
			this._index = (this._index + 1) & 1;
~~~

add this view to the red or the blue view...

~~~
			superview.getSubviews()[this._index].addSubview(this);
		}
	};
});
~~~

Create an application, set the default settings:

~~~
exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
~~~

Create a view, this is a view which will be the superview of the JumpingBox view

~~~
		new View({
			superview: this.view,
			backgroundColor: "#FF0000",
			x: 20,
			y: 20,
			width: 100,
			height: 100
		});
~~~

Create another view, this is a view which will be the superview of the JumpingBox view

~~~
		new View({
			superview: this.view,
			backgroundColor: "#0000FF",
			x: 120,
			y: 120,
			width: 100,
			height: 100
		});
~~~

This view will jump between the two previously instantiated views:

~~~
		new JumpingBox({
			superview: this.view.getSubviews()[0],
			backgroundColor: "#008800",
			x: 25,
			y: 25,
			width: 50,
			height: 50
		});
	};

	this.launchUI = function () {};
});
~~~