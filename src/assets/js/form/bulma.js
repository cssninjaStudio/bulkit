/* ==========================================================================
Bulma Inputs
========================================================================== */

"use strict";

//Bulma tags
function initBulmaTags() {
  if ($(".bulma-tags").length) {
    bulmaTagsinput.attach();
  }
}

//Bulma steps
function initBulmaSteps() {
  if ($(".steps-wrapper").length) {
    bulmaSteps.attach();
  }
}

//Bulma Iconpicker
function initBulmaIconpicker() {
  if ($(".iconpicker-wrapper").length) {
    bulmaIconpicker.attach();
  }
}

//Bulma Calendar extension
function initBulmaCalendar() {
  if ($("#calendar-demo").length) {
    bulmaCalendar.attach("#datepickerDemoDefault", {
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datepickerDemoDialog", {
      displayMode: "dialog",
      startDate: new Date("02/11/2018"),
      minDate: "01/01/2018",
      maxDate: "12/31/2018",
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datepickerDemoInline", {
      displayMode: "inline",
      startDate: new Date("02/11/2018"),
      minDate: "01/01/2018",
      maxDate: "12/31/2018",
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datepickerDemoRange", {
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#timepickerDemoDefault", {
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#timepickerDemoRange", {
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#timepickerDemoInline", {
      displayMode: "inline",
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datetimepickerDemoDefault", {
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datetimepickerDemoDialog", {
      displayMode: "dialog",
      startDate: new Date("02/11/2018"),
      minDate: "01/01/2018",
      maxDate: "12/31/2018",
      color: "#7F00FF",
      lang: "en",
    });

    bulmaCalendar.attach("#datetimepickerDemoInline", {
      displayMode: "inline",
      startDate: new Date("02/11/2018"),
      minDate: "01/01/2018",
      maxDate: "12/31/2018",
      color: "#7F00FF",
      lang: "en",
    });
  }
}
