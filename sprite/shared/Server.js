"use import";

import turnbased.ServerAPI;
import turnbased.Model;

exports = Class(function() {
	this.init = function() {
		this._api = new turnbased.ServerAPI({model: new turnbased.Model() });
	}

	this.start = function() {
		 this._api.start();
	}

});
