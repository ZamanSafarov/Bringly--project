
$(document).ready(function () {
   
    $('.js--play').click(()=>{
        $('.js--start').addClass('disable')
        $('.js--video').addClass('active')
    })
    $('.js--lang').click(() => {
        $('.js--lang-menu').toggleClass('active')
    })
    $('.js--hamburger-menu').click(() => {
        $('.js--mobile-menu').toggleClass('seem')
    })
    $('.js--tr-az').click(() => {
        if ($('.js--tr-other').hasClass('tariff-red')) {
            $('.js--tr-other').removeClass('tariff-red')
            $('.js--tr-other').addClass('tariff-normal')
        }
        if ($('.js--tr-az').hasClass('tariff-normal')) {
            $('.js--tr-az').removeClass('tariff-normal')
        }
        $('.js--tr-az').addClass('tariff-red')
    })
    $('.js--tr-other').click(() => {
        if ($('.js--tr-az').hasClass('tariff-red')) {
            $('.js--tr-az').removeClass('tariff-red')
            $('.js--tr-az').addClass('tariff-normal')
        }
        if ($('.js--tr-other').hasClass('tariff-normal')) {
            $('.js--tr-other').removeClass('tariff-normal')
        }
        $('.js--tr-other').addClass('tariff-red')
    })
    
    $('.js--tabs').click((e) => {
        if ($('.js--tabs').hasClass('clicked-tab')) {
            $('.js--tabs').removeClass('clicked-tab')
            $('.js--tabs').addClass('normal-tab')
        }
        
        $(e.target).addClass('clicked-tab')
    })

    $('.js--question').click((e) => {
        $(e.target).siblings('.js--answer').toggleClass('active')
        
        $(e.target).children('.js--arrow').toggleClass('rotate-270')
        $(e.target).closest('.js--accordion--con').toggleClass('disable-after')
        
    })
    $('.js--carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });
    $('.js--carousel-campaign').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: $('.prev-campaign'),
        nextArrow: $('.next-campaign'),
         responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        
    });
    $('.js--carousel-sales').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-sales'),
        nextArrow: $('.next-sales'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]

    });
    


    var McButton = $("[data=hamburger-menu]");
    var McBar1 = McButton.find("b:nth-child(1)");
    var McBar2 = McButton.find("b:nth-child(2)");
    var McBar3 = McButton.find("b:nth-child(3)");



    McButton.click(function () {
        $(this).toggleClass("active");
        
        $('b:nth-child(2)').toggleClass('disable')
        if (McButton.hasClass("active")) {
            McBar1.velocity({ top: "50%" }, { duration: 100, easing: "swing" });
            McBar3.velocity({ top: "50%" }, { duration: 100, easing: "swing" })
                .velocity({ rotateZ: "90deg" }, { duration: 600, delay: 200, easing: [500, 20] });
            McButton.velocity({ rotateZ: "135deg" }, { duration: 600, delay: 200, easing: [500, 20] });
        } else {
            McButton.velocity("reverse");
            McBar3.velocity({ rotateZ: "0deg" }, { duration: 600, easing: [500, 20] })
                .velocity({ top: "80%" }, { duration: 100, easing: "swing" });
            McBar1.velocity("reverse", { delay: 600 });
        }
    });




    /*$element.velocity({ 
        width: "500px",
        property2: value2
    }, {
        duration: 400,
        easing: "swing",
        queue: "",
        begin: undefined,
        progress: undefined,
        complete: undefined,
        display: undefined,
        visibility: undefined,
        loop: false,
        delay: false,
        mobileHA: true
    });*/


});