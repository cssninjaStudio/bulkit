/* ==========================================================================
Search
========================================================================== */

"use strict";

function initSearchBox() {
  $(".price-block a").on("click", function () {
    $(".price-block").find(".dropdown-container").toggleClass("is-open");
  });
}
