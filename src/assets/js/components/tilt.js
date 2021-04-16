/* ==========================================================================
Tilt
========================================================================== */

"use strict";

$.fn.tilt = function () {
  var perspective = "300px",
    delta = 20,
    width = this.width(),
    height = this.height(),
    midWidth = width / 2,
    midHeight = height / 2;
  this.on({
    mousemove: function (e) {
      var pos = $(this).offset(),
        cursPosX = e.pageX - pos.left,
        cursPosY = e.pageY - pos.top,
        cursCenterX = midWidth - cursPosX,
        cursCenterY = midHeight - cursPosY;

      $(this).css(
        "transform",
        "perspective(" +
          perspective +
          ") rotateX(" +
          cursCenterY / delta +
          "deg) rotateY(" +
          -(cursCenterX / delta) +
          "deg)"
      );
      $(this).removeClass("is-out");
    },
    mouseleave: function () {
      $(this).addClass("is-out");
    },
  });
  //Return
  return this;
};

function initTiltCards() {
  $(".tilt-card").tilt();
}
