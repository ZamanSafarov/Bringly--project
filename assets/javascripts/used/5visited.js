$('.js--removeVisitedListItem').click(function (e) {
    e.preventDefault();
    $_this = $(this);
    $_this.children('.js--heartActivateOnadd').addClass('active--filled')

    $.ajax({
        url: '/visited/removeVisitedList/' + $_this.data('id'),
        method: 'GET',
        success: function (data) {
            data = JSON.parse(data);
                $_this
                    .parent('.js--sumWH')
                    .parent('.js--wHalf')
                    .parent('.js--productListItem').remove();
                    $('.js--visitedlistCount').text(data.no);
            if (data.no) {
                $('.js--badgeVisitedCount')
                    .removeClass('hidden')
                    .text(data.no);
            }else{

                $('.js--badgeCountVisitedList')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--productList').addClass('hidden');
                $('.js--visitedListLink').attr('href', '#');
                $('.js--visitedListEmptyDetail').removeClass('hidden');
            }
        }
    })
});



$('.js--removeVisitedListAll').click(function (e) {
    e.preventDefault();
    $.ajax({
        url: '/visited/delAll',
        method: 'GET',
        success: function (data) {
            data = JSON.parse(data);
            $('.js--productList').empty();
            $('.productList__item-delete').text(data.no).css('display', 'none');
            $('.js--visitedlistCount').text(data.no);

            $('.js--badgeVisitedCount').text(data.no);
            if (data.no) {
                $('.js--badgeVisitedCount')
                    .removeClass('hidden')
                    .text(data.no);
                $('.js--heartMenu').addClass('active');
                $('.js--visitedListLink').attr('href', '/visited/view');
                $('.js--visitedlistCount').text(data.no);


            }else{
                $('.js--badgeVisitedCount')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--heartMenu').removeClass('active');
                $('.js--productList').addClass('hidden');
                $('.js--visitedListLink').attr('href', '#');
                $('.js--visitedListEmptyDetail').removeClass('hidden');
            }
        }
    });
});
