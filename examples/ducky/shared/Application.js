"use import";

import .util;

import GC;
import timestep.TextView as TextView;
import timestep.device as device;
import timestep.ImageView as ImageView;

import timestep.Sprite as Sprite;

import timestep.Application as Application;

//import GCDialogs.Dialog as Dialog;

/**
 * 
 */
exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true
	};

	this.initUI = function() {

		/*
		var sprite = new Sprite({
			parent: GC.app.view,
			x: 0,
			y: 50,
			width: 34,
			height: 86,
			defaultAnimation: 'default',
			animations: {
				'default': {
					imageURL: 'resources/img/character.png',
					sheetWidth: 204,
					sheetHeight: 344,
					spritesWide: 6,
					spritesHigh: 4,
					start: 12,
					end: 17
					//width: 34,
					//height: 86
				}
			}
		});

		//sprite.startAnimation('default');
		
		GLOBAL.s = sprite;

		sprite.addAnimation('huh', {
			imageURL: 'resources/img/character.png',
			sheetWidth: 204,
			sheetHeight: 344,
			spritesWide: 6,
			spritesHigh: 4,
			start: 0,
			end: 6
		});

		sprite.startAnimation('huh', {iterations: 2, callback: function () {
			console.log('BOOM!');
		}});
		*/

		this.view.style.backgroundColor = "#ffffff";

		var views = [];


		
		
		/*
		for (var i = 100; i < 2450; i += 150) {
			for (var j = 100; j < 1200; j += 150) {
				views.push(new TextView({
					parent: this.view,
					text: "WTF?!",
					color: "#ffffff",
					backgroundColor: "#ff0000",
					fontSize: 32,
					width: 100,
					height: 100,
					r: 0.5,
					//color: "#ff0000"
					anchorX: 50,
					anchorY: 50,
					x: i,
					y: j
				}));
			}
		}*/

		
		for (var i = 100; i < 2450; i += 150) {
			for (var j = 100; j < 1200; j += 150) {
				views.push(new ImageView({
					parent: this.view,
					image: 'resources/img/duck.png',
					//text: "WTF?!",
					//color: "#ffffff",
					//backgroundColor: "#ff0000",
					//fontSize: 32,
					width: 100,
					height: 100,
					r: 0.5,
					//color: "#ff0000"
					anchorX: 50,
					anchorY: 50,
					x: i,
					y: j
				}));
			}
		}
		
		
		GLOBAL.views = views;

		/*
		var iv = new ImageView({
			parent: this.view,
			image: 'resources/img/duck.png'
		});
		*/

		//GLOBAL.iv = iv;
		
		/*
		var d1 = new Dialog({
			parent: this
		});
		*/
		
		//tv.setText('Hello, World!');

		//this.view.addSubview(tv);

		this.engine.subscribe('Tick', function () {
			var i = views.length;
			while (i--) {
				views[i].style.r += 0.1;
			}
		});
	}

	this.launchUI = function() {
		
	}

	this.launchSinglePlayerGame = function() {
		
	}

	this.launchMultiplayerGame = function() {
		
	}
});

