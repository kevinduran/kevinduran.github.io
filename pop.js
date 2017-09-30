
  $('.myWork').hide();
  $('#down').on('click',function(){
          
     	$('.myWork').fadeIn();
     	$('#headerTag').fadeOut();
  });
  $('.goBack').on('click',function(){
  	    $('.myWork').fadeOut();
    $('#headerTag').fadeIn();
  });
