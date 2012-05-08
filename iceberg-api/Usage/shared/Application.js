"use import";

import GC;

import .ViewUsage;
import .TextUsage;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true
	};

	this.initUI = function() {

	}

	this.launchUI = function() {
		new TextUsage({parent: this.view});		
	}

	this.launchSinglePlayerGame = function() {
		
	}

	this.launchMultiplayerGame = function() {
		
	}
});
