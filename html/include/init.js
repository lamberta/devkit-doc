$(function () {
	//section headers in toc nav bar
	$('nav li a').filter(function () {
		return this.innerText.match(/^Module:|^Class:|^Events|^Styles/);
	}).addClass('toc-section-header');

	//color highlight code snippets, from prettify.js
	$('pre').addClass('prettyprint');
	if (typeof window.prettyPrint === 'function') {
		window.prettyPrint();
	}

	//search for keywords in the navbar
	$('.navbar-search').submit(function () { return false; });
	
	var navbar_search = $('.navbar-search input').attr({
		'data-provide': 'typeahead',
		'data-items': 8,
		'data-source': JSON.stringify(Object.keys(searchmap))
	});
	navbar_search.change(function () {
		//base href should be determined by document.location.hef, not hard-coded
		var base_href = 'http://doc.gameclosure.com';
		var key = $(this).val(),
				url = searchmap[key];
		if (url) {
			document.location.href = base_href.concat('/', url);
		}
		return false;
	});
	navbar_search.blur(function () {
		$(this).val('');
	});
});

/* Keywords for the search box and the urls they resolve to.
 */
var searchmap = {
	'Application': 'api/appengine.html',
	'GC.app': 'api/appengine.html#singleton-gc.app',
	'Engine': 'api/appengine.html#class-ui.engine',
	'GC.app.engine': 'api/appengine.html#singleton-gc.app.engine',
	'Events': 'api/event.html',
	'Emitter': 'api/event.html#class-event.emitter',
	'Callback': 'api/event.html#class-event.callback',
	'InputEvent': 'api/event.html#class-event.input.inputevent',
	'Filters': 'api/ui-filter.html',
	'LinearAddFilter': 'api/ui-filter.html#class-ui.filter.linearaddfilter',
	'TintFilter': 'api/ui-filter.html#class-ui.filter.tintfilter',
	'MultiplyFilter': 'api/ui-filter.html#class-ui.filter.multiplyfilter',
	'PositiveMaskFilter': 'api/ui-filter.html#class-ui.filter.positivemaskfilter',
	'NegativeMaskFilter': 'api/ui-filter.html#class-ui.filter.negativemaskfilter',
	'Image': 'api/ui-imageview.html#class-ui.resource.image',
	'ImageView': 'api/ui-imageview.html#class-ui.imageview',
	'ImageScaleView': 'api/ui-imageview.html#class-ui.imagescaleview',
	'ScrollView': 'api/ui-scrollview.html',
	'SpriteView': 'api/ui-spriteview.html',
	'StackView': 'api/ui-stackview.html',
	'text': 'api/ui-text.html',
	'Font': 'api/ui-text.html#class-ui.resource.font',
	'TextInputView': 'api/ui-text.html#class-ui.textinputview',
	'TextPromptView': 'api/ui-text.html#class-ui.textpromptview',
	'TextView': 'api/ui-text.html#class-ui.textview',
	'View': 'api/ui-view.html',
	'ButtonView': 'api/ui-widget-buttonview.html',
	'CellView': 'api/ui-widget-listview.html#class-ui.widget.cellview',
	'DataSource': 'api/ui-widget-listview.html#class-gcdatasource',
	'ListView': 'api/ui-widget-listview.html#class-ui.widget.listview',
	'Spinner': 'api/ui-widget-spinner.html',
	'device': 'api/device.html',
	'animate': 'api/animate.html',
	'Animator': 'api/animate.html#class-animate.animator',
	'Animator Group': 'api/animate.html#class-group',
	'Audio': 'api/audio.html',
	'AudioManager': 'api/audio.html#class-audiomanager',
	'Utlities': 'api/utilities.html',
	'Color': 'api/color.html',
	'Math': 'api/math.html'
};


//google analytics
var _gaq=[['_setAccount','UA-36886915-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
