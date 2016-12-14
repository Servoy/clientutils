angular.module('clientUtils',['servoy'])
.factory("clientUtils",function($services) 
{
	var scope = $services.getServiceScope('clientUtils');
	function getElementById(elementId) {
		return $('#' + elementId);
	}
	return {
		
		fadeIn: function(elementId, options) {
			var element = getElementById(elementId);
			if (element) {
				element.fadeIn(options);
			}
		}, 
		fadeOut: function(elementId, options) {
			var element = getElementById(elementId);
			if (element) {
				element.fadeOut(options);
			}
		}, 
		show: function(elementId, options) {
			var element = getElementById(elementId);
			if (element) {
				element.show(options);
			}
		}, 
		hide: function(elementId, options) {
			var element = getElementById(elementId);
			if (element) {
				element.hide(options);
			}
		}
	}
})
.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('clientUtils')
	scope.$watch('model', function(newvalue,oldvalue) {
	// handle state changes
		console.log(newvalue)
}, true);
})