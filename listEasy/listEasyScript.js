var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
      
    var add = function(item) {
    var html = template(item);
    $(html).appendTo('.list');
  };
    
    var text = $('#todo').val();
    if(text !== "") {
    var html = template(text);
    $('.list').append(html);
    $('#todo').val(""); 
      
    return false;
    } 
    
  });
      
   $('.glyphicon-star').on('click',function(){
    $(this).toggleClass('active'); 
     
  });
  
  $(document).on('click','.glyphicon-remove',function(click){
    $(this).parent().remove();
  });
};

$(document).ready(main);
  

