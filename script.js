$(document).ready(function() {

    $('.caption').on('click tap swipe', function() {
        var randomX = Math.floor((Math.random() * 200));
        var randomY = Math.floor((Math.random() * 200));
        var sibcount = $(this).siblings().children('.project-image:visible').length;
        var count = $(this).children('.project-image:hidden').length;
        var latest = $(this).children('.project-image:hidden:first');
        var src = $(this).children('.project-image:hidden:first').data('src');
        if (sibcount >= 1) {
            $(this).siblings().children('img').hide();
            latest.attr('src', src).css({ 'z-index': '99', 'top': `${randomX}px`, 'left': `${randomY}px` }).show();
        } else if (count >= 1) {
            latest.attr('src', src).css({ 'z-index': '99', 'top': `${randomX}px`, 'left': `${randomY}px` }).show();
        } else {
            $(this).children('img, video').hide();
        }
    });

    $('.close').on('click tap swipe', function() {
        //create button to close out, have it appear using conditional
    })
    // $('.header').click(function() {
    //     $('.header').toggleClass('rotated');
    // });
    // $('#psychic').click(function() {
    //     var psychic = ['assets/psychic/DocumentationPages.png', 'assets/psychic/DocumentationPages2.png', 'assets/psychic/DocumentationPages3.png', 'assets/psychic/DocumentationPages4.png'];
    //     let picDiv = 0
    //     if (picDiv === 0) {
    //         $.each(psychic, function(i) {

    //             var randomX = Math.floor((Math.random() * 500));
    //             var randomY = Math.floor((Math.random() * 500));
    //             picDiv = $('.pic').add("div");

    //             $(`<img class="images" src=${this}>`).appendTo(picDiv).css({
    //                 'position': 'absolute',
    //                 'left': randomX + 'px',
    //                 'top': randomY + 'px',
    //                 'width': '1000px',
    //                 'height': 'auto',
    //             })
    //             console.log(this)
    //         })
    //     } else {
    //         $('.pic').remove();
    //     }
    // })
});