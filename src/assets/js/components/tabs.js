/* ==========================================================================
Tabs
========================================================================== */

"use strict";

//Vertical tabs
function initVerticalTabs() {
  $(".vertical-tabs-wrapper ul li").on("click", function () {
    var target = $(this).attr("data-target");
    $(this).siblings("li").removeClass("is-active");
    $(this).addClass("is-active");
    $(this)
      .closest(".vertical-tabs-wrapper")
      .find(".tab-content")
      .removeClass("is-active");
    $("#" + target).addClass("is-active");
  });
}

//Tabs nav
function initTabsNav() {
  var $tabsNav = $(".tabs-nav"),
    $tabsNavLis = $tabsNav.children("li");

  $tabsNav.each(function () {
    var $this = $(this);
    $this
      .next()
      .children(".tab-content")
      .stop(true, true)
      .hide()
      .first()
      .show();
  });

  $tabsNavLis.on("click", function (e) {
    var $this = $(this);
    $this.siblings().removeClass("active").end().addClass("active");
    $this
      .parent()
      .next()
      .children(".tab-content")
      .stop(true, true)
      .hide()
      .siblings($this.find("a").attr("href"))
      .fadeIn();
    e.preventDefault();
  });

  var hash = window.location.hash;
  var anchor = $('.tabs-nav a[href="' + hash + '"]');

  if (anchor.length === 0) {
    $(".tabs-nav li:first").addClass("active").show();
    $(".tab-content:first").show();
  } else {
    anchor.parent("li").click();
  }
}

//Navigation tabs
function initNavigationTabs() {
  $(".navigation-tabs ul li").on("click", function () {
    var tab_id = $(this).attr("data-tab");

    $(this).siblings("li").removeClass("is-active");
    $(this)
      .closest(".navigation-tabs")
      .children(".navtab-content")
      .removeClass("is-active");
    //$('.navtab-content').removeClass('is-active');

    $(this).addClass("is-active");
    $("#" + tab_id).addClass("is-active");
  });
}

//Coding languages tabs
function initCodeTabs() {
  $(".backend-code-container .tab-codesnippets li").on("click", function () {
    var language = $(this).attr("data-language");
    $(this)
      .closest(".column")
      .find(".tab-codesnippets li")
      .removeClass("is-active");
    $(this).addClass("is-active");
    $(this)
      .closest(".column")
      .find("[data-backend-sample]")
      .removeClass("active");

    console.log(language);

    $("[data-backend-sample=" + language + "]").addClass("active");
  });

  $(".frontend-code-container .tab-codesnippets li").on("click", function () {
    var language = $(this).attr("data-language");
    $(this)
      .closest(".column")
      .find(".tab-codesnippets li")
      .removeClass("is-active");
    $(this).addClass("is-active");
    $(this)
      .closest(".column")
      .find("[data-frontend-sample]")
      .removeClass("active");

    console.log(language);

    $("[data-frontend-sample=" + language + "]").addClass("active");
  });
}
