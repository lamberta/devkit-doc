## Animation, pause

This example demonstrates how pause and resume an animation.
You can click on the view the pause or resume the animation.

Import the View class and animate

~~~
import ui.View as View;
import animate as animate;

var AnimationView = Class(View, function(supr) {
    this.onInputSelect = function() {
        var animation = this.getAnimation();
        animation.isPaused() ? animation.resume() : animation.pause();
    };

    this.animate = function() {
        this.getAnimation()
~~~

Clear the animation queue

~~~
            .clear()
~~~

Move right - linear

~~~
            .then({x: 200}, 1500, animate.linear)
~~~

Move down - ease in

~~~
            .then({y: 200}, 1500, animate.easeIn)
~~~

Move left - ease out

~~~
            .then({x: 20}, 1500, animate.easeOut)
~~~

Move up - ease in, ease out

~~~
            .then({y: 20}, 1500, animate.easeInOut)
~~~

Start animating again

~~~
            .then(bind(this, "animate"));
	};
});
~~~

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

Create a single red squared view...

~~~
        new AnimationView({
            superview: this.view,
            backgroundColor: "red",
            x: 20,
            y: 20,
            width: 100,
            height: 100
        }).animate();
    };

    this.launchUI = function () {};
});
~~~~