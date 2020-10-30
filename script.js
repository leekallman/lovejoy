//add event on scroll the whole document
$(document).ready(function() {
    $(window).scroll(function() {
  
      $('.image').each (function(i) {
        var objectBottom = $(this).position().top + $(this).outherHeight();
        var objectWindow = $(window).scrollTop() + $(window).height();
  
          if( objectWindow > objectBottom) {
            $(this).removeClass('hidden');
            $(this).addClass('fadeIn');
          } else {
            $(this).addClass('hidden');
          }
        };
      };
    };