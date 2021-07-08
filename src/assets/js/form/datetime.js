/* ==========================================================================
Date and Time controls
========================================================================== */

"use strict";

//Datepicker (date dropper)
function initDatepicker() {
  if ($("#is-datepicker").length) {
    $("#is-datepicker").dateDropper();
  }
}

//Timepicker (time dropper)
function initTimepicker() {
  if ($("#is-timepicker").length) {
    $("#is-timepicker").timeDropper({
      primaryColor: "#4FC1EA",
      borderColor: "#4FC1EA",
      backgroundColor: "#FFF",
      init_animation: "fadeIn",
    });
  }
}

//Datepicker (fengyuanchen)
function initDatepickerAlt() {
  $('[data-toggle="datepicker"]').datepicker();
}
