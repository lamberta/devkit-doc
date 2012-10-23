## Displaying an image

This example requires an image in your resources directory
and renders it to the screen.

<img src="resources/images/specialBlue.png" alt="a book screenshot" class="screenshot">

This following demo application shows how to display an image:

Import the image view class:
~~~
import ui.ImageView as ImageView;
~~~

Declare the application class:
~~~
exports = Class(GC.Application, function() {
~~~

Set the default settings:
~~~
    this._settings = {
        logsEnabled: window.DEV_MODE,
        showFPS: window.DEV_MODE,
        clearEachFrame: true,
        alwaysRepaint: true,
        preload: []
    };
~~~

Initialize the UI:
~~~
    this.initUI = function() {
~~~
Create an imageView, the application has a root view which is used as the superview for the imageView:
~~~
        var imageview = new ImageView({
            superview: this.view,
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            image: "resources/images/specialBlue.png"
        });
    };

    this.launchUI = function () {};
});
~~~

The output should look like this screenshot:

<img src="screenshot.png" alt="a book screenshot" class="screenshot">
