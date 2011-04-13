"use import";

import timestep.ImageView;
import math2D.Point as Point;


var app = new GCApp();
var mainView = app.getView();
 
//Creating a new view:

//views have a style property:
//style.x and style.y are the coordinates of the view's top left corner.
//style.width and style.height are the view's dimensions

//get the center points so we can put the view there.
var midX = mainView.style.width/2;
var midY = mainView.style.height/2;
 
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

// There are two different ways to animate a view in timestep. We can use the View.tick function
// if there is some calculation we want to make every tick. The View.getAnimation() method is more convenient
// for pre-defined animations and offers a variety of built-in styles

//Tick method
 
robotView.move = function(pt,duration, cb) {
	this.targetPt = pt;
	this.target = new Point(pt).subtract(this.style);
	this.distance = this.target.getMagnitude();
	this.duration = duration;
	this.cb = cb;
};

robotView.tick = function(dt) {
	if (this.target){
		var distanceToGo = new Point(this.style)
			.subtract(this.targetPt)
			.getMagnitude();

		if (distanceToGo < (dt / this.duration) * this.distance) { 
			this.style.x = this.targetPt.x;
			this.style.y = this.targetPt.y;
			this.target = null;
			this.cb();
		} else {
			this.style.x += this.target.x * (dt / this.duration);
			this.style.y += this.target.y * (dt / this.duration);
		}
	}
};

var altAnimate = function() {
	// animate from current position to 0,0 in 3000 milliseconds
	this.getAnimation().now({x:0, y:0}, 3000);
}

robotView.move({x: midX + 100, y: midY + 100}, 2000, altAnimate);





