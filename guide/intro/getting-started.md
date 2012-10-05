# Getting Started

## Install the SDK

### Use the Installer

The easiest way to get up and running with the Game Closure
SDK is to simply download and click the Installer. This will
install everything you need to run a game built on the game
Closure SDK. You can download this at [http://gameclosure.com/sdk](http://gameclosure.com/sdk)


### Command-line install

You can also install the Game Closure SDK from your system's
command line which allows you to build projects using the
`basil` utility. You'll need to have a few prerequisties
installed on your machine first, you can install these
through their own installer, or by using a package
management system, such as [Homebrew](http://mxcl.github.com/homebrew/)
on OSX.

#### Prerequisites

* [Git](http://git-scm.com) (> 1.7.10)
* [Node.js](http://nodejs.org) (> 0.8)
* [Java JRE](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Chrome](www.google.com/chrome) (Preferred development enviroment)

#### Download the source and install

~~~
$ git clone git@github.com:gameclosure/basil.git
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
$ git submodule update --init
$ ./install.sh
~~~
