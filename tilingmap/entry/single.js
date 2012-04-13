"use import";
import timestep.TiledView;
import timestep.JsonTileSource;
import maps;
var app = new GCApp();
var mainView = app.getView();

var keyListener = app.getKeyListener();

var dataSource = new timestep.JsonTileSource({
	imageUrl: 'images/grasstiles.png',
	mapData: maps.map1,
	tileWidth: 28,
	tileHeight: 28,
});

var tiledView = new timestep.TiledView({
	tileWidth:28,
	tileHeight:28,
	dataSource:dataSource,
	parent:mainView,
	x:0,
	y:0,
	centerX:500 * 28,
	centerY:500 * 28,
	maxPanSpeed:'2000px'
});
tiledView.moveBy(0,0);

mainView.onInputSelect = function(evt, pt) {
	tiledView.moveBy(500, 0);
}

mainView.tick = function(ctx) {
	var keys = keyListener.getPressed();
	var moveX = 0;
	var moveY = 0;
	if (keys[keyListener.LEFT]) {
		moveX-=1;		
	}
	if (keys[keyListener.RIGHT]) {
		moveX += 1;	
	}
	if (keys[keyListener.UP]) {
		moveY -=1;
	}
	if (keys[keyListener.DOWN]) {
		moveY +=1;
	}
	tiledView.moveBy(moveX * 10, moveY * 10);
}


