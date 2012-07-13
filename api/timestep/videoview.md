# timestep.VideoView

## Class: timestep.VideoView

Inherits
:    1. [timestep.View](./timestep-view.html)
     2. [lib.PubSub](./lib-pubsub.html)

### new timestep.VideoView ([options])
1. `options {object}`
	* `src {string}` ---URL.
	* `loop {boolean}`
	* `volume {number}`


## Class: Video

Resource. Not instantiated by developer.

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
