# sound

## Module: sound

A sound is defined with a category and a name, loaded from a
project's path in the form: `{project}/resources/sounds/{category}/{name}`.

~~~
import sound;
~~~

Given the following file structure of an application:

~~~
project
 |- shared
    \- Application.js
 \- resources
    \- sounds
       |- background
          \- music.mp3
       \- effect
          \- boink.mp3
~~~

For example, to use the `boink.mp3` file in the following
API functions, the category is referenced as `'effect'` and
the sound name is `'boink'`.


### sound.preload (category [, name])
1. `category {string}` ---Directory path within `{projects}/resources/sounds`.
2. `name {string}` ---The name of the audio file, without the extension.

Preload the audio file in to memory, or, the entire directory of
sounds. Files that are preloaded will start playing
immediately when `play` is called.

Given the directory structure outlined above, preload the
`boink` sound by calling:

~~~
sound.preload('effect', 'boink');
~~~

### sound.play (category, name [, options])
1. `category {string}`
2. `name {string}`
3. `options {object}`
	* `loop {boolean} = false` ---Loops sound.

Play a sound. If it has already been preloaded, it will play
immediately, otherwise, it will need to load it into memory
before playing.

~~~
sound.play('effect', 'boink');
~~~

### sound.pause (category, name)
1. `category {string}`
2. `name {string}`

Pause a sound. The audio file is stopped at a certain point,
and restarted from that point when played again.

~~~
sound.pause('effect', 'boink');
~~~

### sound.stop (category, name)
1. `category {string}`
2. `name {string}`

Stop a sound. If a sound is played again, it will restart
from the beginning.

~~~
sound.stop('effect', 'boink');
~~~

### sound.setVolume (category, name, volume)
1. `category {string}`
2. `name {string}`
3. `volume {number}` ---A range between 0 and 1.

Sets the volume of the sound, with 1 as the maximum, and 0
as silent. A sound's default volume is 1.

~~~
sound.setVolume('effect', 'boink', 0.5);
~~~

### sound.muteAll ([shouldMute])
1. `shouldMute {boolean} = true`

Mute each sound. If passed a `false` argument, unmute each sound.

~~~
sound.muteAll();
// ... silence ...
sound.muteAll(false);
// ... NOISE! ...
~~~


## Example: Play and Pause a Sound Loop

Given the directory structure outlined above, set up two
buttons: one to play an audio sample in a loop, and the
other to pause the sound.

~~~
m4_include(./examples/api/sound.js)
~~~
