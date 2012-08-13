# ui.VideoView

## Class: ui.VideoView

Inherits
:    1. [ui.View](./ui-view.html)
     2. [event.Emitter](./event.html#class-event.emitter)

~~~
import ui.VideoView as VideoView;
~~~

### new ui.VideoView ([options])
1. `options {object}`
	* `src {string}` ---URL.
	* `loop {boolean}`
	* `volume {number}`


## Class: ui.resource.Video

~~~
import ui.resource.Video as Video;
~~~

### video.play ()

### video.pause ()

### video.getVolume ()
1. Return: `{number}`

### video.setVolume (volume)
1. `volume {number}`

### video.getPosition ()
1. Return: `{number}`

### video.setPosition (time)
1. `time {number}`

### video.setEvent (type, callback)
1. `type {string}`
2. `callback {function}`
