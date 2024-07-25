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