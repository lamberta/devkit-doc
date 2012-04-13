"use import";

import turnbased.ServerAPI;

exports = Class(function () {

	this.init = function () {

		// Dummy model
		this._model = {
			pack: function () {},
			unpack: function () {}
		};

		this._api = new turnbased.ServerAPI({
			model: this._model
		});

	};

	this.start = function() {
		if (this._api) {
			this._api.start();
		}
	};

});
