var map = $('.map__item');
if (map.length) {
    $('.map__visible').click(function () {
         var item = $(this).parent(map);
         if (!item.hasClass('active')) {
             map.removeClass('active');
             $('.map__hidden').slideUp();
             item.addClass('active');
             item.children('.map__hidden').slideDown();
         }


    });
}