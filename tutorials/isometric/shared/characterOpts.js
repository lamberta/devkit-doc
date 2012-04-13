var base = 'resources/images/sprites/';

exports = {
	width: 32,
	height: 48,
	animations:{
		'stand': {
			width: 32,
			height: 46,
			frames: [[0, 6]],
			frameRate: 4,
			imageURL: base + 'NPCFemale1.png'
		},
		'down':  {
			width: 32,
			height: 46,
			frames: [[0, 6], [32, 6], [64, 6], [96, 6]],
			frameRate: 4,
			imageURL: base + 'NPCFemale1.png'
		},
		'left': {
			width: 32,
			height: 48,
			frames: [[0, 70], [32, 70], [64, 70], [96, 70]],
			frameRate: 4,
			imageURL: base + 'NPCFemale1.png'
		},
		'right': {
			width: 32,
			height: 48,
			frames: [[0, 139], [32, 139], [64, 139], [96, 139]],
			frameRate: 4,
			imageURL: base + 'NPCFemale1.png'
		},
		'up': {
			width: 32,
			height: 46,
			frames: [[0, 209], [32, 209], [64, 209], [96, 209]],
			frameRate: 4,
			imageURL: base + 'NPCFemale1.png'
		}
	},
	position: {
		i: 10,
		j: 10
	},
	boundingCircle: {
		x: 16,
		y: 48,
		rad: 0.5
	}
};
