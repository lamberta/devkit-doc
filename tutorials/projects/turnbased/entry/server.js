"use import";

import shared.Game as Game;

// jsio('import frameworks.turnbased.Framework');
TeaLeaf.useFramework('turnbased');


var opts = TeaLeaf.server.getOpts();
var usernames = opts.usernames;
var board, playerIndex;


var game;

TeaLeaf.server.onStart = function() {
    var usernames = TeaLeaf.server.getOpts().usernames;
	game = new Game({
		usernames:usernames
	});  
	TeaLeaf.server.initGame({
		players: game.getPlayers(),
		turnIndex: game.getTurnIndex(),
	});  
    TeaLeaf.server.subscribe('PLAY', this, onPlay);

	nextTurn();
}

TeaLeaf.server.onResume = function(state) {
    game = new Game({
    	usernames:usernames,
    	turnIndex:state.turnIndex,
    	players:state.players
    });
    
    
    TeaLeaf.server.subscribe('PLAY', this, onPlay);

}

var nextTurn = function() {
	if (game.over()) {
		var winner = game.getWinner().username;
		endGame(winner);
	} else {
		game.nextTurn();
		TeaLeaf.server.startTurn({
			players:game.getPlayers(),
			turnIndex: game.getTurnIndex()
		});
		TeaLeaf.server.addActivePlayers(game.getActivePlayer());
	}
}

var onPlay = function(username, evt) {
    if (game.play(username, evt.side)) {
    	nextTurn();
    }
    TeaLeaf.server.broadcast('PLAY', evt);
}

var endGame = function(winner) {
	TeaLeaf.server.gameOver({
		winner: winner
	});
}




