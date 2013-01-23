# Installing Native Tools

## Android

### Install the Android SDK

Download and install the
[Android SDK](http://developer.android.com/sdk/) to your
local machine. If you are using the
[Homebrew](http://mxcl.github.com/homebrew/) package
manager, run:

~~~
$ brew install android
~~~

Assuming android sdk is on your path, running `android` at the command-line brings up a GUI front-end that will allow you to install various android api targets. Install the SDK Platform under `Android 4.0.3 (API 15)`, `Android Support Library` in the extras sections at the bottom of the list, and the `Android SDK Platform-tools` in the tools section at the top.

### Install the native Android component from the Game Closure SDK

**This process is subject to change in the future**

Clone the Game Closure
[Android repository](https://github.com/gameclosure/android). Switch
to this directory and make sure everything is up-to-date:

~~~
$ cd ./android
$ sh install.sh
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

## iOS

### Install iOS development tools

In order to develop on iOS, Xcode is required. Xcode can be downloaded from the Apple App store [here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Additionally the Xcode command line tools are required. To download these, open Xcode and go to the preferences menu. Next, go to the downloads tab and install the command line tools. The simulator can also be downloaded from this tab if you want to test your apps on the simmulator rather than an actual device.

### Install the native iOS components from the Game Closure SDK

Clone the Game Closure
[Android repository](https://github.com/gameclosure/ios).

== need other details