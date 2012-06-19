//necessary comment
// jsio('import frameworks.turnbased.Framework');
TeaLeaf.useFramework('turnbased');
var ownUsername = TeaLeaf.getUsername();

TeaLeaf.game.onStart = function() {

}

TeaLeaf.game.onResume = function() {

}

TeaLeaf.game.onPlayerActivated = function(username) {
    if (username == ownUsername) {
    	var delay = (Math.random() * 1000000 % 1000) + 2000;
        setTimeout(function(){TeaLeaf.game.sendEvent('PLAY', {side:'right'})}, delay);
    }
}

TeaLeaf.game.ready();
