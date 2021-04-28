$(".banner-carousel").slick({
    dots: true,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.popular--arrow-left-js'),
    nextArrow: $('.popular--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$(".items__popular").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.popular--arrow-left-js'),
    nextArrow: $('.popular--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});


$(".items__arrivals").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.arrivals--arrow-left-js'),
    nextArrow: $('.arrivals--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
$(".items__recommended").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.recommended--arrow-left-js'),
    nextArrow: $('.recommended--arrow-right-js')
});
$(".items__retail").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.retail--arrow-left-js'),
    nextArrow: $('.retail--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$(".items__visited").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.visited--arrow-left-js'),
    nextArrow: $('.visited--arrow-right-js')
});
$(".items__category-slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.category--arrow-left-js'),
    nextArrow: $('.category--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});


$(".brands__slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.sprite--brands-arrow--left-js'),
    nextArrow: $('.sprite--brands-arrow--right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".services__slider").slick({
    dots: true,
    infinite: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.sprite--brands-arrow--left-js'),
    nextArrow: $('.sprite--brands-arrow--right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$(".campaigns--slider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.campaigns--arrow-left-js'),
    nextArrow: $('.campaigns--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

$('.item__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.item__slider--sync',
    prevArrow: $('.item__slider-left-js'),
    nextArrow: $('.item__slider-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.item__slider--sync').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.item__slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.item__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var img = $(slick.$slides[nextSlide]).find("img");
    $('.zoomWindowContainer,.zoomContainer').remove();
    $(img).elevateZoom({
        scrollZoom: true,
        cursor: 'crosshair',
        zoomWindowWidth: 544,
        zoomWindowHeight: 544,
        borderSize: 0,
        lensBorderColour: '#e6e6e6',
        zoomWindowFadeIn: true,
        zoomWindowFadeOut: true
    });
});


$(".corporate__card--slider").slick({
    dots: true,
    infinite: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // appendArrows: '.projects__slider-arrows-h',
    prevArrow: $('.category--arrow-left-js'),
    nextArrow: $('.category--arrow-right-js'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
