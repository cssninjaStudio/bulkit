/* ==========================================================================
Accordions
========================================================================== */

"use strict";

//Simple Accordion
function initSimpleAccordion() {
  $(".accordion-section > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordion-content").slideUp(200);
      $(".accordion-section > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".accordion-section > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".accordion-section > a").removeClass("active");
      $(this).addClass("active");
      $(".accordion-content").slideUp(200);
      $(this).siblings(".accordion-content").slideDown(200);
    }
  });
}

//Accordions
function initAccordions() {
  var $accor = $(".accordion");
  $accor.each(function () {
    $(this).toggleClass("ui-accordion ui-widget ui-helper-reset");
    $(this)
      .find("h3")
      .addClass(
        "ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
      );
    $(this)
      .find("div")
      .addClass(
        "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
      );
    $(this).find("div").hide();
  });
  var $trigger = $accor.find("h3");
  $trigger.on("click", function (e) {
    var location = $(this).parent();
    if ($(this).next().is(":hidden")) {
      var $triggerloc = $("h3", location);
      $triggerloc
        .removeClass("ui-accordion-header-active ui-state-active ui-corner-top")
        .next()
        .slideUp(300);
      $triggerloc.find("span").removeClass("ui-accordion-icon-active");
      $(this).find("span").addClass("ui-accordion-icon-active");
      $(this)
        .addClass("ui-accordion-header-active ui-state-active ui-corner-top")
        .next()
        .slideDown(300);
    }
    e.preventDefault();
  });
  $(".toggle-container").hide();
  $(".trigger, .trigger.opened").on("click", function (a) {
    $(this).toggleClass("active");
    a.preventDefault();
  });
  $(".trigger").on("click", function () {
    $(this).next(".toggle-container").slideToggle(300);
  });
  $(".trigger.opened").addClass("active").next(".toggle-container").show();
}
