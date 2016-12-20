jQuery(document).ready(function($) {

    // for header-fixed padding
    $('.wrapper').css('padding-top', $('#header').outerHeight());

    $(window).scroll(function(){
        $('#header').toggleClass('scroll-js', $(this).scrollTop() > 0);
    });

});