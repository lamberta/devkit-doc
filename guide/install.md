# 1. Quick Start: Installation

This guide will get you up and running with the Game Closure
DevKit. First, you'll download and install DevKit, then get introduced
to `basil`, our command-line tool for creating new projects
and development. Once everything is installed and ready
to go, please read the [Hello, World! Guide](../guide/hello-world.html)
to create your first application.


## Prerequisites

We're only supporting OSX at this time, but we have some
success running on Linux and Windows. If you're using an
unsupported platform, make sure the following prerequisites
are installed and the symlinks all work, and you may have
some luck.

Install the following software before installing the Game Closure DevKit:

* [Git](http://git-scm.com) (> 1.7.10)
* [Node.js](http://nodejs.org) (> 0.8)
* [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) ---Will auto-install on OSX.
* [Chrome](http://www.google.com/chrome)

The easiest way to install these packages is through their
respective installers. Alternatively, you can use a package
manager, such as [Homebrew](http://mxcl.github.com/homebrew/)
on OSX, to keep your system updated. Just be aware that
you'll need to download and set up the [Xcode Command-line Tools](https://developer.apple.com/xcode/)
to build these packages.

The Chrome web browser is the preferred development environment because of its superior debugging toolset.

If you're using OSX and building for native devices, you'll need to install the following from the [Apple Developer Site](https://developer.apple.com/downloads/).  You may need to advance to the second page of downloads to find each of these items:

* XCode Command Line tools (November 2012 or newer)
* XCode (4.4 or newer)

## Install DevKit

With the prerequisites installed, we're ready to set up the
Game Closure DevKit. The library and tools are open source and
hosted in our [GitHub repository](https://github.com/gameclosure/devkit).
We'll be using the `git` tool to keep our software updated,
and there is [lots of help](https://help.github.com)
available for how to use `git`.

To download the Game Closure DevKit, issue the following
commands at the terminal:

~~~
$ git clone https://github.com/gameclosure/devkit
~~~

This downloads the DevKit in to the `./devkit` directory located
in your current working path.  A good place to put it would be in your
home directory.  Switch to that directory and run the install script:

~~~
$ cd devkit
$ ./install.sh
~~~

This installs the command-line program `basil`, which is used to
create and serve projects. To see a list of basil commands,
simply run it in your terminal without any arguments:

~~~
$ basil
~~~

This prints out a list of basil commands. You can get
help for a particular command by typing `basil help [command]`,
for example:

~~~
$ basil help init
~~~

Some commands can also take a `-h` argument to show help.

If you're getting permission errors when installing to the
`/usr/local` directory, try running this command:

~~~
$ sudo chown -R $(whoami) /usr/local
~~~

## Update the DevKit

To keep your copy of the DevKit up to date, run the update command:

~~~
$ basil update
~~~

The update command is also able to check out older versions of the DevKit or different channels of DevKit versions.  Read the help menu with `basil update --help` for more information on this flexible tool.

## Hello, World!

Once `basil` is installed you're ready to create a new game project.  Take a look at the [Hello, World! Guide](../guide/hello-world.html) to see how to get started using the Game Closure DevKit.

