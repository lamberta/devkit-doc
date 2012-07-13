"use import";

import timestep.View as View;

exports = Class(View, function(supr) {
    this.init = function(opts) {
        supr(this, "init", arguments);

        //draw me a red rectangle!
        var redRect = new View({
            parent: this,
            opacity: 0.5,
            backgroundColor: "#FF0000",
            width: 100,
            height: 100,
			zIndex: 2
        });

        //draw me a green rectangle!
        var greenRect = new View({
            parent: this,
            opacity: 0.8,
            backgroundColor: "#00FF00",
            width: 100,
            height: 100,
            x: 80
        });
    }
});
