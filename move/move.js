var main = function() {
  
  var cities = [
  	"Zagreb",
    "Paris",
    "London",
    "New York",
    "Tokio"
  ];
  
  $('#chooseYourCity').autocomplete({

  	source: cities });

};
 
$(document).ready(main);