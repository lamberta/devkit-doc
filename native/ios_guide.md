# iOS Development Guide

## Overview

The iPhone and iPad mobile platform is immensely popular, and you can use the Game Closure SDK to target your HTML5 games to run smoothly on these mobile devices.

The Game Closure developing and testing workflow is organized.

Based on what stage of development your game is in, you may consider different types of builds:

### 1. Initial development

Test your code, art, and sound assets entirely in a web browser simulating a mobile device.  Quickly iterate using the Game Closure SDK web interface without doing any setup required for building on the mobile device.

Investigate coding errors, step through running code, pause execution, and inspect code objects using the Chrome built-in Web Inspector as with normal HTML5 game development.  Improve performance by finding code hot-spots with the CPU Profiler to target optimization.  Hunt down memory leaks using the Heap Profiler to identify object pile-ups.

Swap art and font resources live using the Art Editor and Font Editor features.  Make changes to your JavaScript code, art, and sound files and refresh the browser to instantly see the new results.

For more information see the [basic SDK guides](../guide/quick-start.html).

### 2. On-device development

Test your game code live on the device with the [Game Closure Test App](./test_app.html).  This requires an Apple Developer account.  You will host a server on your computer, and setup your mobile device to use WiFi.  Build and run the Test App on your device using XCode.

Select your server from the on-screen list, then select which game to test.  Making code changes on your computer can be pushed quickly to the device by opening the on-screen menu and selecting the Restart option.

The same Chrome Web Inspector interface may be used to investigate coding errors on the mobile device from the comfort of your computer.  Using the Native Tools feature you can investigate coding errors and view the console logs of Test App sessions.

### 3. Initial On-device testing

[Build and install](./build.html) your game to a device connected via USB.  This requires an Apple Developer account.  Using the SDK build tools, you will create an XCode project containing your code, art, splash screens, icons, and sound assets.  Console logs will be visible in XCode while it is running.

At this stage you may test your in-app purchases using an Apple test account created through the Apple Developer website.

At this stage the mobile device no longer needs to be tethered to your computer and you can show off your game!

### 4. Group On-device testing

Build your game to an IPA file that can be distributed using [TestFlight](http://testflightapp.com).  Testers signed up with TestFlight can use your app all over the world.

### 5. Apple Store Deployment

The same IPA file use for group testing will be uploaded to the Apple Store for release.
