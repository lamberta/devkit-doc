# Project Manifest Options

Each game has a configuration file stored at the root of the
project in the `manifest.json` file. This file controls the
build process for your game. These options are stored in JSON
format and can be edited by hand.

For example, 

~~~
{
  "appID": "abcdefghijklmnopqrstuvwxyz012345",
  "shortName": "helloworld",
  "title": "Hello, World!",
  "supportedOrientations": ["portrait"]
}
~~~

## Supported Configuration Settings

### appID
1. `{string}`

Generated hash, 32-character unique hex identifier.

### shortName
1. `{string}`

The short name must only contain alpha-numeric characters
and can not start with a number.

### title
1. `{string}`

Full title of game.

### description
1. `{string}`

Description of the game.

### version
1. `{string}`

Developer assigned version.

### icons
1. `{object}` ---Properties are the numeric pixel size.

Location of icon images for a given pixel size. Android
supports 28, 38, and 56; iOS supports 114 for a touch
icon. For example:

~~~
{
  "icons": {
    "28": "resources/images/icon28.png",
	"38": "resources/images/icon38.png",
	"56": "resources/images/icon56.png",
	"114": "resources/images/icon114.png"
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
