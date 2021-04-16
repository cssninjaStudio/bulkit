/* ==========================================================================
Carousel
========================================================================== */

"use strict";

//Basic slick carousel (testimonials)
function initBasicCarousel() {
  if ($(".testimonials").length) {
    $(".testimonials").slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      autoplay: true,
    });
  }
}

//Vertical slick carousel (vertical testimonials)
function initVerticalCarousel() {
  if ($(".vertical-testimonials").length) {
    $(".vertical-testimonials").slick({
      autoplay: true,
      arrows: false,
      dots: false,
      slidesToShow: 4,
      centerPadding: "0",
      centerMode: true,
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 1000,
      autoplaySpeed: 2500,
      useTransform: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      adaptiveHeight: true,
    });
  }
}

//Flat slick carousel
function initFlatCarousel() {
  if ($(".flat-testimonials").length) {
    $(".flat-testimonials").slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
    });
  }
}

//Image carousel
function initImageCarousel() {
  if ($(".image-carousel").length) {
    $(".image-carousel").slick({
      centerMode: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerPadding: "60px",
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

//Single image carousel
function initSingleImageCarousel() {
  if ($(".single-image-carousel").length) {
    $(".single-image-carousel").slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            //centerPadding: '40px',
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            //centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

//Multiple images carousel
function initMultipleImagesCarousel() {
  if ($(".multiple-image-carousel").length) {
    $(".multiple-image-carousel").slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

//Clients carousel
function initClientsCarousel() {
  if ($(".clients-logo-carousel").length) {
    $(".clients-logo-carousel").slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow:
        "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow:
        "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 2,
          },
        },
      ],
    });
  }
}

//People carousel
function initPeopleCarousel() {
  if ($(".people-carousel").length) {
    $(".people-carousel").slick({
      infinite: true,
      dots: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      appendDots: $(".people-carousel"),
    });
  }
}

//Testimonials
function initTestimonials() {
  if ($(".styled-testimonials").length) {
    $(".styled-testimonials").slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      autoplay: true,
      arrows: false,
    });
  }
}

//Navigation dots
function initNavigationDots() {
  $(".slide-dot").on("click", function () {
    var text = $(this).attr("data-feature-text");
    var image = $(this).attr("data-feature");

    $(".showcase-wrap").removeClass("is-active");
    $(".showcase-text-wrapper").addClass("is-hidden");

    $("#" + text).removeClass("is-hidden");
    $("#" + image).addClass("is-active");

    $(".slide-dot.is-active").removeClass("is-active");
    $(this).addClass("is-active");
  });
}

//Custom carousel
function initCustomCarousel() {
  //Update the image after the carousel slide change
  $(".css-carousel input").on("change", function () {
    var targetImage = $(this).attr("data-testimonial-image");
    $(".testimonials-cover.is-active").removeClass("is-active");
    $("#" + targetImage).addClass("is-active");
  });

  //Current css carousel slide
  var currentDot = 1;

  //Simulate Autoplay for the Css carousel
  setInterval(function () {
    currentDot = currentDot + 1;

    if (currentDot < 5) {
      $(".css-carousel label:nth-child(" + currentDot + ")").trigger("click");
    } else {
      currentDot = 1;
      $(".css-carousel label:first-child").trigger("click");
    }
  }, 3000);
}

//Solo Carousel
function initCarousel() {
  $(".testimonials-solo-carousel").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
}

//Carousel
function initPricingCarousel() {
  $(".feature-carousel").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
}

//Carousel
function initLandingCarousel() {
  $(".carousel").slick({
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    centerPadding: "60px",
    prevArrow:
      "<div class='slick-contacts-btn is-prev'><i class='fa fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='slick-contacts-btn is-next'><i class='fa fa-chevron-right'></i></div>",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  });
}

//Testimonials Carousel
function initCharacterTestimonials() {
  $(".customer-testimonials").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
