// 1. when we click an image, show the lightbox
// 2. we want to grab the image that's just been clicked, and show it inside the modal
// 3. when we click the close button, hide the modal
// 4. our link doesn't follow the default href

$('.photos a').on('click', function() {
    var currentImage = $(this).html()
     //here (below)we grab the modal and manually set it to the current image we just clicked on
     $('.modal-content').html(currentImage)
     $('.modal').fadeIn(500)
      // 500 milliseconds
     return false
   })
   
   $('.modal-close, .modal-background').on ('click', function(){
      $('.modal').fadeOut(500)
     return false
     
   })