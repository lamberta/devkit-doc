# Build for Native Devices

## Android

### Install the Android SDK

Download and install the
[Android SDK](http://developer.android.com/sdk/) to your
local machine. If you are using the
[Homebrew](http://mxcl.github.com/homebrew/) package
manager, run:

test

`$ brew install android`

Running `android` at the command-line brings up a GUI
front-end that will install the latest target. Install the
Android API 15.

### Install the native Android component from the Game Closure SDK

Clone the Game Closure
[Android repository](https://github.com/gameclosure/android). Switch
to this directory and make sure everything is up-to-date:

~~~
$ git clone git@github.com:gameclosure/android.git
$ cd ./android
$ git submodule update --init
~~~

To let basil know where to find the android repository,
update the `config.json` file located in the root of the
basil install:

~~~
{
  "android": {
    "root": "path/to/android"
  }
}
~~~

And make sure all the required sub-modules are updated:

`$ basil update`

### Build the apk

In the top-level of your project, run:
`$ basil build native-android`

This creates an apk file located at `path/to/project/build/myapp.apk`.

To create a debugging version, just add the appropriate flag:

`$ basil build native-android --debug --clean --no-compress`

Install the application to your device:

`$ adb install -r path/to/project/build/myapp.apk`

Run the game on your device by clicking its icon in the
Application menu!


### Configure the device

To set up your Android device for development, enable *USB
Debugging*. (This option is located in `Settings > Applications > Development`.)

#### Using adb, the Android Development Bridge

List the connected devices in the form: 'serialnumber device':

`$ adb devices`

Issue commands to a specific emulator/device:

`$ adb -s <serialnumber> <command>`

Install an application to a device:

`$ adb install -r <path-to-apk>`

Print logging information to the console:

`$ adb logcat <option> <optional-filter-spec>`

Stop the server if something is hanging:

`$ adb kill-server`

Also attempt to reboot the mobile device if it still hangs.

Reference:
* [Using Hardware Devices](http://developer.android.com/guide/developing/device.html)
* [Android Debug Bridge](http://developer.android.com/guide/developing/tools/adb.html)


## Performance Best Practices

### Start with performant JavaScript code

Any code that *can* be taken out of a loop, *should* be
taken out. Function calls carry some additional
overhead. Generally, modern JavaScript engines optimize for
most use cases, but using a tool like
[jsPerf](http://jsperf.com) to test snippets can be very
insightful (even though it run tests in your browser, the
lessons can still apply).

Also, get comfortable with debugging JavaScript using the
Chrome Developer Tools, especially the
[Profiles Panel](https://developers.google.com/chrome-developer-tools/docs/profiles),
with particular attention to the **CPU profiler** and the
**Heap profiler**.

### Allocate fewer objects

The more objects that are created, the greater the
performance lag when the JavaScript engine needs to garbage
collect them, and if there are any references to an object,
its memory won't be de-allocated. It's better to reuse
existing objects than create new ones, so for example:

* Use `Date.now()` instead of `+new Date()`.
* Clear an old array with `arr.length = 0` instead of creating a new one.
* Likewise, recycle objects rather than creating new ones.

There are some symptoms for bad garbage collection:

* Logs about garbage collection from V8 in `adb logcat`.
* Irregular glitches in framerate when you're not doing anything notable in JavaScript.
* Smooth framerates followed by brief lag spikes.

#### Use View pools

Since you take a performance hit when creating objects, it
can be beneficial to create "pools" of `View` objects ahead
of time, and then when your ready to use them, acquire them
from the already allocated pool. When you are done with the
view, release it back to the pool so it can be used again later.

### Native code is faster than JavaScript

JavaScript is fast, but it's even faster to let the native
runtime do the work. Calls to JavaScript are have more
overhead than native code. The more code you can offload to
the native side, the faster your game will run.

### Use the animation engine

This is related to the previous tip. Using our
[animation engine](../api/animate.html) is faster than
calculating in a game loop because we can optimize it for
native execution. The less calculations in JavaScript, the better!

### Schedule tasks over multiple frames

Game calculations can be expensive, especially when done on
each frame. Many times, effects such as physics collisions
and AI and be run every other frame (or even less) without a
loss in visual quality. It's important to schedule these
tasks across animation frames for a consistent, and better
performing game.

### Preload resources

Resource loading can be hard on a game's framerate. Make
sure to preload any assets before you need them to prevent
noticeable in-game lags.
