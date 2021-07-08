/* ==========================================================================
Selects
========================================================================== */

"use strict";

//Chosen selects
function initChosenSelects() {
  if ($(".chosen-select").length) {
    $(".chosen-select").chosen({
      disable_search_threshold: 6,
      width: "100%",
    });
  }

  if ($(".chosen-multiple").length) {
    $(".chosen-multiple").chosen({
      disable_search_threshold: 10,
      max_selected_options: 5,
      width: "100%",
    });
  }
}

//Material select
function initMaterialSelect() {
  if ($(".material-select").length) {
    $(".material-select .material-input").on("focus", function () {
      $(this).closest(".material-select").addClass("is-active");
    });
    $(".material-select .dropdown-list .option").on("click", function () {
      var optionName = $(this).text();
      console.log(optionName);
      $(this).siblings(".option").removeClass("selected");
      $(this).addClass("selected");
      $(this)
        .closest(".material-select")
        .find(".material-input")
        .val(optionName);
      $(this)
        .closest(".material-select")
        .removeClass("is-active")
        .addClass("has-value");
    });
    $(document).click(function (e) {
      var target = e.target;
      if (
        !$(target).is(".material-select") &&
        !$(target).parents().is(".field, .control-material")
      ) {
        $(".material-select").removeClass("is-active");
      }
    });
  }
}
