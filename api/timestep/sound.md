# timestep.Sound

## Class: timestep.Sound

Inherits
:    1. [lib.PubSub](./lib-pubsub.html)

## new timestep.Sound ([options])
1. `options {object}`
	* `path {string}` ---Directory where the sound files exist. This builds the path to the sound files.
	* `map {object}` ---Map where key is the sound name and the value is an object of options.
	* `sources {array}` ---List of sources that will be preloaded. Default is the path + sound name + type.
	* `loop {boolean}` ---Continue looping the sound.
	* `background {boolean}` ---Background sound. Will loop forever.
	* `volume {number}` ---Volume of the sound between `0.0` and `1.0`.

### sound.addSound (name, opts)

Create a sound from a name and some options. See the above [options](#options).

### sound.setMuted (muted)
1. `muted {boolean}`

Set the mute state on all the sounds.

### sound.setVolume (name, volume)
1. `name {string}` ---Sound name given in the options when created.
2. `volume {number}` ---Value of the volume between `0.0` and `1.0`.

Set the volume of a specific sound.

### sound.play (name)
1. `name {string}` ---Sound name to play.

Play a previosly created sound.

### sound.pause (name)
1. `{string} name` ---Sound name to pause.

Pause a previously created sound.

### sound.playBackgroundMusic (name)
1. `name {string}` ---Name of the background sound to play.

Play a background sound in the background. Stop any previous
background sounds.

### sound.pauseBackgroundMusic ()

Pause the currently playing background sound. Only one background sound can play at a time.
