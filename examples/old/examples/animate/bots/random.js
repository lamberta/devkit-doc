"use import";
import math.util;

TeaLeaf.game.event_init = function() {
	setTimeout(moveMe, math.util.random(1000, 5000));
}

function moveMe() {
	TeaLeaf.game.sendEvent('MOVE', {
		x: math.util.random(0, 800),
		y: math.util.random(0, 600)
	});
	
	setTimeout(moveMe, math.util.random(500, 5000));
}

TeaLeaf.game.ready();