## Input

The SDK supports touch events, while developing on the desktop the mouse can be used.
All views have several methods to handle touch events:

* onInputSelect
* onInputStart
* onInputMove
* onInputOut

**Input demos:**
- [andling click events](@todo click/readme.html)
- [Detect an input out event](@todo out/readme.html)
- [Capturing a move event](@todo trail/readme.html)

**Related api docs:**
- [View class](@todo link to view class)
- [Emitter class](@todo link to emitter class)

### Handling click events

The onInputStart method of a view is called when the uses first touches the screen and the
releases the screen. [This example](@todo click/readme.html) shows how to implement the
onInputSelect method.

### Detect an input out event

A button should only work when the uses presses it and then releases it. If the user
touches the button but releases the screen outside the button it should not be registered
as a valid button click. To achieve this functionality you can use a combination of
onInputStart and onInput select as [demonstrated here](@todo out/readme.html).

### Capturing a move event

[The trail demo](@todo trail/readme.html) shows how to detect if the user is dragging.