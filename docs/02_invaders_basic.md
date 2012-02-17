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



[1]: https://github.com/gameclosure/kickstart/tree/master/invaders_basic
[2]: https://github.com/gameclosure/kickstart/tree/master/invaders_basic/media/images
[3]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy1.png
[4]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy2.png
[5]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/enemy3.png
[6]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/player.png
[7]: https://github.com/gameclosure/kickstart/raw/master/invaders_basic/media/images/player_bullet.png
[8]: https://github.com/gameclosure/kickstart/blob/master/invaders_basic/shared/view/BulletView.js
