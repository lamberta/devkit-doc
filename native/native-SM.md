# Game Closure SpiderMonkey for iOS

## Overview

Game Closure's iOS platform engine is designed to deliver realtime performance mainly for ARMv7 processors but also for the i386 simulator built into Xcode.

Mozilla SpiderMonkey is an interpreter and JIT (Just-in-Time) Compiler for JavaScript.  Apple does not allow self-modifying code on the App Store, so the Game Closure SDK is based on the interpreter mode of SpiderMonkey, rather than the new IonMonkey engine.

Another mature interpreter project is JavaScript Core.  Since it is licensed under the LGPL, however, it cannot be used on the iTunes App Store.  And several games have been pulled off the App Store as a result of using JavaScript Core.

## Current Version

We are branched off FIREFOX_AURORA_18_BASE at node bb4d68b03164eb7480c1a2b5a652d75c50084f18.

## Modifications



## iOS Platform

To provide realtime low-latency JavaScript performance, we started with a bleeding-edge Mozilla SpiderMonkey