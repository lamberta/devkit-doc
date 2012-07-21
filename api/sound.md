# sound

## Module: sound

~~~
import sound;
~~~

### sound.preload (category, name)
1. `category {string}`
2. `name {string}`

Loads a sound in the application's `resources/sounds/{category}/{name}` path.

### sound.play (category, name [, options])
1. `category {string}`
2. `name {string}`
3. `options {object}`
	* `loop {boolean} = false` ---Loops sound.

Play a sound.

### sound.pause (category, name)
1. `category {string}`
2. `name {string}`

Pause a sound.

### sound.setVolume (category, name, volume)
1. `category {string}`
2. `name {string}`
3. `volume {number}`

### sound.muteAll ()

Mute all the sounds.

### sound.unmuteAll ()

Un-mute all the sounds.

### sound.forEach (callback)
1. `callback {function(sound, category, name)}`

Pass a function that is iterated over each sound.
