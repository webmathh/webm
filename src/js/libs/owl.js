
var company = $('.company__slider').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        500: {
            items: 2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
        1600: {
            items:5
        }
    }
});
$('.company__nav_right').click(function () {
    company.trigger('next.owl.carousel');
});
$('.company__nav_left').click(function () {
    company.trigger('prev.owl.carousel');
});