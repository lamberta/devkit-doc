# Quick Start

This guide with get you up and running with the Game Closure
SDK. First, you'll download and install the SDK, then get introduced
to `basil`, our command-line tool for creating new projects
and development. Once everything is installed and ready
to go, please read the [Hello, World! Guide](../guide/hello-world.html)
to create your first application.


## Prerequisites

Install the following software before installing the Game Closure SDK:

* [Git](http://git-scm.com) (> 1.7.2)
* [Node.js](http://nodejs.org) (> 0.8)
*
  [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) ---Will auto-install on OSX.
* [Chrome](www.google.com/chrome)

The easiest way to install these packages is through their
respective installers. Alternatively, you can use a package
manager, such as [Homebrew](http://mxcl.github.com/homebrew/) 
on OSX, to keep your system updated. Just be aware that
you'll need to download and set up the [Xcode Command-line Tools](https://developer.apple.com/xcode/)
to build these packages.

The Chrome web browser is the preferred development
environment because of its superior debugging tools. This is
the browser we use to develop the Game Closure SDK and test against.

If you installed the Xcode command-line tools, you may have
a version of git that is less than 1.7.2. In this case,
install a newer version---either by the git installer or a
system package manager---and edit your `$PATH` variable so
that the location of newer git is referenced before the
older version.


## Install the SDK

With the prerequisites installed, we're ready to set up the
Game Closure SDK. The library and tools are open source and
hosted in our [GitHub repository](https://github.com/gameclosure/sdk).
We'll be using the `git` tool to keep our software updated,
and there is [lots of help](https://help.github.com)
available for how to use it.

To download the Game Closure SDK, issue the following
commands at the terminal:

~~~
$ git clone git@github.com:gameclosure/sdk.git
$ cd sdk
~~~

This downloads the SDK in to the `./sdk` directory located
in your current working path. We then switch to that directory.

With everything up-to-date, we can now install `basil`:

~~~
$ ./install.sh
~~~

This installs the command-line program `basil` which is used
create and serve projects. To see a list of basil commands,
simply run it in your terminal without any arguments:

~~~
$ basil
~~~

This prints out a list of basil commands. You can get
help for a particular command  by appending an `-h` option,
for example:

~~~
$ basil init -h
~~~

If you're getting permission errors when installing to the
`/usr/local` directory, try running this command:

~~~
$ sudo chown -R $(whoami) /usr/local
~~~

## Update the SDK

To update your SDK to the latest version, switch to the
directory you installed `basil` in, and type the following
commands in at terminal:

~~~
$ git pull
$ git submodule update --init --recursive
$ ./install.sh
~~~


## Install the Examples

Once `basil` is installed you're ready to check out a few
example projects. First, take a look at the [Hello, World! Guide](../guide/hello-world.html)
to see how to create a new project. After that, you should
be ready to browse some more complicated projects. There are
a bunch contained within the *examples addon*, you can
install this by running:

~~~
$ basil install examples
~~~

This addon installs a collection of projects that demonstrate
some game development techniques using the Game Closure
SDK. When you run basil you'll be able to browse and run the
projects, and also see the annotated source for each.
