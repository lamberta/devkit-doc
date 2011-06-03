"use import";

import shared.Game as Game;

var app = new GCApp({
	showFPS: true,
	clearEachFrame: false
});

var view = app.getView();

var game = new Game({
	view: view
});

var updatePlayerDirection = function (pt) {
	var player = game.player;
	if (pt.x < (player.x + (player.width / 4))) {
		player.setDirection(-1, 0);
	} else if (pt.x > (player.x + (player.width * 0.75))) {
		player.setDirection(1, 0);
	} else {
		player.setDirection(0, 0);
	}
};

view.render = function (ctx) {
	ctx.save();
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(0, 0, view.style.width, view.style.height);
	ctx.restore();
};

view.tick = function (dt) {
	game.update(dt);
};

var inputEvtID = null;

view.onInputStart = function (evt, pt) {
	if (inputEvtID == null) {
		inputEvtID = evt.id;
		updatePlayerDirection(pt);
	}
};

view.onInputMove = function (evt, pt) {
	if (evt.id === inputEvtID) {
		updatePlayerDirection(pt);
	}
};

view.onInputSelect = function (evt, pt) {
	inputEvtID = null;
	game.player.setDirection(0, 0);
};
