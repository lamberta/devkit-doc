# Android Test App

Test your game code live on a device with the Game Closure Test App.  You will host a server on your computer, and set up your mobile device to use WiFi.  Build and run the Test App on your device.

Select your server from the on-screen list, then select which game to test.  Making code changes on your computer can be pushed quickly to the device by restarting the game with the on-screen debug menu (see below).

## Setup

Be sure to read the [Android Setup Guide](./android-setup.html) and follow the instruction there to prepare for Android development with the Game Closure SDK.

Turn on WiFi and connect your mobile device to the same LAN as your computer.

## Running

An instance of the SDK basil server must be running to serve games for the test app.  To start a new basil server enter this command at a console:

~~~
$ basil serve
~~~

This will start hosting the Test App Server on your LAN.

To run the Android Test App on your mobile device, connect it to your computer via a USB data cable, and enter the following command at a console different from the one you started `basil serve`:

~~~
$ basil testapp native-android
~~~

It will build and attempt to install the Test App on your device.

After installation you will be able to launch the Test App from the applications list on your Android device:

<img src="./assets/android/android-test-app-icon.png"></img>

### Server List

When the Test App starts on the device, it will display a list of servers on the LAN.  At first this will just contain the one 

<img src="./assets/android/android-test-app-servers.png"></img>

### Game List

After selecting a server, the game list for that server will show up.

<img src="./assets/android/android-test-app-games.png"></img>

Tap one of the games to start loading it.

### Loading Screen

The loading screen will display progress of downloading game resources.  Resources are only loaded if they change, so this process should be fairly fast initially, and almost instant after the first time.

<img src="./assets/android/android-test-app-loading.png"></img>

After loading completes, your game should start.

## Remote JavaScript Debugging

The [Chrome Web Inspector interface](./android-remote-debug.html) may be used to investigate coding errors on the mobile device from the comfort of your computer.  Using the Remote Debug feature you can investigate coding errors and view the console logs of Test App sessions.

### Restarting

To restart the game, tap the properties/menu button on your Android device.  This brings up a quit prompt to return to the game list:

<img src="./assets/android/android-test-app-menu.png"></img>

From this menu you can also attempt a few other debug actions that may be useful.  Once back at the games list you can select the same or another game to run.
