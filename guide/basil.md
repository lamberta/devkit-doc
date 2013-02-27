# Basil

## basil addons

Lists all installed addons, their version and if the version is compatible with the current version of basil.

## basil build {target}

Builds a packaged game for the platform you specify.
~~~
basil build [platform] [--no-compress] [--clean] [--debug]',
~~~

### Example usage:
~~~
basil build native-android --no-compress
~~~

Platforms:
:    1. native-android
    2. native-ios
    3. browser-mobile
    4. browser-desktop

## basil clean-register

Removes all invalid projects from the basil registry.
~~~
basil clean-register
~~~

### Example usage:
~~~
basil clean-register
~~~

### Further information
This removes invalid projects from the basil registry. This includes projects with
incorrect or missing manifest.json files and directories that no longer exist.
This is the first line of defence against registry errors. If this did not fix your error,
attempt viewing the registry yourself at $your_basil_root/config.json. In particular, check
for malformed JSON.

## basil debug

Builds a packaged game for the platform you specify.
The a debug version contains all information to debug the game and does not compress
the application which makes the build process finish faster.

~~~
basil build [platform] [--no-compress] [--clean] [--debug]
~~~

### Example usage:
~~~
basil build native-android --no-compress
~~~

Platforms:
:    1. native-android
    2. native-ios
    3. browser-mobile
    4. browser-desktop

## basil init

Initialise a new project either in the current directory or in the path specified.
~~~
basil init [path] [-t | --template TEMPLATE]
~~~

### Example usage:
~~~
basil init ./projects/myNewProject
~~~

### Templates:
:    1. empty
    2. stackview

### Further information:
The shortName of the new game is generated from the path supplied.
This also automatically runs basil register.

## basil install

Installs an addon
~~~
basil install [path] [--force]
~~~

### Example usage:
~~~
basil install native-android
basil install myaddon.json
basil install https://raw.github.com/gameclosure/addon-registry/master/native-ios.json
basil install https://raw.github.com/gameclosure/addon-registry/master/native-android.json --force
~~~

### Further information:
If an addon is registered in the Game Closure addon registry then the addon can be installed by
using the name of the addon which is the filename in the registry without the extension.

If the addon is not registered in the Game Closure addon registry then the path to the addon
manifest can be used as a parameter, the path can be a path on the local system or a http or https
address.

The manifest will be saved in the ./addons/.custom-registry directory, if there is already a file
in that location with the same name then basil will exit with a warning. Using the --force option
will force basil to overwrite the existing version

