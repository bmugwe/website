/*==================================================
                    vankine Theme Js
==================================================*/
(function ($) {
    ("use strict");
 /*---====================---preloader---======================---*/
    
 
if($('.loader-wrap').length){
    $('.loader-wrap').delay(1000).fadeOut(500);
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })  
}

/*---====================---preloader---======================---*/
  /*---====================---back-to-top---======================---*/
if($('.prgoress_indicator path').length){
    var progressPath = document.querySelector('.prgoress_indicator path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).on('scroll', updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.prgoress_indicator').addClass('active-progress');
      } else {
        jQuery('.prgoress_indicator').removeClass('active-progress');
      }
    });
    jQuery('.prgoress_indicator').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
}
  /*---====================---back-to-top---======================---*/
function vankine_search_popup() {

 if($('.search-popup').length){
		
    //Show Popup
    $('.search-toggler').on('click', function() {
        $('.search-popup').addClass('popup-visible');
    });
    $(document).keydown(function(e){
        if(e.keyCode === 27) {
            $('.search-popup').removeClass('popup-visible');
        }
    });
    //Hide Popup
    $('.close-search , .search-popup .overlay-layer').on('click', function() {
        $('.search-popup').removeClass('popup-visible');
    });
}
}

function vankine_option_panel_popup() {

    if($('.option_panel-popup').length){
           
       //Show Popup
       $('.contact-toggler').on('click', function() {
           $('.option_panel-popup').addClass('popup-visible');
       });
       $(document).keydown(function(e){
           if(e.keyCode === 27) {
               $('.option_panel-popup').removeClass('popup-visible');
           }
       });
       //Hide Popup
       $('.close-option-pan , .option_panel-popup .sdmenu_overlay').on('click', function() {
           $('.option_panel-popup').removeClass('popup-visible');
       });
   }
}


 
 
/*-----------------------
    Shop filter active 
------------------------- */
    $(".shop-filter-toogle").on("click", function (e) {
        e.preventDefault();
        $(".shop-product-fillter-header").slideToggle();
    });
    var shopFiltericon = $(".shop-filter-toogle");
    shopFiltericon.on("click", function () {
        $(".shop-filter-toogle").toggleClass("active");
    });


/*-----------------------------
        CounterUp
-----------------------------*/
jQuery(document).ready(function($) {
if($('.count').length){
    $(".count").counterUp({
        delay: 10,
        time: 2000
    });
}
 
});

/*-----------------------------
        Sidebar menu Active
-----------------------------*/

/*-----------------------------
         light box
-----------------------------*/
function vankine_light_box() {
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }
}
/*-----------------------------
         VSticker
-----------------------------*/
 
if($('.side_bar_cart').length){
    //Menu Toggle Btn
    $('.mini_cart_togglers').on('click', function() {
      $('body').toggleClass('side_bar_cart-visible');
    });
    //Menu Toggle Btn
    $('.side_bar_cart  .close_btn_mini , .side_bar_cart .cart_overlay').on('click', function() {
      $('body').removeClass('side_bar_cart-visible');
    });
}

 
function vankine_faqsall() {
    var accordion = {
        init: function() {
            $('.answer').filter(':nth-child(n+1)').addClass('hide');
            $('.question').on('click', this.show);
        },
        show: function() {
            var $this = $(this),
                $ddToShow = $this.next(),
                $ddToClose = $this.next().siblings('.answer');
            $this.addClass('active');
            $this.siblings('.question').removeClass('active');
            $ddToShow.slideDown(200);
            accordion.hide($ddToClose);
        },
        hide: function(elem) {
            elem.slideUp(200);
        }
    };
    accordion.init();
    
}
 
/*=================================
        Side Menu Option
=================================*/
      function vankine_side_menu() {
        if($(".menu_open_sidely").length) {
            //adding a new class on button element
            $('.side_navbar_togglers').on('click',function () {
                $('body').addClass('opne_side_menu_v1');   
            });
            //removing a existing class from button element
            $('.side_navbar_togglers_close').on('click',function () {
                $('body').removeClass('opne_side_menu_v1');
            });
        }
}
 
/*=================================
            Menu Stick
==================================*/
    function vankine_headerStyle() {
		if($('.sticky_header_content').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.sticky_header_content');
			var sticky_header = $('.sticky_header_content .sticky_header_default');
			if (windowpos > 500) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("wow animate__animated animate__slideInDown");
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("wow animate__animated animate__slideInDown");
			}
		}
	}
 
function vankine_rangeslider() {
    var selector = 'input[type="range"]';
    var $element = $(selector);
    // Basic rangeslider initialization
    $element.rangeslider({

        // Deactivate the feature detection
        polyfill: false,
 
        // Callback function
        onSlide: function(position, value) {
            console.log('onSlide');
            console.log('position: ' + position, 'value: ' + value);
        },

        // Callback function
        onSlideEnd: function(position, value) {
            console.log('onSlideEnd');
            console.log('position: ' + position, 'value: ' + value);
        }
    });

}

/*-----------------------------
     progress bar
-----------------------------*/
function vankine_progress_bar() {
        // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}
}
/*-----------------------------
     protfolio ajax
-----------------------------*/
function vankine_protfolio_ajax(){
    $('.ajax_protfolio_enabled').on('click', '.pagination .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $protfolio_post_list = $('.portfoliocontainer'),
            $pagination = $(this).parents('.pagination'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $content = $(response).find('.portfoliocontainer').children('.portfolio-wrapper'),
                protfolio_pagination = $(response).find('.pagination').html();
                $pagination.html(protfolio_pagination);
                $protfolio_post_list.append($content);
                $content.imagesLoaded(function () {
                    $protfolio_post_list.isotope( 'appended', $content );
                    $pagination.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
}
  /*-----------------------------
     service ajax
-----------------------------*/
function vankine_ser_ajax(){
    $('.ajax_service_enabled').on('click', '.pagination-area .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $ser_post_list = $('.ajaxservicecontainer'),
            $paginationser = $(this).parents('.pagination-area'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $contentser = $(response).find('.ajaxservicecontainer').children('.ajax-service-wrapper'),
                ser_pagination = $(response).find('.pagination-area').html();
                $paginationser.html(ser_pagination);
                $ser_post_list.append($contentser);
                $contentser.imagesLoaded(function () {
                     $contentser;
                    $paginationser.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
} 

  /*-----------------------------
     post ajax
-----------------------------*/
function vankine_post_ajax(){
    $('.ajax_posts_enabled').on('click', '.pagination-area .next', function(e) {
        e.preventDefault();
        if ($(this).data('requestRunning')) {
            return;
        }
        $(this).data('requestRunning', true);
        var $ser_post_list = $('.ajaxcontainer'),
            $paginationser = $(this).parents('.pagination-area'),
            $parent = $(this).parent();

        $parent.addClass('loader');

        $.get(
            $(this).attr('href'),
            function (response) {
                var $contentser = $(response).find('.ajaxcontainer').children('.ajax-wrapper'),
                ser_pagination = $(response).find('.pagination-area').html();
                $paginationser.html(ser_pagination);
                $ser_post_list.append($contentser);
                $contentser.imagesLoaded(function () {
                     $contentser;
                    $paginationser.find('.next').data('requestRunning', false);
                    $parent.removeClass('loader');
                });
            }
        );
    });
} 
/*==========================================================================
    select
==========================================================================*/
function vankine_search() {
    $("select").select2();
    /* Default comment here */ 
    if ($('.wpforms-field select').length) {
        var mySelect2 = $(".wpforms-field select").data("select2");
        // Check if mySelect2 exists before trying to destroy it
        if (mySelect2 && typeof mySelect2.destroy === 'function') {
            // Destroy the select2 instance to remove select2 option
            mySelect2.destroy();
        }
    }
}
/*==========================================================================
    swiper
==========================================================================*/
function vankine_swiper_vertical() {
    $(".slickslider").not('.slick-initialized').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false, 
        dots:true,
        centerMode:false, 
        adaptiveHeight:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
} 

/*==========================================================================
    When document is Scrollig, do
==========================================================================*/
$(window).on('scroll', function() {
    vankine_headerStyle();
});

/* ==========================================================================
Elementor front end start
========================================================================== */
$(window).on('elementor/frontend/init', function() {
    // header v1
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-header-v1.default', vankine_search_popup);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-extra-items-v1.default', vankine_search_popup);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-header-v1.default', vankine_option_panel_popup);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-extra-items-v1.default', vankine_option_panel_popup);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-side-header-v1.default', vankine_side_menu);
    // Content v1
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-contact-form-v1.default', vankine_search);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-contact-form-v1.default', vankine_rangeslider);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-progress-v1.default', vankine_progress_bar);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-portfoliofilt-v1.default', vankine_protfolio_ajax);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-blog-v1.default', vankine_post_ajax);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-service-v1.default', vankine_ser_ajax);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-testimonil-vertical-v1.default', vankine_swiper_vertical);
});
/* ==========================================================================
    When document is Scrollig, do
========================================================================== */
jQuery(document).on('ready', function () {
    (function ($) {
        // add your functions
        vankine_search_popup();
        vankine_option_panel_popup();
        vankine_light_box();
        vankine_side_menu();
        vankine_search();
        vankine_rangeslider();
        vankine_faqsall();
        vankine_progress_bar();
        vankine_protfolio_ajax();
        vankine_post_ajax();
        vankine_ser_ajax();
        vankine_swiper_vertical();
    })(jQuery);
});

 

})(jQuery);

