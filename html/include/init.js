$(function () {
	/* dynamically set the max-height of the sidebar, since doing this in css is a pain.
	 */
	var sidebar = $('#toc-well'),
			win = $(window),
			href_page = document.location.href.split('/').pop();

	//index file doesn't have to deal with this nonsense
	if (href_page !== 'index.html') {
		function set_sidebar_height () {
			if (win.width() < 979) {
				sidebar.css({
					'width': sidebar.parent().width(),
					'max-height': 'none'
				});
			} else {
				sidebar.css({
					'width': sidebar.parent().width(),
					'max-height': win.height() - sidebar.offset().top - 30
				});
			}
		}
		set_sidebar_height();
		win.resize(set_sidebar_height);
	}
	
	/* highlight section headers in sidebar
	 */
	$('nav li a').filter(function () {
		return this.innerText.match(/^Module:|^Class:|^Singleton:|^Events|^Styles/);
	}).addClass('toc-section-header');

	
	/* color highlight code snippets, from prettify.js
	 */
	$('pre').addClass('prettyprint');
	if (typeof window.prettyPrint === 'function') {
		window.prettyPrint();
	}

	
	/* mark navbar links as active if on the same page
	 */
	$('.navbar-inner a').each(function () {
		var a_page = this.href.split('/').pop();
		if (a_page === href_page) {
			$(this).parent('li').addClass('active');
		}
	});

	
	/* search for keywords in the navbar
	 */
	var navbar_search = $('.navbar-search input').attr({
		'data-provide': 'typeahead',
		'data-items': 8,
		'data-source': JSON.stringify(Object.keys(keyword_index))
	});
	navbar_search.change(function () {
		//base href should be determined by document.location.hef, not hard-coded
		var base_href = 'http://doc.gameclosure.com';
		var key = $(this).val(),
				url = keyword_index[key];
		if (url) {
			document.location.href = base_href.concat('/', url);
		}
		return false;
	});
	navbar_search.blur(function () {
		$(this).val('');
	});
	//ignore form submit
	$('.navbar-search').submit(function () { return false; });
});


/* Keywords for the search box and the urls they resolve to.
 */
var keyword_index = {
	"GC.Application": "api/appengine.html",
	"GC.app": "api/appengine.html#singleton-gc.app",
	"ui.Engine": "api/appengine.html#class-ui.engine",
	"GC.app.engine": "api/appengine.html#singleton-gc.app.engine",
	"events": "api/event.html",
	"event.Emitter": "api/event.html#class-event.emitter",
	"event.Callback": "api/event.html#class-event.callback",
	"event.input.InputEvent": "api/event.html#class-event.input.inputevent",
	"filters": "api/ui-filter.html",
	"ui.filter.Filter": "api/ui-filter.html#class-ui.filter.filter",
	"ui.filter.LinearAddFilter": "api/ui-filter.html#class-ui.filter.linearaddfilter",
	"ui.filter.TintFilter": "api/ui-filter.html#class-ui.filter.tintfilter",
	"ui.filter.MultiplyFilter": "api/ui-filter.html#class-ui.filter.multiplyfilter",
	"ui.filter.PositiveMaskFilter": "api/ui-filter.html#class-ui.filter.positivemaskfilter",
	"ui.filter.NegativeMaskFilter": "api/ui-filter.html#class-ui.filter.negativemaskfilter",
	"images": "api/ui-images.html",
	"ui.ImageView": "api/ui-images.html#class-ui.imageview",
	"ui.ImageScaleView": "api/ui-images.html#class-ui.imagescaleview",
	"ui.resource.Image": "api/ui-images.html#class-ui.resource.image",
	"ui.ScrollView": "api/ui-scrollview.html",
	"ui.SpriteView": "api/ui-spriteview.html",
	"ui.StackView": "api/ui-stackview.html",
	"text": "api/ui-text.html",
	"ui.TextInputView": "api/ui-text.html#class-ui.textinputview",
	"ui.TextPromptView": "api/ui-text.html#class-ui.textpromptview",
	"ui.TextView": "api/ui-text.html#class-ui.textview",
	"ui.resource.Font": "api/ui-text.html#class-ui.resource.font",
	"ui.View": "api/ui-view.html",
	"ui.widget.ButtonView": "api/ui-widget-buttonview.html",
	"ui.widget.ListView": "api/ui-widget-listview.html#class-ui.widget.listview",
	"ui.widget.CellView": "api/ui-widget-listview.html#class-ui.widget.cellview",
	"DataSource": "api/ui-widget-listview.html#class-gcdatasource",
	"ui.widget.Spinner": "api/ui-widget-spinner.html",
	"device": "api/device.html",
	"animate": "api/animate.html",
	"animate.Animator": "api/animate.html#class-animate.animator",
	"animate.Group": "api/animate.html#class-group",
	"Audio": "api/audio.html",
	"AudioManager": "api/audio.html#class-audiomanager",
	"Utilities": "api/utilities.html",
	"import": "api/utilities.html#import",
	"Class": "api/utilities.html#class-name-superconstructor-constructor",
	"bind": "api/utilities.html#bind-thisarg-callback-args",
	"merge": "api/utilities.html#merge-obj1-obj2-obj3",
	"GLOBAL": "api/utilities.html#global",
	"Color": "api/color.html",
	"Math": "api/math.html",
	"math.util": "api/math.html#module-math.util",
	"math.array": "api/math.html#module-math.array",
	"math.geom.Point": "api/math.html#class-math.geom.point"
};


/* google analytics
 */
var _gaq=[['_setAccount','UA-36886915-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
