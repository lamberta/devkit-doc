# Project Manifest Options

Each game has a configuration file stored at the root of the
project in the `manifest.json` file. This file controls the
build process for your game. These options are stored in JSON
format and can be edited by hand.

For example, 

~~~
{
  "appID": "ggshooter",
  "shortName": "shooter",
  "title": "Hello, World!",
  "supportedOrientations": ["portrait"]
}
~~~

## Supported Configuration Settings

### appID
1. `{string}`

The appID is the global unique identifier for your game.

Use a string containing only alpha-numeric characters (ie. no periods or spaces).

### shortName
1. `{string}`

The short name for your game is the internal code name used only by your game developers.
It will be used to name output files and directories during the build process.

It should be a unique name within your studio.

The short name must only contain alpha-numeric characters
and cannot start with a number.

### title
1. `{string}`

The full game title, which is the string displayed under your app icon when installed on a phone.  And the name displayed on menus in the simulator.

### description
1. `{string}`

A brief description of your game.  Currently unused.

### version
1. `{string}`

The version number or string for your game.

### icons
1. `{object}`
	* `28 {string}` ---Path to small game app icon for Android (size: 28 x 28 px, color: 8-bit RGB[A], format: PNG).
	* `38 {string}` ---Path to small game app icon for Android (size: 38 x 38 px, color: 8-bit RGB[A], format: PNG).
	* `48 {string}` ---Path to game app icon for Android (size: 48 x 48 px, color: 8-bit RGB[A], format: PNG).
	* `56 {string}` ---Path to game app icon for Android (size: 56 x 56 px, color: 8-bit RGB[A], format: PNG).
	* `57 {string}` ---Path to game app icon for iPhone (size: 57 x 57 px, color: 8-bit RGB[A], format: PNG).
	* `72 {string}` ---Path to game app icon for iPad (size: 72 x 72 px, color: 8-bit RGB[A], format: PNG).
	* `114 {string}` ---Path to retina game app icon for iPhone (size: 114 x 114 px, color: 8-bit RGB[A], format: PNG).
	* `144 {string}` ---Path to retina game app icon for iPad (size: 144 x 144 px, color: 8-bit RGB[A], format: PNG).
	* `512 {string}` ---Path to large game app icon (size: 512 x 512 px, color: 8-bit RGB[A], format: PNG).
	* `alerts {object}`
		* `high {string}` ---Path to high-priority push notification image (size: 48 x 48 px, color: 8-bit RGB[A], format: PNG).
		* `med {string}` ---Path to medium-priority push notification image (size: 48 x 48 px, color: 8-bit RGB[A], format: PNG).
		* `low {string}` ---Path to low-priority push notification image (size: 48 x 48 px, color: 8-bit RGB[A], format: PNG).

This section describes paths to your game's icons.  These icons are used for display in the simulator and will also be the icons used for your game on a mobile device.

All icons are 8-bit 3/4 channel RGB[A] PNG (Portable Network Graphics) images, which can be exported from almost any graphics editor.

iPhone/iPad icons should look somewhat flat, as the 3d popout effect is added during the build process.

Android icons should have the 3d popout effect baked in if it is desired.

The icons used during push notification alerts may also be specified, and different alert icons can be specified by a message priority (high, medium, low) that you can assign.

It is recommended that you store your game's icons under ./preload/icons/ separate from your game's image resources so that they are not considered by the spriter.

~~~
{
  "icons": {
    "28": "preload/icons/icon36.png",
    "38": "preload/icons/icon48.png",
    "48": "preload/icons/icon48.png",
    "56": "preload/icons/icon72.png",
    "57": "preload/icons/icon57.png",
    "72": "preload/icons/icon72.png",
    "114": "preload/icons/icon114.png",
    "144": "preload/icons/icon144.png",
    "512": "preload/icons/icon512.png",
    "alerts": {
      "high": "preload/promo/PushNotification-02_48x48.png",
      "low": "preload/promo/PushNotification-02_48x48.png",
      "med": "preload/promo/PushNotification-02_48x48.png"
    }
  }
}
~~~

### preload
1. `{object}`
	* `img {string}` ---Path to the splash screen image.
	* `autoHide {boolean}` ---Automatically hide the splash image when the app starts.
	* `scaleMethod {string} = 'cover'` ---Method for scaling the splash screen image to fit.
	* `iphone {object}`
		* `launch {string}` ---Path to the splash screen image.
		* `launchRetina {string}` ---Path to the splash screen image for retina display.
	* `ipad {object}`
		* `portrait {string}` ---Path to the splash screen image.
		* `portraitRetina {string}` ---Path to the splash screen image.
		* `landscape {string}` ---Path to the splash screen image.
		* `landscapeRetina {string}` ---Path to the splash screen image.

If `autoHide` is set to `false`, the developer can manually
remove the splash screen by calling `GC.hidePreloader()`.

### fonts
1. `{array}`

Internal data saved for custom bitmap fonts. Do not edit this.

### studio
1. `{object}`
	* `name {string}` ---Studio name.
    * `domain {string}` ---Studio URL.
    * `stagingDomain {string}` ---URL of the staging server.

Information about the studio publishing the game.

### supportedOrientations
1. `{array}` ---Optional entries are `'portrait'`, `'landscape'`, or both.

The simulator will default to the first entry in the array.

### mpMetricsKey
1. `{string}`

MixPanel metrics key.

### android
1. `{object}`
    * `entryPoint {string} = 'runtimeNative.launchClient'`
    * `flurryKey {string}` ---Flurry app key for analytics.
    * `tapjoyDaily {string}` ---TapJoy daily key for analytics.
    * `tapjoyID {string}` ---TapJoy app ID for analytics.
    * `tapjoyKey {string}` ---TapJoy app key for analytics.
    * `apsalarKey {string}` ---Apsalar key.
    * `apsalarSecret {string}` ---Apsalar secret key.

### ios
1. `{object}`
    * `entryPoint {string} = 'runtimeNative.launchClient'`
    * `flurryKey {string}` ---Flurry app key for analytics.
    * `tapjoyID {string}` ---TapJoy app ID for analytics.
    * `tapjoyKey {string}` ---TapJoy app key for analytics.

### disableNativeViews
1. `{boolean} = false`

Use JavaScript views instead of native views written in C.

### scaleDPR
1. `{boolean} = false`

Mobile browser flag for setting device DPI or low DPI.

### unlockViewport
1. `{boolean} = false` ---If `true`, allows scrolling to see the address bar in a mobile web browser

### nativeURLScheme
1. `{string} = 'tealeaf'`

Defines the URL protocol for cross-app communication on native (should probably default to the `shortName`).
Open app from url in browser.
