"use strict";

/*
A jsio-compatible Node REPL. Should go in your GC directory, and may require some tweaking.

$ node repl.js
*/

require("./dev_sdk/lib/js.io/packages/jsio"); // Make sure this correctly points at the dev_sdk.

var ctx = require("repl").start().context;

ctx.jsio = function(imp, opts){ // Call this like you'd normally call jsio().
	if (!opts) { opts = {}; }
	if (!opts.context) { opts.context = ctx; }
	return jsio(imp, opts);
};

ctx.reload = function(){ // This clears out the cached modules, but that may not always do everything you expect.
	for (var path in jsio.__modules) {
		delete jsio.__modules[path];
	}
};

ctx.jsio.__jsio = jsio;

// Add import search paths to make everything work nicely, e.g:
// jsio.path.add("./hexblast");