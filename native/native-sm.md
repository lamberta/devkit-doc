# iOS SpiderMonkey

## Overview

Game Closure's iOS platform engine is designed to deliver
realtime performance mainly for ARMv7 processors but also
for the i386 simulator built into Xcode.

Mozilla SpiderMonkey is an interpreter and JIT
(Just-in-Time) Compiler for JavaScript.  Apple does not
allow self-modifying code onto the App Store, so the Game
Closure SDK is based on the interpreter mode of
SpiderMonkey, rather than the much faster IonMonkey engine.
The [Mozilla Public License](http://en.wikipedia.org/wiki/Mozilla_Public_License)
is permissive enough to allow us to use it in a commercial
or open-source setting as long as the modified SpiderMonkey
source code is provided.

Another mature interpreter project is JavaScript Core.
Since it is licensed under the LGPL, however, it cannot be
used on the iTunes App Store.  LGPL projects must be
dynamically linked, which is not permitted for apps.  And
several games have been regrettably pulled off the App Store
as a result of using JavaScript Core.

## Current Version

We are branched off FIREFOX_AURORA_18_BASE from Nov 8 at
node `bb4d68b03164eb7480c1a2b5a652d75c50084f18`.

## Modifications

Removes a lot of code unrelated to running on cellphones
`#define inline __inline__ __attribute__((always_inline))`
Implements unicode support for International text Garbage
Collection improvements.
