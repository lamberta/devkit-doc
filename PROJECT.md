# Intro

**Notes**<br>


## Physical layout
Included in this project is [sk3letr0n/](sk3letr0n), which contains all the base files and directories you'll need.

* `.gitignore`: A list of files for git to ignore.
* `.tealeaf_sdk`: Saved state of the SDK's graphical interface. Created automatically and ignored in the `.gitignore`.
* `build`: Contains build cache files and outputs. Created automatically and ignored in the `.gitignore`.
* `manifest.json`: Includes all the project settings. [sk3letr0n/manifest.json](sk3letr0n/manifest.json) is empty except for the parent object to ensure the defaults it gets filled with (automatically) are up to date.
* `resources`: Includes all the resources, in the `fonts`, `images`, and `sounds` subdirectories.
* `sdk`: Symlink to `dev_sdk/sdk/`, created automatically and ignored in the `.gitignore`.
* `shared`: Holds all JS, including the required `Application.js`.


## Creating a project
Nothing special is required to create a project, just add all the required files or copy them over, then serve them with TeaLeaf and it'll automatically add the defaults to manifest.json and create the ignored files and directories.


## manifest.json


## Application.js