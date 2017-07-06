var main = function() {
  
  $('img').click(function(){
    $('.dropdown-menu').toggle();
  });
	
  $('form').submit(function(){
    var email = $('#email').val();
    if(email === "") {
      $('p.email-error').text("Please enter your email.");
    }
    var password = $('#password').val();
    if(password === "")
      $('p.password-error').text("Please enter your password.");
    return false;
  });
};

$(document).ready(main);