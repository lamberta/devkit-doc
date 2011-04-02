jsio('import timestep.ScrollView');
jsio('import timestep.IsometricTiledView');
jsio('import timestep.JsonTileSource');
jsio('import shared.IsometricPlayerView as PlayerView');

var app = new GCApp(),

mainView = app.getView(),

scrollView = new timestep.ScrollView({
	parent: mainView,
	width: mainView.style.width,
	height: mainView.style.height,
	clip: true
}),

//tmx is the XML-based format for map data used by the Tiled QT map editor
dataSource = new timestep.JsonTileSource({
	imageURL: 'images/maps/iso-64x64-outside.png',
	tmxFile: 'map_data/demoStage.tmx'
}),

tiledView = new timestep.IsometricTiledView({
	parent: scrollView,
	tileWidth: dataSource._tileWidth,
	tileHeight: dataSource._tileHeight,
	tileBaseHeight: dataSource._tileHeight / 2,
	dataSource: dataSource,
	x: 0,
	y: 0,
	infinite: true,
	maxPanSpeed: '500px'
}),

characterOpts = {
	parent: tiledView,
	width: 32,
	height: 48,
	animations:{
		'stand': {
			width: 32,
			height: 46,
			frames: [[0, 6]],
			frameRate: 4,
			imageURL: 'images/sprites/NPCFemale1.png'
		},
		'down':  {
			width: 32,
			height: 46,
			frames: [
				[0,6],[32,6],[64,6],[96,6]
			],
			frameRate: 4,
			imageURL: 'images/sprites/NPCFemale1.png'
		},
		'left': {
			width: 32,
			height: 48,
			frames: [
				[0,70],[32,70],[64,70],[96,70]
			],
			frameRate: 4,
			imageURL: 'images/sprites/NPCFemale1.png'
		},
		'right': {
			width: 32,
			height: 48,
			frames: [
				[0,139],[32,139],[64,139],[96,139]
			],
			frameRate: 4,
			imageURL: 'images/sprites/NPCFemale1.png'
		},
		'up': {
			width: 32,
			height: 46,
			frames: [
				[0,209],[32,209],[64,209],[96,209]
			],
			frameRate: 4,
			imageURL: 'images/sprites/NPCFemale1.png'
		}
	},
	position: {
		i: 2,
		j: 2
	},
	boundingCircle: {
		x: 16,
		y: 48,
		rad: 0.5
	}
},

keyListener = app.getKeyListener();

tiledView.character = new PlayerView(characterOpts);
tiledView.character.startAnimation('stand');

//setup mouse event
tiledView.onInputSelect = function(evt, pt){
	var isoPoint = this.getIsoForCartesian(pt.x, pt.y);
	this.character.moveToSquare(isoPoint.i, isoPoint.j);
};

//listen for arrow keys to scroll the map 
var scrollBy = function(pt) {
	scrollView.addOffset(pt);
};

mainView.tick = function(dt){
	var keys = keyListener.getPressed(),
	moveX = 0,
	moveY = 0;

	if (keys[keyListener.LEFT]) {
		moveX -= 1;
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
	if (moveX || moveY) {
		scrollBy({
			x: -moveX * 10,
			y: -moveY * 10
		});
	}
};

//center the scrollView on the center of the map.
var centerX = tiledView.style.width / 2;
var centerY = 0; 
scrollBy({x:centerX, y:centerY});


