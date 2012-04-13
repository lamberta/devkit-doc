# Lesson 2: Creating a basic game

In this lesson, we'll be creating a basic "Space Invaders" style game with the following requirements:

* Draw player, bullet and enemy graphics to the screen
* Spawning and animating enemies
* Animate the player based on user input
* Fire bullets and check collision with enemies
* Scoring

The [source code for this lesson][1] can be found on GitHub.

Start off by creating a new project using `tealeaf startproject` like we did in the previous lesson:

	tealeaf startproject invaders_basic -t empty

## Drawing Images

In the previous lesson, we saw how using a `timestep.TextView` made rendering a string of text very easy. There's a similar object, `timestep.ImageView`, which makes drawing static images just as easy. Additionally, we're going to introduce the concept of subclassing `timestep.*` objects to create our own game objects.

Before we get started let's create a folder for our game images: `media/images`. Grab the following [images from our example code][2] or create your own:

* [media/images/enemy1.png][3]
* [media/images/enemy2.png][4]
* [media/images/enemy3.png][5]
* [media/images/player.png][6]
* [media/images/player_bullet.png][7]

Typically, we organize our classes into a model/view/controller style folder structure. For now, we'll just be creating `timestep.View` based classes so go ahead and create a folder under `shared` named `view`.

Next, create a new JavaScript file in this folder. Let's call it `shared/view/PlayerView.js`.

The syntax for creating a new class inheriting another is fairly straightforward:

	"use import";
	// The line above tells the GCSDK that we want to use the "import" keyword
	// import is used for specifying dependencies across files
	
	// Now we'll import the class we'd like to extend, in this case ImageView
	import timeste.ImageView;
	
	// Here's the actual syntax for creating a new class constructor
	// exporting it as a module that can be included via "import"
	// "Class" is a built-in function of the GCSDK
	// The first arugment is the class constructor you which to extend
	// and the second is a function which will define your subclass
	exports = Class(timestep.ImageView, function (supr) {

		this.init = function (opts) {

			// Let's provide some defaults for our "Player"
			// merge is another built-in GCSDK function which
			// combines two objects
			opts = merge(opts, {
				image: "media/images/player.png", // The image to draw
				width: 64, // image width
				height: 64, // image height
				zIndex: 200 // Draw ordering for sibling Views
			});

			// Here we call the superclass' "init" function
			// with our modified options
			supr(this, "init", [opts]);

		};

	});

Great! Now we've got a `PlayerView` class we can instantiate and use within our game. First, we must specify in our `shared.Application.js` file that we'll be using our `PlayerView` module. Add the following statement somewhere near the top of this file:

	import .view.PlayerView as PlayerView;

A couple things you should notice are that:

* `import` statements can parse relative paths. In this case we're using .view which resolves to shared.view because Application.js resides in "shared".
* We can alias imported modules by specifying an "as" clause.

Now, let's add the following code to our `shared/Application.js` file within the `initUI` function to setup our player object:

	// Setup the player
	this._player = new PlayerView({
		parent: this.view,
		x: this.view.style.width / 2 - 32,
		y: this.view.style.height - 64,
	});

Take a look at the `x` and `y` parameters for our new object. We're centering the player along the x axis and aligning it with the bottom of the screen along the y axis.

Run the game. You should see our basic spaceship drawn to the bottom, center of the screen!

We'll also need some subclasses of `ImageView` to represent our enemies and bullets fired by the player.

Try creating a `BulletView` class by yourself. If you need help, take a look at our [example implementation][8]. The bullet images resides in "media/images/player_bullet.png" and is 8x8 pixels in size.

We're going to do something _slightly_ different with our `InvaderView`, however. Since we've got three different enemy graphics, we'll randomize the image used each time an `InvaderView` is created.

First, create an `InvaderView` file, similar to `PlayerView` and `BulletView`.

The first difference is that we're going to add an array of enemy images to choose from. We'll specify this above the class constructor so that all instances of this class pull from this "static" variable:

	var invaderImages = [
		"media/images/enemy1.png",
		"media/images/enemy2.png",
		"media/images/enemy3.png"
	];

Since this variable is defined within the scope of our class constructor, the instances will have access to it. Next, import the `math.util` module so we can use it's randomization function:

	import math.util;

Lastly, in the `init` function of our `InvaderView` randomly choose an image for the current instance:

	// Choose a random invader image
	var imageIndex = math.util.random(0, invaderImages.length);

	opts = merge(opts, {
		image: invaderImages[imageIndex],
		width: 64,
		height: 64
	});

Since we'll have many instances of `InvaderView` and `BulletView` on the screen at the same time, we'll go over instantiating those objects in the next sections.

## Spawning and animating enemies

To keep things simple, we'll be spawning new enemies at the top of the screen every 800 milliseconds. After spawning an enemy we'll animate it to the bottom of the screen at a randomized speed.

The very first thing we need is a timer which will track when enemies need to be spawned. Additionally, we'll keep track of this timer by hooking into our root view's `tick` function. The `tick` function fires on each frame with the amount of time passed since last frame as the first parameter.

We prefer to keep things clean by calling a "private" method (prefixed with an underscore) `_update`. We'll also want to define a variable to keep track of our spawn timer. Add the following code to your `initUI` function in `shared/Application.js`:

	// Number of milliseconds since last spawn
	this._invaderSpawnTimer = 0;
	
	// Hook into the root view's "tick"
	this.view.tick = bind(this, "_update");

The `bind` function is another built-in GCSDK function which executes a given function within the specified context. In this case we want the function attached to `this.view.tick` executes within the context of `this` (which is your Application class).

We'll also need to create an `_update` function to be called each tick. Inside our update we'll perform the following:

* Increment our spawn timer with time passed since last frame
* If our timer is greater than our spawn interval, spawn an enemy and reset the timer

Add the following method to `shared/Application.js`:

	this._update = function (dt) {

		// dt is the amount of milliseconds which have passed since last frame

		// Increment our spawn timer
		this._invaderSpawnTimer += dt;

		// Check to see if enough time has passed
		if (this._invaderSpawnTimer >= 800) {

			// Spawn an invader!
			this._spawnInvader();

			// Reset our timer
			this._invaderSpawnTimer = 0;

		}

	};

Pretty straight forward. You'll notice that we also need to define a `_spawnInvader` function. Let's do that now:

	this._spawnInvader = function () {

		// Spawn the invaders at random locations along the X axis
		var spawnX = math.util.random(0, this.view.style.width - 64);

		// Create a new InvaderView
		var invader = new InvaderView({
			parent: this.view,
			x: spawnX,
			y: -64,
			zIndex: 100
		});

		// Vary the speed at which the invaders fall
		var delay = math.util.randomInclusive(3000, 5000);

		// Animate the invader!
		var anim = animate(invader);

		// Move towards the bottom of the screen using the random delay
		anim.now({
			y: this.view.style.height
		}, delay, animate.linear);

		// Remove the invader once it's off the screen
		anim.then(bind(this, function () {
			invader.removeFromSuperview();
			delete invader;
		}));

	};

Don't forget to `import math.util;` in order to be able to use the `math.util.random*` functions. You'll also notice that after spawning each invader we animate it to the bottom of the screen over an amount of time between 3 and 5 seconds. Once the animation has completed, we remove the invader from our view hierarchy.

Check out your game, at this point you should have the following:

* Player image drawn to the bottom, center of the screen
* Enemies spawning every 800ms from the top of the screen at random x coordinates and animating down to the bottom

# Capturing user input and animating the player

While drawing images to the screen is great, we really need some user input to make this more of an actual game.

Our goal for this section is to capture and respond to user events and move the `PlayerView` accordingly.

First, let's begin by giving `PlayerView` a `move` method which takes a point on the screen as a parameter. We're only concerning ourselves with the x axis of the player as we won't allow the user to move the player along the y axis for this game.

	this.move = function (pt) {

		var anim = this.animate();

		// Manually complete any current animations
		// so that the player starts moving to the new
		// location right away
		anim.finishNow();

		// Ensure player view doesn't leave the viewable screen
		var halfWidth = (this.style.width / 2);
		pt.x = math.util.clip(pt.x, halfWidth, this.getSuperview().style.width - halfWidth);

		// Animate to the new point
		var pixelsPerSecond = 300;
		var playerCenterX = this.style.x + halfWidth;
		var distance = Math.abs(playerCenterX - pt.x);
		var duration = (distance / pixelsPerSecond) * 1000;
		anim.now({
			x: pt.x - halfWidth
		}, duration, animate.linear);

	};

Again, don't forget to `import math.util;` in `PlayerView` to support the use of `math.util.random`!

Next, we'll capture input on the entire screen so that the user can touch or click anywhere. Add the following code to `shared/Application.js`.

In the `init` function, override the `onInputStart` and `onInputMove` functions of your root view, `this.view`. These functions are called when the user first touches the screen and whenever the user's touch moves.

	// Respond to user input
	this.view.subscribe("InputStart", this, "_onInputStart");
	this.view.subscribe("InputMove", this, "_onInputMove");

Of course we'll need to create the `_onInputStart` and `_onInputMove` functions as well:

	this._onInputStart = function (e, pt) {
		this._player.move(pt);
	};

	this._onInputMove = function (e, pt) {
		this._player.move(pt);
	};

With any luck you should be able to launch your game and move your player around! Next up, we'll code up support for firing bullets and checking collision with enemies!



[1]: https://github.com/gameclosure/kickstart/tree/master/invaders_basic
[2]: https://github.com/gameclosure/kickstart/tree/master/invaders_basic/media/images
[3]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy1.png
[4]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy2.png
[5]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy3.png
[6]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/player.png
[7]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/player_bullet.png
[8]: https://github.com/gameclosure/kickstart/blob/master/invaders_basic/shared/view/BulletView.js
