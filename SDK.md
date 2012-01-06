# Intro
Here at Game Closure, we understand the importance of developmental psychology. This is why we have contributed a record $3 trillion to various top research and outreach programs. Additionally, since it is such a large focus externally, we provide a comprehensive education program, specifically designed to provide knowledge on the subject to our employees. After completion of the course materials, move on to [Quantum Projection](PROJECT.md).

**Notes**<br>
The Game Closure tools! You'll probably want to put everything in a `~/Code/GameClosure` directory (or something similar), so `cd` there before cloning things.


## intro
This project! It includes some useful files and examples talked about later on.

1. Clone the repo: `$ git clone git@github.com:gameclosure/intro.git`
2. `$ cd intro`
3. Initialize and clone the submodules: `$ git submodule update --init`


## android
Needed for building android stuff.

1. Clone the repo: `$ git clone git@github.com:gameclosure/android.git`

If you installed Eclipse, you'll want to add TeaLeaf and test_app to it.

1. Create the projects. Select `File > New Project ... > Android > Android Project`.
2. Choose `Create project from existing source` and pick the `TeaLeaf/` directory in the android repo.
3. Right click the `TeaLeaf` project in the left column and select `Properties`. Under `Java Build Path > Libraries` select `Add JARs...` and select all JAR files in the `TeaLeaf/lib/` folder.
4. Repeat steps 1-3 for the `test_app/` directory in the android repo.


## dev_sdk
Contains everything ever, including **TeaLeaf**, **jsio**, **timestep**, and the **native runtime**.

1. Clone the repo: `$ git clone git@github.com:gameclosure/dev_sdk.git`
2. `$ cd dev_sdk`
3. Initialize and clone the submodules: `$ git submodule update --init`
4. Set up the Python virtual environment: `$ sudo ./dev_install.sh`


## Updating
Make sure to regularly update your copies of GC (and especially GC SDK) repos. Note that changes in them often break things, so make sure you know about all the latest major updates and such.

1. `cd` into a GC repo.
2. Pull the latest changes: `$ git pull`
3. Update the submodules if necessary: `$ git submodule update`