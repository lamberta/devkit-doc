//# Subscribe to Events

//Import device module and TextView class.
import device;
import ui.TextView as TextView;

//## Class: Application
exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		
		this._subscribeView1 = new TextView({
			superview: this.view,
			text: "Waiting for click",
			color: "#000000",
			backgroundColor: "#00FF00",
			width: device.width - 20,
			height: 50,
			x: 10,
			y: 70
		});
		
		this._subscribeView2 = new SubscribeView1({
			superview: this.view,
			text: "Waiting for click",
			color: "#000000",
			backgroundColor: "#FFDD00",
			width: device.width - 20,
			height: 50,
			x: 10,
			y: 130
		});
		
		this._subscribeView3 = new SubscribeView2({
			superview: this.view,
			text: "Waiting for click",
			color: "#000000",
			backgroundColor: "#00DDFF",
			width: device.width - 20,
			height: 50,
			x: 10,
			y: 190
		});

		var emitterview = new EmitterView({
			superview: this.view,
			text: "Click me",
			color: "#FFFFFF",
			backgroundColor: "#FF0000",
			width: device.width - 20,
			height: 50,
			x: 10,
			y: 10
		});
		
		// When "Clicked" is published then the setText method is
		// invoked with the parameter value "Red was clicked".
		emitterview.on('Clicked', bind(this, function (val) {
			this._subscribeView1.setText("Red was clicked");
		}));

		// When "Clicked" is published then the onClick method is
		// invoked, this method will also use the parameter value 12 which
		// is passed from the publish call.
		emitterview.on('Clicked', bind(this, function (val) {
			this._subscribeView2.onClick(val);
		}));

		// When "Clicked" is published then the onClick method is
		// invoked, the onClick method will receive two parameters: the
		// string "Red was clicked, someValue: " and the number 12 which
		// is passed from the publish call.
		emitterview.on('Clicked', bind(this, function (val) {
			this._subscribeView3.onClick("Red was clicked, someValue: ", val);
		}));
	};

	this.launchUI = function () {};
});

//## Class: PublishView
//Create a view which publishes an event and a value, each time the view is clicked the value will be increased.
var EmitterView = Class(TextView, function (supr) {
	this.init = function (opts) {
		supr(this, 'init', [opts]);
		//Keep track of clicks
		this._value = 0;
		//Add an event listener
		this.on('InputSelect', function () {
			this._value += 1;
			this.emit('Clicked', this._value);
		});
	};
});

//## Class: SubscribeView1
//Create a view with a function which can be called when the view is clicked, the takes one parameter.
var SubscribeView1 = Class(TextView, function (supr) {
	this.onClick = function (someValue) {
		this.setText("Red was clicked, someValue: " + someValue);
	};
});

//## Class: SubscribeView2
//Create a view with a function which can be called when the view is clicked, the takes two parameters.
var SubscribeView2 = Class(TextView, function (supr) {
	this.onClick = function (text, someValue) {
		this.setText(text + someValue);
	};
});


//The output should look like this screenshot:
//<img src="./img/screenshot1.png" alt="a book screenshot" class="screenshot">
//After clicking the red button once the output should look like this:
//<img src="./img/screenshot2.png" alt="a book screenshot" class="screenshot">
//After clicking the red button twice the output should look like this:
//<img src="./img/screenshot3.png" alt="a book screenshot" class="screenshot">
