/*
 * This file shows how to set the volume of a sound effect.
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
		this._volume = opts.volume;
	};

	this.onInputSelect = function() {
		this._sound.setVolume("sound1", this._volume);
		this._sound.play("sound1");
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
			// Load one sound effects:
			//    "resources/audio/bubble_hit_01.mp3"
			// or:
			//    "resources/audio/bubble_hit_01.ogg"
			files: {
				sound1: {
					volume: 0.8
				}
			}
		});

		// Create three views, click on them the hear an effect play...
		var w = device.width / 3;
		var colors = ["#FF0000", "#00FF00", "#0000FF"];
		var volumes = [0.2, 0.6, 1.0];
		for (var i = 0; i < 3; i++) {
			new SoundView({
				superview: this.view,
				x: i * w + 10,
				y: 10,
				width: w - 20,
				height: 100,
				sound: this._sound,
				volume: volumes[i],
				backgroundColor: colors[i]
			})
		}
	};

	this.launchUI = function () {};
});