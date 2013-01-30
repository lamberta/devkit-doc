# iOS Setup Guide

## Overview

Running your game on an iPhone or iPad for the first time is that \"I made it!\" moment when it finally feels real.  This guide will help you get from developing in a browser to showing your new game off at parties.

Building your game to run on a mobile device is done using the Game Closure SDK `basil` command-line tool.  

## Prerequisites

You will need some tools for iOS development:

+ Mac OS X 10.6 (or newer) computer
+ iPhone/iPad sync cable
+ Xcode 4.4 (or newer) and Xcode command-line tools
+ Game Closure SDK (basil)

For a guide on installing the Game Closure SDK [please see this documentation](../guide/quick-start.html).

### Supported Mobile Devices

The iOS devices supported are:

_iPhone_: iPhone 3GS (2009), iPhone 4, iPhone 4S, iPhone 5.

_iPad_: All devices.

_iPod_: Touch 3rd Gen (2009), Touch 4th Gen, Touch 5th Gen.

Other devices **may** work but are not explicitly supported.

## How to install Xcode Prerequisites

In order to develop for iOS, Xcode is required.  Xcode can be downloaded from the [iTunes App store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

Additionally, the Xcode command-line tools **are required**.  To download these, open Xcode and go to the *preferences* menu under the *Xcode* menu.  Next, go to the *Downloads* tab and install the command-line tools.  It is recommended to also install the simulator from this tab so that you may test your games on your computer rather than on a physical device.

## Apple Developer Account

To do iOS development you will need an [Apple Developer account](https://developer.apple.com/programs/register/) which costs $99.  To build and install your app on your personal cellphone this is also necessary.  By getting an Apple Developer account you will have access to the Apple Developer website and tools to generate provisioning profiles.

Note that you can run your game on the iOS Simulator, which is packaged with Xcode, without an Apple Developer account.

To get started with iOS development, you will need to access the Member Center on the  [Apple Developer website](developer.apple.com).  Enter your Apple ID and Password.  Select your team.  Enter the iOS Provisioning Portal.  Select the Certificates tab.  Follow the instructions to request, download, and install your Development Certificate.

Start Xcode.  Open the Organizer.  Select "Provisioning Profiles" on the left tab.  In the lower-right corner hit Refresh.  This should download and install the new certificate on your computer.  At this point you should be able to install to devices that have been added to your developer portal (see below).

## Install iOS Plugin for Basil

Basil is the command-line tool you will use from the Game Closure SDK to perform native builds.  Make sure your version of basil is up to date with `basil update`.

The first step to doing iOS development with basil is to install the iOS plugin.  At a command-line enter the command:

~~~
$ basil install ios
~~~

This downloads and installs the iOS plugin for basil.

## Setting Up Your Game Manifest

Every game includes and must have a manifest.json file with configuration information and more for each game. Several fields are required for a properly configured game for iOS.  
  
- The splash screen and icons for your game should be added before building for iOS devices.  
- If you are using any custom TrueType fonts be sure to include those in the manifest file.  
- For a complete reference see [documentation on the manifest.json](../guide/manifest.html) file.

In addition to the normal sections in the manifest file you may have already filled in, iOS requires the following sections:

#####Apple Store

Add these fields to insure that In-App Purchases will work.

~~~
	"ios": {
		"bundleID": "com.billy.boards",
		"appleID": "1234567",
		"version": "1.0.0"
	},
~~~

#####Icons
The icons for iOS are listed below.  Be sure to include at least this set of icons.  [See the manifest documentation](../guide/manifest.html) for file formats and other details.

~~~
{
	"icons": {
		"57": "preload/icons/icon57.png",
		"72": "preload/icons/icon72.png",
		"114": "preload/icons/icon114.png",
		"144": "preload/icons/icon144.png",
		"512": "preload/icons/icon512.png"
	},
~~~
  
#####Orientation
Choose an orientation for your game, a combination of portrait and landscape. 

~~~
	"supportedOrientations": [
		"landscape"
	],
~~~

~~~
	"supportedOrientations": [
		"portrait"
	],
~~~

~~~
	"supportedOrientations": [
		"landscape", "portait"
	],
~~~

#####TrueType Fonts
Add a list of TrueType font files to the manifest if you are using them:

~~~
	"ttf": [
		"resources/fonts/Arial Black.ttf",
		"resources/fonts/Gill Sans Bold.ttf"
	],
~~~

#####Splash Screen
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

Once your game is configured properly for iOS, you're ready to install it!

## Setting Up a New Mobile Device

In Xcode, open the Organizer.  On the devices tab on the left, select the name of the new connected device.  At the bottom of the Organizer, press the (+) [Add To Portal] button.  This will add the device to your developer portal.

At this point you are ready to start building for iOS!  Check out the [building guide](./ios-build.html) for information on building your game, or the [test app guide](./ios-test-app.html) for instructions on how to use the test app for expedited development and testing.

## Appendix: Manual Install of iOS Plugin for Basil

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
