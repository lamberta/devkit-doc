var cache = {}; //cache the external md files
var externalPath = "../external/"; //link to the external docs
var srcPath = "../../timestep/timestep/"; //link to the source files

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
		var html = parseMarkdown(externalPath + externalFile, symbol.name);
		
		IO.saveFile("./debug", "DEBUG-" + name, "");
	}
});

/**
* Parse the external markdown file and pull out the
* appropriate block. Uses showdown to convert the 
* markdown to HTML.
*/
function parseMarkdown(path, name) {
	
}

//log strings to LOG file
function log(data) {
	var prev = IO.readFile("LOG");
	IO.saveFile(".", "LOG", prev + data + "\n");
}
