import ui.View as View;

//a custom red rectangle class
function RedRect(opts) {
	this.init.apply(this, arguments);
	this.style.backgroundColor = "#FF0000";

	this.onInputSelect = function() {
		this.style.backgroundColor = "#00FF00";
	}
}

//inherit the View prototype
exports = inherit(RedRect, View);

//custom prototype function
RedRect.prototype.onInputStart = function() {
	this.style.backgroundColor = "#0000FF";
}


/**
 * Utility to inherit the prototype chain
 */
function inherit(ctor, superCtor) {
	ctor.prototype = superCtor.prototype;
	return ctor;
};
