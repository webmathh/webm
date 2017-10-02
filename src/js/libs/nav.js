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
$('.drop-list span').click(function (e) {
    e.preventDefault();
    $('.drop-list ul').slideUp();
    $(this).parent().children('ul').slideToggle();
});
$('.mobile-menu__cross').click(function () {
    $('.mobile-menu').slideUp();
});
$('.nav-dropdown').click(function () {
    $('.mobile-menu').slideDown();
});
