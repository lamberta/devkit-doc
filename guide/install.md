# Installation

## OS X



## Linux

Requirements:

* Git
* [Node.js](http://nodejs.org/)
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

~~~
$ git clone git://github.com/gameclosure/tealeaf-cli.git
$ cd tealeaf-cli
$ npm link --local
$ basil update
~~~

### Build for Android Devices

Requirements:

* [Android SDK](http://developer.android.com/sdk/index.html)

#### 64-bit Compatibility

If you're on a 64-bit machine, you'll need to install some
additional compatibility libraries for the Android SDK,
since it's only available as a 32-bit version.

For example, on Ubuntu 12.04 install the following:

`# apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386`

And for older Ubuntu versions, you can install:

`# apt-get install ia32-libs`

#### Update Android

To update to the current Android SDK and Platform-tools, run
`android` in your console to bring up the *Android SDK
Manager* GUI installer.

For a command-line update, first list the available packages
to install:

`$ android list sdk`

This will list the available downloads and updates with a
corresponding filter index.

Now you can install the Android SDK and Platform-tools
required for the Game Closure SDK:

`$ android update sdk --no-ui --filter 1,3`
