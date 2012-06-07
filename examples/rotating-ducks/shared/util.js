/**
 * Prints out an object's properties that do not start with an underscore.
 */
window.parent.console.dir = function (obj) {
	var newobj = {};
	for (var p in obj) {
		if (p[0] !== '_') {
			newobj[p] = obj[p];
		}
	}
	return newobj;
};
