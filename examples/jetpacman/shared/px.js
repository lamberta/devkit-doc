"use import";

import GC;
import timestep.device as device;

exports = function px(v) {
	var p = device.width/320
	p = Math.pow(2, Math.floor(Math.log(p)/Math.log(2)));
	return v*p;
}