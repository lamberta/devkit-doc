# Class: AudioManager

A class for creating, managing, and playing sounds. For
details about best practices when creating sound files, see
the [Creating Audio Assets Guide](../guide/audio-assets.html).

## Examples

* [Background Music](../example/sound-background/)
* [Effects](../example/sound-effect/)
* [Mute Sound](../example/sound-mute/)
* [Adjust Volume](../example/sound-volume/)
* [Adjust Background](../example/sound-background/)

## Methods

### new AudioManager ([options])

Parameters
:    1. `options {object}`
	     * `path {string}` ---Directory path containing audio files.
		 * `files {object}` ---Collection of audio files mapped to their options.
		 * `persist {}`

`path` is the directory containing a group of audio files,
relative to the top-level of a project. `files` is an object
mapping audio files to their options.

The `files` options object has the following properties:

 * `sources {}`
 * `background {boolean}` ---Set as the background music file, one per group.
 * `loop {boolean}`
 * `volume {number}`
 * `path {string}` ---Add additional path information to the options path.

Given the above directory structure for a project, multiple
sound groups can be created using:

For the examples on this page, we'll assume the following
directory structure of a project:

~~~
project
.
├── manifest.json
├── sdk/ -> /path/to/basil/sdk
├── build/
├── resources/
│   └── sounds/
│       ├── music/
│       │   └── levelmusic.mp3
│       └── effect/
│           └── boink.mp3
└── src/
    └── Application.js
~~~

And to use these files with your game:

~~~
import AudioManager;

var audiomanager = new AudioManager({
  path: 'resources/sounds',
  files: {
    levelmusic: {
      path: 'music',
      volume: 0.5,
      background: true,
      loop: true
    },
    boink: {
      path: 'effect',
      background: false
    }
  }
});
~~~

### addSound (name [, options])

Parameters
:    1. `name {string}`
     2. `options {object}` ---Audio file options described above.

Add a sound to the sound group.

~~~
audiomanager.addSound('pop', {
  path: 'effect',
  background: false
});
~~~

### play (name [, options])

Parameters
:    1. `name {string}`
	 2. `options {object}`
	     * `loop {boolean} = false`

Returns
:    1. `{boolean}` ---Returns `true` on success, `false` if not.

Play a audiomanager. If it has already been preloaded, it will play
immediately, otherwise, it will need to load it into memory
before playing.

~~~
audiomanager.play('boink', {loop: true});
~~~

### pause (name)

Parameters
:    1. `name {string}`

Returns
:    1. `{boolean}` ---Returns `true` on success, `false` if not.

Pause a sound. The audio file is stopped at a certain point,
and restarted from that point when played again.

~~~
audiomanager.play('levelmusic');
~~~

### stop (name)

Parameters
:     1. `name {string}`

Returns
:     1. `{boolean}` ---Returns `true` on success, `false` if not.

Stop a sound. If a sound is played again, it will restart
from the beginning.

~~~
audiomanager.stop('levelmusic');
~~~

### setVolume (name, volume)

Parameters
:    1. `name {string}`
	 2. `volume {number}` ---A range between 0 and 1.

Returns
:    1. `{boolean}` ---Returns `true` on success, `false` if not.

Sets the volume of the sound, with 1 as the maximum, and 0
as silent. A sound's default volume is 1.

~~~
audiomanager.setVolume('levelmusic', 0.8);
~~~

### getVolume (name)

Parameters
:    1. `name {string}`

Returns
:    1. `{number}`

Returns the volume level of the specified sound.

~~~
audiomanager.getVolume('levelmusic'); //=> 0.8
~~~

### setMuted (isMuted)

Parameters
:    1. `isMuted {boolean}`

Mute volume on all sounds.

### getMuted ()

Returns
:    1. `{boolean}`

Check the mute status of all sounds.

### setMusicMuted (isMuted)

Parameters
:    1. `isMuted {boolean}`

Mute volume on music sound.

### getMusicMuted ()

Returns
:    1. `{boolean}`

Check the mute status of the music sound.

### setEffectsMuted (areEffectsMuted)

Parameters
:    1. `areEffectsMuted {}`

Mute volume on effects sounds.

### getEffectsMuted ()

Returns
:    1. `{boolean}`

Check the mute status of the effects sounds.

### setPath (path)

Parameters
:    1. `path {string}`

Set a new path for the sound group.

~~~
audiomanager.setPath('resources/sounds/music');
~~~

### getPath ([name])

Parameters
:    1. `name {string}` ---Optional sound name.

Returns
:    2. `{string}`

~~~
audiomanager.getPath();        //=> "resources/sounds"
audiomanager.getPath('boink'); //=> "resources/sounds/effect"
~~~

### getExt ()

Returns
:    1. `{string}`

Returns the file extension of the sound.

~~~
audiomanager.getExt() //=> ".mp3"
~~~
