# Class: ui.ViewPool

The `ViewPool` class is designed to help manage view
recycling. To avoid frame drops during gameplay, it is best
to avoid initializing new views. ViewPools allow you to
pre-initialize views before you need them, and to recycle
them for re-use when you're finished with them. ViewPools
work with any class that inherits from the base `View` class.

## Examples

* [ImageView ViewPool](../example/views-pools/)

## Methods

### new ViewPool ([options])

Parameters
:    1. `ctor {class constructor function}` ---The constructor of the class you want to recycle.
     2. `initCount {number}` ---The number of views to initialize when the ViewPool is created.
         * It's best to avoid creating new views during gameplay.
     3. `initOpts {object}` ---View options used to initialize views when the ViewPool is created.


The constructor used to create an instance of a `ui.ViewPool`
object. It's recommended that you use both initCount and
initOpts to establish a full pool of views before gameplay
begins. The ViewPool will create new views only if it runs out
of views in its pool; avoid this by knowing how many views
from each pool you will need at any given time and passing
that max value as your initCount.

~~~
import ui.View as View;
import ui.ImageView as ImageView;
import ui.ViewPool as ViewPool;

exports = Class(View, function(supr) {

    this.init = function(opts) {
        supr(this, 'init', [opts]);

        // initialize a ViewPool for ImageViews
        this.imageViewPool = new ViewPool({
            ctor: ImageView,
            initCount: 100,
            initOpts: {
                parent: this,
                width: 50,
                height: 50,
                image: "resources/images/star.png"
            }
        });
    };

    // your class code ...

});
~~~

### obtainView ([options])

Parameters
:    1. `options {object}` ---The options object is used to init or update a view from the pool.
         * When a view is re-used, the ViewPool calls the view's updateOpts function and passes in the options object.

Returns
:    1. `{View}` ---Returns a new or recycled instance of the class created by the constructor established when creating the ViewPool.

Obtain a view from the pool, which has updated properties and styles based on the options passed in. This method also sets the view's style.visible property to true. The same view cannot be obtained again until it has first been released via the releaseView method.

### releaseView (view)

Parameters
:    1. `view {View}` ---A view obtained from this ViewPool that you're finished using.

Makes the view you pass in available for re-use and recycling. Call this function once you are finished using a view from the pool. This method also sets the view's style.visible property to false.

### releaseAllViews ()

Calls releaseView for all views that have been obtained but not released.