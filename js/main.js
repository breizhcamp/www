(function(document, window, $) {
	document.addEventListener('DOMContentLoaded', function() {
		var pathname = window.location.pathname;
		$('.nav > li > a[href="' + pathname + '"]').parent().addClass('active');
	});
})(document, window, $);