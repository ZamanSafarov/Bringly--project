$('.category--items-js').click(function (e) {
    e.preventDefault();
    $cat = $(this).data('category');
    $('.items__category--list-item').removeClass('items__category--list-item-active');
    $('.category--items-js').removeClass('items__category--list-link-active');
    $('.sprite--cats-arrow').removeClass('sprite--cats-arrow-active');
    $(this).addClass('items__category--list-link-active')
    $(this).children('.sprite--cats-arrow').addClass('sprite--cats-arrow-active');
    $(this).parent('.items__category--list-item').addClass('items__category--list-item-active');

    $(".items__category-slider").slick('slickRemove', null, null, true);
    $.ajax({
        url: '/ajax/getCategoryItems/' + $cat,
        success: function (data) {
            data = JSON.parse(data)
            // console.log(data)
            $.each(data, function (i, v) {
                $elem =

                    '                        <div class="items--w">' +
                    '                        <div class="items">' +
                    '                            <div class="items__img">' +
                    '<a href="/item/view/'+v.id+'" class="items__img--link">\n' +
                    '                                <img src="' + v.image + '"\n' +
                    '                                     alt="' + v.name + '"\n' +
                    '                                     class="items__img--t img--responsive">\n' +
                    '                                </a>\n' +
                    '                                <a href="#" class="js--addToCompare items--sprite-chart" data-id="' + v.id+ '">\n' +
                    '                                    <span class="sprite sprite--chart-blue"></span>\n' +
                    '                                </a>'+
                    '                            </div>' +
                    '                            <div class="items__content">' +
                    '                                <a href="' + v.brandUrl + '" class="items__brand">' + v.brand + '</a>' +
                    '                                <h4 class="items__name">' +
                    '                                    <a href="' + v.itemUrl + '" class="items__name--link">' + v.name + '</a>' +
                    '                                </h4>' +
                    '                                <div class="items__price">' +
                    '                                    <div class="items__star">';
                         for ($i=0; $i<5;$i++){
                             $elem += '<span class="sprite sprite--star  ' ;

                                 if($i<v.rate){
                                     $elem += "sprite--star-yellow";
                                 }

                                 $elem+= '"></span>';
                         }

             $elem += '                                    </div>' +
                    '                                    <p class="items__prices">' +
                    '                                        ' + v.price + ' Azn' +
                    '                                    </p>';

                if (v.retail !== null) {
                    $elem += '<p class="items__price--old">' + v.retail + ' Azn</p>';
                }
                $elem +=
                    '                                </div>' +
                    '                            </div>' +
                    '                            <div class="items__content-bottom">' +
                    '                                <a href="#" class="items__content-bottom--link js--add" data-item="' + v.id + '">' +
                    '                                    <p class="items__content--basket">' + addToCardStr + '</p>' +
                    '                                    <span class="sprite sprite--items-basket"></span>' +
                    '                                </a>' +
                    '                            </div>' +
                    '                    </div>' +
                    '                    </div>';


                $(".items__category-slider").slick('slickAdd',
                    '<div>' + $elem + '</div>'
                );
            });

            $('.items--w').matchHeight({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });

        }
    })
    // console.log($(this).data('category'))
})
