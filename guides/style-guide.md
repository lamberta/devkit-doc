# Documentation Style Guide

## Classes, Namespaces or Functions

Important classes should have it's own `.md` file. If a class file creates a private class that is important, you may include that in the same `.md` file. For example `View` makes use of `ViewStyle` so we include `ViewStyle` in `View`'s `.md` file.

### Heading

Use a heading 1 for class names and wrap them in backticks. Include the full path that the user would need to import them as.
	

	# `my.class.name`

### Description

After the heading, include a brief description of the purpose of the class. If it is a namespace or function,
expain so here.

	# `my.class.name`
	
	This is an example class description.

### Inheritence

Next you want to list the chain of inheritence of the class under a heading 2. The parent classes should
be in an *ordered* list and should link to it's corresponding class definition page in the docs (if it
exists).

	
	## Inheritence

	1. [timestep.View](./timestep-view.html)
	2. [lib.PubSub](./lib-pubsub.html)
	
### Options

Should your class require some options such as an object with options, you should create another heading 2.
Each option item should be in an *unordered* list where the key is bolded (wrap the word in two underscores). The
type should be in backticks and wraped in curly braces. If the option has a default value, put an equals sign
and the value inside the backticks. Add a description about what the option does after three hyphens.

	## Options

	* __optionA__ `{boolean} = true` ---This option does nothing!
	* __optionB__ `{object}` ---Even more options that do nothing.
		* __a__ `{number}` ---Demonstrating keys inside an object option. Simple indent.

## Methods

List all relevant methods that the end user is allowed to use in an unordered list under heading 2. List
parameters and return values in an unordered list with one indentation under the method. Use the same
format as options to display the type and default value except add the parameter name after the type and between
the default value.

	## Methods

	* __getOptionA(anArgument)__ ---This is a description.
		* @param `{boolean} anArgument = true` ---Is this an argument? Yes it is!
		* @return `{boolean}` ---Return whatever optionA was.

If the method has no parameters you may omit the parenthesis in the method signature. If there is no
return value you can omit the entire return line, similarly if no parameters.

## Properties

The properties style is the same as options.

## Categories

You may split up options, methods or properties into categories by using a heading 3.

## Usage

Include a small description about the code example after a heading 2. Wrap the code in three tildas.


	## Usage

	This is a code snippet.

	~~~
	var x = new my.class.name({optionA: false, optionB: {a: 4}});
	x.getOptionA(false);
	~~~


