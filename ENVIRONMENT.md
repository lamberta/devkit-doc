Here at Game Closure, we respect the environment. To help educate our new employees on the correct mindset regarding relevant issues, we have created this list of resources to go through. After completion, please proceed to *[Developmental Psychology](SDK.md)*.

---

Various tools recommended for development. Skip anything you've already done, which is probaby most of it, but read through to make sure.

**Xcode** - You'll need this for Homebrew and building stuff on iOS.

1. Download and run the installer from the Mac App Store.


**Homebrew** - An awesome package manager for OS X, with a huge up to date selection including core UNIX utilities (`wget`) and even full programs (`wine`). You'll also need it for `git`, `node`, etc. Other options exist but this is highly preferred.

1. Download and install it using the command from https://github.com/mxcl/homebrew/wiki/installation.
2. Occasionally you'll want to update the list of packages and upgrade any outdated ones:
	1. `$ brew update`
	2. `$ brew outdated`
	3. Upgrade any outdated packages. `$ brew upgrade <package>`
	4. Clean up old versions. `$ brew cleanup`


**Git** - You'll be using this a lot.

1. You'll probably want it from Homebrew, so:
2. `$ brew install git`
3. Follow the instructions on [help.github.com](http://help.github.com/mac-set-up-git/) to configure it.

**Node** - Needed for the SDK. You can also test JavaScript or run, say, a level generator with it.

1. `$ brew install node`


<!-- probably a bunch of python stuff, so pip/virtualenv/etc. -->


**Android tools** - Android DKs needed for building android stuff.

1. `$ brew install android-sdk`
2. `$ brew install android-ndk`
3. Open the **Android SDK Manager** with `android` make sure only the following packages are selected:
	1. **Tools** > **Android SDK Platform-tools**
	2. **Android 2.3.3 (API 10)** > **SDK Platform**
	3. **Android 2.2 (API 8)** > **SDK Platform**
4. Install the packages, making sure to select "Accept All" in the installer dialog.