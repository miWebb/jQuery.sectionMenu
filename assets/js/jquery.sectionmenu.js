/*!
* jQuery Section Menu v1.0.1
*
* Copyright 2014 miWebb
* Released under the MIT license
*/

(function($, window, undefined) {
	'use strict';

	$.fn.sectionMenu = function(options) {
		// Options
		options = $.extend({}, $.fn.sectionMenu.defaults, options);

		// Init
		return this.each(function() {
			sectionMenu(this, options);
		});
	};

	$.fn.sectionMenu.defaults = {
		// Options
		enableTitle: true,

		// Element
		element: 'div',
		class: 'section-menu',

		// Insert
		insertBefore: '',
		insertAfter: ''
	};

	function sectionMenu(element, options) {
		// Variables
		var sections = $(element).find('[data-' + options.class + ']');
		var menu = $('<ul>');
		var item;

		// Build menu
		sections.each(function() {
			// Set title
			item = options.enableTitle ? $('<span>').text( $(this).data(options.class) ) : '';

			// Set href
			item = $('<a>').attr('href', '#' + $(this).attr('id') ).append(item);

			// Add item
			menu.append( $('<li>').append(item) );
		});

		// Apend menu to element
		$(element).append( $('<' + options.element + '>').addClass(options.class).append(options.insertBefore).append(menu).append(options.insertAfter) );
	}
})(jQuery, window);
