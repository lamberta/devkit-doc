/*
 * This demo shows how to use publish and subscribe.
 */
import device;
import ui.TextView as TextView;

var PublishView = Class(TextView, function(supr) {
	this.onInputSelect = function() {
		this._value = this._value || 0;
		this._value++;
		this.publish("Clicked", this._value);
	};
});

var SubscribeView1 = Class(TextView, function(supr) {
	this.onClick = function(someValue) {
		this.setText("Red was clicked, someValue: " + someValue);
	};
});

var SubscribeView2 = Class(TextView, function(supr) {
	this.onClick = function(text, someValue) {
		this.setText(text + someValue);
	};
});

exports = Class(GC.Application, function() {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function() {
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

		new PublishView({
			superview: this.view,
			text: "Click me",
			color: "#FFFFFF",
			backgroundColor: "#FF0000",
			width: device.width - 20,
			height: 50,
			x: 10,
			y: 10
		})
			// When "Clicked" is published then the setText method is
			// invoked with the parameter value "Red was clicked".
			// After publishing the event the subscriber is un-subscribed
			.on("Clicked", bind(this._subscribeView1, "setText", "Red was clicked"))

			// When "Clicked" is published then the onClick method is
			// invoked, this method will also use the parameter value 12 which
			// is passed from the publish call.
			// After publishing the event the subscriber is un-subscribed
			.on("Clicked", bind(this._subscribeView2, "onClick"))

			// When "Clicked" is published then the onClick method is
			// invoked, the onClick method will receive two parameters: the
			// string "Red was clicked, someValue: " and the number 12 which
			// is passed from the publish call.
			// After publishing the event the subscriber is un-subscribed
			.on("Clicked", bind(this._subscribeView3, "onClick", "Red was clicked, someValue: "));
	};

	this.launchUI = function () {};
});