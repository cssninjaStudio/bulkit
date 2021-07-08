/* ==========================================================================
Utilities
========================================================================== */

"use strict";

//Mobile navbar dropdown
function initNavbarDropdown() {
  $('.mobile-drop').on('click', function () {
      $(this).toggleClass('is-active');
      $(this).find('.child-menu').slideToggle();
  })
}

function initDropdowns() {
  $(".dropdown-trigger").on("click", function () {
    $(".dropdown").removeClass("is-active");
    $(this).closest(".dropdown").addClass("is-active");
  });

  $(document).on("click", function (e) {
    var target = e.target;
    if (
      !$(target).is(".dropdown-trigger img") &&
      !$(target).parents().is(".dropdown")
    ) {
      $(".dropdown").removeClass("is-active");
    }
  });
}
