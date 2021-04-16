/* ==========================================================================
Video
========================================================================== */

"use strict";

//Video Embed
function initVideoEmbed() {
  if ($("#video-embed").length) {
    embedVideo("#video-embed");
  }
}

//Background video
function initBackgroundVideo() {
  if ($(".covervid-video").length) {
    $(".covervid-video").coverVid(1920, 1080);
  }
}

//Custom Plyr Players
function initPlayers() {
  if ($(".bulkit-player").length) {
    if (env === "development") {
      $("[data-demo-poster]").each(function () {
        var poster = $(this).attr("data-demo-poster");
        if (poster !== undefined) {
          $(this).attr("data-poster", poster);
        }
      });
      const players = Array.from(
        document.querySelectorAll(".bulkit-player")
      ).map((p) => new Plyr(p));
    } else {
      const players = Array.from(
        document.querySelectorAll(".bulkit-player")
      ).map((p) => new Plyr(p));
    }
  }
}
