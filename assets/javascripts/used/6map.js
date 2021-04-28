if ($('#contact--map').length) {
    var markerLatLng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        zoom: 14,
        center: markerLatLng,
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

    var map = new google.maps.Map(document.getElementById("contact--map"), mapOptions);
}
