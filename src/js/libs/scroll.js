$(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 50) {
        $('.scroll').fadeIn();
    } else {
        $('.scroll').fadeOut();
    }
});
$('.scroll').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});