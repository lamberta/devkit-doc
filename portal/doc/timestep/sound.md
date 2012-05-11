# `timestep.Sound`

## Inheritence

1. [lib.PubSub](./lib-pubsub.md)

## Options

* __path__ `{string}` ---Directory where the sound files exist. This builds the path to the sound files.

* __map__ `{object}` ---Map where key is the sound name and the value is an object of options.
	
	* __sources__ `{array}` ---List of sources that will be preloaded. Default is the path + sound name + type.

	* __loop__ `{boolean}` ---Continue looping the sound.

	* __background__ `{boolean}` ---Background sound. Will loop forever.

	* __volume__ `{number}` ---Volume of the sound between `0.0` and `1.0`.

## Methods

* __addSound (name, opts)__ ---Create a sound from a name and some options. See the above [options](#options).

* __setMuted (muted)__ ---Set the mute state on all the sounds.
	* @param `{boolean} muted` ---Boolean value to set the state.

* __setVolume (name, volume)__ ---Set the volume of a specific sound.
	* @param `{string} name` ---Sound name given in the options when created.
	* @param `{number} volume` ---Value of the volume between `0.0` and `1.0`.

* __play (name)__ ---Play a previosly created sound.
	* @param `{string} name` ---Sound name to play.

* __pause (name)__ ---Pause a previously created sound.
	* @param `{string} name` ---Sound name to pause.

* __playBackgroundMusic (name)__ ---Play a background sound in the background. Stop any previous background sounds.
	* @param `{string} name` ---Name of the background sound to play.

* __pauseBackgroundMusic__ ---Pause the currently playing background sound. Only one background sound can play at a time.

## Usage


