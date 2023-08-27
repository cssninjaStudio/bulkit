/* ==========================================================================
Theme Switcher
========================================================================== */

'use strict'

function initThemeSwitcher() {
  //Base variables
  var classes =
    'is-theme-core is-theme-teal is-theme-green is-theme-blue is-theme-azur is-theme-night is-theme-purple is-theme-yellow is-theme-orange is-theme-red'

  var pxShow = 60
  var scrollSpeed = 500

  //Styleswitcher UI on scroll
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      $('#style-switcher').addClass('visible')
    } else {
      $('#style-switcher').removeClass('visible')
    }
  })

  //Styleswitcher event
  $('#style-switcher input').on('change', function () {
    var theme = $(this).attr('id')
    var stylesheet = $('#theme-sheet')

    //Update stylesheet
    stylesheet.attr('href', 'assets/css/' + theme + '.css')
    $('body')
      .removeClass(classes)
      .addClass('is-theme-' + theme)
    activeTheme = theme

    //Update themed images
    $('[data-base-url]').each(function () {
      var base = $(this).attr('data-base-url')
      var extension = $(this).attr('data-extension')

      $(this).attr('src', base + '-' + theme + extension)
    })

    //Update logos
    $('.switcher-logo').attr(
      'src',
      'assets/img/logos/logo/bulkit-' + theme + '.svg',
    )
    $('.switcher-logo-w').attr(
      'src',
      'assets/img/logos/logo/bulkit-' + theme + '-w.svg',
    )
    $('.switcher-logo-square').attr(
      'src',
      'assets/img/logos/logo/bulkit-square-' + theme + '.svg',
    )
  })

  //Get rid of style switcher
  $('.switcher-close').on('click', function () {
    $('#style-switcher').addClass('away')
  })

  if (env === 'development') {
    if ($('[data-page-theme]').length) {
      //Add fake overlay to smoothen theme transition
      var shadowOverlay = `
        <div class="shadow-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;pointer-events:none;z-index:9999;"></div>
      `
      $('body').append(shadowOverlay)

      //Get theme data
      var pageTheme = $('[data-page-theme]').attr('data-page-theme')
      var stylesheet = $('#theme-sheet')

      //Switch stylesheet
      stylesheet.attr('href', 'assets/css/' + pageTheme + '.css')
      $('body')
        .removeClass(classes)
        .addClass('is-theme-' + pageTheme)

      //Update theme global variable
      activeTheme = pageTheme

      //Switch themed images
      $('[data-base-url]').each(function () {
        var base = $(this).attr('data-base-url')
        var extension = $(this).attr('data-extension')
        $(this).attr('src', base + '-' + pageTheme + extension)
      })

      //Switch themed logos
      $('.switcher-logo').attr(
        'src',
        'assets/img/logos/logo/bulkit-' + pageTheme + '.svg',
      )
      $('.switcher-logo-w').attr(
        'src',
        'assets/img/logos/logo/bulkit-' + pageTheme + '-w.svg',
      )
      $('.switcher-logo-square').attr(
        'src',
        'assets/img/logos/logo/bulkit-square-' + pageTheme + '.svg',
      )

      //Update style switcher
      $('#style-switcher #' + pageTheme).prop('checked', true)
    }
  }
}
