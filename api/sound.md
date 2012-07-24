# sound

## Module: sound

Sounds are defined as a category and name, and are loaded from `resources/sounds/{category}/{name}`.

~~~
import sound;
~~~

### sound.preload (category [, name])
1. `category {string}`
2. `name {string}`

Preloads the sound or entire category.

### sound.play (category, name [, options])
1. `category {string}`
2. `name {string}`
3. `options {object}`
	* `loop {boolean} = false` ---Loops sound.

Plays the sound.

### sound.pause (category, name)
1. `category {string}`
2. `name {string}`

Pauses the sound.

### sound.setVolume (category, name, volume)
1. `category {string}`
2. `name {string}`
3. `volume {number}`

Sets the volume of the sound.

### sound.muteAll ([shouldMute])
1. `shouldMute {boolean}`

Either mutes or unmutes all the sounds, depending on `shouldMute`.

### sound.forEach (callback)
1. `callback {function(sound, category, name)}`

Iterate over each sound.
