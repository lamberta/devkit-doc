# Project Manifest Options

Each game has its configuration stored in the
`manifest.json` file, located in the root directory of the
project. This file is auto-generated when a project is
initialized and controls the build process for your
game. These options are stored in [JSON](http://www.json.org)
format and can be edited by hand. For example, a minimal
`manifest.json` configuration might look something like this:

~~~
{
  "appID": "abcdefghijklmnopqrstuvwxyz012345",
  "shortName": "helloWorld",
  "title": "Hello, World!",
  "supportedOrientations": ["portrait"],
  "studio": {
    "name": "Jolly Fun Times, Inc.",
	"domain": "example.com"
  }
}
~~~

Manifest options are per game, they affect not only how the
game appears in the Basil development environment, but also
where to find image and font resources, store third-party service
keys, and configures the environment to build for native devices.


## Supported Configuration Settings

**Note:** If you're getting parse errors from your
`manifest.json` file, make sure to run it through a tool
such as [JSONLint](http://jsonlint.com), the JSON file
format can be a bit fickle at times.


### appID
1. `{string}` ---Auto-generated ID.

This is a unique identifier for your game used by basil and
is auto-generated when a new project is created. The `appID`
is a string containing only alpha-numeric characters.

### shortName
1. `{string}` ---Defaults to the directory name of a new project.

The `shortName` is an internal code name used for links to
your project by the basil tools and to name output files
during the build process. This is a alpha-numeric
string---which *does not* start with a number---and should
be unique to your game studio. 

### title
1. `{string}`

The full title of the game which is displayed on menus in
the simulator and under the application icon when installed
on a phone.

### description
1. `{string}`

A brief description of your game.

### studio
1. `{object}`
    * `name {string}` ---The studio name.
    * `domain {string}` ---The URL of the studio.

Information about the studio publishing the game.

### version
1. `{string}`

The version number or string for your game, for example:
`'v0.1-beta'`. This is provided as a convenience for game
developers, so use whatever convention you wish.

### sdkVersion
1. `{string}`

The version of the Game Closure SDK used to build this
project. This value is automatically filled in when the game
is run by basil.

### group
1. `{string}`

If a group name is present, the project will be displayed in
a separate tab in the Basil Web Interface. All games that
contain the same group name will appear in a list together.

### doc
1. `{string}` ---URL.

This is a URL link pointing to documentation for the
project. This is used for the examples to display the
annotated source code and displayed in the basil project list.

### supportedOrientations
1. `{array} = ["portrait"]` ---Options are `"portrait"`, `"landscape"`, or both.

Specify which orientations are allowed on the mobile
device. The simulator will default to the first entry in the
array, for example:

~~~
"supportedOrientations": ["landscape", "portrait"]
~~~

### icons
1. `{object}`
    * `28 {string}` ---Path to small game app icon for Android, 28x28px.
    * `38 {string}` ---Path to small game app icon for Android, size: 38x38px.
    * `48 {string}` ---Path to game app icon for Android, 48x48px.
    * `56 {string}` ---Path to game app icon for Android, 56x56px.
    * `57 {string}` ---Path to game app icon for iPhone, 57x57px.
    * `72 {string}` ---Path to game app icon for iPad, 72x72px.
    * `114 {string}` ---Path to retina game app icon for iPhone, 114x114px.
    * `144 {string}` ---Path to retina game app icon for iPad, 144x144px.
    * `512 {string}` ---Path to large game app icon, 512x512px.

Icons are displayed in the simulator and are used for
your game on a mobile device. All icons are PNG image
files, using 8-bit 3/4 channel RGBA. iOS icons should be
rendered somewhat flat since as the "glossy" effect is added
during the build process. Android icons should have the
gloss effect prerendered in the image file, if desired.

The icons used for push notification alerts can be
specified with different alert icons for message priority (high, medium, low).

The icon files should be kept outside of the `resources`
directory (for example `./preload/icons/`) so that the
internal spriting tool does not include them in your game
assets and waste space.

In the `manifest.json` file, include the icon images like this:

~~~
"icons": {
  "28": "preload/icons/icon36.png",
  "38": "preload/icons/icon48.png",
  "48": "preload/icons/icon48.png",
  "56": "preload/icons/icon72.png",
  "57": "preload/icons/icon57.png",
  "72": "preload/icons/icon72.png",
  "114": "preload/icons/icon114.png",
  "144": "preload/icons/icon144.png",
  "512": "preload/icons/icon512.png"
}
~~~

### preload
1. `{object}`
    * `img {string}` ---Path to a splash screen image.
    * `autoHide {boolean} = false` ---Automatically hide the splash image when the app starts.
    * `scaleMethod {string} = "contain"` ---Method for scaling the splash screen image to fit. Options are `"contain"`, `"cover"`, `"stretch"`, and `"none"`.
    * `iphone {object}`
        * `launch {string}` ---Path to a splash screen image (320x480px), top-side-left.
        * `launchRetina {string}` ---Path to a splash screen image for retina 3.5 inch display (640x960px), top-side-left.
        * `launchRetina4 {string}` ---Path to a splash screen image for retina 4 inch display (640x1136px), top-side-left.
    * `ipad {object}`
        * `portrait {string}` ---Path to a splash screen image (768x1024px), top-side-up.
        * `portraitRetina {string}` ---Path to a splash screen retina image (1536x2048px), top-side-up.
        * `landscape {string}` ---Path to a splash screen image (1024x768px), top-side-up.
        * `landscapeRetina {string}` ---Path to a splash screen retina image (2048x1536px), top-side-up.

The preload section is used to specify splash screen images
for Android and iPhone/iPad devices. All splash screens
should be PNG image files at 8-bit 3-channel RGB color.

The `img` path is the location to your splash screen image. For
games that run primarily in portrait mode (longer side
up/down), it should be a 480x864 pixel image, oriented
top-side-up. For games that run in landscape mode (longer
side left/right), it should be a 864x480 pixel image, also
oriented top side facing upward.

The `scaleMethod` selects how the splash screen image should
scale for different sized screens:

* `"scaleMethod": "contain"` ---The splash screen aspect
  ratio is maintained and is scaled up or down so the
  shorter side fits with the screen, which may leave black
  edges. This is the default.
* `"scaleMethod": "cover"` ---The splash screen aspect ratio
  is maintained and is scaled up or down until the entire
  screen contains the image so that no black edges remain.
* `"scaleMethod": "stretch"` ---The splash screen aspect
  ratio is not maintained and the image will stretch to fit
  the screen exactly, distorting as needed.  
* `"scaleMethod": "none"` ---The splash screen is not rescaled.

Setting the `autoHide` property to `true` causes the
splash screen to be automatically removed after loading
completes. If `autoHide` is `false`---the default---the
developer can manually remove the splash screen by calling `GC.hidePreloader()`.

For the iPhone and iPad platforms, additional images are
needed based on the device screen size. iPhone splash
screens are all provided in portrait mode (long side
up/down) so that the top side of the image is on the left side:

* `iphone {object}`
    * `launch {string}` ---320x480px, top-side-left.
    * `launchRetina {string}` ---640x960px, top-side-left.
    * `launchRetina4 {string}` ---640x1136px, top-side-left.
* `ipad {object}`
    * `portrait {string}` ---768 x 1024 px, top-side-up.
    * `portraitRetina {string}` ---1536x2048px, top-side-up.
    * `landscape {string}` ---1024x768px, top-side-up.
    * `landscapeRetina {string}` ---2048x1536px, top-side-up.

Again, it is recommended to place these images within a
directory such as `./preload/` that is outside of the
`./resources/` directory, that way these images will not get
sprited along with the other game assets. For example:

~~~
"preload": {
  "autoHide": true,
  "img": "preload/splash.png",
  "scaleMethod": "cover",
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
~~~

### scaleDPR
1. `{boolean} = false`

Mobile browser flag for setting device DPI or low DPI.

### unlockViewport
1. `{boolean} = false`

If this is set to `true`, scrolling in a mobile web browser will display the address bar.

### nativeURLScheme
1. `{string} = "tealeaf"`

Defines the URL protocol for cross-app communication on
native devices which allows an app to be opened from a url
in the browser.

### disableNativeViews
1. `{boolean} = false`

Use a scene graph system written in entirely in JavaScript
instead of the one implemented in native code. This can be
used for debugging purposes when testing a game on a native
device to pinpoint where in the stack an error is occurring.

### android
1. `{object}`
    * `flurryKey {string}` ---Flurry app key for analytics.
    * `tapjoyDaily {object}` ---TapJoy daily key for analytics.
    * `tapjoyID {string}` ---TapJoy app ID for analytics.
    * `tapjoyKey {string}` ---TapJoy app key for analytics.
    * `apsalarKey {string}` ---Apsalar key.
    * `apsalarSecret {string}` ---Apsalar secret key.

Device specific settings for Android phones and tablets. In
this section you can set Flurry, Tapjoy, and Apsalar keys
for analytics on the Android platform. These keys should be
different from the iOS keys.

~~~
"android": {
  "apsalarKey": "jollyfunkey1",
  "apsalarSecret": "12345",
  "flurryKey": "4QR3QR3QR3QR3QR3QR3Q",
  "tapjoyDaily": {},
  "tapjoyId": "deadbeef-beef-baad-f00d-baad33c0ffee",
  "tapjoyKey": "S3QR3QR3QR3QR3QR3QR3",
  "versionCode": 1
}
~~~

### ios
1. `{object}`
    * `flurryKey {string}` ---Flurry app key for analytics.
    * `tapjoyDaily {object}` ---TapJoy daily key for analytics.
    * `tapjoyID {string}` ---TapJoy app ID for analytics.
    * `tapjoyKey {string}` ---TapJoy app key for analytics.
    * `apsalarKey {string}` ---Apsalar key.
    * `apsalarSecret {string}` ---Apsalar secret key.

Device specific settings for iOS phones and tablets. In this
section you can set Flurry, Tapjoy, and Apsalar keys for
analytics on the iOS platform. These analytics keys should
be different from the Android keys.

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
}
~~~

### mpMetricsKey
1. `{string}`

The MixPanel metrics key.

### fonts
1. `{array}`

Internal data saved for custom bitmap fonts. Do not edit this.
