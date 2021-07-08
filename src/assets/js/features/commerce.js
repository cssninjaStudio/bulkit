/* ==========================================================================
Commerce
========================================================================== */

"use strict";

$(document).ready(function () {
  if ($(".product-page-v1").length) {
    $(".color-selector input, .product-thumb img").on("click", function () {
      var headphonesColor = $(this).attr("data-image");
      $(".product-image.is-active").fadeOut(500).removeClass("is-active");
      $(".left img[data-image = " + headphonesColor + "]")
        .fadeIn(250)
        .addClass("is-active");
      $(this).addClass("active");
      $(".product-thumb.is-active").removeClass("is-active");
      $(".product-thumb img[data-image = " + headphonesColor + "]")
        .parent()
        .addClass("is-active");
    });

    $(".related-products-inner").slick({
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      autoplay: true,
      slidesToShow: 5,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".grid-products").length) {
    $(".grid-products-inner.is-carousel").slick({
      dots: false,
      infinite: true,
      speed: 500,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      autoplay: true,
      slidesToShow: 4,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($("#checkout-flow").length) {
    var step = 0;
    var button = $("#checkout-next .button");
    var submit = $("#submit-payment");

    button.on("click", function () {
      step = step + 1;
      var $this = $(this);
      $this.addClass("is-loading");

      setTimeout(function () {
        $this.removeClass("is-loading").addClass('is-disabled');
        $("#checkout-flow-step-" + step).removeClass("is-hidden");
      }, 1500);

      setTimeout(function () {
        $("html, body").animate(
          {
            scrollTop: $("#checkout-flow-step-" + step).offset().top,
          },
          500
        );
        if (step === 3) {
          $("#checkout-next").remove();
        }
      }, 1600);
    });

    submit.one("click", function () {
      step = step + 1;
      var $this = $(this);
      $this.addClass("is-loading");

      setTimeout(function () {
        $this.removeClass("is-loading primary-btn").text('Payment Success!').addClass('no-click is-success');
        $("#checkout-flow-step-" + step).removeClass("is-hidden");
      }, 1500);

      setTimeout(function () {
        $("html, body").animate(
          {
            scrollTop: $("#checkout-flow-step-" + step).offset().top,
          },
          500
        );
        setTimeout(function () {
          $(".SuccessAnimation").removeClass("is-hidden");
        }, 800);
      }, 1600);
    });

    $('.method-card input').on('change', function(){
      $("#checkout-next .button").removeClass('is-disabled');
    });
  }
});
