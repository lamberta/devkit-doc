"use import";

import GC;

import .view.TitleView as TitleView;
import .view.GameView as GameView;
import .view.GameOverView as GameOverView;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE
	};

	var DEFAULT_HIGH_SCORE = 1000;

	this.initUI = function() {

		// Keep track of the player's score
		this._score = 0;

		this._titleView = new TitleView({
			parent: this.view,
			highScore: this.getHighScore()
		}).subscribe("PlayButtonPressed", this, "_onPlayButtonPressed");

		this._gameView = new GameView({
			parent: this.view,
			visible: false
		}).subscribe("GameOver", this, "_onGameOver");

		this._gameOverView = new GameOverView({
			parent: this.view,
			visible: false
		}).subscribe("GameOver", this, "_onGameOver");

	};

	this.getHighScore = function() {
		var highScore = localStorage.getItem("highScore");
		if (highScore === null) {
			highScore = DEFAULT_HIGH_SCORE;
			this.setHighScore(highScore);
		}
		return highScore;
	};

	this.setHighScore = function(highScore) {
		localStorage.setItem("highScore", highScore);
	};

	this._onGameOver = function() {
		this._gameView.hide();
		this._gameOverView.show();
	};

	this._onPlayButtonPressed = function() {
		this._gameView.show();
	};

});
