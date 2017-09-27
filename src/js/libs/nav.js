$(window).on('load resize', function () {
    var size = $(window).width();
    if (size > 768) {
        $('.mobile-menu').fadeOut();
        $(document).scroll(function () {

            var docScroll = $(document).scrollTop();
            var elemScroll = $('.nav-main').offset().top;
            if (docScroll > elemScroll) {
                $('.nav-main').fadeOut();
                $('.nav-fixed').fadeIn();
            }
            else {
                $('.nav-main').fadeIn();
                $('.nav-fixed').fadeOut();
            }
        });
    }
    else {
        $('.nav-fixed').fadeIn();
        $('.nav-main').fadeOut();
    }
});
$('.drop-list').click(function (e) {
    e.preventDefault();
   $(this).children('ul').slideToggle();
});
$('.mobile-menu__cross').click(function () {
    $('.mobile-menu').fadeOut();
});
$('.nav-dropdown').click(function () {
    $('.mobile-menu').fadeIn();
});
