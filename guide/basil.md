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

