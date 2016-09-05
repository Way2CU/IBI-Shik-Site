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

Site.handle_information_link = function() {
	var self = this;
	this.nextSibling.classList.add('show');
}

Site.handle_close_information = function() {
	var self = this;
	this.parentNode.classList.remove('show');
}

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {
	if (Site.is_mobile()) 
		Site.mobile_menu = new Caracal.MobileMenu();

	// Events
	$('section#about form').on('analytics-event', function(event, data) {
			if (!data.error)
				dataLayer.push({'Category': 'השיק של השוק' ,'Action': 'רישום' ,'Label': 'טופס ראשי' ,'event':'auto_event'});
		});

	$('div.dialog_form form').on('analytics-event', function(event, data) {
			if (!data.error)
				dataLayer.push({'Category': 'השיק של השוק' ,'Action': 'רישום' ,'Label': 'טופס צף' ,'event':'auto_event'});
		});

	$('a.action').on('click', function() {
				var self = $(this);
				var position = self.attr("data-info");
				if(position == 'header') {
					dataLayer.push({'Category': 'השיק של השוק' ,'Action': 'רישום' ,'Label': 'קישור עליון' ,'event':'auto_event'});
				} else if (position == 'intro') {
					dataLayer.push({'Category': 'השיק של השוק' ,'Action': 'רישום' ,'Label': 'קישור אמצעי' ,'event':'auto_event'});
				} else {
					dataLayer.push({'Category': 'השיק של השוק' ,'Action': 'רישום' ,'Label': 'קישור תחתון' ,'event':'auto_event'});
				}
		});

	// create handler for information links
	var information_links = document.querySelectorAll('a.information');
	for(var i = 0; i <information_links.length; i++) {
		information_links[i].addEventListener('click', Site.handle_information_link);
	}

	// create handler for closing information box
	var button_close = document.querySelectorAll('a.close');
	for(var i = 0; i <button_close.length; i++) {
		button_close[i].addEventListener('click', Site.handle_close_information);
	}

	// create lightbox for gallery images
	if (!Site.is_mobile()) {
		Site.lightbox = new LightBox('section#gallery a.image', false, false, true);

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
