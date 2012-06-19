"use import";

import timestep.TextView as TextView;
import .px;

/*
 * Scoreboarddddddd
 */

exports = Class(TextView, function (supr) {
	this.init = function (opts) {
		this.shadow = new TextView({
			parent: opts.parent,
			color: 'black',
			fontSize: px(26),
			verticalAlign: 'top',
			y: px(2),
			x: px(2)
		})

		opts.color = 'white';
		opts.fontSize = px(26);
		opts.verticalAlign = 'top';
		opts.y = px(0);
		opts.x = px(0);
		supr(this, 'init', arguments);
		this.update(0);
	}

	this.update = function (value) {
		this.value = value;
		this.setText('Score: ' + value);
		this.shadow.setText('Score: ' + value)
	}
});