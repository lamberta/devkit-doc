"use import";

import timestep.ImageView as ImageView;
import math2D.Point as Point;
import timestep.animate as animate;

exports = Class(ImageView, function(supr) {
	
	this.init = function(opts) {
		// Always call the super class when overriding a method.
		// Here, we insert a default value for the image option.
		// This value can be overriden when creating a new RobotView
		// with `new RobotView({image: 'otherRobot.png'});`, but
		// the default value for image will be used if no image is present,
		// e.g. `new RobotView();`
		
		var opts = merge(opts, {
				image: 'resources/images/robot.png'
			});
		
		supr(this, 'init', [opts]);
	}
	
	this.buildView = function() {
		// buildView gets called right before the first render.  If any
		// initialization code depends on the view being in the render tree, 
		// e.g. resizing the view to some percentage of the parent view's 
		// dimensions, that code should run in buildView. 
		
		// Here, we use buildView to start an animation.  This animation will
		// move the robot to the specified (x, y) over 2 seconds and then call
		// the callback function.  Look at the source code for move and tick 
		// to see how the animation is controlled explictly -- every tick, the 
		// position of the robot is computed and then applied directly to the
		// robot view's style.
		
		var midX = this._superview.style.width / 2;
		var midY = this._superview.style.height / 2;
		this.move({x: midX + 100, y: midY + 100}, 2000, function() {
			
			// After the move finishes, this callback will run.  Here,
			// we approach animation in a much simpler method: rather
			// than override tick and do all the computations ourselves,
			// we simply call getAnimation to retrieve an animation
			// object that will handle the details automatically.
			// Note that we can easily chain animations and animate
			// any numeric property of the style object.
			this.getAnimation()
				.wait(500)
				.then({x: 0, y: 0}, 2000)
				.then({x: 50, y: 50})
				.wait(1000)
				.then({x: 100, y: 0, opacity: 0.2}, 1000, animate.linear)
				.then({x: 100, y: 100, opacity: 1, r: Math.PI / 2}, 1500, animate.easeOut);
		});
	}
	
	// There are two different ways to animate a view in timestep. We can use the View.tick function
	// if there is some calculation we want to make every tick. The View.getAnimation() method is more convenient
	// for pre-defined animations and offers a variety of built-in styles
	
	this.move = function(pt,duration, cb) {
		this.targetPt = pt;
		this.target = new Point(pt).subtract(this.style);
		this.distance = this.target.getMagnitude();
		this.duration = duration;
		this.cb = cb;
	};

	this.tick = function(dt) {
		if (this.target) {
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
	
});
