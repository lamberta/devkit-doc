"use import";

jsio('from util.browser import $');

/*

1. overlay JS runs
2. overlay opens --> ready event
3. overlay closes --> onBeforeClose
4. overlay opens --> ready event

*/
TeaLeaf.lobby.subscribe('CHAT', exports, 'onLobbyChat');

var MSG_PREFIX = 'OVERLAY:',
	MSG_PREFIX_LEN = MSG_PREFIX.length;

exports.onOverlayEvent = function(evt) {
	var overlay = TeaLeaf.ui.overlay;
	
	switch(evt.type) {
		case 'ready':
			overlay.pushMenu('mainmenu');
			break;
		
		case 'button':
			switch(evt.id) {
				case 'btnSinglePlayer':
					TeaLeaf.overlay.hide();
					TeaLeaf.singlePlayerGame();
					break;
				case 'btnMultiplayer':
					overlay.showDialog('connecting');
					TeaLeaf.connect('/testserver/csp');
					TeaLeaf.onConnect(function() {
						overlay.pushMenu('lobby');
						overlay.hideDialog('connecting');
					});
					break;
				case 'btnLogout':
					overlay.popToMenu('mainmenu');
					break;
				case 'btnLogin':
					overlay.showDialog('login');
					break;
			}
			break;
		
		case 'chat':
			TeaLeaf.lobby.chat(evt.msg);
			break;
		
		case 'close':
			// overlay is getting destroyed!
			TeaLeaf.chat.unsubscribe('Message', exports, 'onChatMessage');
			break;
	}
}

exports.onLobbyChat = function(args) {
	TeaLeaf.ui.overlay.sendEvent({
		type: 'lobbyChat',
		username: args.username,
		msg: args.msg,
		date: args.date
	});
}
