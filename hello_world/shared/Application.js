"use import";

import GC;
import timestep.TextView;

exports = Class(GC.Application, function (supr) {

	this.initUI = function () {

		// Create a text object which displays the text, "Hello World!"
		this._helloTextView = new timestep.TextView({
			parent: this.view,
			text: "Hello World!",
			fontSize: 30,
			color: "white"
		});

	};

});
