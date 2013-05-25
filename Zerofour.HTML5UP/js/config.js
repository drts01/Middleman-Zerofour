/*
	ZeroFour 2.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window._5grid_config = {
	prefix: 'css/style',
	preset: 'legacy',
	breakpoints: {
		'desktop': {
			grid: {
				gutters: 4
			}
		}
	}
};

window._5grid_ui_config = {
	preset: 'legacy'
};

jQuery(function() {
	$('#nav > ul').dropotron({ 
		offsetY: -22,
		mode: 'fade',
		noOpenerFade: true,
		speed: 300,
		detach: false
	});
});