/**
 * Created by Степан on 29.08.2017.
 */
$('.modal-open').click(function (e) {
    e.preventDefault();
    var modal = $(this).attr('data-modal');
    var theme = $(this).attr('data-theme');
    var title = $(this).attr('data-title');
    if(title) {
        $(modal+' .modal__title').text(title);
    }
    if (modal == '.modal-presentation') {

        var color = $(this).attr('data-color');

        $(modal+' .modal__title').removeClass().addClass('modal__title').addClass('modal__title_'+color);
        $(modal+' .modal__button').removeClass().addClass('modal__button').addClass('modal__button_'+color);
    }
    $('.modal input[name=theme]').val(theme);

    $('.modal'+modal).fadeIn();
    return false;
});
$('.modal__cross').click(function () {
   $('.modal').fadeOut();
});
$(document).mouseup(function (e) {
    var elem = $('.modal');
    var elems = $('.modal__wrapper');
    if (!elems.is(e.target)
        && elems.has(e.target).length === 0) {
        $('.modal').fadeOut();
    }
});
