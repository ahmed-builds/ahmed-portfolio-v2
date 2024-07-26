$(document).ready(function() {
    // Initially hide all content sections except the first one
    $('.page_content').not('#home').hide();
    $('#home_link').addClass('active');
  
    // Add click event handlers to navigation links
    $('nav a').click(function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Remove active class from all anchor tags
      $('nav a').removeClass('active');
  
      // Get the ID of the clicked link
      var targetId = $(this).attr('id').replace('_link', '');
  
      // Hide all content sections
      $('.page_content').hide();
  
      // Show the corresponding content section
      $('#' + targetId).slideToggle();
      $(this).addClass('active');
    });    
});
$(window).resize(function(){
    if($(window).width() < 992){
        // console.log($(window).width());
        $('.nav_toggle').click(function(e){
            e.preventDefault();
            $('nav').toggle();
            $('body').toggleClass('open_nav');
            if($('.nav_toggle i').hasClass('fa-bars')){
                $('.nav_toggle i').addClass('fa-xmark');
                $('.nav_toggle i').removeClass('fa-bars');
            } else {
                $('.nav_toggle i').removeClass('fa-xmark');
                $('.nav_toggle i').addClass('fa-bars');
            }
        });
        $('.nav_menu li a').click(function(a){
            a.preventDefault();
            $('nav').toggle();
            $('body').toggleClass('open_nav');
            $('.nav_toggle i').removeClass('fa-xmark');
            $('.nav_toggle i').addClass('fa-bars');
        });
    } else {
        console.log($(window).width());
        $('nav').show();
    }
});