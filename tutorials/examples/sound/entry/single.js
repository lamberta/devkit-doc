"use import";
/*************************************
 * spell3.ogg by Bart Kelsey for
 * opengameart.org
 *
 * background.ogg (epic battle music) by
 * playonloop.com for opengameart.org
 ************************************/
import timestep.SoundManager as SoundManager;

var app = new GCApp();

var mainView = app.getView();

SoundManager.play({
	src: 'sounds/background.ogg',
	loop:true,
	volume:0.4
});

mainView.onInputSelect = function(evt, pt) {
	SoundManager.play({
		src: 'sounds/spell3.ogg',
	});
}
