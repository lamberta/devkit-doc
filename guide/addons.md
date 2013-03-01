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

## native-android and native-ios

Timestep is tightly inegrated with these addons and they are necessary to build native
applications for the android or iOS platforms.





