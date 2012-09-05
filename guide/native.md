# Build for Native Devices

## Android

### Install the Android SDK

Download and install the
[Android SDK](http://developer.android.com/sdk/) to your
local machine. If you are using the
[Homebrew](http://mxcl.github.com/homebrew/) package
manager, run:

~~~
$ brew install android-sdk
$ brew install android-ndk
~~~

Running `android` at the command-line brings up a GUI
front-end that will install the latest target.


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

Reference:
* [Using Hardware Devices](http://developer.android.com/guide/developing/device.html)
* [Android Debug Bridge](http://developer.android.com/guide/developing/tools/adb.html)


### Install the native Android component from the Game Closure SDK

Clone the Game Closure [Android repository](https://github.com/gameclosure/android).

Set this path as the environmental variable
`GC_ANDROID_ROOT`. You can make this permanent by adding the
following to your `$HOME/.profile` file:

`export GC_ANDROID_ROOT="/path/to/android"`

Make sure all the required sub-modules are updated:

`$ basil update`

### Build the apk

In the top-level of your project, run:
`$ basil build native-android`

This creates an apk file located at `path/to/project/build/myapp.apk`.

To create a debugging version, just add the appropriate flag:

`$ basil build native-android --debug`

Install the application to your device:

`$ adb install -r path/to/project/build/myapp.apk`

Run the game on your device by clicking its icon in the
Application menu!
