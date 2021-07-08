/* ==========================================================================
Pricing
========================================================================== */

"use strict";

function initPricing() {
  $(".pricing-tabs .tab-item").on("click", function () {
    var target = $(this).attr("data-tab");
    $(this).siblings(".tab-item").removeClass("is-active");
    $(this).addClass("is-active");
    $(".pricing-container").removeClass("is-active");
    $("#" + target).addClass("is-active");
    // Manually refresh positioning of slick
    $(".feature-carousel").slick("setPosition");
  });
}

function initTabbedPricing() {
  if ($(".header-pricing").length) {
    $(".pricing-picker span").on("click", function () {
      $(".pricing-picker span.is-active").removeClass("is-active");
      $(this).addClass("is-active");
    });

    $("#show-monthly").on("click", function () {
      $(".per-year").addClass("is-hidden");
      $(".per-month").removeClass("is-hidden");
    });

    $("#show-annualy").on("click", function () {
      $(".per-month").addClass("is-hidden");
      $(".per-year").removeClass("is-hidden");
    });
  }
}

function initFreelancerPricing() {
  $(".plan-controls span").on("click", function () {
    $(".plan-controls span").toggleClass("is-active");
  });

  $(".period-select span").on("click", function () {
    $(".period-select span").toggleClass("is-active");
    $(".month-price, .year-price").toggleClass("is-hidden");
  });

  $("#show-freelance").on("click", function () {
    $("#freelance-pricing").removeClass("is-hidden");
    $("#business-pricing").addClass("is-hidden");
  });

  $("#show-business").on("click", function () {
    $("#business-pricing").removeClass("is-hidden");
    $("#freelance-pricing").addClass("is-hidden");
  });
}

function initBoxedPricing() {
  if ($("#price-switch").length) {
    $("#price-switch").on("click", function () {
      $(".by-year, .by-month").toggleClass("is-active");
      $(".condensed-plan").toggleClass("is-switched");
    });
  }
}

function initSwitchPricing() {
  if ($(".switch-pricing-wrapper").length) {
    $(".pricing-switcher input").on("change", function () {
      $(".plan-price").toggleClass("is-active");
    });
  }
}

function initOnePagePricing() {
  $(".combo-button .button").on("click", function () {
    $(".combo-button .button.is-active").removeClass("is-active");
    $(this).addClass("is-active");
    $(".plan-price, .price-per").toggleClass("is-hidden");
  });
}
