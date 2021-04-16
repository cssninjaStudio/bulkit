/* ==========================================================================
Sidebar
========================================================================== */

"use strict";

function initSidebar() {
  //Website sidebar
  $(".navigation-menu > li.has-children a.parent-link").on(
    "click",
    function (i) {
      i.preventDefault();
      if (!$(this).parent().hasClass("active")) {
        $(".navigation-menu li ul").slideUp();
        $(this).next().slideToggle();
        $(".navigation-menu li").removeClass("active");
        $(this).parent().addClass("active");
      } else {
        $(this).next().slideToggle();
        $(".navigation-menu li").removeClass("active");
      }
    }
  );
  //sidebar category toggle
  $(".category-link").on("click", function () {
    $(".category-link.is-active").removeClass("is-active");
    $(this).addClass("is-active");
  });
  //Sidebar close button
  $(".hamburger-btn").on("click", function () {
    $(
      "#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle"
    ).toggleClass("active");
  });
  //Menu buttons sync
  $("#navigation-trigger, .navigation-trigger, .navigation-close").on(
    "click",
    function () {
      $(".side-navigation-menu").toggleClass("is-active");
    }
  );
  //Data navigation menu setup
  $(".category-link").on("click", function () {
    var category_id = $(this).attr("data-navigation-menu");
    $(".navigation-menu-wrapper").addClass("is-hidden");
    $("#" + category_id).removeClass("is-hidden");
  });
  //Manage close links visibility to display only one at a time
  $(".side-navigation-menu").on("mouseenter", function () {
    $("#navigation-trigger").css("opacity", "0");
    $(".navigation-close").css("opacity", "1");
  });
  $(".side-navigation-menu").on("mouseleave", function () {
    $("#navigation-trigger").css("opacity", "1");
    $(".navigation-close").css("opacity", "0");
  });
}
