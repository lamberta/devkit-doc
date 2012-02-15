"use import";

import GC;

import .view.TitleView as TitleView;
import .view.GameView as GameView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	this.initUI = function() {

		// Keep track of the player's score
		this._score = 0;

		this._titleView = new TitleView({
			parent: this.view
		}).subscribe("PlayButtonPressed", this, "_onPlayButtonPressed");
		this._gameView = new GameView({
			parent: this.view,
			visible: false
		});

	};

	this._onPlayButtonPressed = function() {
		this._gameView.show();
	};

});
