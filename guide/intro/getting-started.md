# Getting Started

## Install the SDK

<!--
### Use the Installer

The easiest way to get up and running with the Game Closure
SDK is to simply download and click the Installer. This will
install everything you need to run a game built on the game
Closure SDK. You can download this at [http://gameclosure.com/sdk](http://gameclosure.com/sdk)
-->

### Command-line install

You can also install the Game Closure SDK from your system's
command line which allows you to build projects using the
`basil` utility. You'll need to have a few prerequisties
installed on your machine first, you can install these
through their own installer, or by using a package
management system, such as [Homebrew](http://mxcl.github.com/homebrew/)
on OSX.

#### Prerequisites

Install the following software before installing the Game
Closure SDK:

* [Git](http://git-scm.com) (> 1.7.10)
* [Node.js](http://nodejs.org) (> 0.8)
* [Chrome](www.google.com/chrome)

Chrome is the preferred development environment because of
its superior debugging tools and is the browser we use to
develop the Game Closure SDK and test against.

#### Download the source and install

~~~
$ git clone git@github.com:gameclosure/sdk.git
$ cd basil
$ ./install.sh
~~~

If you're getting permission errors when installing to the
`/usr/local` directory, try running this command:

~~~
$ sudo chown -R $(whoami) /usr/local
~~~

This installs the command-line program `basil` which is used
create and serve projects. To see a list of basil commands,
simply run it in your terminal without any arguments:

~~~
$ basil
~~~

This will print out a list of basil commands. You can get
help for a particular command  by appending an `-h` option,
for example:

~~~
$ basil init -h
~~~


## Update the SDK

To update your SDK to the latest version, just type the
following at the command line:

~~~
$ basil update
~~~

*Tip*: If that doesn't work, in the basil directory on the **master** branch, run:

~~~
$ git pull
$ git submodule update --init --recursive
$ ./install.sh
~~~


## Install the Examples

With basil installed, you're ready to browse some sample
projects! Install the *examples addon* by running the
following at the command-line:

~~~
$ basil install examples
~~~

This addon installs a collection of projects that demonstrate
some game developement techniques using the Game Closure
SDK. When you run basil you'll be able to browse the
projects, code, and comments.
