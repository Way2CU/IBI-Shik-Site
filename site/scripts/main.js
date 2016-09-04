/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2015. by Way2CU, http://way2cu.com
 * Authors:
 */

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {
	if (Site.is_mobile()) 
		Site.mobile_menu = new Caracal.MobileMenu();

	// create lightbox for gallery images
	if (!Site.is_mobile()) {
		Site.lightbox = new LightBox('a.image', false, false, true);

		// create dialog for form
		Site.dialog = new Dialog();
		Site.dialog
			.setTitle(language_handler.getText(null, 'title_form'))
			.addClass('custom')
			.setContentFromDOM('div.dialog_form');

		// function for showing contact form
		var action_links = document.querySelectorAll('a.action');
		for(var i = 0; i < action_links.length; i++) {
			action_links[i].addEventListener('click', function(event) {
				event.preventDefault();
				Site.dialog.show();
			})
		}
	} 
};


// connect document `load` event with handler function
$(Site.on_load);
