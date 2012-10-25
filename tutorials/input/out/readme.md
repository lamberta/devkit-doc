## Detect an input out event

This demo shows how to detect if there's a click on the view but released outside the view.
This construction is mainly used for buttons, a button click is only registered when a user
touches the button and the touch up event is also triggered inside the same button.

First we import a View class
~~~
import ui.View as View;
~~~

Then we create a view based on the view class which changes color when clicked:

~~~
var ClickBox = Class(View, function(supr) {
    this.init = function(opts) {
        opts = merge(opts, {backgroundColor: "#FF0000"});
        this._index = 1;

        supr(this, "init", [opts]);
    };
~~~

Change the color when the view is clicked...

~~~
    this.onInputStart = function() {
        this.updateOpts({backgroundColor: "#0000FF"});
    };
~~~

Change the view when dragged outside the view...

~~~
    this.onInputOut = function() {
        this.updateOpts({backgroundColor: "#AA0000"});
    };
});
~~~

Create an application with its default settings:

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
		this._clickBox = new ClickBox({
			superview: this.view,
			x: 10,
			y: 10,
			width: 100,
			height: 100
		});

		this.view.onInputSelect = bind(this, "onInputSelect");
	};
~~~

Restore the background of the view...

~~~
	this.onInputSelect = function() {
		this._clickBox.updateOpts({backgroundColor: "#FF0000"});
	};

	this.launchUI = function () {};
});
~~~

The output should look like this screenshot:

<img src="screenshot.png" alt="a book screenshot" class="screenshot">