/* ==========================================================================
Animations
========================================================================== */

"use strict";

function initAnimations() {
  if ($("#features-1").length) {
    var waypoint = new Waypoint({
      element: document.getElementById("features-1"),
      handler: function (direction) {
        $(".shadow-side-image").addClass("is-active");
      },
      offset: 150,
    });
  }

  var primaryCircle = document.querySelector(".primary-circle");
  var primaryBoldCircle = document.querySelector(".primary-bold-circle");
  var accentCircle = document.querySelector(".accent-circle");

  if ($(".primary-circle, .primary-bold-circle, .accent-circle").length) {
    anime({
      targets: [primaryCircle, primaryBoldCircle, accentCircle],
      translateY: [
        {
          value: 800,
          duration: 500,
        },
      ],
    });
  }

  if ($("#features-2").length) {
    var waypoint2 = new Waypoint({
      element: document.getElementById("features-2"),
      handler: function (direction) {
        anime({
          targets: primaryCircle,
          translateY: [
            {
              value: 0,
              duration: 1100,
            },
          ],
        });

        anime({
          targets: primaryBoldCircle,
          translateY: [
            {
              value: 0,
              duration: 1100,
              delay: 200,
            },
          ],
        });

        anime({
          targets: accentCircle,
          translateY: [
            {
              value: 0,
              duration: 1100,
              delay: 400,
            },
          ],
        });
      },
      offset: 150,
    });
  }

  if ($("#features-3").length) {
    var waypoint3 = new Waypoint({
      element: document.getElementById("features-3"),
      handler: function (direction) {
        $("#features-3 .side-image").removeClass("is-pulled");
      },
      offset: 150,
    });
  }
}

function initCanvas() {
  if ($("#geo-canvas").length) {
    var Canvas = document.getElementById("geo-canvas");
    var ctx = Canvas.getContext("2d");

    var resize = function () {
      Canvas.width = Canvas.clientWidth;
      Canvas.height = Canvas.clientHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    var elements = [];
    var presets = {};

    presets.o = function (x, y, s, dx, dy) {
      return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function (ctx, t) {
          this.x += this.dx;
          this.y += this.dy;

          ctx.beginPath();
          ctx.arc(
            this.x + +Math.sin((50 + x + t / 10) / 100) * 3,
            this.y + +Math.sin((45 + x + t / 10) / 100) * 4,
            this.r,
            0,
            2 * Math.PI,
            false
          );
          ctx.lineWidth = this.w;
          ctx.strokeStyle = "#fff";
          ctx.stroke();
        },
      };
    };

    presets.x = function (x, y, s, dx, dy, dr, r) {
      r = r || 0;
      return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function (ctx, t) {
          this.x += this.dx;
          this.y += this.dy;
          this.r += this.dr;

          var _this = this;
          var line = function (x, y, tx, ty, c, o) {
            o = o || 0;
            ctx.beginPath();
            ctx.moveTo(-o + (_this.s / 2) * x, o + (_this.s / 2) * y);
            ctx.lineTo(-o + (_this.s / 2) * tx, o + (_this.s / 2) * ty);
            ctx.lineWidth = _this.w;
            ctx.strokeStyle = c;
            ctx.stroke();
          };

          ctx.save();

          ctx.translate(
            this.x + Math.sin((x + t / 10) / 100) * 5,
            this.y + Math.sin((10 + x + t / 10) / 100) * 2
          );
          ctx.rotate((this.r * Math.PI) / 180);

          line(-1, -1, 1, 1, "#fff");
          line(1, -1, -1, 1, "#fff");

          ctx.restore();
        },
      };
    };

    for (var x = 0; x < Canvas.width; x++) {
      for (var y = 0; y < Canvas.height; y++) {
        if (Math.round(Math.random() * 8000) == 1) {
          var s = (Math.random() * 5 + 1) / 10;
          if (Math.round(Math.random()) == 1)
            elements.push(presets.o(x, y, s, 0, 0));
          else
            elements.push(
              presets.x(
                x,
                y,
                s,
                0,
                0,
                (Math.random() * 3 - 1) / 10,
                Math.random() * 360
              )
            );
        }
      }
    }

    setInterval(function () {
      ctx.clearRect(0, 0, Canvas.width, Canvas.height);

      var time = new Date().getTime();
      for (var e in elements) elements[e].draw(ctx, time);
    }, 10);
  }
}

function initAnimatedSvg() {
  if ($("#chat-widget-ui, #chat-ui").length) {
    new Vivus("chat-widget-ui", {
      duration: 150,
      file: "assets/img/graphics/compositions/chat-widget-core.svg",
    });
    new Vivus("chat-ui", {
      duration: 150,
      file: "assets/img/graphics/compositions/chat-profile-core.svg",
    });
  }
}

//Chat widget button
function initChatWidget() {
  var chatShow = 100;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= chatShow) {
      $("#bulchat").addClass("visible");
    } else {
      $("#bulchat").removeClass("visible");
    }
  });

  $("#bulchat div, .close-chat img").on("click", function () {
    $("#chat-widget").slideToggle();
    $(".chat-widget-body").toggleClass("is-opened is-closed");
    $("#bulchat div").toggleClass("close open");
    $("#bulchat, .close-chat img").toggleClass("close open");
  });
}

function initParticles() {
  var particles = document.getElementById("particles");
  var border = ["50%", "0%"];
  var colors = ["#FF6B6B", "#FFE66D", "#4472CA"];

  if ($("#particles").length) {
    function createParticle(event) {
      var x = event.clientX;
      var y = event.clientY;
      var color = Math.floor(Math.random() * 3);

      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.marginLeft = x + "px";
      div.style.marginTop = y + "px";
      div.style.width = "10px";
      div.style.borderTop = "5px solid transparent";
      div.style.borderRight = "5px solid transparent";
      div.style.borderLeft = "5px solid transparent";
      div.style.borderBottom = "10px solid " + colors[color];
      div.style.animation = "move 5s ease-in infinite";
      particles.appendChild(div);
      setTimeout(function () {
        div.remove();
      }, 5000);
    }

    function getParticles() {
      var np = document.documentElement.clientWidth / 40;
      particles.innerHTML = "";
      for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w) + 1;
        var rndh = Math.floor(Math.random() * h) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 5;
        var opty = Math.floor(Math.random() * 4) + 1;
        var anima = Math.floor(Math.random() * 12) + 8;
        var bdr = Math.floor(Math.random() * 2);
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = rndw + "px";
        div.style.marginTop = rndh + "px";
        div.style.width = widthpt + "px";
        div.style.height = widthpt + "px";
        div.style.opacity = opty;
        div.style.backgroundColor = colors[color];
        div.style.borderRadius = border[bdr];
        div.style.animation = "move " + anima + "s ease-in infinite";
        particles.appendChild(div);
      }
    }

    function main(event) {
      getParticles();
      particles.addEventListener("click", createParticle);
    }

    window.addEventListener("resize", main);
    window.addEventListener("load", main);
  }
}
