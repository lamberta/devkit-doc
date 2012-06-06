
InputStart
InputOut
InputOver
InputSelect
InputScroll
InputMove

//events on the first phase of capture/bubble?
InputStartCapture


On view:
this.subscribe('InputSelect', function () {});

Root app:
GC.app.view.subscribe('InputSelect', function () {});


Event object?


Wish list:
InputPress --Takes into account InputStart and InputSelect.
