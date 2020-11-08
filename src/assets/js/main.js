/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file (see function.js for complete function reference)
========================================================================== */

"use strict";

//Set environment variable (Used for development and demo)
/* 
	Possible values:
	1. development
	2. demo
	3. customization
*/
var env = 'development';

initPageLoader()

$(document).ready(function ($) {

	//Global functions

	if (env === 'development') {
		changeDemoImages();
	}

	else if (env === 'customization') {
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
	initSidebar();
	feather.replace();

	//Tabs

	initTabsNav();
	initNavigationTabs();
	initVerticalTabs();

	//Cards

	initMediaCards();

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

	initNavigationDots();

	initFaq();

	initAuth();
	
	initAnimations();
	initCanvas();
	initAnimatedSvg();
	initChatWidget();
	initContactToggler();
	
})