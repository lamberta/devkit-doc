/*
 * This file shows how to play different sound effects.
 *
 * How to use: Click on one of the views to play an effect
 */
import device as device;
import Sound as Sound;
import ui.View as View;

var SoundView = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [opts]);

		this._sound = opts.sound;
		this._index = opts.index;
	};

	this.onInputSelect = function() {
		this._sound.play(this._index);
	};
});

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		this._sound = new Sound({
			path: 'resources/audio/',
			// Load three sound effects:
			//    "resources/audio/sound1.mp3"
			//    "resources/audio/sound2.mp3"
			//    "resources/audio/sound3.mp3"
			// or:
			//    "resources/audio/sound1.ogg"
			//    "resources/audio/sound2.ogg"
			//    "resources/audio/sound3.ogg"
			files: {
				sound1: {
					volume: 0.8
				},
				sound2: {
					volume: 0.8
				},
				sound3: {
					volume: 0.8
				}
			}
		});

		// Create three views, click on them the hear an effect play...
		var w = device.width / 3;
		var colors = ["#FF0000", "#00FF00", "#0000FF"];
		for (var i = 0; i < 3; i++) {
			new SoundView({
				superview: this.view,
				x: i * w + 10,
				y: 10,
				width: w - 20,
				height: 100,
				sound: this._sound,
				index: "sound" + (i + 1),
				backgroundColor: colors[i]
			})
		}
	};

	this.launchUI = function () {};
});