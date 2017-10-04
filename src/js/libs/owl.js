$('.company__slider').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1100:{
            items:3
        },
        1600: {
            items:5
        }
    }
});
var company = $('.company__slider').owlCarousel();
$('.company__nav_right').click(function () {
    company.trigger('next.owl.carousel');
});
$('.company__nav_left').click(function () {
    company.trigger('prev.owl.carousel');
});