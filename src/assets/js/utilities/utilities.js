/* ==========================================================================
Utilities
========================================================================== */

"use strict";

function changeDemoImages() {
  $("*[data-demo-src]").each(function () {
    var newSrc = $(this).attr("data-demo-src");
    if (newSrc !== undefined) {
      $(this).attr("src", newSrc);
    }
  });

  $("*[data-demo-background]").each(function () {
    var newBg = $(this).attr("data-demo-background");
    $(this).attr("data-background", newBg);
  });
}

function initBackgroundImages() {
  if ($(".has-background-image").length) {
    $(".has-background-image").each(function () {
      var bgImage = $(this).attr("data-background");
      if (bgImage !== undefined) {
        $(this).css("background-image", "url(" + bgImage + ")");
      }
    });
  }
}

function initParallax() {
  function parallaxBG() {
    $(".parallax").prepend('<div class="parallax-overlay"></div>');
    $(".parallax").each(function () {
      var attrImage = $(this).attr("data-background");
      var attrColor = $(this).attr("data-color");
      var attrOpacity = $(this).attr("data-color-opacity");
      var attrPositionX = $(this).attr("data-position-x");
      if (attrImage !== undefined) {
        $(this).css("background-image", "url(" + attrImage + ")");
      }
      if (attrColor !== undefined) {
        $(this)
          .find(".parallax-overlay")
          .css("background-color", "" + attrColor + "");
      }
      if (attrOpacity !== undefined) {
        $(this)
          .find(".parallax-overlay")
          .css("opacity", "" + attrOpacity + "");
      }
      if (attrPositionX !== undefined) {
        $(this).css("background-position-x", "" + attrPositionX + "");
      }
    });
  }
  parallaxBG();

  if ("ontouchstart" in window) {
    document.documentElement.className =
      document.documentElement.className + " touch";
  }
  if (!$("html").hasClass("touch")) {
    $(".parallax").css("background-attachment", "fixed");
  }

  function fullscreenFix() {
    var h = $("body").height();
    $(".content-b").each(function (i) {
      if ($(this).innerHeight() > h) {
        $(this).closest(".fullscreen").addClass("overflow");
      }
    });
  }
  $(window).resize(fullscreenFix);
  fullscreenFix();

  function backgroundResize() {
    var windowH = $(window).height();
    $(".parallax").each(function (i) {
      var path = $(this);
      var contW = path.width();
      var contH = path.height();
      var imgW = path.attr("data-img-width");
      var imgH = path.attr("data-img-height");
      var ratio = imgW / imgH;
      var diff = 0;
      diff = diff ? diff : 0;
      var remainingH = 0;
      if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
        remainingH = windowH - contH;
      }
      imgH = contH + remainingH + diff;
      imgW = imgH * ratio;
      if (contW > imgW) {
        imgW = contW;
        imgH = imgW / ratio;
      }
      path.data("resized-imgW", imgW);
      path.data("resized-imgH", imgH);
      path.css("background-size", imgW + "px " + imgH + "px");
    });
  }
  $(window).resize(backgroundResize);
  $(window).focus(backgroundResize);
  backgroundResize();

  function parallaxPosition(e) {
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function (i) {
      var path = $(this);
      var height = path.height();
      var top = path.offset().top;
      var bottom = top + height;
      if (bottomWindow > top && topWindow < bottom) {
        var imgH = path.data("resized-imgH");
        var min = 0;
        var max = -imgH + heightWindow;
        var overflowH =
          height < heightWindow ? imgH - height : imgH - heightWindow;
        top = top - overflowH;
        bottom = bottom + overflowH;
        var value = 0;
        if ($(".parallax").is(".titlebar")) {
          value =
            min + (((max - min) * (currentWindow - top)) / (bottom - top)) * 2;
        } else {
          value = min + ((max - min) * (currentWindow - top)) / (bottom - top);
        }
        var orizontalPosition = path.attr("data-oriz-pos");
        orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
        $(this).css(
          "background-position",
          orizontalPosition + " " + value + "px"
        );
      }
    });
  }
  if (!$("html").hasClass("touch")) {
    $(window).resize(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
  }
  if (navigator.userAgent.match(/Trident\/7\./)) {
    $("body").on("mousewheel", function () {
      event.preventDefault();
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }
}

function initScrollspyNav() {
  $("li.scrollnav-item").on("click", function () {
    $("li.scrollnav-item.is-active").removeClass("is-active");
    $(this).addClass("is-active");
  });
}

function initGitem() {
  $(".g-item").on("mouseenter", function () {
    $(this).addClass("gelatine");
  });
  $(".g-item").on("mouseleave", function () {
    $(this).removeClass("gelatine");
  });
}

//Scroll to hash
function initScrollToHash() {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if ($(".nav-primary").hasClass("nav-primary-fixed")) {
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 40,
            },
            750
          );
          return false;
        }
      } else {
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            750
          );
          return false;
        }
      }
    }
  });
}

//Anchor scroll
function initAnchorScroll() {
  function scroll_if_anchor(href) {
    href = typeof href == "string" ? href : $(this).attr("href");

    // You could easily calculate this dynamically if you prefer
    var fromTop = 50;

    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if (href.indexOf("#") == 0) {
      var $target = $(href);

      // Older browser without pushState might flicker here, as they momentarily
      // jump to the wrong position (IE < 10)
      if ($target.length) {
        $("html, body").animate({ scrollTop: $target.offset().top - fromTop });
        if (history && "pushState" in history) {
          history.pushState(
            {},
            document.title,
            window.location.pathname + href
          );
          return false;
        }
      }
    }
  }

  // When our page loads, check to see if it contains and anchor
  scroll_if_anchor(window.location.hash);

  // Intercept all anchor clicks
  $("body").on("click", ".scroll-link", scroll_if_anchor);
}

function initScrollReveal() {
  if ($(".is-title-reveal, .is-feature-reveal ").length) {
    window.sr = ScrollReveal();

    // Simple reveal
    sr.reveal(".is-title-reveal", {
      origin: "bottom",
      distance: "20px",
      duration: 600,
      delay: 100,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      container: window.document.documentElement,
      mobile: true,
      reset: false,
      useDelay: "always",
      viewFactor: 0.2,
    });

    // Revealing features
    sr.reveal(
      ".is-feature-reveal",
      {
        origin: "bottom",
        distance: "20px",
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        container: window.document.documentElement,
        mobile: true,
        reset: true,
        useDelay: "always",
        viewFactor: 0.2,
      },
      160
    );
  }
}
