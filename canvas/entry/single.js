
TeaLeaf.ui.createApp();

var mainView = TeaLeaf.ui.getView();

// You can get raw access to the canvas of a view
// by overriding its render function
mainView.render = function(ctx) {
	ctx.fillStyle = 'rgb(255,255,255)';
	ctx.font = '32pt Arial';
	ctx.textAlign = 'center';
	ctx.fillText('Hello, Canvas World!', this.style.width/2, this.style.height/2 - 200);

	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.fillRect(this.style.width/2-20, this.style.height/2-20, 40, 40);

}
