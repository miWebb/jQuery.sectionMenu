/**
 * scroll_highlight.js
 */

(function($) {
	$(document).ready(function() {
		console.log("YOUNG PRODIGY");

		console.log("YO");

		//sets first element as active
		$('.section-menu > ul li:first-child a').addClass('active');

		//gives active class to a link in the navigation when scrolling over that section
		$(window).scroll(function() {
			var position = $(this).scrollTop();

			var section_menu_elements = $('.section-menu a');

			console.log(section_menu_elements);

			$(section_menu_elements).each(function() {
				var element_id = $(this).attr("href");

				console.log(element_id);
				var target = $(element_id).offset().top;
				var id = $(element_id).attr('id');

				console.log(target + " target");
				console.log(position + " pos");

				if (position >= target) {
					console.log(id);

					$('.section-menu a').removeClass('active');
					$('.section-menu a[href="#' + id + '"]').addClass('active');
				}
			});
		});
	});
})(jQuery);