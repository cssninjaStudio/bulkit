/***
TABLE OF CONTENTS
=============================================================================
0. Theme Variables
1. Global functions
2. Layout functions
3. Components | Tabs
4. Components | Cards
5. Components | Form Controls
6. Components | Popups
7. Components | Carousels
8. Components | Video
9. Components | Counters
10. Components | Accordions
11. Components | File Uploader
12. Components | Toasts
13. Components | Demo
14. Utility functions
15. Auth functions
16. Map Functions
17. Agency Functions
18. Landing Kit Functions
=============================================================================
***/

//Set environment variable (Used for development and editing)
/* 
    Possible values:
    1. development
    2. customization
*/
var env = 'development';

/* ==========================================================================
0. Theme Variables
========================================================================== */

var activeTheme = 'core';

var themes = {
    core: {
        primary: '#8c8cf9',
        secondary: '#7F00FF',
        accent: '#ad5cff',
    },
    purple: {
        primary: '#837FCB',
        secondary: '#5551a8',
        accent: '#6A3144',
    },
    teal: {
        primary: '#00D1B2',
        secondary: '#7F00FF',
        accent: '#536dfe',
    },
    green: {
        primary: '#00b289',
        secondary: '#00b289',
        accent: '#00b289',
    },
    azur: {
        primary: '#039be5',
        secondary: '#0084c4',
        accent: '#00D1B2',
    },
    blue: {
        primary: '#0f7cff',
        secondary: '#00edb1',
        accent: '#0062dd',
    },
    night: {
        primary: '#4A00E0',
        secondary: '#23a6d5',
        accent: '#8E2DE2',
    },
    yellow: {
        primary: '#f5c62c',
        secondary: '#8c8cf9',
        accent: '#fe8c00',
    },
    orange: {
        primary: '#f83600',
        secondary: '#8c8cf9',
        accent: '#fe8c00',
    },
    red: {
        primary: '#ff5555',
        secondary: '#ff3131',
        accent: '#1ddba5',
    }
}

/* ==========================================================================
1. Global functions
========================================================================== */

//Init pageloader
function initPageLoader() {
    $('.pageloader').toggleClass('is-active');
    $(window).on('load', function () {
        var pageloaderTimeout = setTimeout(function () {
            $('.pageloader').toggleClass('is-active');
            $('.infraloader').toggleClass('is-active')
            clearTimeout(pageloaderTimeout);
            setTimeout(function () {
                $('.rounded-hero').addClass('is-active');
            }, 350)
        }, 700);
    })
}

//Disable sidebar links in development
function disableSidebarLinks() {
    $('.navigation-menu .is-submenu').each(function () {
        $(this).attr('href', 'javascript:void(0);');
    })
}

//Change demo images
function changeDemoImages() {
    $('*[data-demo-src]').each(function () {
        var newSrc = $(this).attr('data-demo-src');
        if (newSrc !== undefined) {
            $(this).attr('src', newSrc);
        }
    });

    $('*[data-demo-background]').each(function () {
        var newBg = $(this).attr('data-demo-background');
        $(this).attr('data-background', newBg);
    });
}

/* ==========================================================================
2. Layout functions
========================================================================== */

//Init navbar
function initNavbar() {
    //Navbar fade
    if ($('.navbar-wrapper.navbar-fade.navbar-light').length) {
        $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
        $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
        $(window).on('scroll', function () {
            var height = $(window).scrollTop();
            if (height > 65) {
                $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent navbar-light').addClass('navbar-faded');
            } else {
                $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent navbar-light');
            }
        });
    }

    //Navbar fade
    if ($('.navbar-wrapper.navbar-fade.navbar-default').length) {
        $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
        $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
        $(window).on('scroll', function () {
            var height = $(window).scrollTop();
            if (height > 65) {
                $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent').addClass('navbar-faded');
            } else {
                $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent');
            }
        });
    }

    //Navbar Clone
    if ($('.is-cloned').length) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 50) {
                $(".is-cloned").addClass('is-active');
            } else {
                $(".is-cloned").removeClass('is-active');
            }
        });
    }

    //Toggle between light and dark logo when solid navbar comes in
    $(window).on('scroll', function () {
        var height = $(window).scrollTop();
        if (height > 80) {
            // $("img.light-logo").attr("src", "assets/img/logos/bulkit-logo.png");
        } else {
            //$("img.light-logo").attr("src", "assets/img/logos/bulkit-w.png");
        }
    });

    if ($('.navbar-light').length) {
        $(window).on('scroll', function () {
            var height = $(window).scrollTop();
            if (height > 80) {
                $('.button-signup').removeClass('light-btn').addClass('primary-btn');
            } else {
                $('.button-signup').removeClass('primary-btn').addClass('light-btn');
            }
        });
    }
}

//Init mobile menu
function initMobileMenu() {
    $('.custom-burger').on("click", function () {
        $(this).toggleClass('is-active');
        if ($(this).closest('.navbar').find('.navbar-menu').hasClass('is-active')) {
            $(this).closest('.navbar').find('.navbar-menu').removeClass('is-active');
            $(this).closest('.navbar-fade.navbar-light').removeClass('is-dark-mobile');
        } else {
            $(this).closest('.navbar').find('.navbar-menu').addClass('is-active');
            $(this).closest('.navbar-fade.navbar-light').addClass('is-dark-mobile');
        }
        //Revert navbar to initial color state
        if ($(this).closest('.navbar-faded').hasClass('is-dark-mobile')) {
            $(this).closest('.navbar-faded').removeClass('is-dark-mobile');
        }
        $(this).closest('.navbar.is-static').toggleClass('is-dark-mobile');
    });

    $('.custom-burger').on('click', function () {
        $(this).find('.icon-box-toggle').toggleClass('active');
    })
}

//Init navbar
function initLandingNavbar() {
    $(window).on('scroll', function () {
        var height = $(window).scrollTop();
        if (height > 65) {
            $(".navbar-landing").removeClass('is-faded');
            $('.navbar-landing').removeClass('is-mobile');
        } else {
            $(".navbar-landing").addClass('is-faded');
            if ($('.navbar-landing .navbar-menu').hasClass('is-active')) {
                $('.navbar-landing').addClass('is-mobile');
            }
        }
    });
}

//Mobile menu
function initLandingMobileMenu() {
    $('.navbar-landing .navbar-burger').on("click", function () {
        var testHeight = $(window).scrollTop();
        $(this).toggleClass('is-active');

        if (testHeight < 65) {
            if ($('.navbar-landing .navbar-menu').hasClass('is-active')) {
                $('.navbar-landing .navbar-brand img').toggleClass('is-hidden');
                $('.navbar-landing .navbar-menu').slideToggle().removeClass('is-active');
                setTimeout(function () {
                    $('.navbar-landing').removeClass('is-mobile');
                }, 400);
            } else {
                $('.navbar-landing .navbar-menu').slideToggle().addClass('is-active');
                $('.navbar.navbar-landing ').addClass('is-mobile');
                $('.navbar-landing .navbar-brand img').toggleClass('is-hidden');
            }
        } else {
            if ($('.navbar-landing .navbar-menu').hasClass('is-active')) {
                $('.navbar-landing .navbar-menu').slideToggle().removeClass('is-active');
            } else {
                $('.navbar-landing .navbar-menu').slideToggle().addClass('is-active');
            }
        }
    });
}


//Mobile navbar dropdown
function initNavbarDropdown() {
    $('.mobile-drop').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).find('.child-menu').slideToggle();
    })
}

//Init sidebar
function initSidebar() {
    //Website sidebar
    $(".navigation-menu > li.has-children a.parent-link").on("click", function (i) {
        i.preventDefault();
        if (!$(this).parent().hasClass("active")) {
            $(".navigation-menu li ul").slideUp();
            $(this).next().slideToggle();
            $(".navigation-menu li").removeClass("active");
            $(this).parent().addClass("active");
        }
        else {
            $(this).next().slideToggle();
            $(".navigation-menu li").removeClass("active");
        }
    });
    //sidebar category toggle
    $('.category-link').on("click", function () {
        $('.category-link.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })
    //Sidebar close button
    $('.hamburger-btn').on("click", function () {
        $('#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle').toggleClass('active');
    })
    //Menu buttons sync
    $('#navigation-trigger, .navigation-trigger, .navigation-close').on("click", function () {
        $('.side-navigation-menu').toggleClass('is-active');
    })
    //Data navigation menu setup
    $('.category-link').on("click", function () {
        var category_id = $(this).attr('data-navigation-menu');
        $('.navigation-menu-wrapper').addClass('is-hidden');
        $("#" + category_id).removeClass('is-hidden');
    })
    //Manage close links visibility to display only one at a time
    $('.side-navigation-menu').on("mouseenter", function () {
        $('#navigation-trigger').css('opacity', '0');
        $('.navigation-close').css('opacity', '1');
    })
    $('.side-navigation-menu').on("mouseleave", function () {
        $('#navigation-trigger').css('opacity', '1');
        $('.navigation-close').css('opacity', '0');
    })
}

//Back to top
function initBackToTop() {
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });
}

//Theme Switcher
function initThemeSwitcher() {

    var classes = 'is-theme-core is-theme-teal is-theme-green is-theme-blue is-theme-azur is-theme-night is-theme-purple is-theme-yellow is-theme-orange is-theme-red';

    var pxShow = 60;
    var scrollSpeed = 500;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= pxShow) {
            $("#style-switcher").addClass('visible');
        } else {
            $("#style-switcher").removeClass('visible');
        }
    });

    $('#style-switcher input').on('change', function () {
        var theme = $(this).attr('id');
        var stylesheet = $('#theme-sheet');
        stylesheet.attr('href', 'assets/css/' + theme + '.css');
        $('body').removeClass(classes).addClass('is-theme-' + theme);
        activeTheme = theme;

        $('[data-base-url]').each(function () {
            var base = $(this).attr('data-base-url');
            var extension = $(this).attr('data-extension');

            $(this).attr('src', base + '-' + theme + extension);
        })

        $('.switcher-logo').attr('src', 'assets/img/logos/logo/bulkit-' + theme + '.svg');
        $('.switcher-logo-w').attr('src', 'assets/img/logos/logo/bulkit-' + theme + '-w.svg');
        $('.switcher-logo-square').attr('src', 'assets/img/logos/logo/bulkit-square-' + theme + '.svg');
    });

    $('.switcher-close').on('click', function () {
        $('#style-switcher').addClass('away');
    })
}

//Init quickview
function initQuickview() {
    // Get all quickviews
    var showQuickview = document.querySelectorAll('[data-show="quickview"]');
    [].forEach.call(showQuickview, function (show) {
        var quickview = document.getElementById(show.dataset['target']);
        if (quickview) {
            // Add event listener to update output when quickview value change
            show.addEventListener('click', function (event) {
                quickview.classList.add('is-active');
            });
        }
    });

    // Get all quickviews
    var dismissQuickView = document.querySelectorAll('[data-dismiss="quickview"]');
    [].forEach.call(dismissQuickView, function (dismiss) {
        var quickview = closest(dismiss, '.quickview');
        if (quickview) {
            // Add event listener to update output when quickview value change
            dismiss.addEventListener('click', function (event) {
                quickview.classList.remove('is-active');
            });
        }
    });
}

//Quickview setup
function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}

/* ==========================================================================
3. Components | Tabs
========================================================================== */

//Vertical tabs
function initVerticalTabs() {
    $('.vertical-tabs-wrapper ul li').on('click', function () {
        var target = $(this).attr('data-target'); $(this).siblings('li').removeClass('is-active');
        $(this).addClass('is-active');
        $(this).closest('.vertical-tabs-wrapper').find('.tab-content').removeClass('is-active');
        $('#' + target).addClass('is-active');
    })
}

//Tabs nav
function initTabsNav() {
    var $tabsNav = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li');

    $tabsNav.each(function () {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true, true).hide().first().show();
    });

    $tabsNavLis.on('click', function (e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end().addClass('active');
        $this.parent().next().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
        e.preventDefault();
    });

    var hash = window.location.hash;
    var anchor = $('.tabs-nav a[href="' + hash + '"]');

    if (anchor.length === 0) {
        $(".tabs-nav li:first").addClass("active").show();
        $(".tab-content:first").show();
    } else {
        anchor.parent('li').click();
    }
}

//Navigation tabs
function initNavigationTabs() {
    $('.navigation-tabs ul li').on('click', function () {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings('li').removeClass('is-active');
        $(this).closest('.navigation-tabs').children('.navtab-content').removeClass('is-active');
        //$('.navtab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#" + tab_id).addClass('is-active');
    })
}

/* ==========================================================================
4. Components | Cards
========================================================================== */

//Init Media cards
function initMediaCards() {
    if ($('.media-card-image').length) {
        $(".media-card-image").each(function () {
            var mediaCardImage = $(this).attr('data-background');
            if (mediaCardImage !== undefined) {
                $(this).css('background-image', 'url(' + mediaCardImage + ')');
            }
        }
        )
    }
}

/* ==========================================================================
5. Components | Form Controls
========================================================================== */

//Datepicker (date dropper)
function initDatepicker() {
    if ($('#is-datepicker').length) {
        $('#is-datepicker').dateDropper();
    }
}

//Timepicker (time dropper)
function initTimepicker() {
    if ($('#is-timepicker').length) {
        $('#is-timepicker').timeDropper({
            primaryColor: '#4FC1EA',
            borderColor: "#4FC1EA",
            backgroundColor: "#FFF",
            init_animation: 'fadeIn',
        });
    }
}

//Datepicker (fengyuanchen)
function initDatepickerAlt() {
    $('[data-toggle="datepicker"]').datepicker();
}

//Chosen selects
function initChosenSelects() {
    //Chosen select init
    if ($('.chosen-select').length) {
        $(".chosen-select").chosen({
            disable_search_threshold: 6,
            width: '100%'
        });
    }

    //Chosen select multiple init
    if ($('.chosen-multiple').length) {
        $(".chosen-multiple").chosen({
            disable_search_threshold: 10,
            max_selected_options: 5,
            width: '100%'
        });
    }
}

//Material select
function initMaterialSelect() {
    if ($('.material-select').length) {
        $('.material-select .material-input').on('focus', function () {
            $(this).closest('.material-select').addClass('is-active');
        })
        $('.material-select .dropdown-list .option').on('click', function () {
            var optionName = $(this).text();
            console.log(optionName);
            $(this).siblings('.option').removeClass('selected');
            $(this).addClass('selected');
            $(this).closest('.material-select').find('.material-input').val(optionName);
            $(this).closest('.material-select').removeClass('is-active').addClass('has-value');
        })
        $(document).click(function (e) {
            var target = e.target;
            if (!$(target).is('.material-select') && !$(target).parents().is('.field')) {
                $('.material-select').removeClass('is-active');
            }
        });
    }
}

//Autocompletes
function initAutocompletes() {
    //Basic autocomplete
    if ($('#basic-autocpl').length) {
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
                    callback: function () { }
                },
                match: {
                    enabled: true
                }
            },
        };

        $("#basic-autocpl").easyAutocomplete(options);
    }

    //Description autocomplete
    if ($('#desc-autocpl').length) {
        var options = {
            url: "assets/data/persons.json",
            getValue: function (element) {
                return element.name;
            },
            template: {
                type: "description",
                fields: {
                    description: "position"
                }
            },
            highlightPhrase: false,
            list: {
                maxNumberOfElements: 5,
                showAnimation: {
                    type: "fade", //normal|slide|fade
                    time: 400,
                    callback: function () { }
                },
                match: {
                    enabled: true
                }
            },
        };

        $("#desc-autocpl").easyAutocomplete(options);
    }

    //Users autocomplete
    if ($('#users-autocpl').length) {
        var usersOptions = {
            url: "assets/data/persons.json",
            getValue: "name",
            template: {
                type: "custom",
                method: function (value, item) {
                    return "<div class=" + 'template-wrapper' + "><img class=" + 'autocpl-avatar' + " src='" + item.pic + "' /><div class=" + 'entry-text' + ">" + value + "<br><span>" + item.email + "</span></div></div> ";
                }
            },
            highlightPhrase: false,
            list: {
                maxNumberOfElements: 3,
                showAnimation: {
                    type: "fade", //normal|slide|fade
                    time: 400,
                    callback: function () { }
                },
                match: {
                    enabled: true
                }
            },
        };

        $("#users-autocpl").easyAutocomplete(usersOptions);
    }
}

//File inputs
function initFileInputs() {
    //declare variables
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        //listen to changes
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

    var inputField = document.querySelectorAll('.field-input')

    for (var i = 0, len = inputField.length; i < len; i++) {
        customInput(inputField[i])
    }
    //Create custom input
    function customInput(el) {
        const fileInput = el.querySelector('[type="file"]')
        const label = el.querySelector('[data-js-label]')

        fileInput.onchange =
            fileInput.onmouseout = function () {
                if (!fileInput.value) return

                var value = fileInput.value.replace(/^.*[\\\/]/, '')
                el.className += ' -chosen'
                label.innerText = value
            }
    }
}

//Init special range input
function initRangeInput() {
    if ($('#input-range').length) {

        var input = $('#input-range');

        input.bind('input', function () {
            getRangeValue(input);
        }).bind('change', function () {
            getRangeValue(input);	/* for IE */
        });

        function getRangeValue(e) {
            var value = $(e).val();
            $('.value').text(value);
            $('.range').attr('data-value', value);
            input.attr('value', value);
        }

    }
}

//jQuery tag input
function initJqueryTagInput() {
    if ($('.tag-input').length) {
        $('.tag-input').tagsInput({
            'width': '100%',
            'height': '120px',
            'defaultText': 'Add a tag',
            'placeholderColor': '#999'
        });
    }
}

//Bulma tags
function initBulmaTags() {
    if ($('.bulma-tags').length) {
        bulmaTagsinput.attach();
    }
}

//Bulma steps
function initBulmaSteps() {
    if ($('.steps-wrapper').length) {
        bulmaSteps.attach();
    }
}

//Bulma Iconpicker
function initBulmaIconpicker() {
    if ($('.iconpicker-wrapper').length) {
        bulmaIconpicker.attach();
    }
}

//Bulma Calendar extension
function initBulmaCalendar() {
    if ($('#calendar-demo').length) {
        bulmaCalendar.attach('#datepickerDemoDefault', {
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datepickerDemoDialog', {
            displayMode: 'dialog',
            startDate: new Date('02/11/2018'),
            minDate: '01/01/2018',
            maxDate: '12/31/2018',
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datepickerDemoInline', {
            displayMode: 'inline',
            startDate: new Date('02/11/2018'),
            minDate: '01/01/2018',
            maxDate: '12/31/2018',
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datepickerDemoRange', {
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#timepickerDemoDefault', {
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#timepickerDemoRange', {
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#timepickerDemoInline', {
            displayMode: 'inline',
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datetimepickerDemoDefault', {
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datetimepickerDemoDialog', {
            displayMode: 'dialog',
            startDate: new Date('02/11/2018'),
            minDate: '01/01/2018',
            maxDate: '12/31/2018',
            color: '#7F00FF',
            lang: 'en'
        });

        bulmaCalendar.attach('#datetimepickerDemoInline', {
            displayMode: 'inline',
            startDate: new Date('02/11/2018'),
            minDate: '01/01/2018',
            maxDate: '12/31/2018',
            color: '#7F00FF',
            lang: 'en'
        });
    }
}

//Simple combo box
function initComboBox() {
    $('.is-combo .combo-box').on('click', function () {
        $(this).toggleClass('is-active');
    })

    $('.combo-box .box-dropdown li').on('click', function (e) {

        var target = e.target;
        //Get selected item data
        var itemIconClass = $(this).find('.item-icon i').attr('class');
        var itemIcon = $(this).find('.item-icon i');
        var itemIconClass = $(this).find('.item-icon i').attr('class');
        var itemSvgIcon = $(this).find('.item-icon').html();
        var itemName = $(this).find('.item-name').text();
        var iconTemplate = '<i class="' + itemIconClass + '"></i>'
        var template = '';

        console.log(itemSvgIcon);

        if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
            $('.box-dropdown').removeClass('is-active');
        }
        if ($(target).is('body')) {
            $('.box-dropdown').removeClass('is-active');
        }

        //Handle dropdown item active state toggle
        $(this).siblings('li.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        //Update combo box selected value
        if (itemIcon.length) {
            $(this).closest('.combo-box').find('.combo-item i').remove();
            $(this).closest('.combo-box').find('.combo-item svg').remove();
            $(this).closest('.combo-box').find('.combo-item').prepend(iconTemplate);
            $(this).closest('.combo-box').find('.combo-item .selected-item').text(itemName);
        } else {
            $(this).closest('.combo-box').find('.combo-item i').remove();
            $(this).closest('.combo-box').find('.combo-item').prepend(itemSvgIcon);
            $(this).closest('.combo-box').find('.combo-item .selected-item').text(itemName);
        }
    });
}

//Image combo box
function initImageComboBox() {
    $('.is-combo .image-combo-box').on('click', function () {
        $(this).toggleClass('is-active');
    })

    $('.image-combo-box .box-dropdown li').on('click', function (e) {

        var target = e.target;
        //Get selected item data
        var itemPic = $(this).find('.item-icon img').attr('src');
        var itemName = $(this).find('.item-name').text();

        if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
            $('.box-dropdown').removeClass('is-active');
        }
        if ($(target).is('body')) {
            $('.box-dropdown').removeClass('is-active');
        }

        //Handle dropdown item active state toggle
        $(this).siblings('li.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        //Update combo box selected value
        $(this).closest('.image-combo-box').find('.combo-item img').attr('src', itemPic);
        $(this).closest('.image-combo-box').find('.combo-item .selected-item').text(itemName);
    })
}

//Stacked Combo box
function initStackedComboBox() {
    $('.is-combo .stacked-combo-box').on('click', function () {
        $(this).toggleClass('is-active');
    })

    $('.stacked-combo-box .box-dropdown li').on('click', function (e) {
        var target = e.target;
        //Get selected item data
        var itemPic = $(this).find('.item-icon img').attr('src');
        var itemName = $(this).find('.item-name').text();
        var itemRef = $(this).attr('data-skill');
        var initialText = 'Select one or more skills';

        var skillTemplate = `
                    <img id="${itemRef}" class="is-stacked" src="${itemPic}">
                `

        if (!$(target).is('.box-dropdown li, body') && !$(target).parents().is('.box-dropdown')) {
            $('.box-dropdown').removeClass('is-active');
        }
        if ($(target).is('body')) {
            $('.box-dropdown').removeClass('is-active');
        }

        //Handle dropdown item active state toggle
        $(this).toggleClass('is-active');
        console.log(skillTemplate);

        if (($('.stacked-combo-box li.is-active').length) == 0) {
            $('#' + itemRef).remove();
            $('#img-placeholder').removeClass('is-hidden');
            $(this).closest('.stacked-combo-box').find('.selected-item').text(initialText);
        } else {
            $('#img-placeholder').addClass('is-hidden');
            $(this).closest('.stacked-combo-box').find('.selected-item').text('');
            if ($('#' + itemRef).length) {
                $('#' + itemRef).remove();
            } else {
                $(this).closest('.stacked-combo-box').find('.combo-item').prepend(skillTemplate);
            }
        }
    })
}

//Range inputs
// Find output DOM associated to the DOM element passed as parameter
function findOutputForSlider(element) {
    var idVal = element.id;
    var outputs = document.getElementsByTagName('output');
    for (var i = 0; i < outputs.length; i++) {
        if (outputs[i].htmlFor == idVal)
            return outputs[i];
    }
}

function getSliderOutputPosition(slider) {
    // Update output position
    var newPlace,
        minValue;

    var style = window.getComputedStyle(slider, null);
    // Measure width of range input
    var sliderWidth = parseInt(style.getPropertyValue('width'), 10);

    // Figure out placement percentage between left and right of input
    if (!slider.getAttribute('min')) {
        minValue = 0;
    } else {
        minValue = slider.getAttribute('min');
    }
    var newPoint = (slider.value - minValue) / (slider.getAttribute('max') - minValue);

    // Prevent bubble from going beyond left or right (unsupported browsers)
    if (newPoint < 0) {
        newPlace = 0;
    } else if (newPoint > 1) {
        newPlace = sliderWidth;
    } else {
        newPlace = sliderWidth * newPoint;
    }

    return {
        'position': newPlace - 20 + 'px'
    }
}

function initRangeInputs() {
    var sliders = document.querySelectorAll('input[type="range"].slider');
    [].forEach.call(sliders, function (slider) {
        var output = findOutputForSlider(slider);
        if (output) {
            if (slider.classList.contains('has-output-tooltip')) {
                // Get new output position
                var newPosition = getSliderOutputPosition(slider);

                // Set output position
                output.style['left'] = newPosition.position;
            }

            // Add event listener to update output when slider value change
            slider.addEventListener('input', function (event) {
                if (event.target.classList.contains('has-output-tooltip')) {
                    // Get new output position
                    var newPosition = getSliderOutputPosition(event.target);

                    // Set output position
                    output.style['left'] = newPosition.position;
                }

                // Update output with slider value
                output.value = event.target.value;
            });
        }
    });
}

//Jobs Search Box
function initSearchBox() {
    $('.price-block a').on('click', function () {
        $('.price-block').find('.dropdown-container').toggleClass('is-open');
    });
}

/* ==========================================================================
6. Components | Popups
========================================================================== */

//Popovers
function initPopovers() {
    if ($('[data-toggle="popover"]').length) {
        $('[data-toggle="popover"]').ggpopover();
    }
}

//Tooltips
function initTooltips() {
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').ggtooltip();
    }
}

//Modals
function initModals() {
    //main variable
    var modalID;

    //Triggering a modal
    $('.modal-trigger').on("click", function () {
        modalID = $(this).attr('data-modal');
        $('#' + modalID).toggleClass('is-active');
        $('#' + modalID + ' .modal-background').toggleClass('scaleInCircle');
        $('#' + modalID + ' .modal-content').toggleClass('scaleIn');
        $('#' + modalID + ' .modal-close').toggleClass('is-hidden');
        //Prevent sticky fixed nav and backtotop from overlapping modal
        $('#scrollnav, #backtotop').toggleClass('is-hidden');
        //Prevent body from scrolling when scrolling inside modal
        setTimeout(function () {
            if ($('.dashboard-wrapper').length) {
                $('body').addClass('is-fixed');
            }
        }, 700);
    });

    //Closing a modal
    $('.modal-close, .modal-dismiss').on("click", function () {
        $('#' + modalID + ' .modal-background').toggleClass('scaleInCircle');
        $('#' + modalID + ' .modal-content').toggleClass('scaleIn');
        $('#' + modalID + ' .modal-close').toggleClass('is-hidden');
        //Restore native body scroll
        if ($('.dashboard-wrapper').length) {
            $('body').removeClass('is-fixed');
        }
        setTimeout(function () {
            $('.modal.is-active').removeClass('is-active');
            //Restore sticky nav and backktotop
            $('#scrollnav, #backtotop').toggleClass('is-hidden');

        }, 500);
    })

    //Modal user select toggle
    $('.modal-card-body .card-select i').on("click", function () {
        $(this).toggleClass('is-active');
        $(this).closest('.flex-card').toggleClass('is-active');
        $('.save-btn').removeClass('is-disabled');
    })

    //Modal image gallery with slick carousel
    $('.modal-trigger.gallery-trigger').on("click", function () {
        //Prevents carousel from initiating on a non loaded image
        setTimeout(function () {
            $('.slick-gallery').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                autoplay: true,
                infinite: false
            });
        }, 100);
    })

    //Success message modal
    if ($('#success-icon').length) {
        var resetSuccess = $('#success-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.success-trigger').on("click", function () {
            setTimeout(function () {
                new Vivus('success-icon', {
                    type: 'oneByOne',
                    duration: 60,
                    delay: 300,
                    animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                    selfDestroy: true,
                    file: 'assets/img/graphics/icons/modals/success.svg'
                });
            }, 300);
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function () {
            $('#success-icon svg').replaceWith(resetSuccess);
        })
    }
    //Error message modal
    if ($('#error-icon').length) {
        var resetError = $('#error-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.error-trigger').on("click", function () {
            setTimeout(function () {
                new Vivus('error-icon', {
                    type: 'oneByOne',
                    duration: 60,
                    animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                    selfDestroy: true,
                    file: 'assets/img/graphics/icons/modals/error.svg'
                });
            }, 300);
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function () {
            $('#error-icon svg').replaceWith(resetError);
        })
    }
    //Warning message modal
    if ($('#warning-icon').length) {
        var resetWarning = $('#warning-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.warning-trigger').on("click", function () {
            setTimeout(function () {
                new Vivus('warning-icon', {
                    type: 'oneByOne',
                    duration: 60,
                    animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                    selfDestroy: true,
                    file: 'assets/img/graphics/icons/modals/warning.svg'
                });
            }, 300);
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function () {
            $('#warning-icon svg').replaceWith(resetWarning);
        })
    }
    //Info message modal
    if ($('#info-icon').length) {
        var resetInfo = $('#info-icon svg');//declare element to reset it at modal close
        //trigger svg animation
        $('.info-trigger').on("click", function () {
            setTimeout(function () {
                new Vivus('info-icon', {
                    type: 'oneByOne',
                    duration: 60,
                    animTimingFunction: Vivus.EASE_OUT_BOUNCE,
                    selfDestroy: true,
                    file: 'assets/img/graphics/icons/modals/info.svg'
                });
            }, 1000);
        })
        //Reset element with initial clone
        $('.modal-close, .modal-dismiss').on("click", function () {
            $('#info-icon svg').replaceWith(resetInfo);
        })
    }
}

/* ==========================================================================
7. Components | Carousels
========================================================================== */

//Basic slick carousel (testimonials)
function initBasicCarousel() {
    if ($('.testimonials').length) {
        $('.testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            autoplay: true,

        });
    }
}

//Vertical slick carousel (vertical testimonials)
function initVerticalCarousel() {
    if ($('.vertical-testimonials').length) {
        $('.vertical-testimonials').slick({
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
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,

        });
    }
}

//Flat slick carousel
function initFlatCarousel() {
    if ($('.flat-testimonials').length) {
        $('.flat-testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
        });
    }
}

//Image carousel
function initImageCarousel() {
    if ($('.image-carousel').length) {
        $('.image-carousel').slick({
            centerMode: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: '60px',
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}

//Single image carousel
function initSingleImageCarousel() {
    if ($('.single-image-carousel').length) {
        $('.single-image-carousel').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        //centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        //centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}

//Multiple images carousel
function initMultipleImagesCarousel() {
    if ($('.multiple-image-carousel').length) {
        $('.multiple-image-carousel').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
}

/* ==========================================================================
8. Components | Video
========================================================================== */

//Video Embed
function initVideoEmbed() {
    if ($('#video-embed').length) {
        embedVideo('#video-embed');
    }
}

//Background video
function initBackgroundVideo() {
    if ($('.covervid-video').length) {
        $('.covervid-video').coverVid(1920, 1080);
    }
}

//Custom Plyr Players
function initPlayers() {
    if ($('.bulkit-player').length) {
        if (env === 'development') {
            $('[data-demo-poster]').each(function () {
                var poster = $(this).attr('data-demo-poster');
                if (poster !== undefined) {
                    $(this).attr('data-poster', poster);
                }
            });
            const players = Array.from(document.querySelectorAll('.bulkit-player')).map(p => new Plyr(p));
        } else {
            const players = Array.from(document.querySelectorAll('.bulkit-player')).map(p => new Plyr(p));
        }

    }
}

/* ==========================================================================
9. Components | Counters
========================================================================== */

//Counters
function initCounters() {
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
}

/* ==========================================================================
10. Components | Accordions
========================================================================== */

//Simple Accordion
function initSimpleAccordion() {
    $(".accordion-section > a").on("click", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.accordion-content').slideUp(200);
            $(".accordion-section > a i").removeClass("fa-minus").addClass("fa-plus");
        }
        else {
            $(".accordion-section > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".accordion-section > a").removeClass("active");
            $(this).addClass("active");
            $('.accordion-content').slideUp(200);
            $(this).siblings('.accordion-content').slideDown(200);
        }

    });
}

//Accordions
function initAccordions() {
    var $accor = $('.accordion');
    $accor.each(function () {
        $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
        $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
        $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
        $(this).find("div").hide();
    });
    var $trigger = $accor.find('h3');
    $trigger.on('click', function (e) {
        var location = $(this).parent();
        if ($(this).next().is(':hidden')) {
            var $triggerloc = $('h3', location);
            $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
            $triggerloc.find('span').removeClass('ui-accordion-icon-active');
            $(this).find('span').addClass('ui-accordion-icon-active');
            $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
        }
        e.preventDefault();
    });
    $(".toggle-container").hide();
    $('.trigger, .trigger.opened').on('click', function (a) {
        $(this).toggleClass('active');
        a.preventDefault();
    });
    $(".trigger").on('click', function () {
        $(this).next(".toggle-container").slideToggle(300);
    });
    $(".trigger.opened").addClass("active").next(".toggle-container").show();
}


/* ==========================================================================
11. Components | File Uploader
========================================================================== */

function initFileUploader() {
    // One button theme
    $('input[name="onebutton"]').fileuploader({
        theme: 'onebutton'
    });

    // Field theme
    $('input[name="fielduploader"]').fileuploader({
        addMore: true
    });

    // Thumbnails theme
    $('input[name="thumbnails"]').fileuploader({
        extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
        changeInput: ' ',
        theme: 'thumbnails',
        enableApi: true,
        addMore: true,
        thumbnails: {
            box: '<div class="fileuploader-items">' +
                '<ul class="fileuploader-items-list">' +
                '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner"><span>+</span></div></li>' +
                '</ul>' +
                '</div>',
            item: '<li class="fileuploader-item">' +
                '<div class="fileuploader-item-inner">' +
                '<div class="thumbnail-holder">${image}</div>' +
                '<div class="actions-holder">' +
                '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
                '<span class="fileuploader-action-popup"></span>' +
                '</div>' +
                '<div class="progress-holder">${progressBar}</div>' +
                '</div>' +
                '</li>',
            item2: '<li class="fileuploader-item">' +
                '<div class="fileuploader-item-inner">' +
                '<div class="thumbnail-holder">${image}</div>' +
                '<div class="actions-holder">' +
                '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i class="remove"></i></a>' +
                '<span class="fileuploader-action-popup"></span>' +
                '</div>' +
                '</div>' +
                '</li>',
            startImageRenderer: true,
            canvasImage: false,
            _selectors: {
                list: '.fileuploader-items-list',
                item: '.fileuploader-item',
                start: '.fileuploader-action-start',
                retry: '.fileuploader-action-retry',
                remove: '.fileuploader-action-remove'
            },
            onItemShow: function (item, listEl) {
                var plusInput = listEl.find('.fileuploader-thumbnails-input');

                plusInput.insertAfter(item.html);

                if (item.format == 'image') {
                    item.html.find('.fileuploader-item-icon').hide();
                }
            }
        },
        afterRender: function (listEl, parentEl, newInputEl, inputEl) {
            var plusInput = listEl.find('.fileuploader-thumbnails-input'),
                api = $.fileuploader.getInstance(inputEl.get(0));

            plusInput.on('click', function () {
                api.open();
            });
        },
        /*
        // while using upload option, please set
        // startImageRenderer: false
        // for a better effect
        upload: {
            url: './php/upload_file.php',
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            synchron: true,
            beforeSend: null,
            onSuccess: function(data, item) {
                setTimeout(function() {
                    item.html.find('.progress-holder').hide();
                    item.renderThumbnail();
                }, 400);
            },
            onError: function(item) {
                item.html.find('.progress-holder').hide();
                item.html.find('.fileuploader-item-icon i').text('Failed!');
            },
            onProgress: function(data, item) {
                var progressBar = item.html.find('.progress-holder');

                if(progressBar.length > 0) {
                    progressBar.show();
                    progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                }
            }
        },
        dragDrop: {
            container: '.fileuploader-thumbnails-input'
        },
        onRemove: function(item) {
            $.post('php/upload_remove.php', {
                file: item.name
            });
        },
        */
    });

    // enable fileuploader plugin
    $('input[name="dragndrop"]').fileuploader({
        changeInput: '<div class="fileuploader-input">' +
            '<div class="fileuploader-input-inner">' +
            '<img src="assets/img/fileuploader-dragdrop-icon.png">' +
            '<h3 class="fileuploader-input-caption"><span>Drag and drop invoices here</span></h3>' +
            '<p>or</p>' +
            '<div class="fileuploader-input-button"><span>Browse Files</span></div>' +
            '</div>' +
            '</div>',
        theme: 'dragdrop',
        upload: {
            //url: 'php/ajax_upload_file.php',
            url: 'php/ajax_upload_file.php',
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            synchron: true,
            beforeSend: null,
            onSuccess: function (result, item) {
                var data = {};

                try {
                    data = JSON.parse(result);
                } catch (e) {
                    data.hasWarnings = true;
                }

                // if success
                if (data.isSuccess && data.files[0]) {
                    item.name = data.files[0].name;
                    item.html.find('.column-title > div:first-child').text(data.files[0].name).attr('title', data.files[0].name);
                }

                // if warnings
                if (data.hasWarnings) {
                    for (var warning in data.warnings) {
                        alert(data.warnings);
                    }

                    item.html.removeClass('upload-successful').addClass('upload-failed');
                    // go out from success function by calling onError function
                    // in this case we have a animation there
                    // you can also response in PHP with 404
                    return this.onError ? this.onError(item) : null;
                }

                item.html.find('.column-actions').append('<a class="fileuploader-action fileuploader-action-remove fileuploader-action-success" title="Remove"><i></i></a>');
                setTimeout(function () {
                    item.html.find('.progress-bar2').fadeOut(400);
                }, 400);
            },
            onError: function (item) {
                var progressBar = item.html.find('.progress-bar2');

                if (progressBar.length > 0) {
                    progressBar.find('span').html(0 + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
                    item.html.find('.progress-bar2').fadeOut(400);
                }

                item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
                    '<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
                ) : null;
            },
            onProgress: function (data, item) {
                var progressBar = item.html.find('.progress-bar2');

                if (progressBar.length > 0) {
                    progressBar.show();
                    progressBar.find('span').html(data.percentage + "%");
                    progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                }
            },
            onComplete: null,
        },
        onRemove: function (item) {
            $.post('./php/ajax_remove_file.php', {
                file: item.name
            });
        },
        captions: {
            feedback: 'Drag and drop files here',
            feedback2: 'Drag and drop files here',
            drop: 'Drag and drop files here'
        },
    });
}


/* ==========================================================================
12. Components | Toasts
========================================================================== */

function initToasts() {
    $('#top-left-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'topLeft',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#top-center-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'topCenter',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#top-right-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'topRight',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#center-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'center',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#bottom-left-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'bottomLeft',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#bottom-center-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'bottomCenter',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#bottom-right-toast').on("click", function () {
        iziToast.show({
            title: 'Hello,',
            message: 'Iam a very simple Toast !',
            position: 'bottomRight',
            zindex: 99999,
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#8c8cf9',
        });
    })

    $('#info-toast').on("click", function () {
        iziToast.show({
            class: 'info-toast',
            icon: 'sl sl-icon-info',
            title: 'Hello,',
            message: 'This is an info notification !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#039BE5',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#success-toast').on("click", function () {
        iziToast.show({
            class: 'success-toast',
            icon: 'sl sl-icon-check',
            title: 'Hello,',
            message: 'This is a success notification !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#00b289',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#warning-toast').on("click", function () {
        iziToast.show({
            class: 'warning-toast',
            icon: 'sl sl-icon-lock',
            title: 'Hello,',
            message: 'This is a warning notification !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#eda514',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#danger-toast').on("click", function () {
        iziToast.show({
            class: 'danger-toast',
            icon: 'sl sl-icon-close',
            title: 'Hello,',
            message: 'This is a danger notification !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#FF7273',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#fade-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeIn',
            transitionOut: 'fadeOut',
            close: false,
            zindex: 99999,
        });
    })

    $('#fadeUp-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInUp',
            transitionOut: 'fadeOutUp',
            close: false,
            zindex: 99999,
        });
    })

    $('#fadeDown-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInDown',
            transitionOut: 'fadeOutDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#fadeLeft-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInLeft',
            transitionOut: 'fadeOutLeft',
            close: false,
            zindex: 99999,
        });
    })

    $('#fadeRight-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'fadeInRight',
            transitionOut: 'fadeOutRight',
            close: false,
            zindex: 99999,
        });
    })

    $('#bounceUp-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'bounceInUp',
            transitionOut: 'bounceOutUp',
            close: false,
            zindex: 99999,
        });
    })

    $('#bounceDown-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'bounceInDown',
            transitionOut: 'bounceOutDown',
            close: false,
            zindex: 99999,
        });
    })

    $('#bounceLeft-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'bounceInLeft',
            transitionOut: 'bounceOutLeft',
            close: false,
            zindex: 99999,
        });
    })

    $('#bounceRight-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'bounceInRight',
            transitionOut: 'bounceOutRight',
            close: false,
            zindex: 99999,
        });
    })

    $('#flip-toast').on("click", function () {
        iziToast.show({
            icon: 'sl sl-icon-rocket',
            title: 'Hello,',
            message: 'This is an animated Toast !',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'topRight',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            close: false,
            zindex: 99999,
        });
    })

    $('#question-toast').on("click", function () {
        iziToast.show({
            timeout: 10000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: 'question',
            zindex: 999,
            title: 'Hey,',
            message: 'Are you sure about that?',
            titleColor: '#fff',
            messageColor: '#fff',
            iconColor: "#fff",
            backgroundColor: '#7F00FF',
            progressBarColor: '#444F60',
            position: 'center',
            buttons: [
                ['<button class="button btn-align is-small light-btn btn-outlined"><b class="light-text">YES</b></button>', function (instance, toast) {

                    instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');

                    iziToast.show({
                        class: 'success-toast',
                        title: '',
                        message: 'Successfully saved modifications !',
                        titleColor: '#fff',
                        messageColor: '#fff',
                        backgroundColor: '#00b289',
                        progressBarColor: '#444F60',
                        position: 'center',
                        transitionIn: 'fadeInDown',
                        close: false,
                        zindex: 99999,
                        timeout: 1500,
                        pauseOnHover: false,
                    });

                }, true],
                ['<button class="button btn-align is-small light-btn btn-outlined"><b class="light-text">NO</b></button>', function (instance, toast) {

                    instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');

                }]
            ],
            onClosing: function (instance, toast, closedBy) {
                // console.info('Closing | closedBy: ' + closedBy);
            },
            onClosed: function (instance, toast, closedBy) {
                console.info('Closed | closedBy: ' + closedBy);
            }
        });
    })

    $('#balloon-toast').on("click", function () {
        iziToast.show({
            id: 'show',
            title: 'Hey',
            icon: 'icon-drafts',
            class: 'custom1',
            titleColor: '#fff',
            theme: 'dark',
            progressBarColor: '#4FC1EA',
            message: 'This is a Balloon example with buttons',
            position: 'center',
            image: 'assets/img/avatars/funny1.svg',
            balloon: true,
            buttons: [
                ['<button>Photo</button>', function (instance, toast) {

                    // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                    iziToast.show({
                        theme: 'dark',
                        icon: 'fa fa-photo',
                        title: 'OK',
                        message: 'Callback Photo!',
                        position: 'bottomCenter',
                        // iconText: 'star',
                    });

                }, true],
                ['<button>Video</button>', function (instance, toast) {

                    // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                    iziToast.show({
                        theme: 'dark',
                        icon: 'fa fa-video-camera',
                        title: 'OK',
                        message: 'Callback Video!',
                        position: 'bottomCenter',
                        // iconText: 'star',
                    });

                }],
                ['<button>Text</button>', function (instance, toast) {

                    // instance.hide({ transitionOut: 'fadeOutUp' }, toast);

                    iziToast.show({
                        theme: 'dark',
                        icon: 'fa fa-pencil',
                        title: 'OK',
                        message: 'Callback Text!',
                        position: 'bottomCenter',
                        // iconText: 'star',
                    });

                }]
            ]
        });
    })

    $('#custom-toast').on("click", function () {
        iziToast.show({
            theme: 'dark',
            icon: 'fa fa-envelope',
            title: 'Helen Miller',
            message: 'Sent you <b>3</b> new messages',
            position: 'topCenter',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            progressBarColor: '#4FC1EA',
            image: 'assets/img/avatars/funny2.svg',
            imageWidth: 70,
            layout: 2,
            onClosing: function () {
                console.info('onClosing');
            },
            onClosed: function (instance, toast, closedBy) {
                console.info('Closed | closedBy: ' + closedBy);
            },
            iconColor: '#fff'
        });
    })
}


/* ==========================================================================
13. Components | Demo
========================================================================== */

//Init demo functions
function initDemo() {
    //Code highlight init
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    //Scrollspy nav init
    if ($('#scrollnav').length) {
        var sticky = new Waypoint.Sticky({
            element: $('#scrollnav')[0]
        })
        $(".scrollnav-tabs").scrollspy({
            offset: -25,
            activeClass: 'is-active'
        });
    }

    //Show and hide code accordion
    $('.accordion-wrapper .trigger a').on("click", function () {
        $(this).html('<i class="im im-icon-Coding is-icon-2x"></i> HIDE CODE<i class="im im-icon-Add"></i>');
        $('.trigger.active a').html('<i class="im im-icon-Coding is-icon-2x"></i> SHOW CODE<i class="im im-icon-Add"></i>');
    })

    //Animated Vivus svg hero illustrations for component pages
    if ($('#buttons').length) {
        //trigger svg animations
        new Vivus('buttons', {
            duration: 300,
            file: 'assets/img/graphics/components//buttons.svg'
        });
    }
    if ($('#tabs-ill').length) {
        //trigger svg animations
        new Vivus('tabs-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//tabs.svg'
        });
    }
    if ($('#inputs-ill').length) {
        //trigger svg animations
        new Vivus('inputs-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//inputs.svg'
        });
    }
    if ($('#cards-ill').length) {
        //trigger svg animations
        new Vivus('cards-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//cards.svg'
        });
    }
    if ($('#modals-ill').length) {
        //trigger svg animations
        new Vivus('modals-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//modals.svg'
        });
    }
    if ($('#accordion-ill').length) {
        //trigger svg animations
        new Vivus('accordion-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//accordion.svg'
        });
    }
    if ($('#dropdowns-ill').length) {
        //trigger svg animations
        new Vivus('dropdowns-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//dropdowns.svg'
        });
    }
    if ($('#lists-ill').length) {
        //trigger svg animations
        new Vivus('lists-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//lists.svg'
        });
    }
    if ($('#badges-ill').length) {
        //trigger svg animations
        new Vivus('badges-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//badges.svg'
        });
    }
    if ($('#popups-ill').length) {
        //trigger svg animations
        new Vivus('popups-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//popups.svg'
        });
    }
    if ($('#tables-ill').length) {
        //trigger svg animations
        new Vivus('tables-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//tables.svg'
        });
    }
    if ($('#timeline-ill').length) {
        //trigger svg animations
        new Vivus('timeline-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//timeline.svg'
        });
    }
    if ($('#boxes-ill').length) {
        //trigger svg animations
        new Vivus('boxes-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//boxes.svg'
        });
    }
    if ($('#messages-ill').length) {
        //trigger svg animations
        new Vivus('messages-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//messages.svg'
        });
    }
    if ($('#calendar-ill').length) {
        //trigger svg animations
        new Vivus('calendar-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//calendar.svg'
        });
    }
    if ($('#controls-ill').length) {
        //trigger svg animations
        new Vivus('controls-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//controls.svg'
        });
    }
    if ($('#forms-ill').length) {
        //trigger svg animations
        new Vivus('forms-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//forms.svg'
        });
    }
    if ($('#steps-ill').length) {
        //trigger svg animations
        new Vivus('steps-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//steps.svg'
        });
    }
    if ($('#uploader-ill').length) {
        //trigger svg animations
        new Vivus('uploader-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//uploader.svg'
        });
    }
    if ($('#icons-ill').length) {
        //trigger svg animations
        new Vivus('icons-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//icons.svg'
        });
    }
    if ($('#iconpicker-ill').length) {
        //trigger svg animations
        new Vivus('iconpicker-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//iconpicker.svg'
        });
    }
    if ($('#features-ill').length) {
        //trigger svg animations
        new Vivus('features-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//features.svg'
        });
    }
    if ($('#pricing-ill').length) {
        //trigger svg animations
        new Vivus('pricing-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//pricing.svg'
        });
    }
    if ($('#team-ill').length) {
        //trigger svg animations
        new Vivus('team-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//team.svg'
        });
    }
    if ($('#testimonials-ill').length) {
        //trigger svg animations
        new Vivus('testimonials-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//testimonials.svg'
        });
    }
    if ($('#clients-ill').length) {
        //trigger svg animations
        new Vivus('clients-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//clients.svg'
        });
    }
    if ($('#counters-ill').length) {
        //trigger svg animations
        new Vivus('counters-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//counters.svg'
        });
    }
    if ($('#carousel-ill').length) {
        //trigger svg animations
        new Vivus('carousel-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//carousel.svg'
        });
    }
    if ($('#grid-ill').length) {
        //trigger svg animations
        new Vivus('grid-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//grid.svg'
        });
    }
    if ($('#footer-ill').length) {
        //trigger svg animations
        new Vivus('footer-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//footer.svg'
        });
    }
    if ($('#typography-ill').length) {
        //trigger svg animations
        new Vivus('typography-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//typography.svg'
        });
    }
    if ($('#colors-ill').length) {
        //trigger svg animations
        new Vivus('colors-ill', {
            duration: 300,
            file: 'assets/img/graphics/components//colors.svg'
        });
    }

    //Navbar styles panel
    if ($('.nav-switch').length) {

        $('#nav-solid').on('click', function () {
            $('#demo-nav').removeClass('navbar-inverse').addClass('is-solid');
            $('#demo-nav .button-cta').addClass('secondary-btn').removeClass('light-btn');
            $('#demo-nav .navbar-brand img').attr("src", "assets/img/logos/bulkit-purple.svg");
        });

        $('#nav-reverse').on('click', function () {
            $('#demo-nav').addClass('navbar-inverse is-reverse').removeClass('is-solid is-blue is-purple is-red');
        });

        $('#nav-blue').on('click', function () {
            $('#demo-nav').addClass('navbar-inverse is-blue').removeClass('is-solid is-reverse is-purple is-red');
        });

        $('#nav-purple').on('click', function () {
            $('#demo-nav').addClass('navbar-inverse is-purple').removeClass('is-solid is-reverse is-blue is-red');
        });

        $('#nav-red').on('click', function () {
            $('#demo-nav').addClass('navbar-inverse is-red').removeClass('is-solid is-reverse is-blue is-purple');
        });

        $('.is-variation').on('click', function () {
            $('#demo-nav .button-cta').addClass('light-btn').removeClass('secondary-btn');
            $('#demo-nav .navbar-brand img').attr("src", "assets/img/logos/bulkit-white.svg");
        });
    }
}


/* ==========================================================================
14. Utility functions
========================================================================== */

//Background Images
function initBackgroundImages() {
    if ($('.has-background-image').length) {
        $(".has-background-image").each(function () {
            var bgImage = $(this).attr('data-background');
            if (bgImage !== undefined) {
                $(this).css('background-image', 'url(' + bgImage + ')');
            }
        }
        )
    }
}

//Parallax
function initParallax() {
    function parallaxBG() {
        $('.parallax').prepend('<div class="parallax-overlay"></div>');
        $(".parallax").each(function () {
            var attrImage = $(this).attr('data-background');
            var attrColor = $(this).attr('data-color');
            var attrOpacity = $(this).attr('data-color-opacity');
            var attrPositionX = $(this).attr('data-position-x');
            if (attrImage !== undefined) {
                $(this).css('background-image', 'url(' + attrImage + ')');
            }
            if (attrColor !== undefined) {
                $(this).find(".parallax-overlay").css('background-color', '' + attrColor + '');
            }
            if (attrOpacity !== undefined) {
                $(this).find(".parallax-overlay").css('opacity', '' + attrOpacity + '');
            }
            if (attrPositionX !== undefined) {
                $(this).css('background-position-x', '' + attrPositionX + '');
            }
        });
    }
    parallaxBG();

    if ("ontouchstart" in window) {
        document.documentElement.className = document.documentElement.className + " touch";
    }
    if (!$("html").hasClass("touch")) {
        $(".parallax").css("background-attachment", "fixed");
    }

    function fullscreenFix() {
        var h = $('body').height();
        $(".content-b").each(function (i) {
            if ($(this).innerHeight() > h) {
                $(this).closest(".fullscreen").addClass("overflow");
            }
        });
    }
    $(window).resize(fullscreenFix);
    fullscreenFix();

    function backgroundResize() {
        var windowH = $(window).height();
        $(".parallax").each(function (i) {
            var path = $(this);
            var contW = path.width();
            var contH = path.height();
            var imgW = path.attr("data-img-width");
            var imgH = path.attr("data-img-height");
            var ratio = imgW / imgH;
            var diff = 0;
            diff = diff ? diff : 0;
            var remainingH = 0;
            if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
                remainingH = windowH - contH;
            }
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            if (contW > imgW) {
                imgW = contW;
                imgH = imgW / ratio;
            }
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
        });
    }
    $(window).resize(backgroundResize);
    $(window).focus(backgroundResize);
    backgroundResize();

    function parallaxPosition(e) {
        var heightWindow = $(window).height();
        var topWindow = $(window).scrollTop();
        var bottomWindow = topWindow + heightWindow;
        var currentWindow = (topWindow + bottomWindow) / 2;
        $(".parallax").each(function (i) {
            var path = $(this);
            var height = path.height();
            var top = path.offset().top;
            var bottom = top + height;
            if (bottomWindow > top && topWindow < bottom) {
                var imgH = path.data("resized-imgH");
                var min = 0;
                var max = -imgH + heightWindow;
                var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow;
                top = top - overflowH;
                bottom = bottom + overflowH;
                var value = 0;
                if ($('.parallax').is(".titlebar")) {
                    value = min + (max - min) * (currentWindow - top) / (bottom - top) * 2;
                } else {
                    value = min + (max - min) * (currentWindow - top) / (bottom - top);
                }
                var orizontalPosition = path.attr("data-oriz-pos");
                orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                $(this).css("background-position", orizontalPosition + " " + value + "px");
            }
        });
    }
    if (!$("html").hasClass("touch")) {
        $(window).resize(parallaxPosition);
        $(window).scroll(parallaxPosition);
        parallaxPosition();
    }
    if (navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
}

//Scrollspy nav
function initScrollspyNav() {
    $('li.scrollnav-item').on('click', function () {
        $('li.scrollnav-item.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })
}

//G item
function initGitem() {
    $('.g-item').on("mouseenter", function () {
        $(this).addClass('gelatine');
    })
    $('.g-item').on("mouseleave", function () {
        $(this).removeClass('gelatine');
    })
}

//Scroll to hash
function initScrollToHash() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if ($(".nav-primary").hasClass("nav-primary-fixed")) {
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 40
                    }, 750);
                    return false;
                }
            } else {
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 750);
                    return false;
                }
            }
        }
    });
}

//Anchor scroll
function initAnchorScroll() {
    function scroll_if_anchor(href) {
        href = typeof (href) == "string" ? href : $(this).attr("href");

        // You could easily calculate this dynamically if you prefer
        var fromTop = 50;

        // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
        // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
        if (href.indexOf("#") == 0) {
            var $target = $(href);

            // Older browser without pushState might flicker here, as they momentarily
            // jump to the wrong position (IE < 10)
            if ($target.length) {
                $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
                if (history && "pushState" in history) {
                    history.pushState({}, document.title, window.location.pathname + href);
                    return false;
                }
            }
        }
    }

    // When our page loads, check to see if it contains and anchor
    scroll_if_anchor(window.location.hash);

    // Intercept all anchor clicks
    $("body").on("click", ".scroll-link", scroll_if_anchor);
}




//Init Scroll Reveal
function initScrollReveal() {
    if ($('.is-title-reveal, .is-feature-reveal ').length) {

        window.sr = ScrollReveal();

        // Simple reveal
        sr.reveal('.is-title-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 100,
            rotate: { x: 0, y: 0, z: 0 },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: false,
            useDelay: 'always',
            viewFactor: 0.2,

        });

        // Revealing features
        sr.reveal('.is-feature-reveal', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 100,
            rotate: { x: 0, y: 0, z: 0 },
            opacity: 0,
            scale: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            container: window.document.documentElement,
            mobile: true,
            reset: true,
            useDelay: 'always',
            viewFactor: 0.2,

        }, 160);
    }
}



//App mockup
function initMockup() {
    $('#show-video, #show-mockup').on("click", function () {
        $('#show-video, #show-mockup').toggleClass('is-hidden');
        $('#video, #mockup').toggleClass('is-hidden');
    })
}

//Slider
function initSlider() {
    if ($('.Wallop').length) {
        var wallopEl = document.querySelector('.Wallop');
        var wallop = new Wallop(wallopEl);

        var paginationDots = Array.prototype.slice.call(document.querySelectorAll('.Wallop-dot'));

        //Attach click listener on the dots

        paginationDots.forEach(function (dotEl, index) {
            dotEl.addEventListener('click', function () {
                wallop.goTo(index);
            });
        });

        // Listen to wallop change and update classes

        wallop.on('change', function (event) {
            removeClass(document.querySelector('.Wallop-dot--current'), 'Wallop-dot--current');
            addClass(paginationDots[event.detail.currentItemIndex], 'Wallop-dot--current');
        });

        // Helpers
        function addClass(element, className) {
            if (!element) { return; }
            element.className = element.className.replace(/\s+$/gi, '') + ' ' + className;
        }

        function removeClass(element, className) {
            if (!element) { return; }
            element.className = element.className.replace(className, '');
        }

        // To start Autoplay, just call the function below
        // and pass in the number of seconds as interval
        // if you want to start autoplay after a while
        // you can wrap this in a setTimeout(); function
        autoplay(5000);

        // This a a helper function to build a simple
        // auto-play functionality.
        function autoplay(interval) {
            var lastTime = 0;

            function frame(timestamp) {
                var update = timestamp - lastTime >= interval;

                if (update) {
                    wallop.next();
                    lastTime = timestamp;
                }

                requestAnimationFrame(frame);
            }

            requestAnimationFrame(frame);
        };
    }

}

/* ==========================================================================
15. Auth functions
========================================================================== */

//Authentication
function initAuth() {
    $('#contacted').on('click', function () {
        $(this).addClass('is-hidden');
        $('#signup-form, #signup-intro').addClass('is-hidden');
        $('#back-to-signup, #contacted-form, #contacted-intro').removeClass('is-hidden');
    })

    $('#back-to-signup').on('click', function () {
        $(this).addClass('is-hidden');
        $('#contacted-form, #contacted-intro').addClass('is-hidden');
        $('#contacted, #signup-form, #signup-intro').removeClass('is-hidden');
    })

    $('#recover').on('click', function () {
        $(this).addClass('is-hidden');
        $('#signin-form').addClass('is-hidden');
        $('#back-to-login, #recover-form').removeClass('is-hidden');
    })

    $('#back-to-login').on('click', function () {
        $(this).addClass('is-hidden');
        $('#recover-form').addClass('is-hidden');
        $('#recover, #signin-form').removeClass('is-hidden');
    })

    $('.action-btn').on('click', function () {
        var $this = $(this);
        $this.addClass('is-loading');
        setTimeout(function () {
            if ($this.text() === 'Register') {
                $this.removeClass('is-loading').html('Login');
            } else {
                $this.removeClass('is-loading').html('Register')
            }
            $('.form-wrapper').toggleClass('is-active');
        }, 1200)
    })
}


/* ==========================================================================
16. Map functions
========================================================================== */

//Google map
function initGoogleMap() {
    if ($('#google-map').length) {
        $('#google-map').gMap({
            latitude: 40.7143528,
            longitude: -74.0059731,
            maptype: 'ROADMAP',
            zoom: 13,
            markers: [
                {
                    latitude: 40.71771,
                    longitude: -74.003245,
                    html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;"></h4><div style="align-items:center!important;" class="content content-flex"><div><img style="height:60px;border-radius:100px;" src="assets/img/logos/cssninja.svg"></div><div style="margin-left:20px;"> Iam very happy if you like this template. If you need any support, please feel free to contact us at <strong>hello@cssninja.io</strong></div></div></div>',
                    icon: {
                        image: "assets/img/graphics/markers/marker-purple.png",
                        iconsize: [56, 82],
                        iconanchor: [32, 39]
                    }
                }
            ],
            doubleclickzoom: true,
            controls: {
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false
            }
        });
    }
    if ($('#half-map').length) {
        $('#half-map').gMap({
            latitude: 40.7143528,
            longitude: -74.0059731,
            maptype: 'ROADMAP',
            zoom: 13,
            markers: [
                {
                    latitude: 40.71771,
                    longitude: -74.003245,
                    html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;"></h4><div style="align-items:center!important;" class="content content-flex"><div><img style="height:60px;border-radius:100px;" src="assets/img/logos/cssninja.svg"></div><div style="margin-left:20px;"> Iam very happy if you like this template. If you need any support, please feel free to contact us at <strong>hello@cssninja.io</strong></div></div></div>',
                    icon: {
                        image: "assets/img/graphics/markers/marker-purple.png",
                        iconsize: [56, 82],
                        iconanchor: [32, 39]
                    }
                }
            ],
            doubleclickzoom: true,
            controls: {
                panControl: true,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: false,
                streetViewControl: false,
                overviewMapControl: false
            }
        });
    }
}

function initMapBox() {

    var token = 'pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA';
    var markerOptions = {
        color: 'red',
    };

    if ($('#mapbox-1').length) {
        mapboxgl.accessToken = token;
        var map = new mapboxgl.Map({
            container: 'mapbox-1',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [12.550343, 55.665957],
            zoom: 8
            });

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([12.550343, 55.665957])
            .addTo(map);
    }

    else if ($('#mapbox-2').length) {
        mapboxgl.accessToken = token;
        var map2 = new mapboxgl.Map({
            container: 'mapbox-2',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [12.550343, 55.665957],
            zoom: 8
            });

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([12.550343, 55.665957])
            .addTo(map2);
    }

    else if ($('#mapbox-3').length) {
        mapboxgl.accessToken = token;
        var map3 = new mapboxgl.Map({
            container: 'mapbox-3',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [12.550343, 55.665957],
            zoom: 8
            });

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([12.550343, 55.665957])
            .addTo(map3);
    }

    else if ($('#mapbox-4').length) {
        mapboxgl.accessToken = token;
        var map3 = new mapboxgl.Map({
            container: 'mapbox-2',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [12.550343, 55.665957],
            zoom: 8
            });

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat([12.550343, 55.665957])
            .addTo(map3);
    }
}

/* ==========================================================================
17. Agency Functions
========================================================================== */

//Clients carousel
function initClientsCarousel() {
    if ($('.clients-logo-carousel').length) {
        $('.clients-logo-carousel').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
            nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
}

//People carousel
function initPeopleCarousel() {
    if ($('.people-carousel').length) {
        $('.people-carousel').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            appendDots: $('.people-carousel'),
        });
    }
}

//Blog
function initBlog() {
    //Like button animation
    $('.fab-btn.like').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).find('.liked').toggleClass('gelatine');
    })

    //Show comments
    $('#show-comments').on('click', function () {
        $(this).closest('.comment-count').addClass('is-hidden');
        $('.comments-list').removeClass('is-hidden');
    })
}


/* ==========================================================================
18. Landing Kit Functions
========================================================================== */

//Testimonials
function initTestimonials() {
    if ($('.styled-testimonials').length) {
        $('.styled-testimonials').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            autoplay: true,
            arrows: false,
        });
    }
}

//Navigation dots
function initNavigationDots() {
    $('.slide-dot').on('click', function () {

        var text = $(this).attr('data-feature-text');
        var image = $(this).attr('data-feature');

        $('.showcase-wrap').removeClass('is-active');
        $('.showcase-text-wrapper').addClass('is-hidden');

        $('#' + text).removeClass('is-hidden');
        $('#' + image).addClass('is-active');

        $('.slide-dot.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })
}

//Custom carousel
function initCustomCarousel() {
    //Update the image after the carousel slide change
    $('.css-carousel input').on('change', function () {
        var targetImage = $(this).attr('data-testimonial-image');
        $('.testimonials-cover.is-active').removeClass('is-active');
        $('#' + targetImage).addClass('is-active');
    })

    //Current css carousel slide
    var currentDot = 1;

    //Simulate Autoplay for the Css carousel
    setInterval(function () {
        currentDot = currentDot + 1;

        if (currentDot < 5) {
            $(".css-carousel label:nth-child(" + currentDot + ")").trigger('click');
        }
        else {
            currentDot = 1;
            $(".css-carousel label:first-child").trigger('click');
        }
    }, 3000);
}

//Solo Carousel
function initCarousel() {
    $('.testimonials-solo-carousel').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
}

//Carousel
function initPricingCarousel() {
    $('.feature-carousel').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
}

//Carousel
function initLandingCarousel() {
    $('.carousel').slick({
        centerMode: true,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        centerPadding: '60px',
        prevArrow: "<div class='slick-contacts-btn is-prev'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='slick-contacts-btn is-next'><i class='fa fa-chevron-right'></i></div>",
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });

}

//Testimonials Carousel
function initCharacterTestimonials() {
    $('.customer-testimonials').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

//Init FAQ
function initFaq() {
    $('.faq-block .block-header').on('click', function () {
        $(this).toggleClass('is-active');
        $(this).closest('.faq-block').find('.block-body').slideToggle('fast');
    })
}

//Init Pricing
function initPricing() {
    $('.pricing-tabs .tab-item').on('click', function () {
        var target = $(this).attr('data-tab');
        $(this).siblings('.tab-item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.pricing-container').removeClass('is-active');
        $('#' + target).addClass('is-active');
        // Manually refresh positioning of slick
        $('.feature-carousel').slick('setPosition');
    })
}

//Pricing
function initTabbedPricing() {
    if ($('.header-pricing').length) {

        $('.pricing-picker span').on("click", function () {
            $('.pricing-picker span.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        })

        $('#show-monthly').on("click", function () {
            $('.per-year').addClass('is-hidden');
            $('.per-month').removeClass('is-hidden');
        })

        $('#show-annualy').on("click", function () {
            $('.per-month').addClass('is-hidden');
            $('.per-year').removeClass('is-hidden');
        })
    }
}

//Init pricing
function initFreelancerPricing() {

    $('.plan-controls span').on("click", function () {
        $('.plan-controls span').toggleClass('is-active');
    })

    $('.period-select span').on("click", function () {
        $('.period-select span').toggleClass('is-active');
        $('.month-price, .year-price').toggleClass('is-hidden');
    })

    $('#show-freelance').on("click", function () {
        $('#freelance-pricing').removeClass('is-hidden');
        $('#business-pricing').addClass('is-hidden');
    })

    $('#show-business').on("click", function () {
        $('#business-pricing').removeClass('is-hidden');
        $('#freelance-pricing').addClass('is-hidden');
    })
}

//Init pricing
function initBoxedPricing() {
    if ($('#price-switch').length) {
        $('#price-switch').on("click", function () {
            $('.by-year, .by-month').toggleClass('is-active');
            $('.condensed-plan').toggleClass('is-switched');
        })
    }
}

//Init pricing
function initSwitchPricing() {
    if ($('.switch-pricing-wrapper').length) {
        $('.pricing-switcher input').on('change', function () {
            $('.plan-price').toggleClass('is-active');
        })
    }
}

//Init pricing
function initOnePagePricing() {
    $('.combo-button .button').on('click', function () {
        $('.combo-button .button.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.plan-price, .price-per').toggleClass('is-hidden');
    })
}

//Animations
function initAnimations() {

    if ($('#features-1').length) {
        var waypoint = new Waypoint({
            element: document.getElementById('features-1'),
            handler: function (direction) {
                $('.shadow-side-image').addClass('is-active');
            },
            offset: 150
        })
    }


    var primaryCircle = document.querySelector('.primary-circle');
    var primaryBoldCircle = document.querySelector('.primary-bold-circle');
    var accentCircle = document.querySelector('.accent-circle');

    if ($('.primary-circle, .primary-bold-circle, .accent-circle').length) {
        anime({
            targets: [primaryCircle, primaryBoldCircle, accentCircle],
            translateY: [
                {
                    value: 800,
                    duration: 500
                }
            ],
        });
    }

    if ($('#features-2').length) {
        var waypoint2 = new Waypoint({
            element: document.getElementById('features-2'),
            handler: function (direction) {

                anime({
                    targets: primaryCircle,
                    translateY: [
                        {
                            value: 0,
                            duration: 1100
                        }
                    ],
                });

                anime({
                    targets: primaryBoldCircle,
                    translateY: [
                        {
                            value: 0,
                            duration: 1100,
                            delay: 200
                        }
                    ],
                });

                anime({
                    targets: accentCircle,
                    translateY: [
                        {
                            value: 0,
                            duration: 1100,
                            delay: 400
                        }
                    ],
                });
            },
            offset: 150
        })
    }

    if ($('#features-3').length) {
        var waypoint3 = new Waypoint({
            element: document.getElementById('features-3'),
            handler: function (direction) {
                $('#features-3 .side-image').removeClass('is-pulled');
            },
            offset: 150
        })
    }


}

function initCanvas() {
    if ($('#geo-canvas').length) {
        var Canvas = document.getElementById('geo-canvas');
        var ctx = Canvas.getContext('2d');

        var resize = function () {
            Canvas.width = Canvas.clientWidth;
            Canvas.height = Canvas.clientHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        var elements = [];
        var presets = {};

        presets.o = function (x, y, s, dx, dy) {
            return {
                x: x,
                y: y,
                r: 12 * s,
                w: 5 * s,
                dx: dx,
                dy: dy,
                draw: function (ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;

                    ctx.beginPath();
                    ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
                    ctx.lineWidth = this.w;
                    ctx.strokeStyle = '#fff';
                    ctx.stroke();
                }
            }
        };

        presets.x = function (x, y, s, dx, dy, dr, r) {
            r = r || 0;
            return {
                x: x,
                y: y,
                s: 20 * s,
                w: 5 * s,
                r: r,
                dx: dx,
                dy: dy,
                dr: dr,
                draw: function (ctx, t) {
                    this.x += this.dx;
                    this.y += this.dy;
                    this.r += this.dr;

                    var _this = this;
                    var line = function (x, y, tx, ty, c, o) {
                        o = o || 0;
                        ctx.beginPath();
                        ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                        ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                        ctx.lineWidth = _this.w;
                        ctx.strokeStyle = c;
                        ctx.stroke();
                    };

                    ctx.save();

                    ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
                    ctx.rotate(this.r * Math.PI / 180);

                    line(-1, -1, 1, 1, '#fff');
                    line(1, -1, -1, 1, '#fff');

                    ctx.restore();
                }
            }
        };

        for (var x = 0; x < Canvas.width; x++) {
            for (var y = 0; y < Canvas.height; y++) {
                if (Math.round(Math.random() * 8000) == 1) {
                    var s = ((Math.random() * 5) + 1) / 10;
                    if (Math.round(Math.random()) == 1)
                        elements.push(presets.o(x, y, s, 0, 0));
                    else
                        elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
                }
            }
        }

        setInterval(function () {
            ctx.clearRect(0, 0, Canvas.width, Canvas.height);

            var time = new Date().getTime();
            for (var e in elements)
                elements[e].draw(ctx, time);
        }, 10);
    }
}

function initAnimatedSvg() {
    if ($('#chat-widget-ui, #chat-ui').length) {
        new Vivus('chat-widget-ui', {
            duration: 150,
            file: 'assets/img/graphics/compositions/chat-widget-core.svg'
        });
        new Vivus('chat-ui', {
            duration: 150,
            file: 'assets/img/graphics/compositions/chat-profile-core.svg'
        });
    }
}

//Chat widget button
function initChatWidget() {
    var chatShow = 100;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= chatShow) {
            $("#bulchat").addClass('visible');
        } else {
            $("#bulchat").removeClass('visible');
        }
    });

    $('#bulchat div, .close-chat img').on("click", function () {
        $('#chat-widget').slideToggle();
        $('.chat-widget-body').toggleClass('is-opened is-closed');
        $('#bulchat div').toggleClass('close open');
        $('#bulchat, .close-chat img').toggleClass('close open');
    })
}

function initContactToggler() {
    $('.tabbed-links li').on('click', function () {

        var target = $(this).attr('data-contact');

        $('.contact-block').addClass('is-hidden');
        $('#' + target).removeClass('is-hidden');

        $('.tabbed-links li.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })
}

function initParticles() {
    var particles = document.getElementById("particles");
    var border = ["50%", "0%"];
    var colors = ["#FF6B6B", "#FFE66D", "#4472CA"];

    if ($('#particles').length) {
        function createParticle(event) {
            var x = event.clientX;
            var y = event.clientY;
            var color = Math.floor(Math.random() * 3);

            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.marginLeft = x + "px";
            div.style.marginTop = y + "px";
            div.style.width = "10px";
            div.style.borderTop = "5px solid transparent";
            div.style.borderRight = "5px solid transparent";
            div.style.borderLeft = "5px solid transparent";
            div.style.borderBottom = "10px solid " + colors[color];
            div.style.animation = "move 5s ease-in infinite";
            particles.appendChild(div);
            setTimeout(
                function () {
                    div.remove();
                }
                , 5000);
        }

        function getParticles() {
            var np = document.documentElement.clientWidth / 40;
            particles.innerHTML = "";
            for (var i = 0; i < np; i++) {
                var w = document.documentElement.clientWidth;
                var h = document.documentElement.clientHeight;
                var rndw = Math.floor(Math.random() * w) + 1;
                var rndh = Math.floor(Math.random() * h) + 1;
                var widthpt = Math.floor(Math.random() * 8) + 5;
                var opty = Math.floor(Math.random() * 4) + 1;
                var anima = Math.floor(Math.random() * 12) + 8;
                var bdr = Math.floor(Math.random() * 2);
                var color = Math.floor(Math.random() * 3);

                var div = document.createElement("div");
                div.style.position = "absolute";
                div.style.marginLeft = rndw + "px";
                div.style.marginTop = rndh + "px";
                div.style.width = widthpt + "px";
                div.style.height = widthpt + "px";
                div.style.opacity = opty;
                div.style.backgroundColor = colors[color];
                div.style.borderRadius = border[bdr];
                div.style.animation = "move " + anima + "s ease-in infinite";
                particles.appendChild(div);
            }
        }

        function main(event) {
            getParticles();
            particles.addEventListener("click", createParticle);
        }

        window.addEventListener("resize", main);
        window.addEventListener("load", main);
    }


}

//Perspective plugin
$.fn.tilt = function () {
    var perspective = '300px',
        delta = 20,
        width = this.width(),
        height = this.height(),
        midWidth = width / 2,
        midHeight = height / 2;
    this.on({
        mousemove: function (e) {
            var pos = $(this).offset(),
                cursPosX = e.pageX - pos.left,
                cursPosY = e.pageY - pos.top,
                cursCenterX = midWidth - cursPosX,
                cursCenterY = midHeight - cursPosY;

            $(this).css('transform', 'perspective(' + perspective + ') rotateX(' + (cursCenterY / delta) + 'deg) rotateY(' + -(cursCenterX / delta) + 'deg)');
            $(this).removeClass('is-out');
        },
        mouseleave: function () {
            $(this).addClass('is-out');
        }
    });
    //Return
    return this;
};

function initTiltCards() {
    $('.tilt-card').tilt();
}