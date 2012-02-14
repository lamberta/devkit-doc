# Lesson 1: Hello World

In this lesson, we'll start by installing the Game Closure SDK and verifying that we can create a simple application which prints "Hello World" to the screen.

The [code for this lesson][2] can be found on GitHub.

## Installing and configuring the Game Closure SDK

_NOTE: These steps may change if a downloadable installer for the SDK is ever created. This version instructs the user to acquire the SDK via git._

The first step is to download the Game Closure SDK (henceforth referred to as the GCSDK or simply the SDK). Let's start by opening a terminal window to a folder where you'd like the SDK to reside. Most developers choose something like `~/dev/`.

Next, clone the ["gc_sdk" repository from GitHub][1] by running the following command:

	git clone git@github.com:gameclosure/gc_sdk.git

This will copy the GCSDK setup files to your local drive. After the repository has been cloned you'll need to point your terminal to the newly created `gc_sdk` folder and run the install script:

	cd gc_sdk
	./install.sh

Assuming that no errors occurred during the install process, you should now be ready to develop games using the Game Closure SDK!

_TODO: Troubleshooting SDK install errors_

## Introduction to tealeaf

Game Closure's SDK includes a command line utility called `tealeaf`. You should be able to run `tealeaf` from any terminal window. Try it now by requesting the utility's help:

	tealeaf -h

Take a minute to scan the `tealeaf` help output. You don't need to memorize everything now, but many of these commands will be useful or necessary later.

## Starting a new project

Open a new terminal window to the location where you'd like to create a new project. For this example, we'll use `~/dev/` again. `tealeaf` includes a `startproject` command which you can use to create the barebones project files. Create your new `hello_world` project by running the following command:

	tealeaf startproject hello_world -t empty

The `-t empty` flag tells `tealeaf` that we'd like our new project created using the "empty" template. This template includes only the bare minimum files to get you started.

## Project Layout

Next we'll go over the basic layout of a game or application leveraging the GCSDK. In the `hello_world` folder we created a moment ago you'll find two files: `manifest.json` and `shared/Application.js`.

### manifest.json

This file describes your game/application to the GCSDK. It typically contains values such as:

* The display title of your game
* References to images and other data files used by your game
* Options used when deploying your game to the web, Android or iOS

### shared/Application.js

This is the main file in your game. It includes hooks for application-level options and several entry points for launching the application.

Let's take a quick look at the functions in `Application.js` which were stubbed out by the "empty" project template:

* `initUI`: Called during the application initialization phase
* `launchUI`: Called when your application is launched
* `launchSinglePlayerGame`: Jump into a single player game _TODO: Still used?_
* `launchMultiPlayerGame`: Jump into a multi-player game _TODO: Still used?_

## Hello World!

Now that we've covered the basics, let's perform the simple task of drawing some text to the screen.

First, we need to introduce `timestep`. `timestep` is a library of code contained in the GCSDK which provides some fundamental building blocks for creating your game.

The first `timestep` object we'll introduce is the `TextView`, which is simply an object that contains the information needed to draw some text to the screen during the render phase. The GC application takes care of your game loop so all you need to do is create an instance of a `TextView`.

Start by specifying that we'll be using `TextView` by adding the following `import` line near the top of your `Application.js` file (add it right after `import GC;`):

	import timestep.TextView;

Next go into the `initUI` function and add this code:

	// Create a text object which displays the text, "Hello World!"
	this._helloTextView = new timestep.TextView({
		parent: this.view,
		text: "Hello World!",
		fontSize: 30,
		color: "white"
	});

That's all we need for our "hello world" example. Next go back into your project's directory in your terminal and run this command:

	tealeaf serve

You should see some log messages that look something like this:

	============================================================
										 {{ Game Closure SDK }}
												Beer & Yoghurt.
	------------------------------------------------------------

And near the end of the output, a notification telling you which port the server is running on, such as:

	(15695) wsgi starting up on http://0.0.0.0:8000/

Go ahead and pull up [http://0.0.0.0:8000/](http://0.0.0.0:8000/) in your browser. This is the browser-based SDK. In the upper-right corner, you should see a "Launch" button. Go ahead and press it.

This will open your game running in a new tab. You should see your "Hello World!" text inside of an image of a mobile device.

[1]: https://github.com/gameclosure/gc_sdk
[2]: https://github.com/gameclosure/kickstart/tree/master/hello_world
