//= require ./all_nosearch
//= require ./app/_search

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
