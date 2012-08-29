# Loading Assets

## Module: GCResources

`GCResources` is a module used for preloading image and
sound assets.

~~~
import GCResources;
~~~

Loading assets, while asynchronous, is still demanding on the
system. When loading assets for a separate game screen, the
typical flow might be to queue up an animation to a loading
screen first, transition to the loading screen, then preload
the assets in the background. After the assets have been
preloaded, the callback is executed which can then
transition out of the loading screen into the game screen.

For the following loading methods, we'll assume the
following directory structure for a project:

~~~
project/
  |--src/
  |   |--Application.js
  |--resources/
      |--images/
      |   |--bgimage.jpg
      |--sounds/
          |--effects/
          |   |--boing.mp3
          |--music/
              |--levelmusic.mp3
~~~

### GCResources.preload (path, callback)
1. `path {string}`
2. `callback {function}`

The `path` parameter is specified as a file path, or a
directory path containing multiple assets. When the sound
and image files are loaded in to memory, the supplied
callback function is executed.

~~~
GCResources.preload('resources/images/bgimage.jpg', function () {
  //image is loaded ...
});
~~~

### GCResources.preload (paths, callback)
1. `paths {array}` ---A collection of path strings.
2. `callback {function}`

Multiple resources can be loaded at once by passing an array
of paths.

To load all the asset files contained in the directories and
sub-directories of `resources/images` and `resources/sounds`:

~~~
GCResources.preload(['resources/images', 'resources/sounds'], function () {
  //image is loaded, audio files are loaded ...
});
~~~
