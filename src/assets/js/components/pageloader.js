/* ==========================================================================
Pageloader
========================================================================== */

"use strict";

function initPageLoader() {
  $(".pageloader").toggleClass("is-active");
  $(window).on("load", function () {
    var pageloaderTimeout = setTimeout(function () {
      $(".pageloader").toggleClass("is-active");
      $(".infraloader").toggleClass("is-active");
      clearTimeout(pageloaderTimeout);
      setTimeout(function () {
        $(".rounded-hero").addClass("is-active");
      }, 350);
    }, 700);
  });
}
