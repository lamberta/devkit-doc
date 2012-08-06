# sound

## Module: sound

A sound is defined as a category and name, loaded from a
project's path: `{project}/resources/sounds/{category}/{name}`.

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

To use the `boink.mp3` file in the following API
functions, the category is referenced as
`'effect'` and the name is `'boink'`.


### sound.preload (category [, name])
1. `category {string}` ---Directory path within `{projects}/resources/sounds`.
2. `name {string}` ---The name of the audio file, without the extension.

Preload the audio file in to memory, or entire directory of
sounds. Files that are preloaded will start playing
immediately when `play` is called.


The sound is preloaded using the 

~~~
sound.preload('mycategory/mylabel', 'mysound');
~~~

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

~~~
sound.pause('mycategory/mylabel', 'mysound');
~~~

### sound.setVolume (category, name, volume)
1. `category {string}`
2. `name {string}`
3. `volume {number}`

Sets the volume of the sound.

~~~
sound.setVolume('mycategory/mylabel', 'mysound', 5);
~~~

### sound.muteAll ([shouldMute])
1. `shouldMute {boolean}`

Either mutes or unmutes all the sounds, depending on `shouldMute`.

~~~
sound.preload('mycategory/mylabel', 'mysound');
~~~

## Example: Play and Pause a Sound Loop

~~~
import sound;
import device;
import ui.View as View;

exports = Class(GC.Application, function () {

  var play_btn, stop_btn;
  
  this.initUI = function () {
    create_buttons(this.view);
    
    sound.preload('mylabel', 'mysound');
        
    play_btn.subscribe('InputSelect', function () {
      sound.play('mylabel', 'mysound', {loop: true});
    });

    stop_btn.subscribe('InputSelect', function () {
      sound.pause('mylabel', 'mysound');
    });
  };

  function create_buttons (parent) {
    play_btn = new View({
      x: device.width/2 - 125,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#00ff00'
    });

    stop_btn = new View({
      x: device.width/2 + 25,
      y: 100,
      width: 100,
      height: 100,
      backgroundColor: '#ff0000'
    });

    parent.addSubview(play_btn);
    parent.addSubview(stop_btn);
  }
});
~~~
