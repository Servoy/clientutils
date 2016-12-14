angular.module('clientUtils',['servoy'])
.factory("clientUtils",function($services) 
{
	var scope = $services.getServiceScope('clientUtils');
	function getElements(jQuerySelector) {
		try {
			if (scope.model.onlySelectById & jQuerySelector.substr(0,1) != '#') {
				jQuerySelector = '#' + jQuerySelector;
			}
			return $(jQuerySelector);
		} catch(e) {
			console.error('plugins.clientUtils error when selecting jqElementss with jQuerySelector "' + jQuerySelector + '": ' + e.message);
			console.log('Maybe set plugins.clientUtils.onlySelectById to false?');
		}
	}
	return {
		/**
		 * Adds the specified class(es) to each element in the set of matched elements
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {String} className One or more space-separated classes to be added to the class attribute of each matched element
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 */
		addClass: function(jQuerySelector, className) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				jqElements.addClass(className);
			}
		},
		/**
		 * Set one or more CSS properties for the set of matched elements
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {String|Object} propertyNameOrObject A CSS property name or an object of property-value pairs to set (e.g. <code>{backgroundColor: "#ffe", borderLeft: "5px solid #ccc" }</code>)
		 * @param {String|Number} [value] A value to set for the property
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 */
		setCss: function(jQuerySelector, propertyNameOrObject, value) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (typeof propertyNameOrObject === 'string' && value) {
					jqElements.css(propertyNameOrObject, value);
				} else if (typeof propertyNameOrObject === 'object') {
					jqElements.css(propertyNameOrObject, value);
				} else {
					console.log('plugins.clientUtils wrong parameters provided for setCss');
				}
			}
		},
		/**
		 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 */
		removeClass: function(jQuerySelector, className) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (className) {
					jqElements.removeClass(className);
				} else {
					jqElements.removeClass();
				}
			}
		},
		/**
		 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {String} className One or more space-separated classes to be removed from the class attribute of each matched element.
		 * @param {Boolean} state A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 */
		toggleClass: function(jQuerySelector, className, state) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (state === true || state === false) {
					jqElements.toggleClass(className, state);
				} else {
					jqElements.toggleClass(className);
				}
			}
		},		
		/**
		 * Display the matched elements by fading them to opaque.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} durationOrOptions A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/fadeIn/#fadeIn-options for options
		 */
		fadeIn: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				jqElements.fadeIn(durationOrOptions);
			}
		}, 
		/**
		 * Hide the matched elements by fading them to transparent.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} durationOrOptions A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/fadeOut/#fadeOut-options for options
		 */
		fadeOut: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				jqElements.fadeOut(durationOrOptions);
			}
		},
		/**
		 * Display or hide the matched elements by animating their opacity.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} durationOrOptions A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/fadeToggle/#fadeToggle-options for options
		 */
		fadeToggle: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				jqElements.fadeToggle(durationOrOptions);
			}
		},
		/**
		 * Display the matched elements.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} [durationOrOptions] A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/show/#show-options for options
		 */
		show: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (durationOrOptions) {
					jqElements.show(durationOrOptions);
				} else {
					jqElements.show();
				}
			}
		}, 
		/**
		 * Hide the matched elements.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} [durationOrOptions] A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/hide/#hide-options for options
		 */
		hide: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (durationOrOptions) {
					jqElements.hide(durationOrOptions);
				} else {
					jqElements.hide();
				}
			}
		}, 
		/**
		 * Hide the matched elements.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} [durationOrOptions] A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/toggle/#toggle-options for options
		 */
		toggle: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (durationOrOptions) {
					jqElements.toggle(durationOrOptions);
				} else {
					jqElements.toggle();
				}
			}
		}, 
		/**
		 * Display the matched elements with a sliding motion.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} [durationOrOptions] A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/slideDown/#slideDown-options for options
		 */
		slideDown: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (durationOrOptions) {
					jqElements.slideDown(durationOrOptions);
				} else {
					jqElements.slideDown();
				}
			}
		}, 
		/**
		 * Hide the matched elements with a sliding motion.
		 * 
		 * @param {String} jQuerySelector The ID of the elements queried or any JQuery selector when <code>plugins.clientUtils.onlySelectById</code> is set to <code>false</code>
		 * @param {Number|String|Object} [durationOrOptions] A string or number determining how long the animation will run or a map of additional options to pass to the method.
		 * 
		 * @see https://api.jquery.com/category/selectors/ for jQuery selectors
		 * @see https://api.jquery.com/slideUp/#slideUp-options for options
		 */
		slideUp: function(jQuerySelector, durationOrOptions) {
			var jqElements = getElements(jQuerySelector);
			if (jqElements) {
				if (durationOrOptions) {
					jqElements.slideUp(durationOrOptions);
				} else {
					jqElements.slideUp();
				}
			}
		}
	}
})
.run(function($rootScope,$services)
{
})