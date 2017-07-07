var main = function() {
  
  $('.nav li').click(function() {
    var category = $(this).attr('class');
     
    /* Adds/removes active class from navigation list*/
    
    $('.nav li').removeClass('active');
    	$(this).addClass('active');   
  
   /* Adds/removes 'selected' class from selected thumbnails*/
    
    if(category === 'nav-consumer') {      
      $('.thumbnail').removeClass('selected');
    	$('.consumer').addClass('selected'); 
    }    
    else if(category === 'nav-mobile') {      
      $('.thumbnail').removeClass('selected');
    	$('.mobile').addClass('selected'); 
    }    
    else if(category === 'nav-commerce') {      
      $('.thumbnail').removeClass('selected');
    	$('.commerce').addClass('selected'); 
    }
    else if(category === 'nav-enterprise') {
      $('.thumbnail').removeClass('selected');
    	$('.mobile').addClass('selected'); 
    }
    else {
      $('.thumbnail').removeClass('selected');      
    } 
    });
};
 
$(document).ready(main);
