$('.nav__item--lang-o').click(function (e) {
    e.preventDefault();
    $('.nav__dropdown--lang-h').addClass('nav__dropdown--lang--open')
});


$('.dropdown__main--item').bind({
    'mouseenter': function () {
        $('.dropdown__main--item').removeClass('dropdown__main--item-open')
        $(this).addClass('dropdown__main--item-open');
        $height = $('.main-nav__dropdown').height();
        $(this).children('.dropdown--sprite').addClass('dropdown--sprite-active')
        $(this).children('.dropdown__tree')
            .css({
                'width': '220px',
            })
            .addClass('dropdown__tree-active')

        $(this).find('.dropdown__main--link').addClass('dropdown__main--link-active')
    },
    'mouseleave': function () {
        $('.dropdown__main--item').removeClass('dropdown__main--item-open');
        $('.dropdown__main--link').removeClass('dropdown__main--link-active');
        $('.dropdown__tree')
            .css({
                'width': ''
            })
            .removeClass('dropdown__tree-active')
        $('.dropdown--sprite').removeClass('dropdown--sprite-active')
    }
});

$('.dropdown__tree--item').bind({
    'mouseenter': function () {
        $('.dropdown__tree--item').removeClass('dropdown__tree--item-open')
        $(this).addClass('dropdown__tree--item-open');
        $(this).children('.dropdown--sprite').addClass('dropdown--sprite-active')
        $(this)
            .siblings('.dropdown__tree--item').find('.dropdown__tree')
            .removeClass('dropdown__tree-active');
        $(this)
            .siblings('.dropdown__tree--item').find('.dropdown--sprite')
            .removeClass('dropdown--sprite-active');
        $(this).children('.dropdown__tree')
            .css({
                'width': '220px',
            })
            .addClass('dropdown__tree-active')

        $(this).children('.dropdown__tree--link').addClass('dropdown__tree--link-active')
    },
    'mouseleave': function () {
        $('.dropdown__tree--item-open').removeClass('dropdown__tree--item-open');
        $('.dropdown__tree--link').removeClass('dropdown__tree--link-active')
        // $('.dropdown__tree:not('+$(this).parent()+')')
        //     .css({
        //         'width':'',
        //     })
        //     .removeClass('dropdown__tree-active')
    }
});

$('.main-nav--dropdown').bind('click', function (e) {
    e.preventDefault();
    $('.main-nav__dropdown')
        // .addClass('animate__animated animate__fadeInDown')
        .toggleClass('main-nav__dropdown-active')
    $(this)
        .closest('.main-nav--item')
        .toggleClass('main-nav--item--active')
    $(this)
        .children('.sprite--menu-open--js')
        .toggleClass('sprite--menu-open')
    $(this)
        .toggleClass('main-nav--item-link--parent-active')
});


$('.items--w').matchHeight({
    byRow: false,
    property: 'height',
    target: null,
    remove: false
});


$('.articles__h-link--js').click(function (e) {
    e.preventDefault();
    $('.articles__h-link--js').removeClass('articles__h-link-active')
    $(this).addClass('articles__h-link-active');
    $target = $(this).data('target');
    $url = $(this).attr('href');
    $('.articles__item--w').removeClass('active');
    $('#' + $target + '').addClass('active');
    $('.articles__right-link--js').attr('href', $url)
})


$('.page__list--link--js').click(function (e) {
    e.preventDefault();
    $('.page__list--dropdown').slideUp();
    if (!$(this).find('.sprite--cats-arrow--js').hasClass('rotated')) {
        $('.sprite--cats-arrow--js').removeClass('rotated');
        $(this).find('.sprite--cats-arrow--js').addClass('rotated');

    } else {
        $('.sprite--cats-arrow--js').removeClass('rotated');
    }
    $(this).next('.page__list--dropdown').stop().slideToggle()
});

$('.filter__list--link-js').click(function (e) {
    e.preventDefault();
    $('.filter__list--dropdown').slideUp();
    if (!$(this).find('.filter__list--arrow-js').hasClass('rotated')) {
        $('.filter__list--arrow-js').removeClass('rotated');
        $(this).find('.filter__list--arrow-js').addClass('rotated');

    } else {
        $('.filter__list--arrow-js').removeClass('rotated');
    }
    $(this).next('.filter__list--dropdown').stop().slideToggle()
});

$('.page__totop').click(function (e) {
    e.preventDefault();
    var body = $("html, body");
    body.stop().animate({scrollTop: 0}, 500, 'swing');
});

$('.item__share--js').click(function (e) {
    e.preventDefault();
    $(this).addClass('active')
    $('.item__icons').removeClass('active')
    $(this).parent('.item__icons').addClass('active');
    $(this).next('.item__icons-dropdown').fadeIn('slow')
})


$(document).click(function (e) {
    if (!e.target.matches('.nav__dropdown--lang-h') && !e.target.matches('.nav__item--lang-o')) {
        $('.nav__dropdown--lang-h').removeClass('nav__dropdown--lang--open')
    }
    if (!e.target.matches('.main-nav__dropdown') && !e.target.matches('.main-nav--dropdown') && !e.target.matches('.sprite--menu-open--js')) {
        $('.main-nav__dropdown').removeClass('main-nav__dropdown-active');
        $('.main-nav--item')
            .removeClass('main-nav--item--active')
        $('.sprite--menu-open--js')
            .removeClass('sprite--menu-open')
        $('.main-nav--dropdown')
            .removeClass('main-nav--item-link--parent-active')
    }

    // if (!e.target.matches('.item__icons-dropdown') && !e.target.matches('.item__share--js')) {
    if (!$(e.target).is('.item__icons-dropdown, .item__share--js, .item__icons-dropdown *')) {
        $('.item__icons').removeClass('active');
        $('.item__share--js').removeClass('active')
        $('.item__icons-dropdown').fadeOut('slow');
    }


    if (!e.target.matches('.help__dropdown') && !e.target.matches('.help__dropdown--link')) {
        $('.help__dropdown').removeClass('help__dropdown--open')
    }


});

$('.tab__btn').click(function (e) {
    e.preventDefault();
    $target = $(this).attr('href');
    $('.tab__btn').removeClass('tab__btn--active');
    $(this).addClass('tab__btn--active');
    $('.tab__item').removeClass('tab__item--active');
    $('#' + $target + '').addClass('tab__item--active')
});

$('.tab__btn--order').click(function (e) {
    // e.preventDefault();
    $target = $(this).attr('href');
    $('.tab__btn--order').removeClass('tab__btn--order--active');
    $(this).addClass('tab__btn--order--active');
    $('.tab__item').removeClass('tab__item--active');
    $('#' + $target + '').addClass('tab__item--active');

});
$('.tab__btn--store').click(function (e) {
    e.preventDefault();
    $target = $(this).attr('href');
    $('.tab__btn--store').removeClass('tab__btn--store--active');
    $(this).addClass('tab__btn--store--active');
    $('.tab__item--store').removeClass('tab__item--store--active');
    $('#' + $target + '').addClass('tab__item--store--active')
});


$('.review__write').click(function (e) {
    e.preventDefault();
    $target = $(this).data('target');
    MicroModal.show('' + $target + '')
})

$('.js--changeForm').click(function (e) {
    e.preventDefault();
    $target = $(this).attr('href');
    $('.form__widget-h').removeClass('form__widget-h--active')
    $('#' + $target + '').addClass('form__widget-h--active');
});

$('.form__stars .js--formStar').on({

    // 'mouseover': function () {
    //
    //     var onStar = $(this).index()+1;
    //     var stars = $('.form__stars').children('.js--formStar');
    //
    //     stars.each(function (e) {
    //         if (e < onStar) {
    //             $(this).addClass('sprite--star-yellow');
    //         } else {
    //             $(this).removeClass('sprite--star-yellow');
    //         }
    //     });
    // },
    //
    // 'mouseout': function () {
    //     var stars = $('.form__stars').children('.js--formStar');
    //     // stars.each(function (e) {
    //         $('.js--formStar').removeClass('sprite--star-yellow');
    //     // });
    //
    // },

    'click': function () {
        var onStar = $(this).index() + 1;
        var stars = $('.form__stars').children('.js--formStar');
        $('#Review_star').val(onStar);

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('sprite--star-yellow');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('sprite--star-yellow');
        }
    }
});

$('#review-form').on('submit', function (e) {
    e.preventDefault();
    $_this = $(this);
    $formData = $_this.serialize();
    $submitBtn = $_this.find('.form__submit--btn');
    $submitBtnTxt = $submitBtn.text()

    $submitBtn.text('')
        .addClass('buttonspinner')
        .attr('disabled', true)

    $.ajax({
        'url': $_this.attr('action'),
        'type': 'POST',
        'data': $formData,
        'complete': function (data) {
            $resp = JSON.parse(data.responseText);
            if (!$resp.success) {
                $submitBtn.text($submitBtnTxt)
                    .removeClass('buttonspinner')
                    .attr('disabled', false)
                $_this.find('input, textarea')
                    .addClass('error')
            }
            if ($resp.success) {
                $submitBtn
                    .addClass('buttonspinner--success');
                setTimeout(function () {
                    $submitBtn.text($submitBtnTxt)
                        .removeClass('buttonspinner')
                        .attr('disabled', false);
                }, 1500)

                setTimeout(function () {
                    $('#review--modal').removeClass('is-open')
                        .attr('aria-hidden', true)
                }, 1000)
            }
        }
    })
});


$('.tab__table-show').click(function (e) {
    e.preventDefault();
    $('.tab__table-wrapper').toggleClass('auto-height');
    $('.js--showMoreLessTab').toggleClass('hidden');
    $('.js--showMoreLessArrow').toggleClass('rotated');

});

$('.shopping__dropdown--remove').click(function (e) {
    e.preventDefault();
});

if ($('#js-fbShare').length) {

    document.getElementById('js-fbShare').onclick = function () {
        FB.ui({
            method: 'share',
            mobile_iframe: true,
            href: window.location.hostname + $('.js--itemListLink').attr('href')
        }, function (response) {
        });
    }
}

if ($('#js--twShare').length) {

    var link = document.getElementById('js--twShare');
    var url = window.location.hostname + $('.js--itemListLink').attr('href');

    link.addEventListener('click', function (event) {
        event.preventDefault();
        window.open("https://twitter.com/share?url=" + encodeURIComponent(url));
    }, false);
}

$('#credit').on('click', function () {
    $(this).parent().find('a').trigger('click')
})

$('#r12').on('click', function () {
    $(this).parent().find('a').trigger('click')
})

$('.js--date').datepicker();

$('.js--accordionCollapse').on('change', function () {
    $target = $(this).attr('id');
    $('.js--accordionBody').addClass('hidden');
    $('.' + $target + ' ').removeClass('hidden');
})

$('.js--fileSelect').on('click', function (e) {
    e.preventDefault();
    $('.js--fileInp').trigger('click');

    $nameHolder = $('.js--fileName');

    $('.js--fileInp').on('change', function (event) {
        var fileName = event.target.files[0].name;
        $nameHolder.text(fileName);
    });

    $('#js--orderSubmit').click(function (e) {
        e.preventDefault();
        $('#order-form').submit();
    });

});

$('.help__faq--accordion').click(function (e) {
    e.preventDefault();
    $(this).next('.help__faq--panel').slideToggle();
    $(this).find('span.help__faq--arrow').toggleClass('help__faq--rotatedArrow');
});

var GMstyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "rgba(216, 216, 216, 0.6)"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];

// if HTML DOM Element that contains the map is found...
if (document.getElementById('store--map')) {

    // var markerLatLng = new google.maps.LatLng(lat,lng);
    var markers = storeMarkers;

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(markers[0].latitude, markers[0].longitude),
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            // position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scrollwheel: true,
        // styles: GMstyle,
        mapTypeControl: false,
        // mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            // position: google.maps.ControlPosition.RIGHT_CENTER
        },
    };

    var map = new google.maps.Map(document.getElementById("store--map"), mapOptions);

    // Popup = createPopupClass();
    // popup = new Popup(
    //     new google.maps.LatLng(lat, lng),
    //     document.getElementById('map__content'));
    //     popup.setMap(map);

    for (var i = 0; i < markers.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(markers[i].latitude, markers[i].longitude),
            animation: google.maps.Animation.DROP,
            // icon: markers[0].icon,
            language: 'az_AZ',
            // avoidTolls: true,
            // avoidHighways: true,
        });

        infowindow = new google.maps.InfoWindow({
            content: '<div class="info__window--content">' +
                '<ul>' +
                '<li>' + markers[i].name + '</li>' +
                '<li>' + markers[i].address + '</li>' +
                '</ul>' +
                '</div>',
            pixelOffset: new google.maps.Size(0, 10),
            maxWidth: 200,
            minWidth: 200,
            boxStyle: {
                padding: "0px 0px 0px 0px",
                borderRadios: 0,
                backgroundColor: '#000',
                border: '1px solid #fff'
            },
        });

        google.maps.event.addListener(marker, 'click', (function (marker, infowindow) {
            return function () {
                infowindow.open(map, marker);
            };
        })(marker, infowindow));
    }

    // function createPopupClass() {
    //     function Popup(position, content) {
    //         this.position = position;
    //
    //         content.classList.add('popup-bubble');
    //
    //         var bubbleAnchor = document.createElement('div');
    //         bubbleAnchor.classList.add('popup-bubble-anchor');
    //         bubbleAnchor.appendChild(content);
    //
    //         this.containerDiv = document.createElement('div');
    //         this.containerDiv.classList.add('popup-container');
    //         this.containerDiv.appendChild(bubbleAnchor);
    //
    //         google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
    //     }
    //     Popup.prototype = Object.create(google.maps.OverlayView.prototype);
    //
    //     Popup.prototype.onAdd = function() {
    //         this.getPanes().floatPane.appendChild(this.containerDiv);
    //     };
    //
    //     Popup.prototype.onRemove = function() {
    //         if (this.containerDiv.parentElement) {
    //             this.containerDiv.parentElement.removeChild(this.containerDiv);
    //         }
    //     };
    //
    //     Popup.prototype.draw = function() {
    //         var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    //
    //         var display =
    //             Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
    //                 'block' :
    //                 'none';
    //
    //         if (display === 'block') {
    //             this.containerDiv.style.left = divPosition.x + 'px';
    //             this.containerDiv.style.top = divPosition.y + 'px';
    //         }
    //         if (this.containerDiv.style.display !== display) {
    //             this.containerDiv.style.display = display;
    //         }
    //     };
    //
    //     return Popup;
    // }

}

// $('.main').fullpage({
//     //options here
//     autoScrolling:true,
//     scrollHorizontally: true,
//     navigation: true,
// });

$('.js--modalOpen').click(function (e) {
    e.preventDefault();

    $target = $(this).data('target');
    MicroModal.show($target);
});

$(document).click(function (e) {
    if (!$(e.target).is('.js--userDropdown , .js--userDropdown *, .js--openUserDrop, .js--openUserDrop *')) {
        $('.js--userDropdown').removeClass('user__dropdown--active');
    }
})
$('.js--openUserDrop').click(function (e) {
    e.preventDefault();
    $('.js--userDropdown').addClass('user__dropdown--active');
});


if ($('#order__date--start').length) {
    var picker = new Lightpick({
        field: document.getElementById('order__date--start'),
        secondField: document.getElementById('order__date--end'),
        singleDate: true,
        format: 'DD/MM/YYYY',
        onSelect: function (start, end) {
            if (!isNaN(end._i))
                $('.js--orderHistoryDateForm').submit()
        }
    });
}


$('.js--filterMenu').click(function (e) {
    e.preventDefault();
    $('.filter__mobileMenu').addClass('filter__mobileMenu--visible');
    if ($(".filter__mobileMenu").hasClass('filter__mobileMenu--visible')) {
        $('.body').addClass('body--noscroll');
    }
});

$('.js--filterClose').click(function (e) {
    e.preventDefault();
    $('.filter__mobileMenu').removeClass('filter__mobileMenu--visible');
    $('.body').removeClass('body--noscroll');
});

$('.js--mobileMenu').click(function (e) {
    e.preventDefault();
    console.log('asdfg');
    $('.nav__mobile').addClass('nav__mobile--visible');
    $('body').addClass('body--noscroll');
});

$('.js--mobileMenuClose').click(function (e) {
    e.preventDefault();
    $('.nav__mobile').removeClass('nav__mobile--visible');
    $('body').removeClass('body--noscroll');

});

$('.js--compareTitle').click(function (e) {
    e.preventDefault();
    $(this).next('.compare__products--panel').slideToggle();
    // $(this).find('span.acc__arr').toggleClass('wrapper__accordion--rotatedArrow');
    $(this).find('span.compare__accArrow').toggleClass('sprite__accArrow--rotated');
    // $(this).toggleClass('wrapper__accordion--linkWh');
});


$('.js--filterInp').on('change', function () {
    $(this).parents('form').submit();
})
$(document).ready(function () {
    $('.js--select2').select2();
});
$('.js--open').click(function (e) {
    e.preventDefault();
    $('.js--helpDropdown').addClass('help__dropdown--open');
});
