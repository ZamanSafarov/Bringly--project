$('.js--mediaLoad').on('click', function (e) {
    e.preventDefault();
    $_this = $(this)
    $type = $_this.data('type');
    $offset = parseInt($_this.attr('data-scroll'));
    $data = {
        'type': $type,
        'offset' : $offset
    }
    $.ajax({
        url: '/articles/loadMore',
        type: 'post',
        data: $data,
        dataType: 'json',
        complete: function (data) {
            $html = data.responseText;
            $html = $html.replace(null,'')
            if ($html != null){
                $_this.parent('div').before($html);
            }
            $offset = $offset+8
            $_this.attr('data-scroll', $offset)
        }
    })
})


$('.media__view--slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.media__view--slider-nav'
});
$('.media__view--slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.media__view--slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});
