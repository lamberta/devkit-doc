"use import";

import GC;
import timestep.ui.Button;
import timestep.ui.TextInput;

import timestep.device;

var FontRenderer = timestep.device.get('FontRenderer');
FontRenderer.registerFont('orbitron', jsio("import resources.fonts.orbitron"));
FontRenderer.registerFont('fertigo', jsio("import resources.fonts.fertigo"));
FontRenderer.registerFont('bowlbyonesc', jsio("import resources.fonts.bowlbyonesc"));

var fonts = ['Helvetica', 'Arial', 'Trebuchet MS', 'orbitron', 'fertigo', 'bowlbyonesc'];
var fontIndex = 0;

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		keyListenerEnabled: false
	};

	this.initUI = function() {
		this.view.render = bind(this, 'render');

		new timestep.ui.Button({
			parent: this.view,
			x: 10,
			height: 25,
			text: 'left'
		}).subscribe('Select', this, 'setAlignment', 'left');
		
		new timestep.ui.TextInput({
			parent: this.view,
			value: text,
			x: 10,
			y: 30,
			width: this.view.style.width - 20,
			color: 'white',
		}).subscribe('ValueChanged', this, function(value) { text = value; });
		
		new timestep.ui.Button({
			parent: this.view,
			x: 120,
			height: 25,
			text: 'center'
		}).subscribe('Select', this, 'setAlignment', 'center');
		
		new timestep.ui.Button({
			parent: this.view,
			x: 230,
			height: 25,
			text: 'right'
		}).subscribe('Select', this, 'setAlignment', 'right');

		new timestep.ui.Button({
			parent: this.view,
			x: 340,
			height: 25,
			text: 'next'
		}).subscribe('Select', this, 'nextFont');

	}
	
	this.nextFont = function(font) { fontIndex = (++fontIndex % fonts.length); }
	this.setAlignment = function(alignment) { this._alignment = alignment; }
	this.setBaseline = function(baseline) { this._baseline = baseline; }
	
	var text = 'abcdefgABCDEFGhijklmnopHIJKLMNOPqrstuvQRSTUVwxyzWXYZ';
	
	this.render = function(ctx) {
		ctx.font = 'bold 14px Helvetica';
		ctx.textAlign = 'right';
		ctx.fillText(fonts[fontIndex], w, 20);
		
		var sizes = [10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48];
		var y = 60;
		var padding = 10;
		var x = padding;
		var w = this.view.style.width - 2 * padding;
		for (var i = 0, s; s = sizes[i]; ++i) {
			ctx.font = s + 'px ' + (fonts[fontIndex] || 'Helvetica');
			var dim = ctx.measureText(text);
			//var height = this.getHeight(ctx.font, text);
			//oy = height ? s - height : 0;
			
			ctx.textAlign = this._alignment || 'left';
			ctx.textBaseline = this._baseline || 'bottom';
			var tx = ctx.textAlign == 'center' ? w / 2 : ctx.textAlign == 'left' ? x : w;
			var ox = ctx.textAlign == 'center' ? dim.width / 2 : ctx.textAlign == 'left' ? 0 : dim.width;
			ctx.fillStyle = 'blue';
			ctx.fillRect(tx - ox, y, dim.width, s);
			ctx.fillStyle = 'white';
			
			ctx.fillText(text, tx, y + s);
			
			ctx.font = 'bold 9px Helvetica';
			ctx.textBaseline = 'top';
			ctx.fillText(s + 'px - ' + dim.width.toFixed(2), tx, y + s);
			
			y += s + padding;
		}
	}
	
	this.getHeight = function(font, text) {
		if (window.document && document.createElement) {
			try {
				var d = document.createElement('span');
				d.style.visibility = 'hidden';
				d.font = font;
				d.textContent = 'ABCDEFGHIJKLMNOP';
				document.body.appendChild(d);
				return d.offsetHeight;
			} finally {
				try {
					document.body.removeChild(d);
				} catch (e) {}
			}
		}
		
		return null;
	}
});
