/* ==========================================================================
Autocompletes
========================================================================== */

"use strict";

function initAutocompletes() {
  //Basic autocomplete
  if ($("#basic-autocpl").length) {
    var options = {
      url: "assets/data/persons.json",
      getValue: function (element) {
        return element.name;
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 5,
        showAnimation: {
          type: "fade", //normal|slide|fade
          time: 400,
          callback: function () {},
        },
        match: {
          enabled: true,
        },
      },
    };

    $("#basic-autocpl").easyAutocomplete(options);
  }

  //Description autocomplete
  if ($("#desc-autocpl").length) {
    var options = {
      url: "assets/data/persons.json",
      getValue: function (element) {
        return element.name;
      },
      template: {
        type: "description",
        fields: {
          description: "position",
        },
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 5,
        showAnimation: {
          type: "fade", //normal|slide|fade
          time: 400,
          callback: function () {},
        },
        match: {
          enabled: true,
        },
      },
    };

    $("#desc-autocpl").easyAutocomplete(options);
  }

  //Users autocomplete
  if ($("#users-autocpl").length) {
    var usersOptions = {
      url: "assets/data/persons.json",
      getValue: "name",
      template: {
        type: "custom",
        method: function (value, item) {
          return (
            "<div class=" +
            "template-wrapper" +
            "><img class=" +
            "autocpl-avatar" +
            " src='" +
            item.pic +
            "' /><div class=" +
            "entry-text" +
            ">" +
            value +
            "<br><span>" +
            item.email +
            "</span></div></div> "
          );
        },
      },
      highlightPhrase: false,
      list: {
        maxNumberOfElements: 3,
        showAnimation: {
          type: "fade", //normal|slide|fade
          time: 400,
          callback: function () {},
        },
        match: {
          enabled: true,
        },
      },
    };

    $("#users-autocpl").easyAutocomplete(usersOptions);
  }
}
