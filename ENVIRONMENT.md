# Intro
Here at Game Closure, we respect the environment. To help educate our new employees on the correct mindset regarding relevant issues, we have created this list of resources to go through. After completion, please proceed to *[Developmental Psychology](SDK.md)*.

**Notes**<br>
Various tools recommended for development. Skip anything you've already done, which is probably most of it, but read through to make sure.


## Xcode
Apple's IDE. You'll need this for Homebrew and building stuff on iOS.

1. Download and run the installer from the Mac App Store.

Also comes with a few other goodies including a `.plist` editor.


## Homebrew
An awesome package manager for OS X, with a huge up to date selection including core UNIX utilities (`wget`) and even full programs (`wine`). You'll also need it for `git`, `node`, etc. Other options exist but this is highly preferred.

1. Download and install it using the command from https://github.com/mxcl/homebrew/wiki/installation.

Make sure to keep packages up to date. Info on this and everything else can be found in `$ brew help` and `$ man brew`.


## Git
The stupid content tracker. You'll be using this a lot.

1. You'll probably want it from Homebrew, so: `$ brew install git`
2. Follow the instructions on [help.github.com](http://help.github.com/mac-set-up-git/) to configure it.

Git is both simple and very complicated, and generally the best way to learn it is to use it a lot. Most GC folks can help you out, and as usual there's a plethora of manpage content and google results.


## Node
Evented I/O for V8 JavaScript. Needed for the SDK. You can also test JavaScript or run, say, a level generator with it.

1. `$ brew install node`

A jsio-compatible REPL is included in [etc/repl.js](etc/repl.js).


## pip
Package manager for Python, currently only required for installing `virtualenv`.

1. `$ sudo easy_install pip`


## virtualenv
Virtual Python Environment builder, used in TeaLeaf.

1. `$ sudo pip install virtualenv`


## Android tools
DKs needed for building android stuff.

1. `$ brew install android-sdk`
2. `$ brew install android-ndk`
3. Open the **Android SDK Manager** with `android` and make sure only the following packages are selected:
	1. **Tools** > **Android SDK Platform-tools**
	2. **Android 2.3.3 (API 10)** > **SDK Platform**
	3. **Android 2.2 (API 8)** > **SDK Platform**
4. Install the packages, making sure to select "Accept All" in the installer dialog.

Occasionally you'll want to update the tools and platform-tools via `android`.