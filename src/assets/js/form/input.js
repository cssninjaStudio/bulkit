/* ==========================================================================
Inputs
========================================================================== */

"use strict";

//File inputs
function initFileInputs() {
  //declare variables
  var inputs = document.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;

    //listen to changes
    input.addEventListener("change", function (e) {
      var fileName = "";
      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else fileName = e.target.value.split("\\").pop();

      if (fileName) label.querySelector("span").innerHTML = fileName;
      else label.innerHTML = labelVal;
    });
  });

  var inputField = document.querySelectorAll(".field-input");

  for (var i = 0, len = inputField.length; i < len; i++) {
    customInput(inputField[i]);
  }
  //Create custom input
  function customInput(el) {
    const fileInput = el.querySelector('[type="file"]');
    const label = el.querySelector("[data-js-label]");

    fileInput.onchange = fileInput.onmouseout = function () {
      if (!fileInput.value) return;

      var value = fileInput.value.replace(/^.*[\\\/]/, "");
      el.className += " -chosen";
      label.innerText = value;
    };
  }
}

//Init special range input
function initRangeInput() {
  if ($("#input-range").length) {
    var input = $("#input-range");

    input
      .bind("input", function () {
        getRangeValue(input);
      })
      .bind("change", function () {
        getRangeValue(input); /* for IE */
      });

    function getRangeValue(e) {
      var value = $(e).val();
      $(".value").text(value);
      $(".range").attr("data-value", value);
      input.attr("value", value);
    }
  }
}

//jQuery tag input
function initJqueryTagInput() {
  if ($(".tag-input").length) {
    $(".tag-input").tagsInput({
      width: "100%",
      height: "120px",
      defaultText: "Add a tag",
      placeholderColor: "#999",
    });
  }
}

// Find output DOM associated to the DOM element (range input) passed as parameter
function findOutputForSlider(element) {
  var idVal = element.id;
  var outputs = document.getElementsByTagName("output");
  for (var i = 0; i < outputs.length; i++) {
    if (outputs[i].htmlFor == idVal) return outputs[i];
  }
}

function getSliderOutputPosition(slider) {
  // Update output position
  var newPlace, minValue;

  var style = window.getComputedStyle(slider, null);
  // Measure width of range input
  var sliderWidth = parseInt(style.getPropertyValue("width"), 10);

  // Figure out placement percentage between left and right of input
  if (!slider.getAttribute("min")) {
    minValue = 0;
  } else {
    minValue = slider.getAttribute("min");
  }
  var newPoint =
    (slider.value - minValue) / (slider.getAttribute("max") - minValue);

  // Prevent bubble from going beyond left or right (unsupported browsers)
  if (newPoint < 0) {
    newPlace = 0;
  } else if (newPoint > 1) {
    newPlace = sliderWidth;
  } else {
    newPlace = sliderWidth * newPoint;
  }

  return {
    position: newPlace - 20 + "px",
  };
}

function initRangeInputs() {
  var sliders = document.querySelectorAll('input[type="range"].slider');
  [].forEach.call(sliders, function (slider) {
    var output = findOutputForSlider(slider);
    if (output) {
      if (slider.classList.contains("has-output-tooltip")) {
        // Get new output position
        var newPosition = getSliderOutputPosition(slider);

        // Set output position
        output.style["left"] = newPosition.position;
      }

      // Add event listener to update output when slider value change
      slider.addEventListener("input", function (event) {
        if (event.target.classList.contains("has-output-tooltip")) {
          // Get new output position
          var newPosition = getSliderOutputPosition(event.target);

          // Set output position
          output.style["left"] = newPosition.position;
        }

        // Update output with slider value
        output.value = event.target.value;
      });
    }
  });
}

function initContactToggler() {
  $(".tabbed-links li").on("click", function () {
    var target = $(this).attr("data-contact");

    $(".contact-block").addClass("is-hidden");
    $("#" + target).removeClass("is-hidden");

    $(".tabbed-links li.is-active").removeClass("is-active");
    $(this).addClass("is-active");
  });
}
