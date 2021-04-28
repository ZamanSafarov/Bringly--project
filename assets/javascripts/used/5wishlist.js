$('.js--addToWish').click(function (e) {
    e.preventDefault()
    $_this = $(this);
    $_this.children('.js--heartActivateOnadd').addClass('active--filled')

    $.ajax({
        url: '/ajax/wishlist/' + $_this.data('id'),
        method: 'GET',
        success: function (data) {
            data = JSON.parse(data)
            if (data.no) {
                $('.js--badgeCountWishlist')
                    .removeClass('hidden')
                    .text(data.no);
                $('.js--heartMenu').addClass('active');
                $('.js--wishlisLink').attr('href', '/wishlist/view')
            }else{

                $('.js--badgeCountWishlist')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--heartMenu').removeClass('active');
                $('.js--wishlisLink').attr('href', '#')
            }
            setTimeout(function () {
                $_this.children('.js--heartActivateOnadd').removeClass('active--filled')
            },1500)
        }
    })
});
$('.js--wishlisLink').click(function (e) {
    if ($(this).attr('href') == '#'){
        e.preventDefault();
    }
});

$('.js--removeWishlistItem').click(function (e) {
    e.preventDefault()
    $_this = $(this);
    $_this.children('.js--heartActivateOnadd').addClass('active--filled')

    $.ajax({
        url: '/ajax/wishlist/' + $_this.data('id'),
        method: 'GET',
        success: function (data) {
            data = JSON.parse(data);

                $_this
                    .parent('.js--sumWH')
                    .parent('.js--wHalf')
                    .parent('.js--productListItem').remove();
                    $('.js--wishlistCount').text(data.no);
            if (data.no) {
                $('.js--badgeCountWishlist')
                    .removeClass('hidden')
                    .text(data.no);
                $('.js--heartMenu').addClass('active');
                $('.js--wishlisLink').attr('href', '/wishlist/view')
            }else{

                $('.js--badgeCountWishlist')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--heartMenu').removeClass('active');
                $('.js--productList').addClass('hidden');
                $('.js--wishlisLink').attr('href', '#');
                $('.js--wishlistEmptyDetail').removeClass('hidden');
            }
            setTimeout(function () {
                $_this.children('.js--heartActivateOnadd').removeClass('active--filled')
            },1500)


            // $('.js--cardInfo').removeClass('hidden');
        }
    })
});

$('.js--removeWishlistAll').click(function (e) {
    e.preventDefault();
    $.ajax({
        url: '/wishlist/delAll',
        method: 'GET',
        success: function (data) {
            data = JSON.parse(data);
            $('.js--productList').empty();
            $('.productList__item-delete').text(data.no).css('display', 'none');

            $('.js--wishlistCount').text(data.no);
            if (data.no) {
                $('.js--badgeCountWishlist')
                    .removeClass('hidden')
                    .text(data.no);
                $('.js--heartMenu').addClass('active');
                $('.js--wishlisLink').attr('href', '/wishlist/view')
            }else{

                $('.js--badgeCountWishlist')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--heartMenu').removeClass('active');
                $('.js--productList').addClass('hidden');
                $('.js--wishlisLink').attr('href', '#');
                $('.js--wishlistEmptyDetail').removeClass('hidden');
            }
            setTimeout(function () {
                $_this.children('.js--heartActivateOnadd').removeClass('active--filled')
            },1500)


            // $('.js--cardInfo').removeClass('hidden');
        }
    })


});
