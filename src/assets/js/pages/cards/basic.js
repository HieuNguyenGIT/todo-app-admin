'use strict';
$(function () {
	initLoading();
});
function initLoading() {
	$('[data-toggle="cardloading"]').on('click', function () {
		var effect = $(this).data('loadingEffect');
		var $loading = $(this)
			.parents('.card')
			.waitMe({
				effect: effect,
				text: 'Loading...',
				bg: 'rgba(255,255,255,0.90)',
				color: '#555',
			});
		setTimeout(function () {
			$loading.waitMe('hide');
		}, 3200);
	});
}
