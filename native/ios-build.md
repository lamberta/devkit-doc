# Building for iOS

## Overview

Running your game on an iPhone or iPad for the first time is that "I made it!" moment where it finally feels real.  This guide will help you get from developing in a browser to showing your new game off at parties.

Building your game to run on a mobile device is done using the Game Closure SDK `basil` command-line tool.  Some assembly is required.  See the [iOS Setup Guide](./ios-setup.html) for steps to get prerequisites, supported mobile devices, and steps to get started.

## Installing to a Connected Device

To build your game project enter:

~~~
$ basil build native-ios --no-compress
~~~

By specifying the --no-compress option, basil will not try to compress JavaScript files.  This speeds up the build process and is recommended for most pre-release builds.

An Xcode project window will pop up.  Select your mobile device from the list at the top and hit the Play button to install.

You will be able to see JavaScript logs scrolling in Xcode while running the device connected.

## Building for TestFlight or iTunes Connect

Once you are satisfied with how your game looks, it's time to bring in testers.  [TestFlight](http://testflightapp.com/) is a great tool that we recommend for distributing test versions of your game to a large number of testers.

When testing is complete you can use the same built image of your game to upload to the [iTunes Connect](http://itunesconnect.apple.com) website to apply for entry into the iTunes Store.

### Generate an App ID

To build for TestFlight or iTunes, browse to the [Apple Developer website](http://developer.apple.com).  Log in with your Apple Developer account and navigate to the iOS Provisioning Portal.

Select the App IDs tab on the left.  Create a [New App ID] with the button on the right.  This is where you choose a bundle identifier.  This can be a simple string like "beards.on.boards" that should be globally unique.

Once your App ID appears in the App IDs list, you can use the Configure action on your App ID to enable In-App Purchases.

### Generate a Mobile Provisioning Profile

Select the Provisioning tab on the left.  Create a [New Profile], selecting team members who can make builds for your App ID.  Select the App ID you created.  And select the devices that can install the App.

After your App ID provisioning profile is added to the list of Development Provisioning Profiles, use the [Download] action to download the .mobileprovision file and take note of where it exists on your computer.

### Build an .IPA

Run the build command with the `--ipa` flag to create an .IPA file for your game:

~~~
$ basil build native-ios --ipa --provision /Users/bboy/Desktop/BeardsOnBoards.mobileprovision --name="Bob Baxter"
~~~

### Build Options

The complete set of build options:

~~~
 $ basil build native-ios --help
Options:
  --help, -h       Display this help menu                                                 
  --debug, -d      Create debug build [default: true]
  --clean, -c      Clean build before compilation [default: true]
  --ipa, -i        Generate appName.ipa file as output for TestFlight [default: false]
  --provision, -p  (required for --ipa) Path to .mobileprovision profile file
  --name, -n       (required for --ipa) Name of developer                 
  --open, -o       (ignored when --ipa is specified) Open the XCode project after building [default: true]
~~~
