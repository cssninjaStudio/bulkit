/* ==========================================================================
FAQ
========================================================================== */

"use strict";

function initFaq() {
  $(".faq-block .block-header").on("click", function () {
    $(this).toggleClass("is-active");
    $(this).closest(".faq-block").find(".block-body").slideToggle("fast");
  });
}
