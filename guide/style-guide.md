# Documentation Style Guide

``# module.Class``

This is an overview of the class or module.

``## Class: module.Class``

``Inherits``<br/>
``:‿‿‿‿1. [module.ClassA](./module-classa.html)``<br/>
``‿‿‿‿‿2. [module.ClassB](./module-classb.html)``

<br/>

``### new module.Class ([options])``<br/>
``1. `options {object}` ---Optional.``<br/>
``‿‿‿‿`id {string}``

<br/>

``### class.method (arg [, optarg])``<br/>
``1. `arg {type}` ``<br/>
``2. `optarg {type}` ``<br/>
``3. Return: `{type}` ``

This is a method descrition.

<br/>

``### class.method (arg)``<br/>
``1. `arg {alttype}` ``<br/>
``2. Return: `{type}` ``

If a method accepts multiple parameter lists, write a
different definition for each.

<br/>

``### class.property``<br/>
``1. `{type}` ``

Description of a property.

<br/>

``### class.property``<br/>
``1. `{type} = 0` ``

A property with a default value.

<br/>

``### Callback handler: class.onEvent (arg)``<br/>
``1. `arg {type}` ``

<br/>

``### Event \'EventType\', callback (arg1, arg2)``<br/>
``1. `arg1 {type}` ``<br/>
``2. `arg2 {type}` ``

<br/>

``## Class: module.ClassB``

<br/>

``## Example: This is an example``

Describe the example.

``~~~``<br/>
``var a = new module.Class();``<br/>
<br/>
``a.method('Hello, World!');``<br/>
``~~~``
