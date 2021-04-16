/* ==========================================================================
Authentication
========================================================================== */

"use strict";

function initAuth() {
  $("#contacted").on("click", function () {
    $(this).addClass("is-hidden");
    $("#signup-form, #signup-intro").addClass("is-hidden");
    $("#back-to-signup, #contacted-form, #contacted-intro").removeClass(
      "is-hidden"
    );
  });

  $("#back-to-signup").on("click", function () {
    $(this).addClass("is-hidden");
    $("#contacted-form, #contacted-intro").addClass("is-hidden");
    $("#contacted, #signup-form, #signup-intro").removeClass("is-hidden");
  });

  $("#recover").on("click", function () {
    $(this).addClass("is-hidden");
    $("#signin-form").addClass("is-hidden");
    $("#back-to-login, #recover-form").removeClass("is-hidden");
  });

  $("#back-to-login").on("click", function () {
    $(this).addClass("is-hidden");
    $("#recover-form").addClass("is-hidden");
    $("#recover, #signin-form").removeClass("is-hidden");
  });

  $(".action-btn").on("click", function () {
    var $this = $(this);
    $this.addClass("is-loading");
    setTimeout(function () {
      if ($this.text() === "Register") {
        $this.removeClass("is-loading").html("Login");
      } else {
        $this.removeClass("is-loading").html("Register");
      }
      $(".form-wrapper").toggleClass("is-active");
    }, 1200);
  });
}
