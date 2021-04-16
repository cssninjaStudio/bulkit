/* ==========================================================================
Cards
========================================================================== */

"use strict";

function initMediaCards() {
  if ($(".media-card-image").length) {
    $(".media-card-image").each(function () {
      var mediaCardImage = $(this).attr("data-background");
      if (mediaCardImage !== undefined) {
        $(this).css("background-image", "url(" + mediaCardImage + ")");
      }
    });
  }
}
