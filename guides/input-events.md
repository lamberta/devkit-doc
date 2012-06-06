# Input Events

## Using the PubSub class for messaging

view.subscribe('InputEventType', thisObj, function () {});
view.publish('InputEventType');

## Event types

* InputStart (evt, pt)
* InputOut
* InputOver
* InputSelect (evt, pt)
* InputScroll
* InputMove

//events on the first phase of capture/bubble?
InputStartCapture

On view:
this.subscribe('InputSelect', function () {});

Root app:
GC.app.view.subscribe('InputSelect', function () {});


## Event object

`timestep.input.InputEvent`


## Wish list

InputPress --Takes into account InputStart and InputSelect.
