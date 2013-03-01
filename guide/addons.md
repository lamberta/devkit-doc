# Basil addons

Basils functionality can be extended with addons, there are three types of addons:

:    1. target platform addons: native-android and native-ios
    2. sdk addons: these addons can add extra features -like tools- to the sdk screen
    3. simultator addons: these addons can add extra features to the simulator screen

The first addon type is `core`, the second and third are `user`.

An addon can be installed with the following basil command:
~~~
basil install nameofaddon
~~~

## The addon registry

Game Closure maintains a central registry of addons. The addon registry contains a list of JSON
files with information about each addon. Each JSON file has a list of versions of the addon
and a range of versions of basil with which it's compatible.
When the addon is installed basil will download or update the latest addon registry and install
the appropriate version of the addon for the version of basil. After basil update is run all
addons will be checked and if neseccary moved to a different compatible version.

### An addon manifest like found in the addon registry

The filename is the same as the addon name with a `.json` extension.
~~~
{
  "type": "core",
	"versions": [
		{
			"version": "0.1.2",
			"repo": "https://github.com/gameclosure/native-android.git",
			"commit": "920801e9fe2dc01e4b7c688efe377d1b70e635de",
			"basil": ["*"]
		}
	],
	"description": "native-android is the Game Closure Android layer of DevKit which allows for the deployment of games built on the GC DevKit to android devices",
	"maintainers": [
		{
			"name": "Jared Petker",
			"email": "jared@gameclosure.com",
			"web": "gameclosure.com"
		},
		{
			"name": "Derek Burch",
			"email": "derek@gameclosure.com",
			"web": "gameclosure.com"
		},
		{
			"name": "Chris Taylor",
			"email": "chris@gameclosure.com",
			"web": "gameclosure.com"
		},
		{
			"name": "Tom Fairfield",
			"email": "tom@gameclosure.com",
			"web": "gameclosure.com"
		},
		{
			"name": "Martin Hunt",
			"email": "martin@gameclosure.com",
			"web": "gameclosure.com"
		}
	],
	"bugs": "https://github.com/gameclosure/native-android/issues",
	"keywords": "native android"
}
~~~

The `basil` field in the `versions` list contains the basil version or range with which the version
is compatible. It can be all versions, a single version or a range of versions.

A version of the addon is compatible with all versions of basil:
~~~
"basil": ["*"]
~~~

A version of the addon is compatible with a single version of basil:
~~~
"basil": ["0.1.2"]
~~~

A version of the addon is compatible with a range of versions of basil:
~~~
"basil": [">= 0.1.1", "< 0.2.0"]
~~~

### An addon manifest like found in the addon

The addon itself also has a manifest with information about the version and function of the addon.
This manifest contains the version of the addon, basil needs this to be able to compare the version
which is installed with the versions available in the registry.
~~~
{
  "name": "native-android",
	"version": "0.1.2"
}
~~~

### native-android and native-ios

Timestep is tightly inegrated with these addons and they are necessary to build native
applications for the android or iOS platforms. The type of these addons is `core`.

### SDK addons

It's possible to add extra pages with tools to the SDK with an addon. The addon registry 
is similar to the example listed above but the manifest in the addon itself has some extra
values to let the SDK know how the feature sould be integrated.

An example of an addon which adds a bitmap font rendering tool to the SDK:
~~~
{
	"name": "fonteditor",
	"version": "0.1.0",
	"author": "Game Closure",
	"title": "Font Editor",
	"scope": "tools",
	"style": ["static/fonts.styl"],
	"plugin": true
}
~~~

There are a couple of extra fields in this manifest different from the `core` addons:

:    1. title: This is the link title which will be used as a menu option on the left side in the page list
    2. scope: In which group should the title be placed, if the groud does not exist then a new group will be added
    3. style: A list of stylesheets which will be included
    4. plugin: Sould be true, lets the SDK know the addon should be integrated in the menus

The following items should be in the root of the addon:

:    1. manifest.json: As specified above
    2. index.js: A file which exports a load function which is invoked when the addon is loaded
    3: plugin.js: This file adds the serve side functions to the addon to retrieve and save data
    4: static/Pane.js: A directory called static with a file called Pane.js, this is the visible client side part of the addon

