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
$('.case__slider').owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        1000: {
            items: 2
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

var cases =  $('.case__slider').owlCarousel();
$('.case__nav_right').click(function () {
    cases.trigger('next.owl.carousel');
});
$('.case__nav_left').click(function () {
    cases.trigger('prev.owl.carousel');
});