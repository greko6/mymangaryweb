(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(document).ready(function() { 

  $('#generate_quote').click(function(){
      $.ajax({
    url: "https://quotes.mymangary.com/quote", 
    data: window.location.href,
    type: 'POST',
    success: function(result) {
          var data = $.parseJSON(result);
          $("#quote_output").html(data[1]);
          $("#quote_number").html(data[0]);
      }});
  });
});

$("#sharebuttons").jsSocials({
  showCount: false,
  showLabel: true,
  shares: [
      "twitter",
      "facebook",
      "linkedin",
      { share: "pinterest", label: "Pin this" },
      "stumbleupon",
      "whatsapp"
  ]
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);

  var $tmp_quote = $(element).text().trim();
  var $tmp_quote_number = $("#quote_number").text().trim();
  var $tmp_together = "Quote: #" + $tmp_quote_number + " by Gary AI Vee: \"" + $tmp_quote + "\". Check out for more at: www.mymangary.com";
  $temp.val($tmp_together).select();
  document.execCommand("copy");
  $temp.remove();
}

$('#copy_quote').click(function() {
  copyToClipboard('#quote_output');
  $(this).text("Copied!");
  setTimeout(function(){ $("#copy_quote").text("Copy to the clipboard"); }, 2033);
})


$(this).val("Item Added");
setTimeout(function(){ $("#btn").val("Add to Cart"); }, 2000);  
