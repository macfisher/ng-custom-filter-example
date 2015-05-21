// app.js

var appFilters = angular.module('appFilters', []);

// make filter to take number and append 'st' 'nd' 'rd' ie 1st 2nd 3rd...
appFilters.filter('ordinal', function() {
	
	// return function
	// set required parameter to "number"
	return function(number) {
		
		// ensure the passed in data is a number
		if(isNaN(number) || number < 1) {
			return number;
			
		} else {
			
			// perform actions to check for proper ordinal suffix and apply
			var lastDigit = number % 10;
			
			if (lastDigit === 1) {
				return number + 'st';
			} else if (lastDigit === 2) {
				return number + 'nd';
			} else if (lastDigit === 3) {
				return number + 'rd';
			} else if (lastDigit > 3) {
				return number + 'th';
			}
			
		}
	}
});
