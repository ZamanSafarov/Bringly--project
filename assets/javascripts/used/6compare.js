$(document).on('click','.js--addToCompare',function (e) {
    e.preventDefault()
    $_this = $(this);
    $_this.children('.js--compareActivate').addClass('active')

    $.ajax({
        url: '/ajax/addToCompare',
        method: 'POST',
        dataType: 'json',
        data: 'item='+$_this.data('id'),
        success: function (data) {
            if (data.no) {
                $('.js--badgeCompareCount')
                    .removeClass('hidden')
                    .text(data.no);
                $('.js--chartActivate').addClass('active');
                $('.js--compareItemsLink').attr('href', '/compare/view')
            }else{
                $('.js--badgeCompareCount')
                    .text(data.no)
                    .addClass('hidden');
                $('.js--chartActivate').removeClass('active');
                $('.js--compareItemsLink').attr('href', '#')
            }
            setTimeout(function () {
                $_this.children('.js--compareActivate').removeClass('active')
            },1500)
        }
    })
});
$('.js--compareItemsLink').click(function (e) {
    if ($(this).attr('href') == '#'){
        e.preventDefault();
    }
})
