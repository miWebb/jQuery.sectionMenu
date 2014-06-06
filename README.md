jQuery.sectionScroll
====================

The jQuery section scroll widget creates a side menu that allows you to scroll to the different sections on the page. Check the [demo](https://miwebb.github.io/jQuery.sectionScroll/) for more information.

## Example

### HTML

<pre>&lt;html>
	&lt;body>
		&lt;section id="home" data-title="Home">
			&lt;p>Home&lt;/p>
		&lt;/section>
		&lt;section id="about" data-title="About">
			&lt;p>About&lt;/p>
		&lt;/section>
		&lt;section id="contact" data-title="Contact">
			&lt;p>Contact&lt;/p>
		&lt;/section>
	&lt;/body>
&lt;/html></pre>

### CSS
<pre>&lt;link rel="stylesheet" href="assets/css/jquery.sectionscroll.css" /></pre>

### Javascript

<pre>$(window).load(function() {
	$('body').sectionScroll();
});</pre>

## Options

<pre>$('body').sectionScroll({
	// Show fragment in URL.
	showFragment: false,

	// The frame that will scroll if the content overflows the elements box. (body for webkit browsers)
	frame: 'html, body',

	// The offset from the top of the element.
	offset: 0,

	// The animation time in microseconds.
	speed: 1000,

	// Animation effect. (http://www.easings.net)
	easing: 'swing'

	// Call function on start.
	onStart: function() {},

	// Call function on complete.
	onComplete: function() {}
});</pre>
