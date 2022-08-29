
$(document).ready(function () {
   
    $('.js--play').click(()=>{
        $('.js--start').addClass('disable')
        $('.js--video').addClass('active')
    })
    $('.js--play').click(() => {
        $('.js--start').addClass('disable')
        $('.js--video').addClass('active')
    })
    $('.js--carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')

    });
    $('.js--carousel-campaign').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
        prevArrow: $('.prev-campaign'),
        nextArrow: $('.next-campaign')
        
    });
});