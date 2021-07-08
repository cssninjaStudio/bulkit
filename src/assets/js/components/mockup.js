/* ==========================================================================
Mockups
========================================================================== */

"use strict";

function initMockup() {
  $("#show-video, #show-mockup").on("click", function () {
    $("#show-video, #show-mockup").toggleClass("is-hidden");
    $("#video, #mockup").toggleClass("is-hidden");
  });
}
