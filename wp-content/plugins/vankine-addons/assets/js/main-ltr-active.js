/*==================================================
                    vankine Theme Js
==================================================*/
(function ($) {
    ("use strict");
/*-----------------------------
        Theme Carousel
 -----------------------------*/
 function vankine_theme_owl_carousel() {
    if ($('.theme_carousel').length) {
        $(".theme_carousel").each(function (index) {
        var $owlAttr = {
            thumbs: false, 
            rtl : false ,
            navText: [ '<i class="fi-rs-arrow-small-left"></i>', '<i class="fi-rs-arrow-small-right"></i>' ],
        },
        $extraAttr = $(this).data("options");
        $.extend($owlAttr, $extraAttr);
        $(this).owlCarousel($owlAttr);
        
    });
    }
}
/*-----------------------------
        Testimonial Carousel
 -----------------------------*/
 function vankine_vertical_carousel_oneitem() {
    if ($('.vertoneitem').length) {
       $(".vertoneitem").owlCarousel({
     
            loop: true,
            items:1,
            rtl:false,
            autoplay: true,
            autoplayHoverPause: true,
            margin:20,
            dots: true,
            nav:false,  
        });
    }
}
 
/*-----------------------------
            portfolio
-----------------------------*/
function vankine_portfolio() {
    $(document).ready(function() {
        $('.portfoliocontainer').isotope({
            layoutMode: 'masonry',
            itemSelector: '.portfolio-wrapper',
            percentPosition: true,
        });
        // filter items on button click
        $('.portfolio_filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.portfoliocontainer').isotope({ filter: filterValue });
            $('.portfolio_filter li').removeClass('current');
            $(this).addClass('current');
        });
    });
}
/* ==========================================================================
Elementor front end start
========================================================================== */
$(window).on('elementor/frontend/init', function() {
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-service-carousel-v1.default', vankine_theme_owl_carousel);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-testimonil-vertical-v1.default', vankine_vertical_carousel_oneitem);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-testimonil-carousel-v1.default', vankine_theme_owl_carousel);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-portfoliofilt-v1.default', vankine_portfolio);
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-portfolio-post-v1.default', vankine_portfolio); 
    elementorFrontend.hooks.addAction('frontend/element_ready/vankine-portfolio-caro-v1.default', vankine_theme_owl_carousel);
});
/* ==========================================================================
    When document is Scrollig, do
========================================================================== */
jQuery(document).on('ready', function () {
    (function ($) {
        // add your functions
        vankine_theme_owl_carousel();
        vankine_vertical_carousel_oneitem();
        vankine_portfolio();
    })(jQuery);
});

})(jQuery);

