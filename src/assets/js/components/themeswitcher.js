/* ==========================================================================
Theme Switcher
========================================================================== */

"use strict";

function initThemeSwitcher() {
  var classes =
    "is-theme-core is-theme-teal is-theme-green is-theme-blue is-theme-azur is-theme-night is-theme-purple is-theme-yellow is-theme-orange is-theme-red";

  var pxShow = 60;
  var scrollSpeed = 500;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#style-switcher").addClass("visible");
    } else {
      $("#style-switcher").removeClass("visible");
    }
  });

  $("#style-switcher input").on("change", function () {
    var theme = $(this).attr("id");
    var stylesheet = $("#theme-sheet");
    stylesheet.attr("href", "assets/css/" + theme + ".css");
    $("body")
      .removeClass(classes)
      .addClass("is-theme-" + theme);
    activeTheme = theme;

    $("[data-base-url]").each(function () {
      var base = $(this).attr("data-base-url");
      var extension = $(this).attr("data-extension");

      $(this).attr("src", base + "-" + theme + extension);
    });

    $(".switcher-logo").attr(
      "src",
      "assets/img/logos/logo/bulkit-" + theme + ".svg"
    );
    $(".switcher-logo-w").attr(
      "src",
      "assets/img/logos/logo/bulkit-" + theme + "-w.svg"
    );
    $(".switcher-logo-square").attr(
      "src",
      "assets/img/logos/logo/bulkit-square-" + theme + ".svg"
    );
  });

  $(".switcher-close").on("click", function () {
    $("#style-switcher").addClass("away");
  });
}
