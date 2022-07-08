$(document).ready(function () {
    console.log('asas');

    $('.js--openMenu').on('click',function () {
        $('.mobileMenu').addClass('open');
        $('html, body').css('overflowY', 'hidden');

    })
    $('.js--closeMenu').on('click',function () {
        $('.mobileMenu').removeClass('open');
        $('html, body').css('overflowY', 'auto');
    })

    var aboutRightImdHeight = $('.about__right  > img').height();
    $('.about__right--layout').height(aboutRightImdHeight);
    $(".js--riversSlider").slick({
        dots: true,
        infinite: false,
        arrows: false,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1

        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 570,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });
    $(".js--partnyorsSlider").slick({
        dots: false,
        infinite: true,
        arrows: false,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

        // appendArrows: '.projects__slider-arrows-h',
        // prevArrow: $('.category--arrow-left-js'),
        // nextArrow: $('.category--arrow-right-js'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});