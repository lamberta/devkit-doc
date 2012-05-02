var cache = {}; //cache the external md files
var externalPath = "../external/"; //link to the external docs
var srcPath = "../../../timestep/timestep/"; //link to the source files

IO.include("plugins/showdown.js");
var converter = new Showdown.converter();

JSDOC.PluginManager.registerPlugin("externalDoc", {
	onSymbol: function(symbol) {
		//don't document source files
		if(symbol.isa === "FILE") {
			log("Is a file: " + symbol.name);
			return;
		}

		//grab name without filepath
		var name = symbol.name.substr(
			symbol.name.lastIndexOf("/") + 1
		);

		//create the path to external
		var externalFile = symbol.srcFile.substring(
			srcPath.length,
			symbol.srcFile.length - 2
		) + "md";

		//skip symbol if no file
		if(!IO.exists(externalPath + externalFile)) {
			log("No file: " + externalPath + externalFile + "|" + symbol.srcFile);
			return;
		}

		//html from external block
		var output = parseMarkdown(externalPath + externalFile, symbol.name);
		if(output) 
			symbol.desc += converter.makeHtml(output);
	}
});

/**
* Parse the external markdown file and pull out the
* appropriate block. Uses showdown to convert the 
* markdown to HTML.
*/
function parseMarkdown(path, name) {
	//read the markdown content from the cache or file
	if(!cache[path]) {
		cache[path] = {};
		var content = IO.readFile(path);
		var start = 0, stop = 0, current, count = 0;
		var lines = content.split("\n");
		
		//loop over all the lines
		for(var i = 0; i < lines.length; i++) {
			//character count
			count += lines[i].length;

			//if a main heading, use as key
			if(lines[i].charAt(0) === "#" && 
				lines[i].charAt(1) !== "#") {
				
				if(current) {
					stop = count + i - lines[i].length;
					//save the lines in the cache
					cache[path][current] = 
						content.substring(start, stop);
				}

				//the block starts here
				start = count + i;
				//the name of the block is defined on this line
				current = lines[i].substr(1);
			}
		}

		//the very last block wont have hash
		stop = count + i;
		cache[path][current] = content.substring(start, stop);
	}
	
	//nothing found in external block
	if(!cache[path][name]) {
		log("Couldnt find " + name + " in " + path);
		return;
	}

	return cache[path][name];
}

//log strings to LOG file
function log(data) {
	var prev = IO.readFile("LOG");
	IO.saveFile(".", "LOG", prev + data + "\n");
}
