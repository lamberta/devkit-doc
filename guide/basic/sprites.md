# Sprites

A *Sprite* consists of multiple *animations* (walk, run,
etc.) which themselves are made of multiple *frames*.

The sprite system loads images from a directory using file
names formatted as:

~~~
directory/spriteName-animationName-01.png
directory/spriteName-animationName-02.png
...
directory/spriteName-animationName-08.png
... etc ...
~~~

The sprite system infers three things from the file names:
the *name* of the sprite, the *name* of each animation for
the sprite, and the *amount*  of frames required for an
animation.

Given the following images in a project's `resources` directory:

~~~
resources/images/characters/tim-idle-01.png
resources/images/characters/tim-idle-02.png
resources/images/characters/tim-idle-03.png
resources/images/characters/tim-idle-04.png
resources/images/characters/tim-run-01.png
resources/images/characters/tim-run-02.png
resources/images/characters/tim-run-03.png
~~~

There is one sprite, *tim*, with two animations, *idle*
and *run*, and the *idle* animation contains four frames,
the run animation three.

During the build stage, these images are automatically
turned in to an optimized sprite-sheet based on this
information, and in some cases, they are converted in to
multiple sprite-sheets. These are saved in the
`build/resources` directory of your project.

Developers should not need to touch the generated
sprite-sheets, however, if you have changed an animation and
are still seeing the old images, you can delete the
`build/resources` directory to remove the cache and it will
be re-generated on the next build.

## Example: Create a sprite

Given the following project layout for resources:

~~~
project
  |- src
  |    \- Application.js
  |- resources
       \- images
            \- characters
                 |- tim_idle_1.png
                 |- ...
                 |- tim_idle_5.png
                 |- tim_walk_1.png
                 |- ...
                 |- tim_walk_8.png
~~~

You can set up a sprite to play multiple animations:

~~~
m4_include(./examples/api/spriteview.js)
~~~
