"use import";

import shared.Game as Game;
import shared.gui.GameView as GameView;
import timestep.View;
//necessary comment
// jsio('import frameworks.turnbased.Framework');
TeaLeaf.useFramework('turnbased');
TeaLeaf.ui.createApp();
mainView = TeaLeaf.ui.getView();

mainView.onInputScroll = function(evt, pt) {
		logger.log('a click', pt);
}

var ownUsername = TeaLeaf.getUsername();


var gameView;
TeaLeaf.game.onStart = function() {
	gameView = new GameView({
		parent:mainView,
		status: '...'
	});
	TeaLeaf.game.subscribe('PLAY', this, onPlay);
}

TeaLeaf.game.onResume = function(initialState, currentState) {
	gameView = new GameView({
		parent:mainView,
	});
}

TeaLeaf.game.onPlayerActivated = function(username) {
    if (username == ownUsername) {
        gameView.status("Your move.");
    } else {
        gameView.status("Waiting for " + username + " to move.");
    }
}


TeaLeaf.game.onGameOver = function(args) {
    gameOver(args.winner);
}

var gameOver = function(winner) {
	if (winner == ownUsername) {
        gameView.status("You Won!");
    } else {
        gameView.status("You lost.");
    }
}

var onPlay = function(evt) {
	gameView.showPlay(evt.side);
}

TeaLeaf.game.ready();
