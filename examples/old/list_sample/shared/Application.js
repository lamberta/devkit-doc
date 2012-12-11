"use import";

import GC;
import timestep.device;
import timestep.ui.List;
import timestep.ui.Cell;
import timestep.TextView;

var ContactCell = Class(timestep.ui.Cell, function(supr) {
	this.init = function(opts) {
		supr(this, 'init', [opts || {}]);
		this.textview = new timestep.TextView({
			multiline: true,
			text: 'placeholder',
			parent: this,
			textAlign: 'left',
			verticalPadding: 5,
			x: 0, y: 0,
			width: timestep.device.width-30
		});
	};
	this.setData = function(data) {
		var content = "Name: " + data.name + "\n";
		for(var p in data.phones) {
			content += "Number: " + data.phones[p].number + "\n";
			if(data.phones[p].e164MD5) {
				content +=  "E164 Hash: " + data.phones[p].e164MD5
			} else {
				content += "Plain Hash: " + data.phones[p].digitsMD5;
			}
			content += "\n";
		}
		for(var e in data.emails) {
			content += "Email: " + data.emails[e] + "\n";
		}
		content = content.slice(0, -1);
		this.textview.setText(content);
		// HACK: TextView doesn't update its own height when you
		// set the text.
		var canvas = GC.app.getCanvas();
		var ctx = canvas.getContext('2d');
		this.textview._measureText(ctx);
		this.style.height = this.textview.style.height + 5;
		this.needsReflow();
	}
	this.getHeight = function () { return 140; };
});

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		noTimestep: false,
		showFPS: window.DEV_MODE,
		alwaysRepaint: true
	};

	this.initUI = function() {
		var list = new timestep.ui.List({
			parent: this.view,
			dataSource: GC.contacts.getDataSource(),
			width: timestep.device.width-20,
			height: timestep.device.height-20,
			x: 10, y: 10,
			scrollX: false,
			backgroundColor: 'white',
			sorter: function (data) { return data.name.toLowerCase(); },
			getCell: function () { return new ContactCell({parent: list}); },
		});
	};

	this.launchUI = function() {};
	this.launchSinglePlayerGame = function() {};
	this.launchMultiplayerGame = function() {};
});
