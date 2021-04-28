function openSpecificBox(e) {
    showBox(e);
    var t = $("body");
    TweenMax.to(t, 3, {
        onComplete: function () {
            hideOpenBox(e)
        }
    })
}

function showBox(e) {
    TweenMax.killTweensOf($(e).children(".shopping__dropdown"));
    var t = $(e).children(".shopping__dropdown").children(".shopping__dropdown--item ").length,
        h = $(e).children(".shopping__dropdown").height(),
        a = $(e).height(),
        sprite = $(e).children('.js--spriteActivate');
    sprite.addClass('active');
    $(e).addClass('active');

    $(e).children(".shopping__dropdown").css({display: "table"}), TweenMax.to($(e).children(".shopping__dropdown"), .5, {
        opacity: 1,
        ease: Strong.easeOut,
        height: h,
        top: a,
        visibility: 'visible',
        onComplete: function () {
            $(e).children(".shopping__dropdown").css({overflow: "visible"});
            for (var h = 1; h <= t; h++) TweenMax.to($(e).children(".shopping__dropdown").children(".htheme_box_inner").children("div[data-id=" + h + "], a[data-id=" + h + "]"), 1, {
                opacity: 1,
                ease: Strong.easeOut,
                delay: .1 * h
            });
        }
    })
}

function hideOpenBox(e) {
    TweenMax.killTweensOf($(e).children(".shopping__dropdown"));
    sprite = $(e).children('.js--spriteActivate');

    for (var t = $(e).children(".shopping__dropdown").children(".shopping__dropdown--item").length, h = 1; h <= t; h++) TweenMax.to($(e).children(".shopping__dropdown").children(".htheme_box_inner").children("div[data-id=" + h + "], a[data-id=" + h + "]"), 1, {
        opacity: 0,
        ease: Strong.easeOut,
        delay: .1
    });
    TweenMax.to($(e).children(".shopping__dropdown"), 1, {
        opacity: 0,
        ease: Back.easeOut,
        height: 0,
        top: 10,
        delay: .3,
        onComplete: function () {
            sprite.removeClass('active');
            $(e).removeClass('active');
            $(e).children(".shopping__dropdown").css({overflow: "visible", display: "none"});
        }
    })
}

$('.js--openCardDrop').click(function (e) {
    e.preventDefault();
    showBox($(".card__box"))
})

$(document).click(function (e) {
    if (!e.target.matches('.shopping__dropdown') && !e.target.matches('.dropdown__has--child')&&!e.target.matches('.dropdown__has--child a')&&!e.target.matches('.dropdown__has--child a span')) {
        $('.shopping__dropdown').each(function () {
            var t = $(this).parent('.dropdown__has--child');
            hideOpenBox(t)
        })
    }
})



$(document).on('click', '.js--add', function (e) {
    e.preventDefault();

    $submitBtn = $(this);
    $width = $submitBtn.outerWidth();

    $submitBtnTxt = $submitBtn.html();

    $submitBtn
        .html('')
        .css('width', $width+'px')
        .addClass('buttonspinner')
        .attr('disabled', true);

    $linkparams = $(this).data('item');

    if ($submitBtn.data('hascolor')){
        $color = $('.js--colorInp:checked').val();
        $linkparams += '?color='+$color
    }


    $.ajax({
        url: '/checkout/add/' + $linkparams,
        dataType: 'json',
        // data: $(this).serialize(),
        success: function (data) {

            if (data.success) {
                $('.shopping__dropdown--item').removeClass('shopping__dropdown--item--last');

                if (data.lastItem != undefined) {
                    $html = ' <li class="shopping__dropdown--item shopping__dropdown--item--last">\n' +
                        ' <a href="#" data-item="' + data.lastItem.id + '" class="shopping__dropdown--remove js--removeShoppingItem">\n' +
                        ' <span class="sprite sprite--times"></span>\n' +
                        '</a>\n' +
                        '<div class="shopping__dropdown--img">\n' +
                        '<img src="' + data.lastItem.photo + '" class="img--responsive" alt="' + data.lastItem.name + '">\n' +
                        '</div>\n' +
                        '<div class="shopping__dropdown--details">\n' +
                        '<p class="shopping__dropdown--title">' + data.lastItem.name + '</p>\n' +
                        '<p class="shopping__dropdown--price">' + data.lastItem.price + '</p>\n' +
                        '</div>\n' +
                        '</li>';
                    $('.shopping__dropdown--sum').before($html);
                }

                $('.js--shoppingCardDropdown').removeClass('shopping__dropdown--empty')
                $('.js--cardEmptyDetail').addClass('hidden');
                $('.js--cardInfo').removeClass('hidden');
                $('.js--cardSum').text(data.sum);
                $('.js--badgeCount').text(data.no);
                openSpecificBox($(".card__box"));

                Alertpal.message("success", {
                    message: data.message
                });

                $submitBtn.addClass('buttonspinner--success');

                setTimeout(function () {
                    $submitBtn.html($submitBtnTxt)
                        .css('width', '')
                        .removeClass('buttonspinner')
                        .attr('disabled', false);
                },1500);

            }else{

                $submitBtn.html($submitBtnTxt)
                    .css('width', '')
                    .removeClass('buttonspinner')
                    .attr('disabled', false);

                    Alertpal.message("error", {
                        message: data.message
                    });

            }
        }
    })
});


// console.log('class array   ',document.querySelectorAll('.js--removeShoppingItem'))
//
// $.each($('.js--removeShoppingItem'), function (i,v){
//     console.log('this    ',$(this))
// })



$('.js--removeShoppingItem').click(function (e) {
    e.preventDefault();
    $_this = $(this);
    $item = $_this.data('item')
    $.ajax({
        url: '/checkout/del/'+$item,
        method: 'GET',
        complete: function (data) {
            var $parsedData = JSON.parse(data.responseText);

            if($parsedData.success){
                $('.js--cardSum').text($parsedData.sum);
                $('.js--badgeCount').text($parsedData.no);
                if (!$parsedData.no){
                    $('.js--cardEmptyDetail').removeClass('hidden')
                    $('.js--cardInfo').addClass('hidden');
                    $('.js--shoppingCardDropdown').addClass('shopping__dropdown--empty')
                        .css('height', 'auto');
                    $('.js--productBag__itemRow').addClass('hidden');
                }

                $.each($('.js--removeShoppingItem'), function(i,v){
                   if($(this).data('item')==$item){
                       $(this).parent('.js--shoppingDropdown').remove();
                       $(this).closest('div.productBag__item-row').remove();
                   }
                })
            }

        }
    })
});



$(".js--incerase").on("click", function(){
    var countEl = $(this).siblings(".productBag__item-count");
    var cnt = parseInt(countEl.text());
    $item = $(this).data('id');
    $_this = $(this);
    cnt++;
    $.ajax({
        url: '/checkout/update/' + $item + '?quantity=' + cnt,
        type: 'GET',
        complete: function (data){
            var $parsedData = JSON.parse(data.responseText);

            if ($parsedData.success){
                $_this.parent('.productBag__item-quantity').closest('.js--quantityW')
                    .next('.js--priceW').find('.js--productFinalPrice').text($parsedData.itemFinalPrice);
                $('.js--cardSum').text($parsedData.sum);

                countEl.text(cnt);
            }
        }
    })
});

$(".js--decrease").on("click", function(){
    var countEl = $(this).siblings(".productBag__item-count");
    var cnt = parseInt(countEl.text());
    $_this = $(this);
    $item = $(this).data('id');
    if(cnt>1){
        cnt--;
        $.ajax({
            url: '/checkout/update/' + $item + '?quantity=' + cnt,
            type: 'GET',
            complete: function (data){
                var $parsedData = JSON.parse(data.responseText);
                if($parsedData.success){
                    $_this.parent('.productBag__item-quantity').closest('.js--quantityW')
                        .next('.js--priceW').find('.js--productFinalPrice').text($parsedData.itemFinalPrice);
                    $('.js--cardSum').text($parsedData.sum);
                    countEl.text(cnt);
                }
            }
        })
    }
});



