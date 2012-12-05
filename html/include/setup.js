$(window).load(function () {
	console.log('HERERE');
	$('#TOC ul').addClass('nav nav-list');
});

window.onload = function () {
	$('#TOC').load(function () {
	console.log('HERERE--------------');
	$(this).find('ul').addClass('nav nav-list');
});
	//prettify.js
	Array.prototype.slice.call(document.getElementsByTagName('pre')).forEach(function (elem) {
    elem.setAttribute('class', 'prettyprint');
	});
	prettyPrint();
};

var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
