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
if ($('.aside__wrapper').length) {
    $(document).scroll(function () {

        var docScroll = $(document).scrollTop();
        var elemScroll = $('.content__wrap').offset().top;
        if (docScroll > elemScroll) {
            $('.aside__wrapper').addClass('fixed');
        }
        else {
            $('.aside__wrapper').removeClass('fixed');
        }
    });
}
$('.nav').attr('data-color', $('.nav ul li.active a').attr('data-color'));
$('.nav ul li a').hover(
    function () {
        var color = $(this).attr('data-color');
        $('.nav').attr('data-color', color);
    },
    function () {
        var color = $('.nav ul li.active a').attr('data-color');
        $('.nav').attr('data-color', color);
    }
);
