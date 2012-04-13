jsio('import shared.clouds.AnimatedCloudView as AnimatedCloudView');

// Blue Sky
var app = new GCApp();
var mainView = app.getView();



// Animated Clouds!
var cloudView = new AnimatedCloudView({
	parent: mainView,
	
	// Between 0 and 1; Generally something between 0.3 and 0.8 looks good.
	cloudiness: 0.7,
	
	// Between 0 and 1;
	cloudSize: 0.2,
	
	
	// Determines how much upscaling is going on. Detail vs. performance is not linear.
	// You can get away with surprisingly low detail if you avoid smaller cloud sizes.
	cloudDetail: 0.1,
	
	// "classical" or "simplex". I think classical is best.
	noiseGenerator: 'classical',
	
	// This sort of determines how white the clouds are when they are at their thickest.
	// In general I'd say you should leave this at 1.0 and play with the other values.
	opacity: 1.0
});

var count = 0;
mainView.tick = function(dt) {
	count += dt;
	cloudView.setXOffset(count/1000);
	cloudView.setYOffset(-count/1000);
	cloudView.setTickOffset(count);
}


mainView.render = function(ctx) {
	ctx.fillStyle = 'rgba(150,150,255,1.0)';
	ctx.fillRect(0,0,this.style.width, this.style.height);
	
}

// A Level
jsio('import timestep.ImageView');
var levelImage = new timestep.ImageView({
		image:'/shared/images/level1.png',
		parent: mainView
});


/*mainView.render = function(ctx) {
	ctx.fillStyle = 'rgb(255,255,0)';
	ctx.fillRect(0,0,this.style.width, this.style.height);
	ctx.fillStyle = 'rgb(0,255,0)';
	ctx.fillRect(25,25,this.style.width-50, this.style.height-50);
}
*/

app._opts.dtFixed = 20;
