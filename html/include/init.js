$(function () {
	//section headers in toc nav bar
	$('nav li a').filter(function () {
		return this.innerText.match(/^Module:|^Class:|^Events|^Styles/);
	}).addClass('toc-section-header');

	//color highlight code snippets
	$('pre').addClass('prettyprint');
	prettyPrint(); //from prettify.js
});

//google analytics
var _gaq=[['_setAccount','UA-36886915-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
