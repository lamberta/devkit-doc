"use import";

import GC;
import timestep.ImageView as ImageView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	this.initUI = function() {

		this._player = new ImageView({
			parent: this.view,
			image: "media/images/player.png",
			x: this.view.style.width / 2 - 32,
			y: this.view.style.height - 64,
			width: 64,
			height: 64
		});

		this._enemy1 = new ImageView({
			parent: this.view,
			image: "media/images/enemy1.png",
			width: 64,
			height: 64
		});

	};

});
