# Building for iOS

## Overview

Running your game on an iPhone or iPad for the first time is that "I made it!" moment where it finally feels real.  This guide will help you get from developing in a browser to showing your new game off at parties.

Building your game to run on a mobile device is done using the Game Closure SDK `basil` command-line tool.  Some assembly is required.

## Prerequisites
You will need some tools to do iOS development:

+ Mac OS X 10.6 (or newer) computer
+ iPhone/iPad sync cable
+ Xcode 4.4 (or newer) and command-line tools

### Supported Mobile Devices

The iOS devices supported are:

_iPhone_: iPhone 3GS (2009), iPhone 4, iPhone 4S, iPhone 5.

_iPad_: All devices.

_iPod_: Touch 3rd Gen (2009), Touch 4rth Gen, Touch 5th Gen.

Other devices **may** work but are not explicitly supported.

## How to install Xcode Prerequisites

In order to develop for iOS, Xcode is required.  Xcode can be downloaded from the [iTunes App store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

Additionally, the Xcode command-line tools **are required**.  To download these, open Xcode and go to the *preferences* menu under the *Xcode* menu.  Next, go to the *Downloads* tab and install the command-line tools.  It is recommended to also install the simulator from this tab so that you may test your games on your computer rather than on a physical device.

## Apple Developer Account

To do iOS development you will need an [Apple Developer account](https://developer.apple.com/programs/register/) which costs $99.  To build and install your app on your personal cellphone this is also necessary.  By getting an Apple Developer account you will have access to the Apple Developer website and tools to generate provisioning profiles.

To get started with iOS development, you will need to access the Member Center on the  [Apple Developer website](developer.apple.com).  Enter your Apple ID and Password.  Select your team.  Enter the iOS Provisioning Portal.  Select the Certificates tab.  Follow the instructions to request, download, and install your Development Certificate.

Start Xcode.  Open the Organizer.  Select "Provisioning Profiles" on the left tab.  In the lower-right corner hit Refresh.  This should download and install the new certificate on your computer.  At this point you should be able to install to devices that have been added to your developer portal (see below).

## Install iOS Plugin for Basil

At a command-line enter the command:

~~~
$ basil install ios
~~~

This downloads and installs the iOS plugin for basil.

## Setting Up Your Game Manifest

The splash screen and icons for your game should be added before building for iOS devices.  If you are using any custom TrueType fonts be sure to include those in the manifest file.  For a complete reference see [documentation on the manifest.json](../guide/manifest.html) file.

In addition to the normal sections in the manifest file you may have already filled in, iOS requires the following sections:

The icons for iOS are listed below.  Be sure to include at least this set of icons.  [See the manifest documentation](../guide/manifest.html) for file formats and other details.

~~~
{
	"icons": {
		"57": "preload/icons/icon57.png",
		"72": "preload/icons/icon72.png",
		"114": "preload/icons/icon114.png",
		"144": "preload/icons/icon144.png",
		"512": "preload/icons/icon512.png",
	},
~~~

Choose an orientation for your game, either portrait or landscape.

~~~
	"supportedOrientations": [
		"landscape"
	],
~~~

Under the ios section, set up any analytics tools you are using.  It is not necessary to embed any extra JavaScript to support these analytics tools; they are already integrated into the Game Closure SDK.

If you are not using ApSalar, Flurry, nor TapJoy, just remove those lines.

In this section also set up bundleID, appleID, and version for in-app purchases.  Copy these three fields from your iTunes Connect account game information.

~~~
	"ios": {
		"apsalarKey": "jollyfunkey2",
		"apsalarSecret": "12345",
		"flurryKey": "3QR3QR3QR3QR3QR3QR3Q",
		"tapjoyDaily": {},
		"tapjoyId": "deadbeef-b0ff-baad-feed-baad33c0ffee",
		"tapjoyKey": "R3QR3QR3QR3QR3QR3QR3",
		"bundleID": "ggshooter",
		"appleID": "12345678",
		"version": "1.0.0"
	},
~~~

Add a list of TrueType font files to the manifest if you are using them:

~~~
	"ttf": [
		"resources/fonts/Arial Black.ttf",
		"resources/fonts/Gill Sans Bold.ttf"
	],
~~~

Define splash screen images for your game.  For the complete list of image sizes required and other details [see the manifest documentation](../guide/manifest.html).

~~~
	"preload": {
		"autoHide": true,
		"img": "preload/splash.png",
		"iphone": {
			"launch": "preload/iphone/Default.png",
			"launchRetina": "preload/iphone/Default@2x.png",
			"launchRetina4": "preload/iphone/Default-568h@2x.png"
		},
		"ipad": {
			"portrait": "preload/ipad/Default-Portrait~ipad.png",
			"portraitRetina": "preload/ipad/Default-Portrait@2x~ipad.png",
			"landscape": "preload/ipad/Default-Landscape~ipad.png",
			"landscapeRetina": "preload/ipad/Default-Landscape@2x~ipad.png"
		}
	}
}
~~~

Once your game is configured properly for mobile, you're ready to install it!

## Setting Up a New Mobile Device

In Xcode, open the Organizer.  On the devices tab on the left, select the name of the new connected device.  At the bottom of the Organizer, press the (+) [Add To Portal] button.  This adds the device to your developer portal.

## Installing to a Connected Device

To build your game project enter:

~~~
$ basil build native-ios
~~~

An Xcode project window will pop up.  Select your mobile device from the list at the top and hit the Play button to install.

You will be able to see JavaScript logs scrolling in Xcode while running the device connected.

## Building for TestFlight or iTunes Connect

Once you are satisfied with how your game looks, it's time to bring in testers.  [TestFlight](http://testflightapp.com/) is a great tool that we recommend for distributing test versions of your game to a large number of testers.

When testing is complete you can use the same built image of your game to upload to the [iTunes Connect](http://itunesconnect.apple.com) website to apply for entry into the iTunes Store.

### Generate an App ID

To build for TestFlight or iTunes, browse to the [Apple Developer website](http://developer.apple.com).  Log in with your Apple Developer account and navigate to the iOS Provisioning Portal.

Select the App IDs tab on the left.  Create a [New App ID] with the button on the right.  This is where you choose a bundle identifier.  This can be a simple string like "beards.on.boards" that should be globally unique.

Once your App ID appears in the App IDs list, you can use the Configure action on your App ID to enable In-App Purchases.

### Generate a Mobile PRovisioning Profile

Select the Provisioning tab on the left.  Create a [New Profile], selecting team members who can make builds for your App ID.  Select the App ID you created.  And select the devices that can install the App.

After your App ID provisioning profile is added to the list of Development Provisioning Profiles, use the [Download] action to download the .mobileprovision file and take note of where it exists on your computer.

### Build an .IPA

Run the build command with the `--ipa` flag to create an .IPA file for your game:

~~~
$ basil build native-ios --ipa --provision /Users/bboy/Desktop/BeardsOnBoards.mobileprovision --name="Billy Baxter"
~~~

### Manual Install of iOS Plugin for Basil

You may attempt a manual install of the Basil iOS plugin.  At a command-line enter the commands:

~~~
$ git clone git@github.com:gameclosure/ios
$ cd ios
$ git checkout master
$ git submodule update --init
~~~

Edit the basil configuration file **config.json** located in the root of the basil install to point to the install location of the iOS plugin:

~~~
{
  "ios": {
    "root": "path/to/ios"
  }
}
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
