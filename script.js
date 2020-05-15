function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}



$(document).ready(function() {
    let gradient = [];
    for (var i = 0; i < 3; i++) {
        var value = getRandomColor();
        gradient.push(value);
    }
    $('.caption').css({
        'background': `${gradient[0]}`,
        'color': `${gradient[1]}`
    });

    $('a').css({
        'color': `${gradient[1]}`
    });

    $('.header').css({
        'background': `${gradient[0]}`,
        'color': `${gradient[1]}`
    });

    $('body').css({
        'background': `${gradient[1]}`
    });

    $('#updateColor').css({
        'background': `${gradient[1]}`,
        'color': `${gradient[0]}`
    });
    let windowWidth = $(window).width()
    if (windowWidth >= 500) {
        $('.date').css({
            'color': `${gradient[0]}`
        });
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
        $('.date').css({
            'color': `${gradient[1]}`
        });
        $('.project-image').css({ 'display': 'block', 'position': 'static' })

    }



    $('#updateColor').on('click', function() {
        getRandomColor();
        console.log(getRandomColor())
        let gradient = [];
        for (var i = 0; i < 3; i++) {
            var value = getRandomColor();
            gradient.push(value);
        }

        if (windowWidth >= 500) {
            $('.date').css({
                'color': `${gradient[0]}`
            });
        } else {
            $('.date').css({
                'color': `${gradient[1]}`
            });
        }

        $('.caption').css({
            'background': `${gradient[0]}`,
            'color': `${gradient[1]}`
        });

        $('a').css({
            'color': `${gradient[1]}`
        });

        $('.header').css({
            'background': `${gradient[0]}`,
            'color': `${gradient[1]}`
        });

        $('body').css({
            'background': `${gradient[1]}`
        });

        $('#updateColor').css({
            'background': `${gradient[1]}`,
            'color': `${gradient[0]}`
        });


    })


    $('.close').on('click tap swipe', function() {
        //create button to close out, have it appear using conditional
    })
});