var main = function() {
  
  var cities = [
  	"Zagreb",
    "Bath",
    "Belfast",
    "Bristol",
    "Edinburgh",
    "Manchester",
    "Madrid",
    "Paris",
    "London",
    "New York",
    "Tokio"
  ];
  
  cities.sort();
  
  $('#chooseYourCity').autocomplete({

  	source: cities });

};
 
$(document).ready(main);
