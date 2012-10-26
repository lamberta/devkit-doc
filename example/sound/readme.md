## Sound

It's easy to play sounds and music with the SDK.

All demos listed here also include the necessary sound files, you can
find the demos under the `examples` tab in the SDK.

The demos include both .ogg and .mp3 files however when publishing a
project you only need the .mp3 files. The .ogg files are included
because the Chromium browser does not support the .mp3 format.

**Sound demos:**
- [effects](@todo effect/readme.html)
- [background sound](@todo background readme.html)
- [muting](@todo mute/readme.html)
- [volume](@todo volume/readme.html)

**Related api docs:**
- [Sound class](@todo link to sound class)

### Playing effects

[The effects demo](@todo effect/readme.html) shows how to load several sound files and play them.

### Playing a background sound

Playing a background sound is almost the same as playing an effect, the main difference is
the setup code. The [background sound demo](@todo background readme.html) shows how to play a
background sound and pause and resume it.

### Muting sounds

The mute functions works globally, it applies to all effects or sounds. Effects and sound each
have their own mute function which is [demonstrated in this demo](@todo mute/readme.html).

### Setting the sound volume

The volume of an effect can be set before you start playing it. [The volume demo](@todo volume/readme.html)
has three effects which can be played at different volumes.