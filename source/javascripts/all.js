//= require ./all_nosearch
//= require ./app/_search

//  Drip.com header

!function(o, l, n) {
 "use strict";
 var c = {
     mobileNavToggleClick: function(o) {
         l("html").toggleClass("nav-open")
     },
     windowScroll: function(n) {
         l(o).scrollTop() > 0 ? l("html").addClass("scrolled") : l("html").removeClass("scrolled")
     }
 };
 l(document).ready(function() {
     l(document).on("click", ".header-toggle-button", c.mobileNavToggleClick),
     l(o).on("scroll", c.windowScroll),
     c.windowScroll()
 })
}(window, window.jQuery);


// smooth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
