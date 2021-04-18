/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Core JS file
========================================================================== */

"use strict";

//1. Preload page
initPageLoader()

$(document).ready(function ($) {

	//2. Lazy loading
	const el = document.querySelectorAll('[data-lazy-load]');
    const observer = lozad(el, {
        loaded: function(el) {
            // Custom implementation on a loaded element
            el.parentNode.classList.add('loaded');
        }
	});
	
  observer.observe();

	//3. Change to demo content (if env)
	if (env === 'development') {
		changeDemoImages();
	}

	//4. Init Feather icons
	feather.replace();

	//5. Init Layout
	initNavbar();
	initLandingNavbar();
	initMobileMenu();
	initLandingMobileMenu();
	initEcommerceNavbar();
	initNavbarDropdown();
	initSidebar();
	initThemeSwitcher();
	initBackgroundImages();

	//6. Components
	initSlider();
	initDropdowns();
	initTabsNav();
	initNavigationTabs();
	initVerticalTabs();
	initMediaCards();
	initTiltCards();
	initPopovers();
	initTooltips();
	initModals();
	initCounters();
	initSimpleAccordion();
	initAccordions();
	initToasts();
	initCountdown();

	//7. Carousels
	initBasicCarousel();
	initVerticalCarousel();
	initFlatCarousel();
	initImageCarousel();
	initSingleImageCarousel();
	initMultipleImagesCarousel();
	
	//8. Forms
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
	initFileUploader();
	
	//9. Video
	initVideoEmbed();
	initBackgroundVideo();
	initPlayers();
	
	//10. Demo
	initDemo();
	initScrollspyNav();
	initParallax();
	initBackToTop();
	
	//11. Utility functions
	initGitem();
	initAnchorScroll();
	initQuickview();
	initScrollReveal();
	initMarquee();
	
	//12. Page specific methods
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
	//initBlog();
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