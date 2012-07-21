import .ViewUsage;
import .ViewStyleUsage;
import .TextUsage;
import .ImageUsage;
import .SpriteUsage;
import .ScrollUsage;
import .CameraUsage;
import .CustomClassUsage;
import .AnimateUsage;

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
		new AnimateUsage({parent: this.view});		
	}

	this.launchSinglePlayerGame = function() {
		
	}

	this.launchMultiplayerGame = function() {
		
	}
});
