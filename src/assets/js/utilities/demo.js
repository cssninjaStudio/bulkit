/* ==========================================================================
Demo functions
========================================================================== */

"use strict";

function initDemo() {
  //Code highlight init
  $("pre code").each(function (i, block) {
    hljs.highlightBlock(block);
  });

  //Scrollspy nav init
  if ($("#scrollnav").length) {
    var sticky = new Waypoint.Sticky({
      element: $("#scrollnav")[0],
    });
    $(".scrollnav-tabs").scrollspy({
      offset: -25,
      activeClass: "is-active",
    });
  }

  //Show and hide code accordion
  $(".accordion-wrapper .trigger a").on("click", function () {
    $(this).html(
      '<i class="im im-icon-Coding is-icon-2x"></i> HIDE CODE<i class="im im-icon-Add"></i>'
    );
    $(".trigger.active a").html(
      '<i class="im im-icon-Coding is-icon-2x"></i> SHOW CODE<i class="im im-icon-Add"></i>'
    );
  });

  //Animated Vivus svg hero illustrations for component pages
  if ($("#buttons").length) {
    new Vivus("buttons", {
      duration: 300,
      file: "assets/img/graphics/components//buttons.svg",
    });
  }
  if ($("#tabs-ill").length) {
    new Vivus("tabs-ill", {
      duration: 300,
      file: "assets/img/graphics/components//tabs.svg",
    });
  }
  if ($("#inputs-ill").length) {
    new Vivus("inputs-ill", {
      duration: 300,
      file: "assets/img/graphics/components//inputs.svg",
    });
  }
  if ($("#cards-ill").length) {
    new Vivus("cards-ill", {
      duration: 300,
      file: "assets/img/graphics/components//cards.svg",
    });
  }
  if ($("#modals-ill").length) {
    new Vivus("modals-ill", {
      duration: 300,
      file: "assets/img/graphics/components//modals.svg",
    });
  }
  if ($("#accordion-ill").length) {
    new Vivus("accordion-ill", {
      duration: 300,
      file: "assets/img/graphics/components//accordion.svg",
    });
  }
  if ($("#dropdowns-ill").length) {
    new Vivus("dropdowns-ill", {
      duration: 300,
      file: "assets/img/graphics/components//dropdowns.svg",
    });
  }
  if ($("#lists-ill").length) {
    new Vivus("lists-ill", {
      duration: 300,
      file: "assets/img/graphics/components//lists.svg",
    });
  }
  if ($("#badges-ill").length) {
    new Vivus("badges-ill", {
      duration: 300,
      file: "assets/img/graphics/components//badges.svg",
    });
  }
  if ($("#popups-ill").length) {
    new Vivus("popups-ill", {
      duration: 300,
      file: "assets/img/graphics/components//popups.svg",
    });
  }
  if ($("#tables-ill").length) {
    new Vivus("tables-ill", {
      duration: 300,
      file: "assets/img/graphics/components//tables.svg",
    });
  }
  if ($("#timeline-ill").length) {
    new Vivus("timeline-ill", {
      duration: 300,
      file: "assets/img/graphics/components//timeline.svg",
    });
  }
  if ($("#boxes-ill").length) {
    new Vivus("boxes-ill", {
      duration: 300,
      file: "assets/img/graphics/components//boxes.svg",
    });
  }
  if ($("#messages-ill").length) {
    new Vivus("messages-ill", {
      duration: 300,
      file: "assets/img/graphics/components//messages.svg",
    });
  }
  if ($("#calendar-ill").length) {
    new Vivus("calendar-ill", {
      duration: 300,
      file: "assets/img/graphics/components//calendar.svg",
    });
  }
  if ($("#controls-ill").length) {
    new Vivus("controls-ill", {
      duration: 300,
      file: "assets/img/graphics/components//controls.svg",
    });
  }
  if ($("#forms-ill").length) {
    new Vivus("forms-ill", {
      duration: 300,
      file: "assets/img/graphics/components//forms.svg",
    });
  }
  if ($("#steps-ill").length) {
    new Vivus("steps-ill", {
      duration: 300,
      file: "assets/img/graphics/components//steps.svg",
    });
  }
  if ($("#uploader-ill").length) {
    new Vivus("uploader-ill", {
      duration: 300,
      file: "assets/img/graphics/components//uploader.svg",
    });
  }
  if ($("#icons-ill").length) {
    new Vivus("icons-ill", {
      duration: 300,
      file: "assets/img/graphics/components//icons.svg",
    });
  }
  if ($("#iconpicker-ill").length) {
    new Vivus("iconpicker-ill", {
      duration: 300,
      file: "assets/img/graphics/components//iconpicker.svg",
    });
  }
  if ($("#features-ill").length) {
    new Vivus("features-ill", {
      duration: 300,
      file: "assets/img/graphics/components//features.svg",
    });
  }
  if ($("#pricing-ill").length) {
    new Vivus("pricing-ill", {
      duration: 300,
      file: "assets/img/graphics/components//pricing.svg",
    });
  }
  if ($("#team-ill").length) {
    new Vivus("team-ill", {
      duration: 300,
      file: "assets/img/graphics/components//team.svg",
    });
  }
  if ($("#testimonials-ill").length) {
    new Vivus("testimonials-ill", {
      duration: 300,
      file: "assets/img/graphics/components//testimonials.svg",
    });
  }
  if ($("#clients-ill").length) {
    new Vivus("clients-ill", {
      duration: 300,
      file: "assets/img/graphics/components//clients.svg",
    });
  }
  if ($("#counters-ill").length) {
    new Vivus("counters-ill", {
      duration: 300,
      file: "assets/img/graphics/components//counters.svg",
    });
  }
  if ($("#carousel-ill").length) {
    new Vivus("carousel-ill", {
      duration: 300,
      file: "assets/img/graphics/components//carousel.svg",
    });
  }
  if ($("#grid-ill").length) {
    new Vivus("grid-ill", {
      duration: 300,
      file: "assets/img/graphics/components//grid.svg",
    });
  }
  if ($("#footer-ill").length) {
    new Vivus("footer-ill", {
      duration: 300,
      file: "assets/img/graphics/components//footer.svg",
    });
  }
  if ($("#typography-ill").length) {
    new Vivus("typography-ill", {
      duration: 300,
      file: "assets/img/graphics/components//typography.svg",
    });
  }
  if ($("#colors-ill").length) {
    new Vivus("colors-ill", {
      duration: 300,
      file: "assets/img/graphics/components//colors.svg",
    });
  }

  //Navbar styles panel
  if ($(".nav-switch").length) {
    $("#nav-solid").on("click", function () {
      $("#demo-nav").removeClass("navbar-inverse").addClass("is-solid");
      $("#demo-nav .button-cta")
        .addClass("secondary-btn")
        .removeClass("light-btn");
      $("#demo-nav .navbar-brand img").attr(
        "src",
        "assets/img/logos/bulkit-purple.svg"
      );
    });

    $("#nav-reverse").on("click", function () {
      $("#demo-nav")
        .addClass("navbar-inverse is-reverse")
        .removeClass("is-solid is-blue is-purple is-red");
    });

    $("#nav-blue").on("click", function () {
      $("#demo-nav")
        .addClass("navbar-inverse is-blue")
        .removeClass("is-solid is-reverse is-purple is-red");
    });

    $("#nav-purple").on("click", function () {
      $("#demo-nav")
        .addClass("navbar-inverse is-purple")
        .removeClass("is-solid is-reverse is-blue is-red");
    });

    $("#nav-red").on("click", function () {
      $("#demo-nav")
        .addClass("navbar-inverse is-red")
        .removeClass("is-solid is-reverse is-blue is-purple");
    });

    $(".is-variation").on("click", function () {
      $("#demo-nav .button-cta")
        .addClass("light-btn")
        .removeClass("secondary-btn");
      $("#demo-nav .navbar-brand img").attr(
        "src",
        "assets/img/logos/bulkit-white.svg"
      );
    });
  }
}
