// filter template code

// To declare a filter we pass in two parameters to app.filter

// The first parameter is the name of the filter 
// second is a function that will return another function that does the actual work of the filter

app.filter('myFilter', function() {

  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input, optional1, optional2) {

    var output;

    // Do filter work here

    return output;

  }

});
