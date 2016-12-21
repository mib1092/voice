jQuery(document).ready(function($) {

    // for header-fixed padding
    $(window).on('load resize', function() {
        var headerHeight = $('#header').outerHeight();
        $('.wrapper').css('padding-top', headerHeight);
        $('.mobile-menu-wrap').css('top', headerHeight);
    });

    $(window).scroll(function(){
        $('#header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    });

    // for burger menu
    $(".mobile-menu-toggle, .mobile-menu-overlay, .donate-mobile .donate").on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });
    $(".mobile-menu a").on('click', function(){
        $(this).toggleClass('open').siblings('.sub-menu').slideToggle(350);
    });
    $(window).on('load', function(){
        $(".mobile-menu a + .sub-menu").siblings('a').toggleClass('expanded').attr("href", "#");
    });

    // for smooth scroll
    smoothScroll.init({
        selector: '[data-scroll], .navigation a', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInQuad', // Easing pattern to use
        offset: 50 // Integer. How far to offset the scrolling anchor location in pixels
    });
});