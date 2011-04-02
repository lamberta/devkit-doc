function GCStart(conn) {
	conn.game.onStart = function() {
		moveLater();
	}
	
	function moveLater() {
		setTimeout(moveNow, math.util.random(1000, 5000));
	}
	
	function moveNow() {
		conn.game.send('MOVE', {
			x: Math.random() * 800,
			y: Math.random() * 600
		});
		
		moveLater();
	}
}
