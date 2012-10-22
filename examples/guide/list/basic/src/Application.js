import device;
import GCDataSource;
import ui.TextView as TextView;
import ui.widget.List as List;
import ui.widget.Cell as Cell;

var scifiFilms = [
	{title: 'Blade Runner', year: 1982},
	{title: '2001: A Space Odyssey', year: 1968},
	{title: 'Alien', year: 1979},
	{title: 'The Terminator', year: 1984},
	{title: 'The Matrix', year: 1999},
	{title: 'Close Encounters of the Third Kind', year: 1977},
	{title: 'Inception', year: 2010},
	{title: 'WALL-E', year: 2008},
	{title: 'Metropolis', year: 1927},
	{title: 'Tron', year: 1982},
	{title: 'E.T.: The Extra-Terrestrial', year: 1982},
	{title: 'Back to the Future', year: 1985},
	{title: 'Tron', year: 1982},
	{title: 'Solaris', year: 1972},
	{title: 'Brazil', year: 1985},
	{title: 'Star Trek II: The Wrath of Khan', year: 1982},
	{title: 'Star Wars', year: 1977},
	{title: 'Planet of the Apes', year: 1968},
	{title: 'RoboCop', year: 1987},
	{title: 'Godzilla', year: 1954},
	{title: 'Mad Max', year: 1979}
];

// A Cell is a View, it can have child views, and accepts data from a List.
var FilmCell = Class(Cell, function (supr) {
	this.init = function (opts) {
		supr(this, 'init', arguments);

		this._data = null;
		this._textview = new TextView({superview: this});

		this.on('InputSelect', function () {
			// Attach this property to the data object,
			// it'll stick because objects are passed by reference, but be careful!
			this._data.color = '#f00';
			this._textview.updateOpts({color: this._data.color});
			console.log("Selected: " + this._data.title);
		});
	};

	// Called when a cell is put on screen.
	// We'll use it to update our TextView child.
	this.setData = function (data) {
		var filmListing = data.title + " (" + data.year + ")",
			textColor = (data.color || '#fff');

		this._textview.updateOpts({color: textColor});
		this._textview.setText(filmListing);
		this._data = data; // Store it for the input event handler
	};
});

exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		// Set up the datasource ...
		var filmData = new GCDataSource({
			key: 'title', // Entries require a key, which defaults to 'id'.
			sorter: function (data) { return data.year; } //Sort by oldest first
		});
		// And load our data ...
		filmData.add(scifiFilms);

		// Create the List, which inherits from ScrollView ...
		var filmList = new List({
			superview: this.view,
			x: 0,
			y: 0,
			width: device.width,
			height: device.height,
			dataSource: filmData, // attach our data
			scrollX: false,
			getCell: function () { return new FilmCell({superview: filmList, height: 50}); }
		});
	};

	this.launchUI = function () {};
});