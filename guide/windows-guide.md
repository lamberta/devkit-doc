# Windows Guide

This guide will get you up and running with the Game Closure
SDK. First, you'll download and install the SDK, then get introduced
to `basil`, our command-line tool for creating new projects
and development. Once everything is installed and ready
to go, please read the [Hello, World! Guide](../guide/hello-world.html)
to create your first application.


## Prerequisites

The following is a list of prequisites for running the Game Closure SDK on windows.
Download the following projects and refer to the sections below for configuration tips.

**Web and Native Development**

* [msysgit](http://msysgit.github.com/) (> 1.7.10)
	* The full installer should be used since it contains the `git bash` command prompt that is needed to run `basil` and the commands below. THe default options during the installation process will work with the GC Devkit.
* [Node.js](http://nodejs.org) (> 0.8)
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Chrome](http://www.google.com/chrome)
	* The Chrome web browser is the preferred development
environment because of its superior debugging tools. This is
the browser we use to develop the Game Closure SDK and test against.

**Android Development**

* [Android sdk](http://developer.android.com/sdk/index.html)
	* The full adt bundle comes as a zip file rather than an installer and is not required. The download listed under `use existing editor` will also work, is smaller, and also provides an installer.
* [Android ndk](http://developer.android.com/tools/sdk/ndk/index.html)
* [Apache Ant](http://ant.apache.org/manual/install.html)

###Installation Tip

The easiest way to install these packages is through their
respective installers. Note the location that each of the above dependencies is installed to because they will need to be added to your Windows envirnment PATH. For some of the above dependencies they come as zip downloads rather than installers. In these cases, they need to be unzipped and the location of the unzipped files needs to be added to your PATH. *[This is true for the **Android NDK**, **ant** build tools, and the **Android SDK** when using the adt bundle]*

## Add the tools to your PATH
Once the above dependencies are downloaded and installed, it is important that the following directories are listed in your PATH environment variable. Note that the location of these directies depends on where you installed the dependencies.

**Web and Native Development**

* **{java install location}**\jdk1.7.0_13\bin

**Android Development**

* **{android-ndk install location}**\android-ndk-r8d\prebuilt\windows\bin
* **{android-ndk install location}**\android-ndk-r8d
* **{ant install location}**\apache-ant-1.8.4\bin
* **{android-sdk install location}**\android-sdk\tools
* **{android-sdk install location}**\android-sdk\platform-tools

If you need assistance configuring the path refer to this [document](http://docs.oracle.com/javase/tutorial/essential/environment/paths.html) which describes how to configure the java environment variables.

For example, your path may contain the following after adding everything. Note that some of the paths below are added automatically by installers and Windows. Also be aware that these paths will be different based on the location where you installed the dependencies.

```
C:\android-ndk-r8d\prebuilt\windows\bin;
C:\android-ndk-r8d;
C:\Program Files\Java\jdk1.7.0_13\bin;
C:\apache-ant-1.8.4\bin;
C:\Users\gc\AppData\Local\Android\android-sdk\tools;
C:\Users\gc\AppData\Local\Android\android-sdk\platform-tools;
C:\Users\gc\AppData\Roaming\npm\;
%SystemRoot%\system32;%SystemRoot%;
%SystemRoot%\System32\Wbem;
%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;
C:\Program Files\nodejs\
```

###JAVA HOME
Your **JAVA_HOME** environment variable should also be set to the location of your java directory. For example: `C:\Program Files\Java\jdk1.7.0_13`


## Install the SDK

With the prerequisites installed, we're ready to set up the
Game Closure SDK. The library and tools are open source and
hosted in our [GitHub repository](https://github.com/gameclosure/sdk).
We'll be using the `git` tool to keep our software updated,
and there is [lots of help](https://help.github.com)
available for how to use it.

To download the Game Closure SDK, open a `git bash` terminal, and issue the following
commands:

~~~
$ git clone git@github.com:gameclosure/devkit
$ cd devkit
~~~

This downloads the SDK in to the `./devkit` directory located
in your current working path. Switch to that directory and
run the install script:

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
help for a particular command by typing `basil help [command]`,
for example:

~~~
$ basil help init
~~~

Some commands also take a `-h` argument to show help.

## Update the SDK

To keep your copy of the SDK up to date, run the update command:

~~~
$ basil update
~~~

The update command is also able to check out older versions of the SDK or different channels of SDK versions.  Read the help menu with `basil update --help` for more information on this flexible tool.

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
