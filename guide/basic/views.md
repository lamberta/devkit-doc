# Views

## Example: Nested views

Create two rectangles, one red and blue. The red rectangle
is displayed in front of the blue by modifying its `zIndex` property.

~~~
m4_include(./examples/api/view.js)
~~~

Load this code as the `Application.js` file in your project,
run the simulator, and you should see something like this:

<img src="../api/assets/ui-view/example-nested-views.png" alt="nested views screenshot" class="screenshot">

## Example: Modify a view's style

Create many views with random positions, sizes, rotations,
and colors.

~~~
m4_include(./examples/api/update-view-style.js)
~~~

<img src="../api/assets/ui-view/example-update-view-style.png" alt="update view style screenshot" class="screenshot">
