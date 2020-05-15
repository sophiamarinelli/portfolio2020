$(document).ready(function() {

    let windowWidth = $(window).width()

    if (windowWidth >= 500) {
        $('.caption').on('click tap swipe', function() {
            console.log('trigger')
            var randomX = Math.floor((Math.random() * 200));
            var randomY = Math.floor((Math.random() * 200));
            var sibcount = $(this).siblings().children('.project-image:visible').length;
            var count = $(this).children('.project-image:hidden').length;
            console.log(count)
            var latest = $(this).children('.project-image:hidden:first');
            var src = $(this).children('.project-image:hidden:first').data('src');
            if (sibcount >= 1) {
                $(this).siblings().children('img').hide();
                latest.attr('src', src).css({ 'z-index': '99', 'top': `${randomX}px`, 'left': `${randomY}px`, }).show();
            } else if (count >= 1) {
                latest.attr('src', src).css({ 'z-index': '99', 'top': `${randomX}px`, 'left': `${randomY}px`, }).show();
            } else {
                $(this).children('img, video').hide();
            }
        });
    } else {
        $('.project-image').css({ 'display': 'block', 'position': 'static' })

    }

    $('.close').on('click tap swipe', function() {
        //create button to close out, have it appear using conditional
    })
});