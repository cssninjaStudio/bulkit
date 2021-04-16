/* ==========================================================================
Combo Box
========================================================================== */

"use strict";

//Simple combo box
function initComboBox() {
  $(".is-combo .combo-box").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".combo-box .box-dropdown li").on("click", function (e) {
    var target = e.target;
    //Get selected item data
    var itemIconClass = $(this).find(".item-icon i").attr("class");
    var itemIcon = $(this).find(".item-icon i");
    var itemIconClass = $(this).find(".item-icon i").attr("class");
    var itemSvgIcon = $(this).find(".item-icon").html();
    var itemName = $(this).find(".item-name").text();
    var iconTemplate = '<i class="' + itemIconClass + '"></i>';
    var template = "";

    console.log(itemSvgIcon);

    if (
      !$(target).is(".box-dropdown li, body") &&
      !$(target).parents().is(".box-dropdown")
    ) {
      $(".box-dropdown").removeClass("is-active");
    }
    if ($(target).is("body")) {
      $(".box-dropdown").removeClass("is-active");
    }

    //Handle dropdown item active state toggle
    $(this).siblings("li.is-active").removeClass("is-active");
    $(this).addClass("is-active");
    //Update combo box selected value
    if (itemIcon.length) {
      $(this).closest(".combo-box").find(".combo-item i").remove();
      $(this).closest(".combo-box").find(".combo-item svg").remove();
      $(this).closest(".combo-box").find(".combo-item").prepend(iconTemplate);
      $(this)
        .closest(".combo-box")
        .find(".combo-item .selected-item")
        .text(itemName);
    } else {
      $(this).closest(".combo-box").find(".combo-item i").remove();
      $(this).closest(".combo-box").find(".combo-item").prepend(itemSvgIcon);
      $(this)
        .closest(".combo-box")
        .find(".combo-item .selected-item")
        .text(itemName);
    }
  });
}

//Image combo box
function initImageComboBox() {
  $(".is-combo .image-combo-box").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".image-combo-box .box-dropdown li").on("click", function (e) {
    var target = e.target;
    //Get selected item data
    var itemPic = $(this).find(".item-icon img").attr("src");
    var itemName = $(this).find(".item-name").text();

    if (
      !$(target).is(".box-dropdown li, body") &&
      !$(target).parents().is(".box-dropdown")
    ) {
      $(".box-dropdown").removeClass("is-active");
    }
    if ($(target).is("body")) {
      $(".box-dropdown").removeClass("is-active");
    }

    //Handle dropdown item active state toggle
    $(this).siblings("li.is-active").removeClass("is-active");
    $(this).addClass("is-active");
    //Update combo box selected value
    $(this)
      .closest(".image-combo-box")
      .find(".combo-item img")
      .attr("src", itemPic);
    $(this)
      .closest(".image-combo-box")
      .find(".combo-item .selected-item")
      .text(itemName);
  });
}

//Stacked Combo box
function initStackedComboBox() {
  $(".is-combo .stacked-combo-box").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $(".stacked-combo-box .box-dropdown li").on("click", function (e) {
    var target = e.target;
    //Get selected item data
    var itemPic = $(this).find(".item-icon img").attr("src");
    var itemName = $(this).find(".item-name").text();
    var itemRef = $(this).attr("data-skill");
    var initialText = "Select one or more skills";

    var skillTemplate = `
                  <img id="${itemRef}" class="is-stacked" src="${itemPic}">
              `;

    if (
      !$(target).is(".box-dropdown li, body") &&
      !$(target).parents().is(".box-dropdown")
    ) {
      $(".box-dropdown").removeClass("is-active");
    }
    if ($(target).is("body")) {
      $(".box-dropdown").removeClass("is-active");
    }

    //Handle dropdown item active state toggle
    $(this).toggleClass("is-active");
    console.log(skillTemplate);

    if ($(".stacked-combo-box li.is-active").length == 0) {
      $("#" + itemRef).remove();
      $("#img-placeholder").removeClass("is-hidden");
      $(this)
        .closest(".stacked-combo-box")
        .find(".selected-item")
        .text(initialText);
    } else {
      $("#img-placeholder").addClass("is-hidden");
      $(this).closest(".stacked-combo-box").find(".selected-item").text("");
      if ($("#" + itemRef).length) {
        $("#" + itemRef).remove();
      } else {
        $(this)
          .closest(".stacked-combo-box")
          .find(".combo-item")
          .prepend(skillTemplate);
      }
    }
  });
}
