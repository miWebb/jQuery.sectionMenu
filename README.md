jQuery.sectionMenu
====================

The jQuery section menu plugin creates a side menu that allows you to scroll to the different sections on the page. Check the [demo](https://miwebb.github.io/jQuery.sectionMenu/) for more information.

## Example

### HTML

<pre>&lt;html>
	&lt;body>
		&lt;section id="home" data-section-menu="Home">
			&lt;p>Home&lt;/p>
		&lt;/section>
		&lt;section id="about" data-section-menu="About">
			&lt;p>About&lt;/p>
		&lt;/section>
		&lt;section id="contact" data-section-menu="Contact">
			&lt;p>Contact&lt;/p>
		&lt;/section>
	&lt;/body>
&lt;/html></pre>

### CSS
<pre>&lt;link rel="stylesheet" href="assets/css/jquery.sectionmenu.css" /></pre>

### Javascript

<pre>&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">&lt;/script>
&lt;script type="text/javascript" src="assets/js/jquery.fragmentscroll.min.js">&lt;/script>
&lt;script type="text/javascript" src="assets/js/jquery.sectionmenu.min.js">&lt;/script>
&lt;script type="text/javascript">
$(window).load(function() {
	$('body').sectionMenu().fragmentScroll();
});
&lt;/script></pre>

## Options

<pre>$('body').sectionMenu({
	// Show title in the menu
	enableTitle: true,

	// Outer element
	element: 'nav',

	// Class and data- name
	class: 'section-menu',

	// Insert content before the menu
	insertBefore: '',

	// Insert content after the menu
	insertAfter: ''
});</pre>
