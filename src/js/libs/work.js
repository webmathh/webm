var animation = ['work__animation_scale', 'work__animation_darken', 'work__animation_rotate'];
var works = $('.work');
works.each(function (i, item) {
    var random = Math.floor(Math.random() * animation.length);
    var anim = animation[random];
    $(item).addClass(anim);
});

