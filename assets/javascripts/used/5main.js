$(document).ready(function () {

    $("#bgndVideo").YTPlayer();

    $('.js--playVideo').on('click',function () {
        $('#bgndVideo').YTPPlay();
        $('.js--playVideo').css('display', 'none');
        $('.js--pouseVideo').css('display', 'block');
    })
    $('.js--pouseVideo').on('click',function () {
        $('#bgndVideo').YTPPause();
        $('.js--pouseVideo').css('display', 'none');
        $('.js--playVideo').css('display', 'block');
    })




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
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos},1000);
});