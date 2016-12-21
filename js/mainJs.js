jQuery(document).ready(function($) {

    // for header-fixed padding
    $('.wrapper').css('padding-top', $('#header').outerHeight());

    $(window).scroll(function(){
        $('#header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    });

    // for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll], .navigation a', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });
});