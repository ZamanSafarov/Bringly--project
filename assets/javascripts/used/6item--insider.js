$('.js--itemInsiderLinkToTab').click(function (event) {
    event.preventDefault();
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    $('.tab__item').removeClass('tab__item--active');
    $('.tab__btn').removeClass('tab__btn--active');
    target.addClass('tab__item--active');
    var targetLink = this.hash.replace('#', '')
    $.each($('.tab__btn'), function (i,v) {
        if ($(this).attr('href') == targetLink){
            $(this).addClass('tab__btn--active')
        }
    })
    $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex', '-1');
                $target.focus();
            }
        });
});

$('#zoom_0').elevateZoom({
    scrollZoom: true,
    cursor: 'crosshair',
    zoomWindowWidth: 544,
    zoomWindowHeight: 544,
    borderSize: 0,
    lensBorderColour: '#e6e6e6',
    zoomWindowFadeIn: true,
    zoomWindowFadeOut: true
})
