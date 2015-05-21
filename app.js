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
			} else {
				return number + 'th'; // in case of 100th etc...
			}
			
		}
	}
});


// make filter to capitalize the first letter of a string, or a chosen letter in string
appFilters.filter('capitalize', function() {
	
	// create return function with parameter and optional parameter
	return function(input, char) {
		
		if (isNaN(input)) {
			
			var char = char - 1 || 0;
			var letter = input.charAt(char).toUpperCase();
			var out = [];
			
			for (var i = 0; i < input.length; i++) {
				
				if (i == char) {
					out.push(letter);
				} else {
					out.push(input[i]);
				}
			}
			
			return out.join('');
			
		} else {
			return input;
		}
		
	}
	
});
































