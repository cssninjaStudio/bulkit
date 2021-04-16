/* ==========================================================================
Marquee
========================================================================== */

"use strict";

function initMarquee() {
  if ($('.marquee').length) {
      $('.marquee').marquee({
          //speed in milliseconds of the marquee
          duration: 15000,
          //gap in pixels between the tickers
          gap: 30,
          //time in milliseconds before the marquee will start animating
          delayBeforeStart: 0,
          //'left' or 'right'
          direction: 'left',
          //true or false - should the marquee be duplicated to show an effect of continues flow
          duplicated: true
      });
  }
}