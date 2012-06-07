"use import";

import .JPActor;

/*
 * The hero of the story.
 */

exports = Class(JPActor, function (supr) {
 	this.init = function (opts) {
 		opts.defaultAnimation = 'moving';
		opts.animations = {
			moving: {
				imageURL: 'resources/pacman.png',
				spritesWide: 1,
				spritesHigh: 1,
				start: 0,
				end: 1,
				width: 541,
				height: 600,
				step: 100
			}
		};
		supr(this, 'init', arguments);

		this.isHero = true;
	}
});