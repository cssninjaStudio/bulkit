/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file (see function.js for complete function reference)
========================================================================== */

"use strict";

initPageLoader()

$(document).ready(function ($) {

	const el = document.querySelectorAll('[data-lazy-load]');
    const observer = lozad(el, {
        loaded: function(el) {
            // Custom implementation on a loaded element
            el.parentNode.classList.add('loaded');
        }
	});
	
    observer.observe();

	//Global functions

	if (env === 'development') {
		changeDemoImages();
	}


	initThemeSwitcher();
	initSlider()
	initBackgroundImages();

	//Layout functions

	initNavbar();
	initLandingNavbar()
	initMobileMenu();
	initLandingMobileMenu()
	initNavbarDropdown();
	initDropdowns();
	initSidebar();
	feather.replace();

	//Tabs

	initTabsNav();
	initNavigationTabs();
	initVerticalTabs();

	//Cards

	initMediaCards();
	initTiltCards();

	//Form controls

	initDatepicker();
	initTimepicker();
	initDatepickerAlt();
	initChosenSelects();
	initMaterialSelect();
	initAutocompletes();
	initFileInputs();
	initRangeInput();
	initRangeInputs();
	initJqueryTagInput();
	initBulmaTags();
	initBulmaSteps();
	initBulmaIconpicker();
	initBulmaCalendar();
	initComboBox();
	initImageComboBox();
	initStackedComboBox();

	//4. Popups

	initPopovers();
	initTooltips();
	initModals();

	//5. Carousels

	initBasicCarousel();
	initVerticalCarousel();
	initFlatCarousel();
	initImageCarousel();
	initSingleImageCarousel();
	initMultipleImagesCarousel();

	//6. Video

	initVideoEmbed();
	initBackgroundVideo();
	initPlayers();

	//7. Counters

	initCounters();

	//8. Accordions

	initSimpleAccordion();
	initAccordions();

	//9. File uploader

	initFileUploader();

	//10. Toasts

	initToasts();

	//11. Demo

	initDemo();
	initScrollspyNav();
	initParallax();
	initBackToTop();

	//12. Utility functions

	initGitem();
	initAnchorScroll();
	initQuickview();
	initScrollReveal();

	//13. Landing pages functions

	initMockup();

	initClientsCarousel();
	initPeopleCarousel();
	initCustomCarousel();
	initCarousel();
	initLandingCarousel();
	initTestimonials();
	initCharacterTestimonials();

	initPricing();
	initPricingCarousel();
	initTabbedPricing();
	initFreelancerPricing();
	initSwitchPricing();
	initBoxedPricing();
	initOnePagePricing();

	initBlog();
	initSearchBox();

	initNavigationDots();

	initFaq();

	initAuth();
	
	initAnimations();
	initCanvas();
	initParticles();
	initAnimatedSvg();
	initChatWidget();
	initContactToggler();
	
	initMapBox();

	initCodeTabs();
})