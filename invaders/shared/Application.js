"use import";

import GC;
import timestep.TextView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	this.initUI = function() {

		this._foo = new timestep.TextView({
			parent: this.view,
			text: "INVADERS!",
			color: "white"
		});

	};

});
