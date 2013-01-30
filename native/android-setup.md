# Android Setup Guide

## Overview

Testing your game on iOS for the first time is an exhilerating affair full of nail-biting anticipation.  ("My game is finally in my hands!")  Running your game on the device.

See the stages of development.

### 1. Initial development

Test your code, art, and sound assets entirely in a web browser simulating a mobile device.  Quickly iterate using the Game Closure SDK web interface without doing any setup required for building on the mobile device.

Investigate coding errors, step through running code, pause execution, and inspect code objects using the Chrome built-in Web Inspector as with normal HTML5 game development.  Improve performance by finding code hot-spots with the CPU Profiler to target optimization.  Hunt down memory leaks using the Heap Profiler to identify object pile-ups.

Swap art and font resources live using the Art Editor and Font Editor features.  Make changes to your JavaScript code, art, and sound files and refresh the browser to instantly see the new results.

For more information see the [basic SDK guides](../guide/quick-start.html).

### 2. On-device development

Test your game code live on the device with the [Game Closure Test App](./test_app.html).  This requires an Apple Developer account.  You will host a server on your computer, and setup your mobile device to use WiFi.  Build and run the Test App on your device using XCode.  Select your server from the on-screen list, then select which game to test.  Making code changes on your computer can be pushed quickly to the device by opening the on-screen menu and selecting the Restart option.

The same Chrome Web Inspector interface may be used to investigate coding errors on the mobile device from the comfort of your computer.  Using the Native Tools feature you can investigate coding errors and view the console logs of Test App sessions.

### 3. Initial On-device testing

Build and install your game to a device connected via USB.  This requires an Apple Developer account.  Using the SDK build tools, you will create an XCode project containing your code, art, splash screens, icons, and sound assets.  Console logs will be visible in XCode while it is running.

At this stage you may test your in-app purchases using an Apple test account created through the Apple Developer website.

At this stage the mobile device no longer needs to be tethered to your computer and you can show off your game!

### 4. Group On-device testing

Build your game to an IPA file that can be distributed using [TestFlight](http://testflightapp.com).  Testers signed up with TestFlight can use your app all over the world.

### 5. Apple Store Deployment

The same IPA file use for group testing will be uploaded to the Apple Store for release.  Set up screenshots, a description, and in-app purchases.

## Supported Mobile Devices

The iOS devices supported are:

_iPhone_: iPhone 3GS (2009), iPhone 4, iPhone 4S, iPhone 5.

_iPad_: All devices.

_iPod_: Touch 3rd Gen (2009), Touch 4rth Gen, Touch 5th Gen.

Other devices **may** work but are not explicitly supported.

## Create an iOS Developer Account

## Install XCode

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
