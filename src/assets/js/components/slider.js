/* ==========================================================================
Wallop Slider
========================================================================== */

"use strict";

function initSlider() {
  if ($(".Wallop").length) {
    var wallopEl = document.querySelector(".Wallop");
    var wallop = new Wallop(wallopEl);

    var paginationDots = Array.prototype.slice.call(
      document.querySelectorAll(".Wallop-dot")
    );

    //Attach click listener on the dots

    paginationDots.forEach(function (dotEl, index) {
      dotEl.addEventListener("click", function () {
        wallop.goTo(index);
      });
    });

    // Listen to wallop change and update classes

    wallop.on("change", function (event) {
      removeClass(
        document.querySelector(".Wallop-dot--current"),
        "Wallop-dot--current"
      );
      addClass(
        paginationDots[event.detail.currentItemIndex],
        "Wallop-dot--current"
      );
    });

    // Helpers
    function addClass(element, className) {
      if (!element) {
        return;
      }
      element.className =
        element.className.replace(/\s+$/gi, "") + " " + className;
    }

    function removeClass(element, className) {
      if (!element) {
        return;
      }
      element.className = element.className.replace(className, "");
    }

    // To start Autoplay, just call the function below
    // and pass in the number of seconds as interval
    // if you want to start autoplay after a while
    // you can wrap this in a setTimeout(); function
    autoplay(5000);

    // This a a helper function to build a simple
    // auto-play functionality.
    function autoplay(interval) {
      var lastTime = 0;

      function frame(timestamp) {
        var update = timestamp - lastTime >= interval;

        if (update) {
          wallop.next();
          lastTime = timestamp;
        }

        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }
  }
}
