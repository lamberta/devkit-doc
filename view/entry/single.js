"use import";

import timestep.View;
import timestep.ImageView;

import timestep.KeyListener;

var LEFT = 37;
var RIGHT = 39;

var app = new GCApp();

/****************************************************************************
 * Views are the basic building block of timestep applications.  They can be
 * arranged in a view hiearchy via parent/child relationships
 *
 ****************************************************************************/
 
//GCApp.getView() returns the base view of the application
var mainView = app.getView();
var keyListener = new timestep.KeyListener2();
 
 //Creating a new view:
 
 //views have a style property:
 //style.x and style.y are the coordinates of the view's top left corner.
 //style.width and style.height are the view's dimensions
 
 //get the center points so we can put the view there.
 var midX = mainView.style.width/2;
 var midY = mainView.style.height/2
 
 //To make it a child of the main view, specify its parent in the constructor
 //an imageView is just an view that displays an image.  
 var robotView = new timestep.ImageView({
 	x:midX,
 	y:midY,
 	width:128,
 	height:128,
 	parent:mainView,
 	image:'images/robot.png'
 });
 
//redView is a child of the robot view
var redView = new timestep.View({
	x:20,
	y:-20,
	width:40,
	height:40,
	parent:robotView,
});

//all views also have a render function which is called every tick. ctx is a
//reference to the canvas context.  
redView.render = function(ctx) {
	//draw a red rectangle that fills the entire view.
	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.fillRect(0, 0, 40, 40);
}

//Since redView is a child of robotView, it will move whenever robotView does.
//However, robotView will not move just because redView is moving.
//Try it out by pressing right and left.
mainView.tick = function(dt) {
	var events = keyListener.popEvents();
	for (var i = 0; i < events.length; i++) {
		var event = events[i];
		if (event.code == LEFT) {
			robotView.style.x += 10;
		} else if (event.code == RIGHT) {
			redView.style.x +=10;
		}
	}
}
