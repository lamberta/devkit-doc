# iOS Test App

Test your game code live on a device with the Game Closure Test App.  You will host a server on your computer, and setup your mobile device to use WiFi.  Build and run the Test App on your device using Xcode.

Select your server from the on-screen list, then select which game to test.  Making code changes on your computer can be pushed quickly to the device by restarting the game with a circular gesture (See Restarting below).

## Setup

Be sure to read the [iOS Setup Guide](./ios-setup.html) and follow the instruction there to prepare for iOS development with the Game Closure SDK.

Turn on WiFi and connect your mobile device to the same LAN as your computer.

## Running

An instance of the SDK basil server must be running to server games for the test app.  To start a new basil server enter this command at a console:

~~~
$ basil serve
~~~

This will start hosting the Test App Server on your LAN.

To run the iOS Test App on your mobile device, simply enter the following command at a console:

~~~
$ basil testapp native-ios
~~~

The iOS Test App Xcode project will open after a moment.  Select a device to install it to at the top, and hit the Play button to build and install the Test App to the device.

### Server List

When the Test App starts on the device, it will display a list of servers on the LAN.  At first this will just contain the one 

<img src="./assets/ios/ios-test-app-server-list.png"></img>

### Game List

After selecting a server, the game list for that server will show up.

<img src="./assets/ios/ios-test-app-game-list.png"></img>

Tap one of the games to start loading it.

### Loading Screen

The loading screen will display progress of downloading game resources.  Resources are only loaded if they change, so this process should be fairly fast initially, and almost instant after the first time.

<img src="./assets/ios/ios-test-app-loading.png"></img>

After loading completes, your game should start.

## Remote JavaScript Debugging

The same Chrome [Web Inspector interface](./ios-remote-debug.html) may be used to investigate coding errors on the mobile device from the comfort of your computer.  Using the Native Tools feature you can investigate coding errors and view the console logs of Test App sessions.

### Restarting

To restart the game, make a gesture on the screen:  Swipe one finger up on the left while swiping another finger down on the left.  This brings up a quit prompt to return to the game list:

<img src="./assets/ios/ios-test-app-quit.png"></img>

Once back at the games list you can select the same or another game to run.
