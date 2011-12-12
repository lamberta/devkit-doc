# Intro
Here at Game Closure, we understand the importance of developmental psychology. This is why we have contributed a record $3 trillion to various top research and outreach programs. Additionally, since it is such a large focus externally, we provide a comprehensive education program, specifically designed to provide knowledge on the subject to our employees. After completion of the course materials, move on to [Quantum Projection](PROJECT.md).

**Notes**<br>
The Game Closure tools! You'll probably want to put everything in a `~/Code/GameClosure` directory (or something similar), so `cd` there before cloning things.


## android
Needed for building android stuff.

1. Clone the repo: `$ git clone git@github.com:gameclosure/android.git`


## dev_sdk
Contains everything ever, including **TeaLeaf**, **jsio**, **timestep**, and the **native runtime**.

1. Clone the repo: `$ git clone git@github.com:gameclosure/dev_sdk.git`
2. `$ cd dev_sdk`
4. Initialize and clone the submodules: `$ git submodule update --init`
5. Set up the Python virtual environment: `$ sudo ./dev_install.sh`


## Updating
Make sure to regularly update your copies of SDK repos. Note that changes in them often break things, so make sure you know about all the latest major updates and such.

1. `cd` into a SDK repo.
2. Pull the latest changes: `$ git pull`
3. Update the submodules if necessary: `$ git submodule update`