import ui.View as View;
import ui.SpriteView as SpriteView;

exports = Class(View, function (supr) {
	this.buildView = function(){

		//resources folder layout:
		/*
		 * resources/images/characterSprites/timSprite_idle_1.png
		 *  ...
		 * resources/images/characterSprites/timSprite_idle_8.png
		 * resources/images/characterSprites/timSprite_walk_1.png
		 *  ...
		 * resources/images/characterSprites/timSprite_walk_9.png
		*/
		
		var timSprite = new SpriteView({
			superview: this,
			x: 0,
			y: 0,
			width: 60,
			height: 60,
			url: "resources/images/characterSprites/timSprite",
			defaultAnimation: "idle"
		});

		timSprite.startAnimation('walk'); //plays 'walk' once, returns to idle.
	};
});
